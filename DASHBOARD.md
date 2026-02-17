---
title: Dashboard
type: dashboard
created: 2026-02-12
updated: 2026-02-12
---

# 🚀 AI Knowledge Management Dashboard

> **Central Hub** - All your content in one place, automatically updated

**Status**: 🟢 Active | **Progress**: 60% | **Last Updated**: 2026-02-12

---

## 📊 System Overview

| Component | Status | Info |
|-----------|--------|------|
| 🔧 Obsidian | 🟢 Running | All systems operational |
| 🐙 Git Sync | 🟢 Connected | Auto-sync every 5 min |
| 📦 Plugins | 🟢 Active | 25+ plugins loaded |
| 🎨 Theme | 🟢 Wasp Green | Professional theme |

---

## 📚 Knowledge Base

### 🏢 Company & AI Ecosystem

**RayCorp AI Ecosystem** - 4-Level AI Hierarchy

```dataview
TABLE WITHOUT ID
  file.link as "📄 Document",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/perusahaan"
WHERE file.name = "README" OR file.name = "ECOSYSTEM-GUIDE" OR file.name = "QUICK-REFERENCE" OR contains(file.name, "Struktur")
SORT file.name ASC
```

**Quick Navigation**:
- [[01-knowledge-base/perusahaan/README|🏛️ Company Structure Overview]]
- [[01-knowledge-base/perusahaan/ECOSYSTEM-GUIDE|📖 Complete Ecosystem Guide]]
- [[01-knowledge-base/perusahaan/QUICK-REFERENCE|⚡ Quick Reference Card]]

**Business Units**:
- [[01-knowledge-base/perusahaan/lunaranger/|🌙 Lunaranger]] - PT Lunaray Cahya Abadi (Kosmetik)
- [[01-knowledge-base/perusahaan/dianranger/|🏭 Dianranger]] - CV Dian Indah Abadi (OEM/Maklon)
- [[01-knowledge-base/perusahaan/raycademy/|🎓 Raycademy]] - Ray Academy (Edukasi)
- [[01-knowledge-base/perusahaan/agroranger/|🌾 AgroRanger]] - RayAgro (Pertanian)
- [[01-knowledge-base/perusahaan/cosranger/|🔬 CosRanger]] - LabCos (Laboratorium)

---

### 📦 Products

```dataview
TABLE WITHOUT ID
  file.link as "Product",
  status as "Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/products"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Actions**: Navigate to [[01-knowledge-base/products/|products folder]] → Press `Ctrl+N` to create new

---

### ❓ FAQs

```dataview
TABLE WITHOUT ID
  file.link as "Question",
  category as "Category",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/faqs"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Actions**: Navigate to [[01-knowledge-base/faqs/|faqs folder]] → Press `Ctrl+N` to create new

---

### 📋 Procedures

```dataview
TABLE WITHOUT ID
  file.link as "Procedure",
  status as "Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/procedures"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Actions**: Navigate to [[01-knowledge-base/procedures/|procedures folder]] → Press `Ctrl+N` to create new

---

### � Marketing

```dataview
TABLE WITHOUT ID
  file.link as "Content",
  type as "Type",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/marketing"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Actions**: Navigate to [[01-knowledge-base/marketing/|marketing folder]] → Press `Ctrl+N` to create new

---

## 🤖 AI Bots

### All Registered Bots

```dataview
TABLE WITHOUT ID
  file.link as "Bot Name",
  platform as "Platform",
  status as "Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "02-ai-bots"
WHERE file.extension = "md" AND file.name != "README" AND file.name != "UNIVERSAL-CONFIG" AND file.name != "custom-gpts"
SORT file.mtime DESC
```

**Quick Actions**: 
- [[02-ai-bots/custom-gpts/|Custom GPTs]] → `Ctrl+N` to create
- [[02-ai-bots/gemini-gems/|Gemini Gems]] → `Ctrl+N` to create
- [[02-ai-bots/custom-ai/|Custom AI]] → `Ctrl+N` to create
- [[02-ai-bots/bot-registry.csv|View Bot Registry CSV]]

---

## 📝 Recent Activity

### Recently Modified Files

