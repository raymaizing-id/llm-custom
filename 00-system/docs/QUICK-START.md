# 🚀 Quick Start Guide

> Get started dengan AI Knowledge Management System dalam 5 menit!

**Last Updated**: 2026-02-12

---

## ✅ Pre-Flight Checklist

### Before You Start
- [ ] Obsidian installed and opened
- [ ] This vault loaded (`D:\01-raymaizing\llm custom`)
- [ ] All plugins loaded (check status bar at bottom)
- [ ] No "xxxxx" or "%%%%%" visible (if yes, reload: `Ctrl+Shift+I` → `Ctrl+R`)

---

## 🎯 5-Minute Quick Start

### Step 1: Open Dashboard (30 seconds)
1. Press `Ctrl+O` (Quick Open)
2. Type "DASHBOARD"
3. Press `Enter`
4. **Pin it**: Right-click tab → "Pin"

**Expected**: You should see the main dashboard with folder structure and quick actions

### Step 2: Create Your First Note (2 minutes)

**Option A: Create a Product**
1. Navigate to `01-knowledge-base/products/` in file explorer (left sidebar)
2. Press `Ctrl+N` (New Note)
3. Name it: `my-first-product`
4. Press `Enter`
5. **Template auto-applies!** Fill in the details:
   - Name: Your product name
   - Description: What it does
   - Price: How much
   - Status: active
6. Press `Ctrl+S` to save

**Option B: Create a FAQ**
1. Navigate to `01-knowledge-base/faqs/`
2. Press `Ctrl+N`
3. Name it: `how-to-get-started`
4. Fill in:
   - Question: "How do I get started?"
   - Answer: Your answer
   - Category: getting-started
6. Press `Ctrl+S` to save

**Option C: Create a Bot Config**
1. Navigate to `02-ai-bots/custom-gpts/`
2. Press `Ctrl+N`
3. Name it: `my-first-bot`
4. Fill in bot configuration
5. Press `Ctrl+S` to save

### Step 3: Test Git Auto-Commit (2 minutes)
1. Edit the file you just created
2. Add some text: "Testing Git auto-commit"
3. Save (`Ctrl+S`)
4. **Wait 5 minutes** OR press `Ctrl+Shift+G` to commit now
5. Check status bar (bottom) - should show "Synced" or commit message
6. Check GitHub: https://github.com/raymaizing-id/llm-custom/commits/main

**Expected**: Your changes should be committed and pushed to GitHub

