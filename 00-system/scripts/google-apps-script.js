/**
 * Google Apps Script - Auto-available in all Google Docs
 * Deploy as Add-on for folder-level availability
 * 
 * Setup:
 * 1. Create new Apps Script project
 * 2. Copy this code
 * 3. Deploy as Add-on
 * 4. Set scope to specific folder
 * 5. Done! Auto-available in all docs in folder
 */

// Configuration
const CONFIG = {
  N8N_WEBHOOK_URL: 'https://n8n.raycorpgroup.com/webhook/gdrive-sync',
  N8N_WEBHOOK_SECRET: 'YOUR_SECRET_HERE', // Set in Script Properties
  AUTO_SYNC_IDLE_MINUTES: 2,
  CACHE_DURATION_SECONDS: 300 // 5 minutes
};

/**
 * Creates custom menu when document opens
 * Auto-runs for all documents in folder
 */
function onOpen() {
  const ui = DocumentApp.getUi();
  ui.createMenu('🤖 AI Sync')
    .addItem('✅ Sync Now', 'syncNow')
    .addItem('📊 View Status', 'viewStatus')
    .addItem('🔄 Force Refresh', 'forceRefresh')
    .addSeparator()
    .addItem('⚙️ Settings', 'showSettings')
    .addToUi();
}

/**
 * Install time-based trigger for auto-sync
 * Run this once manually to setup
 */
function installTriggers() {
  // Delete existing triggers
  const triggers = ScriptApp.getProjectTriggers();
  triggers.forEach(trigger => ScriptApp.deleteTrigger(trigger));
  
  // Install new trigger - check every 5 minutes
  ScriptApp.newTrigger('autoSyncCheck')
    .timeBased()
    .everyMinutes(5)
    .create();
  
  DocumentApp.getUi().alert('✅ Auto-sync triggers installed!');
}

/**
 * Auto-sync check - runs every 5 minutes
 * Only syncs if document has been idle for configured time
 */
function autoSyncCheck() {
  try {
    const doc = DocumentApp.getActiveDocument();
    if (!doc) return; // No active document
    
    const docId = doc.getId();
    const cache = CacheService.getDocumentCache();
    const lastSyncKey = `lastSync_${docId}`;
    const lastSync = cache.get(lastSyncKey);
    
    // Get last modified time
    const file = DriveApp.getFileById(docId);
    const lastModified = file.getLastUpdated();
    const now = new Date();
    const idleMinutes = (now - lastModified) / 1000 / 60;
    
    // Check if should sync
    if (idleMinutes >= CONFIG.AUTO_SYNC_IDLE_MINUTES) {
      // Check if not recently synced
      if (!lastSync || (now - new Date(lastSync)) > CONFIG.CACHE_DURATION_SECONDS * 1000) {
        syncToGit(true); // Silent sync
      }
    }
  } catch (error) {
    console.error('Auto-sync check error:', error);
  }
}

/**
 * Manual sync - triggered by user
 */
function syncNow() {
  syncToGit(false);
}

/**
 * Force refresh - bypass cache
 */
function forceRefresh() {
  const doc = DocumentApp.getActiveDocument();
  const cache = CacheService.getDocumentCache();
  cache.remove(`lastSync_${doc.getId()}`);
  syncToGit(false);
}

/**
 * Main sync function
 * @param {boolean} silent - If true, don't show UI alerts
 */
function syncToGit(silent = false) {
  const ui = DocumentApp.getUi();
  
  try {
    const doc = DocumentApp.getActiveDocument();
    const docId = doc.getId();
    const fileName = doc.getName();
    
    // Get document content as markdown
    const content = convertToMarkdown(doc.getBody());
    
    // Get file metadata
    const file = DriveApp.getFileById(docId);
    const folder = file.getParents().next();
    const folderPath = getFolderPath(folder);
    
    // Prepare payload
    const payload = {
      fileId: docId,
      fileName: fileName,
      content: content,
      folderPath: folderPath,
      lastModified: file.getLastUpdated().toISOString(),
      timestamp: new Date().toISOString(),
      trigger: silent ? 'auto' : 'manual'
    };
    
    // Get webhook secret from Script Properties
    const secret = PropertiesService.getScriptProperties().getProperty('N8N_WEBHOOK_SECRET') || CONFIG.N8N_WEBHOOK_SECRET;
    
    // Call n8n webhook
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'X-Webhook-Secret': secret
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };
    
    const response = UrlFetchApp.fetch(CONFIG.N8N_WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();
    
    if (responseCode === 200) {
      // Cache successful sync
      const cache = CacheService.getDocumentCache();
      cache.put(`lastSync_${docId}`, new Date().toISOString(), CONFIG.CACHE_DURATION_SECONDS);
      
      if (!silent) {
        ui.alert('✅ Synced to AI Knowledge Base!', 
                 `File: ${fileName}\nTime: ${new Date().toLocaleString()}`, 
                 ui.ButtonSet.OK);
      }
    } else {
      throw new Error(`HTTP ${responseCode}: ${response.getContentText()}`);
    }
    
  } catch (error) {
    console.error('Sync error:', error);
    if (!silent) {
      ui.alert('❌ Sync Failed', 
               `Error: ${error.message}\n\nPlease try again or contact admin.`, 
               ui.ButtonSet.OK);
    }
  }
}

