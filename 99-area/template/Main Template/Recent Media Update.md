---
cssclass: "Dashboard"
---
-  All: `$=dv.pages().length` | inbox: `$=dv.pages('"0. Dashboard/inbox"').length` | metting: `$=dv.pages('"4. Personal/Agenda"').length`
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(20).file.link)`