### Step 4: Explore Features (30 seconds)
1. Try `Ctrl+O` to quick open files
2. Try `Ctrl+Shift+F` to search all files
3. Try `Ctrl+\` to split view
4. Try `Ctrl+E` to toggle edit/preview mode

**🎉 Done! You're ready to use the system!**

---

## ⌨️ Essential Hotkeys

### Must-Know Shortcuts

**Navigation**:
- `Ctrl+O` - Quick open file (USE THIS ALL THE TIME!)
- `Ctrl+Shift+F` - Search in all files
- `Ctrl+P` - Command palette (access all commands)
- `Ctrl+Tab` - Switch between open tabs

**Editing**:
- `Ctrl+N` - New note in current folder
- `Ctrl+B` - **Bold** text
- `Ctrl+I` - *Italic* text
- `Ctrl+K` - Insert [[link]]
- `Ctrl+S` - Save (auto-saves anyway, but good habit)

**Git**:
- `Ctrl+Shift+G` - Commit & push NOW (don't wait 5 min)
- `Ctrl+Shift+P` - Pull changes from GitHub

**View**:
- `Ctrl+\` - Split view vertically
- `Ctrl+E` - Toggle between edit and preview mode
- `Ctrl+Shift+R` - Refresh dataview queries

---

## 📁 Where to Put Things

### Knowledge Base (`01-knowledge-base/`)
- **Products** → `01-knowledge-base/products/`
  - Product info, specs, pricing
  - Example: `product-name.md`
  
- **FAQs** → `01-knowledge-base/faqs/`
  - Questions and answers
  - Example: `how-to-install.md`
  
- **Procedures** → `01-knowledge-base/procedures/`
  - SOPs, how-tos, guides
  - Example: `onboarding-process.md`
  
- **Marketing** → `01-knowledge-base/marketing/`
  - Marketing content, campaigns
  - Example: `campaign-2024-q1.md`

### AI Bots (`02-ai-bots/`)
- **Custom GPTs** → `02-ai-bots/custom-gpts/`
  - ChatGPT custom bot configs
  - Example: `customer-support-bot.md`
  
- **Gemini Gems** → `02-ai-bots/gemini-gems/`
  - Google Gemini bot configs
  - Example: `content-writer-gem.md`
  
- **Custom AI** → `02-ai-bots/custom-ai/`
  - Other AI platform configs
  - Example: `claude-assistant.md`

### Temporary (`00-inbox/`)
- **Quick Notes** → `00-inbox/00-Notes/`
  - Temporary notes, ideas
  - Process and move to proper folder later
  
- **Web Clippings** → `00-inbox/01-Clipping/`
  - Saved web articles
  - Review and organize later

### Media (`03-media/`)
- **Images** → `03-media/images/`
- **Videos** → `03-media/videos/`
- **Files** → `03-media/files/`

---

## 🔧 Common Tasks

### Task 1: Create a New Product
```
1. Navigate: 01-knowledge-base/products/
2. Press: Ctrl+N
3. Name: product-name
4. Fill template fields
5. Save: Ctrl+S
6. Done!
```

### Task 2: Create a New FAQ
```
1. Navigate: 01-knowledge-base/faqs/
2. Press: Ctrl+N
3. Name: question-slug
4. Fill Q&A
5. Save: Ctrl+S
6. Done!
```

### Task 3: Create a New Bot Config
```
1. Navigate: 02-ai-bots/custom-gpts/
2. Press: Ctrl+N
3. Name: bot-name
4. Fill configuration
5. Save: Ctrl+S
6. Done!
```

### Task 4: Search for Something
```
1. Press: Ctrl+Shift+F
2. Type: search term
3. Press: Enter
4. Browse results
5. Click to open
```

### Task 5: Link Two Notes
```
1. In note A, type: [[
2. Start typing note B name
3. Select from dropdown
4. Press: Enter
5. Link created!
```

---

## 🆘 Troubleshooting

### Problem 1: Templates Not Auto-Applying

**Symptoms**: Create new file, but template doesn't appear

**Solution**:
1. Settings → Community Plugins
2. Find "Templater"
3. Click gear icon (⚙️)
4. Check these settings:
   - Template folder: `00-system/templates/obsidian` ✅
   - Trigger on file creation: ON ✅
   - Enable folder templates: ON ✅
5. Restart Obsidian
6. Try creating file again

### Problem 2: Git Not Auto-Committing

**Symptoms**: Edit files, wait 5+ minutes, no commit

**Solution**:
1. Check status bar (bottom) - should show Git status
2. Settings → Community Plugins → Obsidian Git
3. Check these settings:
   - Auto commit-and-sync interval: 5 ✅
   - Auto backup after file change: ON ✅
   - Auto push: ON ✅
4. Try manual commit: `Ctrl+Shift+G`
5. Check if it works
6. If yes, auto-commit will work too

### Problem 3: "xxxxx" or "%%%%%" Appearing

**Symptoms**: See "xxxxx" in file explorer or "%%%%%" in editor gutter

**Solution**:
1. Press `Ctrl+Shift+I` (Developer Tools)
2. Press `Ctrl+R` (Reload)
3. Close Developer Tools
4. Should be fixed!
5. If not: Check [[00-inbox/FINAL-RELOAD-GIT-BLAME-FIX|Fix Guide]]

### Problem 4: Hotkeys Not Working

**Symptoms**: Press `Ctrl+O` but nothing happens

**Solution**:
1. Settings → Hotkeys
2. Search for command (e.g., "Quick switcher")
3. Check if hotkey assigned
4. If not, click "+" and assign
5. If conflict, resolve it
6. Restart Obsidian

### Problem 5: Plugin Not Loading

**Symptoms**: Feature not working, plugin seems inactive

**Solution**:
1. Settings → Community Plugins
2. Find the plugin
3. Toggle OFF
4. Wait 2 seconds
5. Toggle ON
6. Check status bar for confirmation
7. If still not working, restart Obsidian

---

## 📚 Next Steps

### Learn More
- [[DASHBOARD|📊 Main Dashboard]] - Central hub
- [[00-system/docs/FOLDER-STRUCTURE|📁 Folder Structure]] - Complete guide
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Guide]] - Advanced features
- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress]] - Current status

### Explore Features
- Create notes in different folders
- Try different templates
- Test Git auto-commit
- Explore the dashboard
- Try linking notes together

### Customize
- Change theme: Settings → Appearance → Themes
- Add hotkeys: Settings → Hotkeys
- Customize templates: `00-system/templates/obsidian/`
- Add CSS snippets: `.obsidian/snippets/`

---

## 💡 Pro Tips

### Productivity Hacks
1. **Pin Important Files**: Right-click tab → Pin
2. **Use Quick Open**: `Ctrl+O` is faster than clicking
3. **Use Search**: `Ctrl+Shift+F` finds anything
4. **Split Views**: `Ctrl+\` for side-by-side editing
5. **Use Templates**: Consistency = speed

### Organization Tips
1. **Process Inbox Daily**: Move notes to proper folders
2. **Use Tags**: Add `#tag` for categorization
3. **Link Related Notes**: Use `[[links]]` liberally
4. **Add Metadata**: Use properties (tags, dates, status)
5. **Archive Old Content**: Move to `99-archive/`

### Git Best Practices
1. **Commit Often**: Don't wait for auto-commit
2. **Write Good Messages**: Auto-commit does this for you
3. **Pull Before Push**: Auto-pull does this for you
4. **Check Status**: Look at status bar regularly
5. **Resolve Conflicts**: If any, resolve immediately

---

## 🎯 Your First Week Goals

### Day 1 (Today)
- [ ] Complete this quick start
- [ ] Create 3 test notes (product, FAQ, bot)
- [ ] Test Git auto-commit
- [ ] Explore dashboard

### Day 2-3
- [ ] Create 5 real knowledge base entries
- [ ] Set up 2 bot configurations
- [ ] Organize inbox
- [ ] Customize hotkeys

### Day 4-5
- [ ] Complete Google Drive setup
- [ ] Test n8n workflows
- [ ] Add GitHub Actions
- [ ] Run end-to-end tests

### Day 6-7
- [ ] Train team members
- [ ] Document custom processes
- [ ] Set up automation
- [ ] Go live!

---

## 📞 Get Help

### Resources
- **Dashboard**: [[DASHBOARD|Main Dashboard]]
- **Docs**: `00-system/docs/` folder
- **Setup**: [[00-inbox/SETUP-PROGRESS|Setup Progress]]
- **GitHub**: [Repository](https://github.com/raymaizing-id/llm-custom)

### Common Questions
- **How do I...?** → Check this guide or dashboard
- **Something broke!** → Check troubleshooting section
- **Need feature?** → Check Obsidian plugins
- **Want automation?** → Check n8n workflows

---

**🎉 You're Ready to Go!**

Start creating content and let the system handle the rest!

**Questions?** Check [[DASHBOARD|Dashboard]] or [[00-inbox/SETUP-PROGRESS|Setup Progress]]

**Last Updated**: 2026-02-12 | **Version**: 1.0.0