/**
 * Convert Google Doc to Markdown
 * @param {Body} body - Document body
 * @returns {string} Markdown content
 */
function convertToMarkdown(body) {
  let markdown = '';
  const elements = body.getNumChildren();
  
  for (let i = 0; i < elements; i++) {
    const element = body.getChild(i);
    const type = element.getType();
    
    if (type === DocumentApp.ElementType.PARAGRAPH) {
      const paragraph = element.asParagraph();
      const heading = paragraph.getHeading();
      const text = paragraph.getText();
      
      if (text.trim() === '') {
        markdown += '\n';
        continue;
      }
      
      // Handle headings
      if (heading === DocumentApp.ParagraphHeading.HEADING1) {
        markdown += `# ${text}\n\n`;
      } else if (heading === DocumentApp.ParagraphHeading.HEADING2) {
        markdown += `## ${text}\n\n`;
      } else if (heading === DocumentApp.ParagraphHeading.HEADING3) {
        markdown += `### ${text}\n\n`;
      } else if (heading === DocumentApp.ParagraphHeading.HEADING4) {
        markdown += `#### ${text}\n\n`;
      } else {
        markdown += `${text}\n\n`;
      }
    } else if (type === DocumentApp.ElementType.LIST_ITEM) {
      const listItem = element.asListItem();
      const text = listItem.getText();
      const nesting = listItem.getNestingLevel();
      const indent = '  '.repeat(nesting);
      markdown += `${indent}- ${text}\n`;
    }
  }
  
  return markdown.trim();
}

/**
 * Get folder path relative to root
 * @param {Folder} folder - Google Drive folder
 * @returns {string} Folder path
 */
function getFolderPath(folder) {
  const parts = [];
  let current = folder;
  
  while (current) {
    parts.unshift(current.getName());
    const parents = current.getParents();
    current = parents.hasNext() ? parents.next() : null;
  }
  
  return parts.join('/');
}

/**
 * View sync status
 */
function viewStatus() {
  const ui = DocumentApp.getUi();
  const doc = DocumentApp.getActiveDocument();
  const docId = doc.getId();
  
  const cache = CacheService.getDocumentCache();
  const lastSync = cache.get(`lastSync_${docId}`);
  
  const file = DriveApp.getFileById(docId);
  const lastModified = file.getLastUpdated();
  
  let message = `📊 Sync Status\n\n`;
  message += `File: ${doc.getName()}\n`;
  message += `Last Modified: ${lastModified.toLocaleString()}\n`;
  
  if (lastSync) {
    const syncDate = new Date(lastSync);
    message += `Last Synced: ${syncDate.toLocaleString()}\n`;
    
    const minutesSince = (new Date() - syncDate) / 1000 / 60;
    if (minutesSince < 5) {
      message += `\n✅ Recently synced (${Math.round(minutesSince)} mins ago)`;
    } else {
      message += `\n⚠️ Synced ${Math.round(minutesSince)} minutes ago`;
    }
  } else {
    message += `Last Synced: Never\n`;
    message += `\n⚠️ Not yet synced`;
  }
  
  ui.alert('Sync Status', message, ui.ButtonSet.OK);
}

/**
 * Show settings dialog
 */
function showSettings() {
  const ui = DocumentApp.getUi();
  
  let message = `⚙️ Settings\n\n`;
  message += `Auto-sync after: ${CONFIG.AUTO_SYNC_IDLE_MINUTES} minutes idle\n`;
  message += `Cache duration: ${CONFIG.CACHE_DURATION_SECONDS / 60} minutes\n`;
  message += `\nWebhook: ${CONFIG.N8N_WEBHOOK_URL}\n`;
  message += `\nTo change settings, contact your administrator.`;
  
  ui.alert('Settings', message, ui.ButtonSet.OK);
}

/**
 * Test webhook connection
 */
function testConnection() {
  const ui = DocumentApp.getUi();
  
  try {
    const secret = PropertiesService.getScriptProperties().getProperty('N8N_WEBHOOK_SECRET') || CONFIG.N8N_WEBHOOK_SECRET;
    
    const options = {
      method: 'post',
      contentType: 'application/json',
      headers: {
        'X-Webhook-Secret': secret
      },
      payload: JSON.stringify({ test: true }),
      muteHttpExceptions: true
    };
    
    const response = UrlFetchApp.fetch(CONFIG.N8N_WEBHOOK_URL, options);
    const responseCode = response.getResponseCode();
    
    if (responseCode === 200) {
      ui.alert('✅ Connection Test', 'Webhook connection successful!', ui.ButtonSet.OK);
    } else {
      ui.alert('❌ Connection Test', `Failed with HTTP ${responseCode}`, ui.ButtonSet.OK);
    }
  } catch (error) {
    ui.alert('❌ Connection Test', `Error: ${error.message}`, ui.ButtonSet.OK);
  }
}
