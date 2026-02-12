---
title: Dashboard
type: dashboard
tags:
  - dashboard
  - system
---

# � AI Knowledge Management Dashboard

> Central hub untuk semua AI bots dan knowledge base

---

## 📊 Quick Stats

```dataview
TABLE WITHOUT ID
  file.folder as "Folder",
  length(rows) as "Files"
FROM ""
WHERE file.name != "DASHBOARD"
GROUP BY file.folder
SORT length(rows) DESC
LIMIT 10
```

---

## ✅ Recent Tasks

```tasks
not done
limit 10
sort by priority
```

---

## 📝 Recent Knowledge Base Updates

```dataview
TABLE WITHOUT ID
  file.link as "File",
  dateformat(file.mtime, "yyyy-MM-dd HH:mm") as "Last Modified"
FROM "01-knowledge-base"
SORT file.mtime DESC
LIMIT 10
```

---

## 🤖 AI Bots Status

```dataview
TABLE WITHOUT ID
  file.link as "Bot",
  platform as "Platform",
  status as "Status",
  dateformat(file.mtime, "yyyy-MM-dd") as "Last Updated"
FROM "02-ai-bots"
WHERE type = "custom-gpt" OR type = "gemini-gem" OR type = "custom-ai"
SORT file.mtime DESC
```

---

## 💬 Recent Conversations

```dataview
TABLE WITHOUT ID
  file.link as "Conversation",
  date as "Date",
  status as "Status"
FROM "00-system/conversations"
WHERE type = "conversation"
SORT date DESC
LIMIT 5
```

---

## 📋 Quick Links

### System
- [[00-system/internal/KIRO-SYSTEM-INSTRUCTION|📖 System Instructions]]
- [[00-system/docs/FOLDER-STRUCTURE|📁 Folder Structure]]
- [[00-system/docs/OBSIDIAN-OPTIMIZATION-GUIDE|⚙️ Obsidian Guide]]

### Setup
- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress]]
- [[00-inbox/SETUP-STEPS-SIMPLE|📝 Setup Steps]]
- [[00-inbox/QUICK-REFERENCE-CARD|🎯 Quick Reference]]

### Knowledge Base
- [[01-knowledge-base/products/|📦 Products]]
- [[01-knowledge-base/faqs/|❓ FAQs]]
- [[01-knowledge-base/procedures/|📋 Procedures]]
- [[01-knowledge-base/marketing/|📢 Marketing]]

### AI Bots
- [[02-ai-bots/custom-gpts/|🤖 Custom GPTs]]
- [[02-ai-bots/gemini-gems/|💎 Gemini Gems]]
- [[02-ai-bots/custom-ai/|🔧 Custom AI]]
- [[02-ai-bots/bot-registry.csv|📊 Bot Registry]]
- [[02-ai-bots/UNIVERSAL-CONFIG|⚙️ Universal Config]]

---

## 🔥 Most Referenced Files

```dataview
TABLE WITHOUT ID
  file.link as "File",
  length(file.inlinks) as "References",
  dateformat(file.mtime, "yyyy-MM-dd") as "Updated"
FROM "01-knowledge-base"
SORT length(file.inlinks) DESC
LIMIT 5
```

---

## 📈 Knowledge Base Growth

```dataview
TABLE WITHOUT ID
  dateformat(file.ctime, "yyyy-MM") as "Month",
  length(rows) as "Files Created"
FROM "01-knowledge-base"
GROUP BY dateformat(file.ctime, "yyyy-MM")
SORT dateformat(file.ctime, "yyyy-MM") DESC
LIMIT 6
```

---

## 🎯 Folder Summary

### 📚 Knowledge Base
**Total Files**: 
```dataview
LIST length(file.lists)
FROM "01-knowledge-base"
FLATTEN file.lists
```

### 🤖 AI Bots
**Total Bots**: 
```dataview
LIST length(file.lists)
FROM "02-ai-bots"
WHERE type = "custom-gpt" OR type = "gemini-gem" OR type = "custom-ai"
FLATTEN file.lists
```

### 🎨 Media Files
**Total Media**: 
```dataview
LIST length(file.lists)
FROM "03-media"
FLATTEN file.lists
```

---

## 🚀 Quick Actions

### Create New
- `Ctrl+N` → New note in inbox
- `Ctrl+Shift+T` → Insert template

### Git Operations
- `Ctrl+Shift+G` → Commit & push
- `Ctrl+Shift+P` → Pull changes

### View Operations
- `Ctrl+\` → Split vertical
- `Ctrl+Shift+R` → Refresh dataview

---

## 📊 System Status

**Repository**: [GitHub](https://github.com/raymaizing-id/llm-custom)
**Google Drive**: [AI Knowledge Base](https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO)
**n8n**: [Dashboard](https://n8n.raycorpgroup.com)

---

**Last Updated**: 2026-02-12
**Status**: 🟢 Operational
