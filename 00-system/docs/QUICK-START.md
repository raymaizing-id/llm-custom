# 🚀 Quick Start Guide

> Get started dengan Obsidian dalam 5 menit!

---

## ✅ Checklist Setup

### 1. Restart Obsidian
- [ ] Close Obsidian completely
- [ ] Open Obsidian again
- [ ] Verify plugins loaded (check status bar)

### 2. Verify Dataview
- [ ] Open Dashboard: `Ctrl+O` → type "dashboard"
- [ ] Check if tables render correctly
- [ ] If not: Settings → Community Plugins → Dataview → Toggle OFF then ON

### 3. Verify Templater
- [ ] Create new file in `01-knowledge-base/products/`
- [ ] Template should auto-apply
- [ ] If not: Settings → Templater → Check folder path

### 4. Verify Git
- [ ] Check status bar (bottom) for Git info
- [ ] Edit any file and save
- [ ] Wait 5 minutes or press `Ctrl+Shift+G`
- [ ] Check GitHub for commit

---

## 🎯 First Steps

### Open Dashboard
1. Press `Ctrl+O`
2. Type "dashboard"
3. Press Enter
4. Pin to sidebar (right-click → Pin)

### Create Your First Note

**Product**:
1. Navigate to `01-knowledge-base/products/`
2. Press `Ctrl+N`
3. Name it (e.g., "my-product")
4. Template auto-applies!
5. Fill in the details
6. Save (`Ctrl+S`)

**FAQ**:
1. Navigate to `01-knowledge-base/faqs/`
2. Press `Ctrl+N`
3. Name it (e.g., "how-to-start")
4. Template auto-applies!
5. Fill Q&A
6. Save

**Bot Config**:
1. Navigate to `02-ai-bots/custom-gpts/`
2. Press `Ctrl+N`
3. Name it (e.g., "my-bot")
4. Template auto-applies!
5. Fill config
6. Save

---

## ⌨️ Essential Hotkeys

### Navigation
- `Ctrl+O` - Quick open file
- `Ctrl+Shift+F` - Search in all files
- `Ctrl+P` - Command palette

### Editing
- `Ctrl+B` - Bold
- `Ctrl+I` - Italic
- `Ctrl+K` - Insert link
- `Ctrl+Shift+T` - Insert template

### Git
- `Ctrl+Shift+G` - Commit & push
- `Ctrl+Shift+P` - Pull changes

### View
- `Ctrl+\` - Split vertical
- `Ctrl+E` - Toggle edit/preview
- `Ctrl+Shift+R` - Refresh dataview

---

## 🔧 Troubleshooting

### Dashboard Not Showing Data

**Problem**: Tables show "No results" or don't render

**Solution**:
1. Settings → Community Plugins
2. Find "Dataview"
3. Toggle OFF
4. Wait 2 seconds
5. Toggle ON
6. Refresh dashboard (`Ctrl+Shift+R`)

### Templates Not Auto-Applying

**Problem**: Create file but no template appears

**Solution**:
1. Settings → Templater
2. Check "Templates folder": Should be `00-system/templates/obsidian`
3. Check "Trigger on file creation": Should be ON
4. Check "Enable folder templates": Should be ON
5. Restart Obsidian

### Git Not Auto-Committing

**Problem**: Files not auto-committing after 5 minutes

**Solution**:
1. Settings → Obsidian Git
2. Check "Auto commit-and-sync interval": Should be 5
3. Check "Auto backup after file change": Should be ON
4. Check "Auto push": Should be ON (via "Push on commit-and-sync")
5. Check status bar for Git status

### Hotkeys Not Working

**Problem**: Keyboard shortcuts don't work

**Solution**:
1. Settings → Hotkeys
2. Search for the command
3. Check if hotkey is assigned
4. Check for conflicts
5. Restart Obsidian

---

## 📚 Next Steps

### Learn More
- [[00-system/docs/FOLDER-STRUCTURE|📁 Folder Structure]]
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Guide]]
- [[00-inbox/SETUP-STEPS-SIMPLE|📝 Full Setup Guide]]

### Explore Features
- Try creating notes in different folders
- Explore the Dashboard
- Test Git auto-commit
- Try different templates

### Customize
- Change theme (Settings → Appearance)
- Add more hotkeys (Settings → Hotkeys)
- Customize templates
- Add CSS snippets

---

## 🆘 Still Having Issues?

### Check These Files
1. `.obsidian/plugins/dataview/data.json` - Dataview config
2. `.obsidian/plugins/templater-obsidian/data.json` - Templater config
3. `.obsidian/plugins/obsidian-git/data.json` - Git config
4. `.obsidian/app.json` - Core settings

### Common Fixes
- **Restart Obsidian** (fixes 90% of issues)
- **Toggle plugin OFF/ON** (fixes plugin issues)
- **Check file paths** (must be relative, not absolute)
- **Check Git status** (run `git status` in terminal)

---

**🎉 You're all set! Start creating content!**

**Questions?** Check the docs or create an issue on GitHub.
