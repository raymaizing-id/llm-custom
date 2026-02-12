# Setup Steps - Super Simple Guide

> Step-by-step untuk setup Obsidian, GitHub, n8n, dan Google Drive

**Total Time**: 30-45 menit
**Difficulty**: Easy (ikuti step by step)

---

## 📋 Prerequisites

**Yang Harus Sudah Ada**:
- ✅ Obsidian installed
- ✅ Git installed
- ✅ GitHub account
- ✅ Google account
- ✅ n8n instance (https://n8n.raycorpgroup.com)

**Yang Akan Kita Setup**:
1. Git repository
2. Obsidian Git plugin
3. GitHub Actions
4. n8n workflows
5. Google Drive sync

---

## 🚀 STEP 1: Git Repository (5 menit)

### 1.1 Initialize Git

```powershell
# Di folder: D:\01-raymaizing\llm custom

# Initialize Git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: AI Knowledge Management System"
```

### 1.2 Create GitHub Repository

1. Buka https://github.com/new
2. Repository name: `ai-knowledge-base` (atau nama lain)
3. Privacy: **Private** ✅
4. **JANGAN** initialize with README (kita sudah punya)
5. Click "Create repository"

### 1.3 Connect to GitHub

```powershell
# Copy dari GitHub (setelah create repo)
git remote add origin https://github.com/YOUR_USERNAME/ai-knowledge-base.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**✅ Checkpoint**: Repository muncul di GitHub

---

## 🔷 STEP 2: Obsidian Git Plugin (10 menit)

### 2.1 Install Plugin

1. Buka Obsidian
2. Settings (⚙️) → Community Plugins
3. Browse → Search "**Obsidian Git**"
4. Install & Enable

### 2.2 Configure Plugin

Settings → Obsidian Git:

```yaml
✅ Vault backup interval (minutes): 5
✅ Auto pull interval (minutes): 10
✅ Commit message: "vault backup: {{date}}"
✅ Auto backup after file change: ON
✅ Auto pull on startup: ON
✅ Auto push: ON
```

### 2.3 Test Auto-commit

1. Edit file: `01-knowledge-base/products/example-product.md`
2. Save (Ctrl+S)
3. Wait 5 minutes
4. Check Git log: `git log -1`
5. Should see auto-commit

**✅ Checkpoint**: Auto-commit working

---

## 🐙 STEP 3: GitHub Actions (15 menit)

### 3.1 Setup Google Drive Service Account

1. Go to https://console.cloud.google.com/
2. Create new project: "AI Knowledge Sync"
3. Enable Google Drive API
4. Create Service Account:
   - Name: "n8n-sync"
   - Role: Editor
5. Create Key (JSON)
6. Download JSON file
7. **SAVE THIS FILE** (you'll need it)

### 3.2 Create Google Drive Folder

1. Go to Google Drive
2. Create folder: "AI Knowledge Base"
3. Right-click → Share
4. Add service account email (from JSON)
5. Give "Editor" permission
6. Copy folder ID from URL:
   ```
   https://drive.google.com/drive/folders/FOLDER_ID_HERE
   ```

### 3.3 Add GitHub Secrets

GitHub Repository → Settings → Secrets and variables → Actions

Add these secrets:

**Secret 1: GDRIVE_CREDENTIALS**
```
Value: [Paste entire JSON content from service account]
```

**Secret 2: GDRIVE_FOLDER_ID**
```
Value: [Folder ID from Google Drive URL]
```

**Secret 3: N8N_WEBHOOK_URL**
```
Value: https://n8n.raycorpgroup.com/webhook/ai-update
```

**Secret 4: N8N_WEBHOOK_SECRET**
```
Value: [Generate random string, e.g., "my-secret-key-123"]
```

### 3.4 Test GitHub Actions

```powershell
# Make a change
echo "# Test" > 01-knowledge-base/test.md

# Commit and push
git add .
git commit -m "Test GitHub Actions"
git push
```

Check: GitHub → Actions tab → Should see workflow running

**✅ Checkpoint**: GitHub Actions running successfully

---

## 🔄 STEP 4: n8n Workflows (10 menit)

### 4.1 Import Universal AI Update Workflow

1. Go to https://n8n.raycorpgroup.com
2. Click "+" → "Import from File"
3. Select: `00-system/templates/n8n-universal-ai-update.json`
4. Click "Import"

### 4.2 Configure Workflow

**Node 1: Webhook Trigger**
- Path: `ai-update`
- Copy webhook URL (save for later)

**Node 2-4: File Processing**
- No changes needed (uses relative paths)

**Node 5: Switch by Platform**
- No changes needed

**Node 6-8: Platform Updates**
- Add environment variables (see below)

### 4.3 Add Environment Variables

n8n → Settings → Environment Variables:

```bash
OPENAI_API_KEY=sk-...          # Your OpenAI API key
GEMINI_API_KEY=AIza...         # Your Google AI API key
N8N_WEBHOOK_SECRET=...         # Same as GitHub secret
```

### 4.4 Activate Workflow

- Click "Active" toggle (top right)
- Should turn green

### 4.5 Import GDrive to Git Workflow

1. Import: `00-system/templates/n8n-workflow-gdrive-to-git.json`
2. Configure webhook path: `gdrive-sync`
3. Update repo path: `/path/to/repo` → actual path
4. Activate workflow

**✅ Checkpoint**: Both workflows active in n8n

---

## 📁 STEP 5: Google Apps Script (10 menit)

### 5.1 Create Apps Script Project

1. Go to https://script.google.com/
2. Click "New Project"
3. Name: "AI Knowledge Sync"

### 5.2 Add Script Code

1. Delete default code
2. Copy code from: `00-system/scripts/google-apps-script.js`
3. Paste into editor
4. Save (Ctrl+S)

### 5.3 Update Configuration

In script, update line ~15:

```javascript
const CONFIG = {
  N8N_WEBHOOK_URL: 'https://n8n.raycorpgroup.com/webhook/gdrive-sync',
  N8N_WEBHOOK_SECRET: 'YOUR_SECRET_HERE', // Same as GitHub secret
  AUTO_SYNC_IDLE_MINUTES: 2,
  CACHE_DURATION_SECONDS: 300
};
```

### 5.4 Add Script Properties

1. Project Settings (gear icon)
2. Script Properties → Add:
   ```
   Key: N8N_WEBHOOK_SECRET
   Value: [Your secret from GitHub]
   ```

### 5.5 Setup Triggers

1. Click "Triggers" (clock icon)
2. Add trigger:
   - Function: `autoSyncCheck`
   - Event: Time-driven
   - Type: Minutes timer
   - Interval: Every 5 minutes
3. Save

### 5.6 Test Script

1. In editor, select function: `testConnection`
2. Click "Run"
3. Grant permissions (first time)
4. Check logs (should see success)

**✅ Checkpoint**: Script working, triggers active

---

## 🧪 STEP 6: End-to-End Test (5 menit)

### Test 1: Obsidian → Git → GDrive → AI

1. Edit file in Obsidian: `01-knowledge-base/products/example-product.md`
2. Save (Ctrl+S)
3. Wait 5 minutes (auto-commit)
4. Check GitHub (should see commit)
5. Wait 2 minutes (GitHub Actions)
6. Check Google Drive (should see file)
7. Check n8n executions (should see success)

### Test 2: GDrive → Git → AI

1. Open file in Google Drive
2. Edit content
3. Save
4. Wait 2 minutes (idle detection)
5. Check n8n executions (should see gdrive-sync)
6. Check GitHub (should see commit)

**✅ Checkpoint**: Both directions working!

---

## 📊 Verification Checklist

### Git & GitHub
- [ ] Repository created
- [ ] Files pushed to GitHub
- [ ] GitHub Actions workflow exists
- [ ] Secrets configured

### Obsidian
- [ ] Git plugin installed
- [ ] Auto-commit configured (5 mins)
- [ ] Auto-push enabled
- [ ] Test commit successful

### n8n
- [ ] Universal AI Update workflow imported
- [ ] GDrive to Git workflow imported
- [ ] Environment variables set
- [ ] Both workflows active
- [ ] Test execution successful

### Google Drive
- [ ] Folder created
- [ ] Service account has access
- [ ] Apps Script deployed
- [ ] Triggers configured
- [ ] Test sync successful

### End-to-End
- [ ] Obsidian → Git → GDrive works
- [ ] GDrive → Git works
- [ ] AI bots receive updates
- [ ] No errors in logs

---

## 🚨 Troubleshooting

### Issue: GitHub Actions Fails

**Check**:
1. Secrets configured correctly?
2. Service account JSON valid?
3. Folder ID correct?
4. Python script path correct?

**Fix**: Check GitHub Actions logs for error

### Issue: Obsidian Not Auto-committing

**Check**:
1. Git plugin enabled?
2. Auto-commit interval set?
3. Git credentials configured?

**Fix**: Settings → Obsidian Git → Verify settings

### Issue: n8n Workflow Fails

**Check**:
1. Environment variables set?
2. Webhook URL correct?
3. Webhook secret matches?
4. File paths correct?

**Fix**: Check n8n execution logs

### Issue: Google Apps Script Not Working

**Check**:
1. Triggers configured?
2. Permissions granted?
3. Webhook URL correct?
4. Script properties set?

**Fix**: Check Apps Script logs (View → Logs)

---

## 🎉 Success!

**If all checkpoints passed**:
- ✅ Git repository working
- ✅ Obsidian auto-syncing
- ✅ GitHub Actions running
- ✅ n8n workflows active
- ✅ Google Drive syncing
- ✅ AI bots updating

**You're LIVE!** 🚀

---

## 📚 Next Steps

### Daily Use

**For You (Power User)**:
1. Edit files in Obsidian
2. Save (Ctrl+S)
3. Auto-syncs in 5 minutes
4. Done!

**For Team (Content Creators)**:
1. Edit files in Google Drive
2. Save
3. Auto-syncs in 2 minutes
4. Done!

### Maintenance

**Weekly**:
- Check GitHub Actions logs
- Check n8n execution logs
- Verify sync working

**Monthly**:
- Update dependencies
- Review performance
- Optimize if needed

---

## 🆘 Need Help?

**Documentation**:
- Full guide: `00-system/architecture/SETUP-GUIDE.md`
- Architecture: `00-system/architecture/core-system-design.md`
- Troubleshooting: Check logs in each system

**Logs**:
- GitHub Actions: Repository → Actions tab
- n8n: https://n8n.raycorpgroup.com/executions
- Apps Script: script.google.com → View → Logs
- Git: `git log -5`

---

**Setup Complete!** 🎉
**Total Time**: 30-45 minutes
**Status**: PRODUCTION READY ✅

**Enjoy your ultra-lightweight AI knowledge management system!** 🚀
