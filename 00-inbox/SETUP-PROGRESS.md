# Setup Progress - AI Knowledge Management

> Track setup progress untuk Obsidian, GitHub, n8n, dan Google Drive

**Last Updated**: 2026-02-12

---

## ✅ Yang Sudah Selesai

### 1. GitHub Repository ✅
- **Repo**: https://github.com/raymaizing-id/llm-custom.git
- **Owner**: raymaizing-id
- **Email**: raymaizing@gmail.com
- **Status**: CREATED ✅

### 2. Obsidian Git Plugin ✅
- **Plugin**: Installed ✅
- **Version**: 2.36.1
- **Status**: INSTALLED ✅

### 3. Google Cloud Project ✅
- **Project**: AI Knowledge Sync
- **Status**: CREATED ✅

### 4. Google Drive Folder ✅
- **Folder**: AI Knowledge Base
- **URL**: https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
- **Folder ID**: `1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO`
- **Status**: CREATED ✅ (masih kosong)

---

## 🔄 Yang Perlu Dilakukan

### STEP 1: Initialize Git & Push to GitHub (5 menit)

```powershell
# Di folder: D:\01-raymaizing\llm custom

# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "Initial commit: AI Knowledge Management System"

# 4. Add remote
git remote add origin https://github.com/raymaizing-id/llm-custom.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

**Jika ada error "remote already exists"**:
```powershell
git remote remove origin
git remote add origin https://github.com/raymaizing-id/llm-custom.git
git push -u origin main
```

---

### STEP 2: Configure Obsidian Git Plugin (5 menit)

**Settings → Obsidian Git**:

```yaml
✅ Vault backup interval (minutes): 5
✅ Commit message: "vault backup: {{date}}"
✅ Auto pull interval (minutes): 10
✅ Auto pull on startup: ON
✅ Auto backup after file change: ON
✅ Auto push: ON
✅ Disable push: OFF
```

**Test**:
1. Edit file: `01-knowledge-base/products/example-product.md`
2. Save (Ctrl+S)
3. Wait 5 minutes
4. Check: `git log -1` (should see auto-commit)

---

### STEP 3: Setup Google Drive Service Account (10 menit)

#### 3.1 Create Service Account

1. Go to: https://console.cloud.google.com/iam-admin/serviceaccounts
2. Select project: "AI Knowledge Sync"
3. Click "CREATE SERVICE ACCOUNT"
4. Details:
   - Name: `n8n-sync`
   - Description: `Service account for n8n to sync files`
5. Click "CREATE AND CONTINUE"
6. Grant role: **Editor**
7. Click "CONTINUE" → "DONE"

#### 3.2 Create JSON Key

1. Click on service account email
2. Go to "KEYS" tab
3. Click "ADD KEY" → "Create new key"
4. Type: **JSON**
5. Click "CREATE"
6. **SAVE FILE** (akan download JSON file)
7. **JANGAN HILANGKAN FILE INI!**

#### 3.3 Share Google Drive Folder

1. Open: https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
2. Click "Share" (top right)
3. Add email dari service account (dari JSON file, field: `client_email`)
   - Example: `n8n-sync@ai-knowledge-sync.iam.gserviceaccount.com`
4. Permission: **Editor**
5. Click "Send"

---

### STEP 4: Add GitHub Secrets (5 menit)

1. Go to: https://github.com/raymaizing-id/llm-custom/settings/secrets/actions
2. Click "New repository secret"

**Secret 1: GDRIVE_CREDENTIALS**
```
Name: GDRIVE_CREDENTIALS
Value: [Paste ENTIRE content of JSON file from Step 3.2]
```

**Secret 2: GDRIVE_FOLDER_ID**
```
Name: GDRIVE_FOLDER_ID
Value: 1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
```

**Secret 3: N8N_WEBHOOK_URL**
```
Name: N8N_WEBHOOK_URL
Value: https://n8n.raycorpgroup.com/webhook/ai-update
```

**Secret 4: N8N_WEBHOOK_SECRET**
```
Name: N8N_WEBHOOK_SECRET
Value: [Generate random string, e.g., "my-secret-key-12345"]
```

**Cara generate random secret**:
```powershell
# PowerShell
-join ((65..90) + (97..122) + (48..57) | Get-Random -Count 32 | % {[char]$_})
```

---

### STEP 5: Test GitHub Actions (5 menit)

```powershell
# Make a test change
echo "# Test GitHub Actions" > 01-knowledge-base/test.md

