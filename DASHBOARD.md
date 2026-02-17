---
title: Dashboard
type: dashboard
created: 2026-02-12
updated: 2026-02-17
---

# 🚀 AI Knowledge Management Dashboard

> **Central Hub** - All your content in one place, automatically updated

**Status**: 🟢 Active | **Progress**: 75% | **Last Updated**: 2026-02-17

---

## 🎉 Latest Update: Knowledge Base Restructure Complete!

**Date**: February 17, 2026 ✅

The knowledge base has been completely restructured to an IDEAL structure:
- ✅ Consolidated all fundamental docs in `_fundamental/`
- ✅ Created `_cross-company/` for shared resources
- ✅ Centralized brands in `_brands/` (B2C, B2B, B2B2C)
- ✅ Centralized products in `_products/`
- ✅ Centralized marketing in `_marketing/`
- ✅ Organized all business units under `unit-bisnis/`
- ✅ 18 comprehensive README files created
- ✅ Complete migration log documented

See: [[00-system/docs/KNOWLEDGE-BASE-MIGRATION-LOG|📋 Migration Log]] | [[01-knowledge-base/README|📚 New Structure]]

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

### 🏛️ Fundamental Knowledge

**Core organizational knowledge and frameworks**

```dataview
TABLE WITHOUT ID
  file.link as "📄 Document",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/_fundamental"
WHERE file.name = "README" OR contains(file.name, "Struktur") OR contains(file.name, "VCORETEX")
SORT file.name ASC
LIMIT 10
```

**Quick Navigation**:
- [[01-knowledge-base/_fundamental/README|🏛️ Fundamental Knowledge Overview]]
- [[01-knowledge-base/_fundamental/organizational-structure/|📊 Organizational Structure]]
- [[01-knowledge-base/_fundamental/ai-hierarchy/|🤖 AI Hierarchy (4-Level)]]
- [[01-knowledge-base/_fundamental/frameworks/|📐 Frameworks (VCORETEX)]]

---

### 🏢 Business Units

**RayCorp Ecosystem - 5 Business Units**

```dataview
TABLE WITHOUT ID
  file.link as "📄 Document",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/unit-bisnis"
WHERE file.name = "README" OR file.name = "MASTER-STRUKTUR-RAYCORP" OR file.name = "ECOSYSTEM-GUIDE" OR file.name = "QUICK-REFERENCE"
SORT file.name ASC
```

**Business Units**:
- [[01-knowledge-base/unit-bisnis/lunaranger/|🌙 Lunaranger]] - PT Lunaray Cahya Abadi (Kosmetik & Skincare) - 14 divisions ✅
- [[01-knowledge-base/unit-bisnis/dianranger/|🏭 Dianranger]] - Digital Services
- [[01-knowledge-base/unit-bisnis/raycademy/|🎓 Raycademy]] - Education & Training
- [[01-knowledge-base/unit-bisnis/agroranger/|🌾 AgroRanger]] - Agriculture
- [[01-knowledge-base/unit-bisnis/cosranger/|🔬 CosRanger]] - Consulting

**Master Documents**:
- [[01-knowledge-base/unit-bisnis/MASTER-STRUKTUR-RAYCORP|🏢 Master Struktur RayCorp]]
- [[01-knowledge-base/unit-bisnis/ECOSYSTEM-GUIDE|📖 Complete Ecosystem Guide]]
- [[01-knowledge-base/unit-bisnis/QUICK-REFERENCE|⚡ Quick Reference Card]]
- [[01-knowledge-base/unit-bisnis/IMPLEMENTATION-STATUS|📊 Implementation Status]]

---

### 🎨 Brands

**Centralized brand portfolio across all business models**

```dataview
TABLE WITHOUT ID
  file.folder as "📁 Category",
  length(rows) as "📄 Count"
FROM "01-knowledge-base/_brands"
WHERE file.name != "README"
GROUP BY file.folder
SORT file.folder ASC
```

**Quick Navigation**:
- [[01-knowledge-base/_brands/b2c/|🛍️ B2C Brands]] - Consumer-facing brands
- [[01-knowledge-base/_brands/b2b/|🏢 B2B Brands]] - Business-facing brands
- [[01-knowledge-base/_brands/b2b2c/|🔄 B2B2C Brands]] - Hybrid model brands

---

