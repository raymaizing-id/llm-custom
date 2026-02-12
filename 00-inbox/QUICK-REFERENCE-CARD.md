# Quick Reference Card - Setup Checklist

> Print atau save ini untuk reference cepat

---

## ✅ STEP 1: GIT (5 mins)

```powershell
cd "D:\01-raymaizing\llm custom"
git init
git add .
git commit -m "Initial commit"
```

**GitHub**:
1. Create repo: https://github.com/new
2. Name: `ai-knowledge-base`
3. Private ✅
4. Don't initialize

```powershell
git remote add origin https://github.com/YOU/ai-knowledge-base.git
git push -u origin main
```

---

## ✅ STEP 2: OBSIDIAN (10 mins)

**Install Plugin**:
- Settings → Community Plugins
- Search: "Obsidian Git"
- Install & Enable

**Configure**:
- Auto-commit: 5 minutes ✅
- Auto-pull: 10 minutes ✅
- Auto-push: ON ✅

**Test**: Edit file → Save → Wait 5 mins → Check `git log`

---

## ✅ STEP 3: GITHUB ACTIONS (15 mins)

**Google Cloud Console**:
1. Create project: "AI Knowledge Sync"
2. Enable Google Drive API
3. Create Service Account
4. Download JSON key

**Google Drive**:
1. Create folder: "AI Knowledge Base"
2. Share with service account email
3. Copy folder ID from URL

**GitHub Secrets** (Settings → Secrets):
```
GDRIVE_CREDENTIALS = [JSON content]
GDRIVE_FOLDER_ID = [Folder ID]
N8N_WEBHOOK_URL = https://n8n.raycorpgroup.com/webhook/ai-update
N8N_WEBHOOK_SECRET = [Your secret]
```

**Test**: Push commit → Check Actions tab

---

## ✅ STEP 4: N8N (10 mins)

**Import Workflows**:
1. `n8n-universal-ai-update.json`
2. `n8n-workflow-gdrive-to-git.json`

**Environment Variables**:
```
OPENAI_API_KEY = sk-...
GEMINI_API_KEY = AIza...
N8N_WEBHOOK_SECRET = [Same as GitHub]
```

**Activate**: Toggle "Active" ✅

---

## ✅ STEP 5: GOOGLE APPS SCRIPT (10 mins)

**Create Project**: https://script.google.com/

**Add Code**: Copy from `00-system/scripts/google-apps-script.js`

**Update Config** (line 15):
```javascript
N8N_WEBHOOK_URL: 'https://n8n.raycorpgroup.com/webhook/gdrive-sync'
N8N_WEBHOOK_SECRET: '[Your secret]'
```

**Script Properties**:
```
N8N_WEBHOOK_SECRET = [Your secret]
```

**Triggers**:
- Function: `autoSyncCheck`
- Time-driven: Every 5 minutes

**Test**: Run `testConnection`

---

## ✅ STEP 6: TEST (5 mins)

**Test 1**: Obsidian → Git → GDrive
1. Edit in Obsidian
2. Save
3. Wait 5 mins
4. Check GitHub ✅
5. Check GDrive ✅

**Test 2**: GDrive → Git
1. Edit in GDrive
2. Save
3. Wait 2 mins
4. Check GitHub ✅

---

## 🔑 Important URLs

- GitHub: https://github.com/YOU/ai-knowledge-base
- n8n: https://n8n.raycorpgroup.com
- Google Cloud: https://console.cloud.google.com/
- Apps Script: https://script.google.com/

---

## 🆘 Quick Troubleshooting

**GitHub Actions fails?**
→ Check Secrets configured

**Obsidian not committing?**
→ Check Git plugin settings

**n8n fails?**
→ Check Environment Variables

**Apps Script not working?**
→ Check Triggers configured

---

## 📊 Verification Checklist

- [ ] Git repo created & pushed
- [ ] Obsidian Git plugin working
- [ ] GitHub Actions running
- [ ] n8n workflows active
- [ ] Google Apps Script deployed
- [ ] End-to-end test passed

---

**Total Time**: 45 minutes
**Status**: READY! ✅

**Save this card for quick reference!**
