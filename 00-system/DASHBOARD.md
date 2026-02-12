# 🚀 AI Knowledge Management Dashboard

> Central hub untuk semua AI bots dan knowledge base

**Last Updated**: `= date(now)`

---

## 📊 Quick Stats

```dataview
TABLE WITHOUT ID
  "📁 " + file.folder as "Folder",
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
  file.mtime as "Last Modified"
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
  file.mtime as "Last Updated"
FROM "02-ai-bots"
WHERE type = "custom-gpt"
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
SORT date DESC
LIMIT 5
```

---

## 📋 Quick Actions

- [[00-inbox/SETUP-PROGRESS|📊 Setup Progress]]
- [[00-inbox/SETUP-STEPS-SIMPLE|📖 Setup Guide]]
- [[02-ai-bots/UNIVERSAL-CONFIG|⚙️ Universal Config]]
- [[02-ai-bots/bot-registry.csv|🤖 Bot Registry]]

---

## 🔥 Hot Topics

```dataview
TABLE WITHOUT ID
  file.link as "Topic",
  length(file.inlinks) as "References",
  file.mtime as "Updated"
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

## 🎯 Focus Areas

### Products
- Total: `= length(filter(file.lists, (f) => contains(f.path, "01-knowledge-base/products")))`
- [[01-knowledge-base/products/|View All →]]

### FAQs
- Total: `= length(filter(file.lists, (f) => contains(f.path, "01-knowledge-base/faqs")))`
- [[01-knowledge-base/faqs/|View All →]]

### Procedures
- Total: `= length(filter(file.lists, (f) => contains(f.path, "01-knowledge-base/procedures")))`
- [[01-knowledge-base/procedures/|View All →]]

---

## 🔗 Quick Links

### System
- [[00-system/internal/KIRO-SYSTEM-INSTRUCTION|System Instructions]]
- [[00-system/architecture/|Architecture Docs]]
- [[00-system/scripts/|Scripts]]

### Knowledge Base
- [[01-knowledge-base/products/|Products]]
- [[01-knowledge-base/faqs/|FAQs]]
- [[01-knowledge-base/procedures/|Procedures]]
- [[01-knowledge-base/marketing/|Marketing]]

### AI Bots
- [[02-ai-bots/custom-gpts/|Custom GPTs]]
- [[02-ai-bots/gemini-gems/|Gemini Gems]]
- [[02-ai-bots/custom-ai/|Custom AI]]

---

**🎉 System Status**: Operational
**📊 Total Files**: `= length(file.lists)`
**🤖 Active Bots**: `= length(filter(file.lists, (f) => contains(f.path, "02-ai-bots") AND f.status = "active"))`