### 📦 Products

**Product catalog across all business units**

```dataview
TABLE WITHOUT ID
  file.link as "Product",
  status as "Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/_products"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Navigation**:
- [[01-knowledge-base/_products/cosmetics/|💄 Cosmetics]] - Makeup & color cosmetics
- [[01-knowledge-base/_products/skincare/|🧴 Skincare]] - Facial & body care
- [[01-knowledge-base/_products/agriculture/|🌾 Agriculture]] - Agricultural products
- [[01-knowledge-base/_products/services/|🛠️ Services]] - Service offerings

**Quick Actions**: Navigate to [[01-knowledge-base/_products/|products folder]] → Press `Ctrl+N` to create new

---

### 📢 Marketing

**Marketing resources and campaigns**

```dataview
TABLE WITHOUT ID
  file.link as "Content",
  type as "Type",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "01-knowledge-base/_marketing"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

**Quick Navigation**:
- [[01-knowledge-base/_marketing/campaigns/|📣 Campaigns]] - Marketing campaigns
- [[01-knowledge-base/_marketing/content/|📝 Content]] - Marketing content & copy
- [[01-knowledge-base/_marketing/strategies/|📊 Strategies]] - Marketing strategies
- [[01-knowledge-base/_marketing/assets/|🎨 Assets]] - Marketing asset references

**Quick Actions**: Navigate to [[01-knowledge-base/_marketing/|marketing folder]] → Press `Ctrl+N` to create new

---

### 🔗 Cross-Company Resources

**Shared resources across all business units**

```dataview
TABLE WITHOUT ID
  file.folder as "📁 Category",
  length(rows) as "📄 Count"
FROM "01-knowledge-base/_cross-company"
WHERE file.name != "README"
GROUP BY file.folder
SORT file.folder ASC
```

**Quick Navigation**:
- [[01-knowledge-base/_cross-company/faqs/|❓ FAQs]] - Cross-company FAQs
- [[01-knowledge-base/_cross-company/procedures/|📋 Procedures]] - Standard Operating Procedures
- [[01-knowledge-base/_cross-company/policies/|📜 Policies]] - Company-wide policies
- [[01-knowledge-base/_cross-company/guidelines/|📐 Guidelines]] - Best practices

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
- [[01-knowledge-base/perusahaan/MASTER-STRUKTUR-RAYCORP|🏢 Master Struktur RayCorp]]
- [[01-knowledge-base/perusahaan/ECOSYSTEM-GUIDE|📖 Ecosystem Guide]]
- [[01-knowledge-base/perusahaan/QUICK-REFERENCE|⚡ Quick Reference]]
- [[00-system/docs/QUICK-START|🚀 Quick Start (5 min)]]
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Optimization]]

### 🏢 Company Structure
- [[01-knowledge-base/perusahaan/lunaranger/|🌙 Lunaranger]] (PT Lunaray Cahya Abadi)
- [[01-knowledge-base/perusahaan/dianranger/|🏭 Dianranger]] (CV Dian Indah Abadi)
- [[01-knowledge-base/perusahaan/raycademy/|🎓 Raycademy]] (Ray Academy)
- [[01-knowledge-base/perusahaan/agroranger/|🌾 AgroRanger]] (RayAgro)
- [[01-knowledge-base/perusahaan/cosranger/|🔬 CosRanger]] (LabCos)

### 🤖 AI & Automation
- [[02-ai-bots/|🤖 AI Bots Hub]]
- [[02-automation/|⚙️ Automation Hub]]
- [[02-ai-bots/UNIVERSAL-CONFIG|🌐 Universal AI Config]]

### 🚀 Platform & Development
- [[02-platform/|🚀 Platform Development]]
- [[06-ideation/|💡 Ideation Hub]]
- [[01-assets/|📦 Assets Management]]

### Workspace
- [storage raymaizing drive](https://drive.google.com/drive/folders/15d-VU5WGv4ipzCIDcLcGF73lydlHLYsf?usp=drive_link)
- [gpt-bookmark builder](https://chatgpt.com/c/6993d4be-b870-8322-a37c-1fa1111fdf2a)
- [gpt-brief jadi knowledge](https://chatgpt.com/c/6993dbc3-1d68-8320-b004-c6427e970475)

### 📊 Setup & Progress
- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress]]
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