```dataview
TABLE WITHOUT ID
  file.link as "File",
  file.folder as "Location",
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as "Last Modified"
FROM ""
WHERE file.name != "DASHBOARD" AND file.name != "README" AND file.name != "GUIDE"
SORT file.mtime DESC
LIMIT 15
```

---

### Recently Created Files

```dataview
TABLE WITHOUT ID
  file.link as "File",
  file.folder as "Location",
  dateformat(file.ctime, "yyyy-MM-dd HH:mm") as "Created"
FROM ""
WHERE file.name != "DASHBOARD" AND file.name != "README" AND file.name != "GUIDE"
SORT file.ctime DESC
LIMIT 10
```

---

## 💬 Conversations

### Recent AI Conversations

```dataview
TABLE WITHOUT ID
  file.link as "Conversation",
  date as "Date",
  status as "Status"
FROM "00-system/conversations"
WHERE file.extension = "md"
SORT date DESC
LIMIT 5
```

---

## 📊 Statistics

### Files by Folder

```dataview
TABLE WITHOUT ID
  file.folder as "📁 Folder",
  length(rows) as "📄 Count"
FROM ""
WHERE file.name != "DASHBOARD" AND file.name != "README"
GROUP BY file.folder
SORT length(rows) DESC
LIMIT 15
```

---

### Files by Status

```dataview
TABLE WITHOUT ID
  status as "Status",
  length(rows) as "Count"
FROM ""
WHERE status != null
GROUP BY status
SORT length(rows) DESC
```

---

## 🔗 Quick Links

### 📖 Documentation
- [[GUIDE|📘 Complete System Guide]]
- [[00-system/docs/QUICK-START|🚀 Quick Start (5 min)]]
- [[00-system/docs/FOLDER-STRUCTURE|📁 Folder Structure]]
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Optimization]]
- [[00-system/docs/GITHUB-THEME-IMPROVEMENTS|🎨 Theme Guide]]

### 📊 Setup & Progress
- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress (60%)]]
- [[00-inbox/SETUP-STEPS-SIMPLE|📝 Setup Steps]]
- [[00-inbox/QUICK-REFERENCE-CARD|🎯 Quick Reference Card]]

### 🌐 External Resources
- [GitHub Repository](https://github.com/raymaizing-id/llm-custom)
- [Google Drive Folder](https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO)
- [n8n Dashboard](https://n8n.raycorpgroup.com)
- [Obsidian Documentation](https://help.obsidian.md)

---

## ⌨️ Essential Shortcuts

| Action | Shortcut |
|--------|----------|
| Quick Open | `Ctrl+O` |
| Search All | `Ctrl+Shift+F` |
| New Note | `Ctrl+N` |
| Command Palette | `Ctrl+P` |
| Git Commit & Push | `Ctrl+Shift+G` |
| Git Pull | `Ctrl+Shift+P` |
| Split View | `Ctrl+\` |
| Toggle Edit/Preview | `Ctrl+E` |
| Refresh Dataview | `Ctrl+Shift+R` |

---

## 🆘 Need Help?

**Common Issues**:
- **Dataview not showing?** → Press `Ctrl+Shift+R` to refresh
- **Empty tables?** → Create files in respective folders
- **"xxxxx" appearing?** → Already fixed! Reload if needed
- **Templates not working?** → Check Templater settings

**Get Support**:
- [[GUIDE|Complete Guide]] - Full documentation
- [[00-system/docs/QUICK-START|Quick Start]] - 5-minute guide
- [GitHub Issues](https://github.com/raymaizing-id/llm-custom/issues) - Report bugs

---

## 🎯 Quick Actions

**Create New Content**:
1. Navigate to desired folder in file explorer (left sidebar)
2. Press `Ctrl+N` to create new note
3. Template will auto-apply
4. Fill in the details and save

**Search & Navigate**:
- Press `Ctrl+O` for quick file open
- Press `Ctrl+Shift+F` to search all files
- Use dataview tables above to browse content

**Git Operations**:
- Auto-sync every 5 minutes
- Manual: `Ctrl+Shift+G` to commit & push
- Pull changes: `Ctrl+Shift+P`

---

<div align="center">

**🎉 Everything is Centralized Here!**

All your content automatically appears in the tables above.
Create, edit, and everything updates automatically.

**Version**: 2.0.0 | **Status**: 🟢 Active

</div>