# Commit and push
git add .
git commit -m "Test: GitHub Actions workflow"
git push
```

**Check**:
1. Go to: https://github.com/raymaizing-id/llm-custom/actions
2. Should see workflow running
3. Wait for completion (green checkmark ✅)
4. Check Google Drive folder (should have test.md)

**If fails**: Check Actions logs for error

---

### STEP 6: Setup n8n Workflows (10 menit)

#### 6.1 Import Workflow 1: Universal AI Update

1. Go to: https://n8n.raycorpgroup.com
2. Click "+" → "Import from File"
3. Select: `D:\01-raymaizing\llm custom\00-system\templates\n8n-universal-ai-update.json`
4. Click "Import"

**Configure**:
- Webhook path: `ai-update` (should be default)
- No other changes needed

#### 6.2 Import Workflow 2: GDrive to Git

1. Click "+" → "Import from File"
2. Select: `D:\01-raymaizing\llm custom\00-system\templates\n8n-workflow-gdrive-to-git.json`
3. Click "Import"

**Configure**:
- Webhook path: `gdrive-sync`
- Update repo path in "Git Pull" node:
  ```
  Change: /path/to/repo
  To: D:\01-raymaizing\llm custom
  ```

#### 6.3 Add Environment Variables

n8n → Settings → Environment Variables:

```bash
OPENAI_API_KEY=sk-...                    # Your OpenAI API key
GEMINI_API_KEY=AIza...                   # Your Google AI API key
N8N_WEBHOOK_SECRET=...                   # Same as GitHub secret
```

#### 6.4 Activate Workflows

- Workflow 1: Toggle "Active" (top right) ✅
- Workflow 2: Toggle "Active" (top right) ✅

---

### STEP 7: Setup Google Apps Script (10 menit)

#### 7.1 Create Project

1. Go to: https://script.google.com/
2. Click "New Project"
3. Name: "AI Knowledge Sync"

#### 7.2 Add Code

1. Delete default code
2. Open: `D:\01-raymaizing\llm custom\00-system\scripts\google-apps-script.js`
3. Copy ALL code
4. Paste into Apps Script editor
5. Save (Ctrl+S)

#### 7.3 Update Configuration

Find line ~15 in script, update:

```javascript
const CONFIG = {
  N8N_WEBHOOK_URL: 'https://n8n.raycorpgroup.com/webhook/gdrive-sync',
  N8N_WEBHOOK_SECRET: 'YOUR_SECRET_HERE', // Same as GitHub secret
  AUTO_SYNC_IDLE_MINUTES: 2,
  CACHE_DURATION_SECONDS: 300
};
```

#### 7.4 Add Script Properties

1. Click "Project Settings" (gear icon, left sidebar)
2. Scroll to "Script Properties"
3. Click "Add script property"
4. Add:
   ```
   Property: N8N_WEBHOOK_SECRET
   Value: [Same as GitHub secret]
   ```

#### 7.5 Setup Triggers

1. Click "Triggers" (clock icon, left sidebar)
2. Click "Add Trigger"
3. Configure:
   - Function: `autoSyncCheck`
   - Event source: Time-driven
   - Type: Minutes timer
   - Interval: Every 5 minutes
4. Click "Save"
5. Grant permissions (first time)

#### 7.6 Test

1. In editor, select function: `testConnection` (dropdown)
2. Click "Run" (▶️)
3. Check "Execution log" (should see success)

---

### STEP 8: End-to-End Test (5 menit)

#### Test 1: Obsidian → Git → GDrive

1. Edit: `01-knowledge-base/products/example-product.md`
2. Add line: `## Test from Obsidian`
3. Save (Ctrl+S)
4. Wait 5 minutes (auto-commit)
5. Check GitHub: https://github.com/raymaizing-id/llm-custom/commits/main
6. Wait 2 minutes (GitHub Actions)
7. Check Google Drive: https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
8. Should see file ✅

#### Test 2: GDrive → Git (Later, after files synced)

1. Open file in Google Drive
2. Edit content
3. Save
4. Wait 2 minutes
5. Check GitHub (should see commit)

---

## 📊 Progress Checklist

### Completed ✅
- [x] GitHub repository created
- [x] Obsidian Git plugin installed
- [x] Google Cloud project created
- [x] Google Drive folder created

### In Progress 🔄
- [x] Git initialized & pushed ✅
- [x] Obsidian Git configured ✅
- [ ] Service account created
- [ ] Service account created
- [ ] GitHub secrets added
- [ ] GitHub Actions tested
- [ ] n8n workflows imported
- [ ] Google Apps Script deployed
- [ ] End-to-end test passed

### Pending ⏳
- [ ] Bot registry populated
- [ ] Knowledge files created
- [ ] Team training
- [ ] Production deployment

---

## 🔑 Important Info

### Repository
- **URL**: https://github.com/raymaizing-id/llm-custom.git
- **Owner**: raymaizing-id
- **Email**: raymaizing@gmail.com

### Google Drive
- **Folder**: AI Knowledge Base
- **ID**: 1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
- **URL**: https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO

### Google Cloud
- **Project**: AI Knowledge Sync
- **Console**: https://console.cloud.google.com/

### n8n
- **Instance**: https://n8n.raycorpgroup.com
- **Workflows**: 2 (to be imported)

---

## 🆘 Need Help?

**If stuck**:
1. Check error messages
2. Review logs:
   - GitHub Actions: Repo → Actions tab
   - n8n: Executions page
   - Apps Script: View → Logs
3. Refer to: `00-inbox/SETUP-STEPS-SIMPLE.md`

---

## 🎯 Next Step

**START WITH**: STEP 1 (Initialize Git & Push)

```powershell
cd "D:\01-raymaizing\llm custom"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/raymaizing-id/llm-custom.git
git push -u origin main
```

**Then proceed to STEP 2, 3, 4, etc.**

---

**Status**: 40% Complete
**ETA**: 30-40 minutes remaining
**Next**: Initialize Git & Push to GitHub

**You're doing great! Keep going!** 🚀
