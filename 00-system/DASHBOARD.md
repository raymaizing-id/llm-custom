---
title: Dashboard
type: dashboard
tags:
  - dashboard
  - system
---
# 🚀 AI Knowledge Management Dashboard

> Central hub untuk semua AI bots dan knowledge base

**Last Updated**: 2026-02-12

---

## 📊 Quick Stats

Total files per folder:

```dataview
TABLE WITHOUT ID
  file.folder as "📁 Folder",
  length(rows) as "📄 Files"
FROM ""
WHERE file.name != "DASHBOARD" AND file.name != "README"
GROUP BY file.folder
SORT length(rows) DESC
LIMIT 10
```

---

## 📝 Recent Knowledge Base Updates

Latest 10 files from knowledge base:

```dataview
TABLE WITHOUT ID
  file.link as "📄 File",
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as "🕒 Last Modified"
FROM "01-knowledge-base"
WHERE file.name != "README"
SORT file.mtime DESC
LIMIT 10
```

---

## 🤖 AI Bots Status

All registered AI bots:

```dataview
TABLE WITHOUT ID
  file.link as "🤖 Bot",
  platform as "💻 Platform",
  status as "📊 Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "🕒 Updated"
FROM "02-ai-bots"
WHERE type = "custom-gpt" OR type = "gemini-gem" OR type = "custom-ai"
SORT file.mtime DESC
```

---

## 📋 Quick Links

### 🔧 System
- [[00-system/internal/KIRO-SYSTEM-INSTRUCTION|📖 System Instructions]]
- [[00-system/docs/FOLDER-STRUCTURE|📁 Folder Structure]]
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Guide]]
- [[00-system/docs/QUICK-START|🚀 Quick Start]]

### 📊 Setup
- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress]]
- [[00-inbox/SETUP-STEPS-SIMPLE|📝 Setup Steps]]
- [[00-inbox/QUICK-REFERENCE-CARD|🎯 Quick Reference]]

### 📚 Knowledge Base
- [[01-knowledge-base/products/|📦 Products]]
- [[01-knowledge-base/faqs/|❓ FAQs]]
- [[01-knowledge-base/procedures/|📋 Procedures]]
- [[01-knowledge-base/marketing/|📢 Marketing]]

### 🤖 AI Bots
- [[02-ai-bots/custom-gpts/|🤖 Custom GPTs]]
- [[02-ai-bots/gemini-gems/|💎 Gemini Gems]]
- [[02-ai-bots/custom-ai/|🔧 Custom AI]]
- [[02-ai-bots/bot-registry.csv|📊 Bot Registry]]
- [[02-ai-bots/UNIVERSAL-CONFIG|⚙️ Universal Config]]

---

## 🔥 Most Referenced Files

Top 5 most linked files:

```dataview
TABLE WITHOUT ID
  file.link as "📄 File",
  length(file.inlinks) as "🔗 References",
  dateformat(file.mtime, "yyyy-MM-dd") as "🕒 Updated"
FROM "01-knowledge-base"
WHERE file.name != "README"
SORT length(file.inlinks) DESC
LIMIT 5
```

---

## 📈 Knowledge Base Growth

Files created per month:

```dataview
TABLE WITHOUT ID
  dateformat(file.ctime, "yyyy-MM") as "📅 Month",
  length(rows) as "📄 Files Created"
FROM "01-knowledge-base"
WHERE file.name != "README"
GROUP BY dateformat(file.ctime, "yyyy-MM")
SORT dateformat(file.ctime, "yyyy-MM") DESC
LIMIT 6
```

---

## 💬 Recent Conversations

Latest conversations with Kiro:

```dataview
TABLE WITHOUT ID
  file.link as "💬 Conversation",
  date as "📅 Date",
  status as "📊 Status"
FROM "00-system/conversations"
WHERE type = "conversation"
SORT date DESC
LIMIT 5
```

---

## 🚀 Quick Actions

### ✏️ Create New
- `Ctrl+N` → New note in inbox
- `Ctrl+Shift+T` → Insert template

### 🔄 Git Operations
- `Ctrl+Shift+G` → Commit & push
- `Ctrl+Shift+P` → Pull changes

### 👁️ View Operations
- `Ctrl+\` → Split vertical
- `Ctrl+Shift+R` → Refresh dataview
- `Ctrl+E` → Toggle edit/preview

---

## 📊 System Status

**Repository**: [GitHub](https://github.com/raymaizing-id/llm-custom)

**Google Drive**: [AI Knowledge Base](https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO)

**n8n**: [Dashboard](https://n8n.raycorpgroup.com)

---

## 🔧 Troubleshooting

### If you see "xxxxx" instead of data:

1. **Reload Dataview Plugin**:
   - Settings → Community Plugins
   - Find "Dataview"
   - Toggle OFF → Wait 2 seconds → Toggle ON
   - Return to this dashboard
   - Press `Ctrl+Shift+R` to refresh

2. **Check Plugin Status**:
   - Look at status bar (bottom)
   - Should see "Dataview" indicator
   - If not, plugin might not be loaded

3. **Restart Obsidian**:
   - Close Obsidian completely
   - Open again
   - Wait for all plugins to load (check status bar)
   - Open this dashboard again

4. **Verify Plugin Settings**:
   - Settings → Dataview
   - Check "Enable JavaScript Queries": Should be ON
   - Check "Enable Inline Queries": Should be ON
   - Check "Enable Inline JavaScript Queries": Should be ON

---

## 📌 Notes

- Properties are hidden in document (visible in sidebar)
- Full width mode enabled for better readability
- Dataview queries refresh automatically every 2.5 seconds
- Use `Ctrl+Shift+R` to force refresh
- If queries don't load, wait 10 seconds after opening file

---

**Status**: 🟢 Operational | **Progress**: 50% Complete

**Need Help?** Check [[00-system/docs/QUICK-START|Quick Start Guide]]
