# 🚀 Obsidian Optimization Guide

> Panduan lengkap optimasi Obsidian untuk AI Knowledge Management

**Last Updated**: 2026-02-12

---

## ✅ Yang Sudah Dioptimasi

### 1. **Templater Plugin** ⚡
Auto-template untuk setiap folder!

**Fitur Baru**:
- ✅ Auto-insert template saat buat file baru
- ✅ Auto-jump ke cursor position
- ✅ System commands enabled
- ✅ Folder-specific templates

**Templates Tersedia**:
- `product-template.md` → Auto di folder `01-knowledge-base/products/`
- `faq-template.md` → Auto di folder `01-knowledge-base/faqs/`
- `procedure-template.md` → Auto di folder `01-knowledge-base/procedures/`
- `custom-gpt-template.md` → Auto di folder `02-ai-bots/custom-gpts/`
- `conversation-template.md` → Auto di folder `00-system/conversations/`

**Cara Pakai**:
1. Buat file baru di folder yang sesuai
2. Template otomatis muncul!
3. Atau manual: `Ctrl+Shift+T` → Pilih template

---

### 2. **Dataview Plugin** 📊
Query system super powerful!

**Optimasi**:
- ✅ Refresh interval: 1 detik (lebih cepat)
- ✅ Task completion tracking: ON
- ✅ Recursive subtask: ON
- ✅ DataviewJS: Enabled
- ✅ Inline queries: Enabled
- ✅ Max depth: 6 levels

**Contoh Query**:
```dataview
TABLE file.mtime as "Last Modified"
FROM "01-knowledge-base"
SORT file.mtime DESC
LIMIT 10
```

---

### 3. **Tasks Plugin** ✅
Task management dengan status custom!

**Status Baru**:
- `[ ]` Todo → Klik jadi `/`
- `/` In Progress → Klik jadi `x`
- `x` Done
- `-` Cancelled
- `>` Deferred (ditunda)
- `!` Important (prioritas tinggi)

**Fitur**:
- ✅ Auto-suggest: 30 items
- ✅ Created date: Auto
- ✅ Done date: Auto
- ✅ Cancelled date: Auto

**Cara Pakai**:
```markdown
- [ ] Task biasa
- [/] Task in progress
- [x] Task selesai
- [-] Task dibatalkan
- [>] Task ditunda
- [!] Task penting
```

---

### 4. **Core Obsidian Settings** ⚙️

**Optimasi**:
- ✅ Line numbers: ON
- ✅ Spellcheck: ON (EN + ID)
- ✅ Auto-pair brackets: ON
- ✅ Auto-pair markdown: ON
- ✅ Smart indent: ON
- ✅ Fold heading/indent: ON
- ✅ Show frontmatter: ON
- ✅ Readable line length: ON
- ✅ Tab size: 2 spaces
- ✅ Live preview: ON

**Attachment**:
- Folder: `03-media/files/`
- Auto-organize: ON

---

### 5. **Hotkeys** ⌨️
Keyboard shortcuts super cepat!

**Git Commands**:
- `Ctrl+Shift+G` → Git commit & push
- `Ctrl+Shift+P` → Git pull

**Templates**:
- `Ctrl+Shift+T` → Insert template

**Dataview**:
- `Ctrl+Shift+R` → Refresh dataview

**Editor**:
- `Ctrl+[` → Toggle fold
- `Ctrl+Shift+[` → Fold all
- `Ctrl+Shift+]` → Unfold all
- `Ctrl+Enter` → Toggle checklist
- `Ctrl+\` → Split vertical
- `Ctrl+Shift+\` → Split horizontal
- `Ctrl+B` → Bold
- `Ctrl+I` → Italic
- `Ctrl+Shift+H` → Highlight
- `Ctrl+`` → Code

**Other**:
- `Ctrl+Shift+A` → Command palette
- `Alt+Q` → Cycle checklist
- `Alt+Ctrl+K` → Insert wikilink

---

### 6. **Dashboard** 📊
Central hub untuk semua!

**Lokasi**: `00-system/DASHBOARD.md`

**Fitur**:
- 📊 Quick stats (file count per folder)
- ✅ Recent tasks
- 📝 Recent knowledge updates
- 🤖 AI bots status
- 💬 Recent conversations
- 🔥 Hot topics (most referenced)
- 📈 Growth chart
- 🔗 Quick links

**Cara Buka**:
1. `Ctrl+O` → Ketik "dashboard"
2. Atau pin di sidebar

---

## 🎯 Plugin Yang Sudah Terinstall

### Productivity
- ✅ **Templater** - Auto templates
- ✅ **Dataview** - Query system
- ✅ **Tasks** - Task management
- ✅ **Obsidian Git** - Auto sync
- ✅ **Recent Files** - Quick access
- ✅ **Settings Search** - Find settings fast

### Content
- ✅ **Editing Toolbar** - Quick formatting
- ✅ **Outliner** - Better lists
- ✅ **TOC** - Table of contents
- ✅ **Reading Time** - Estimate read time
- ✅ **Link Preview** - Preview links

### Export
- ✅ **Pandoc** - Export to any format
- ✅ **Better Export PDF** - Better PDFs
- ✅ **Enhancing Export** - Enhanced exports

### Organization
- ✅ **Auto Note Mover** - Auto organize
- ✅ **File Explorer Note Count** - Count files
- ✅ **Thumbnails** - Image previews

### Advanced
- ✅ **Shell Commands** - Run commands
- ✅ **Marker API** - Annotations
- ✅ **MxMind** - Mind maps
- ✅ **Enhancing Mindmap** - Better mind maps

---

## 🔥 Plugin Yang Harus Diinstall (Rekomendasi)

### Must Have
1. **Kanban** - Kanban boards untuk project management
2. **Calendar** - Calendar view untuk daily notes
3. **Excalidraw** - Drawing dan diagrams
4. **Advanced Tables** - Better table editing
5. **QuickAdd** - Quick capture notes

### Nice to Have
6. **Hover Editor** - Hover to edit
7. **Note Refactor** - Split notes easily
8. **Paste URL into Selection** - Auto link
9. **Tag Wrangler** - Manage tags
10. **Workspaces Plus** - Save workspace layouts

### AI Integration
11. **Text Generator** - AI writing assistant
12. **Smart Connections** - AI-powered connections
13. **Copilot** - AI chat in Obsidian

---

## 📝 Workflow Baru

### 1. Buat Product Knowledge
1. Buat file baru di `01-knowledge-base/products/`
2. Template otomatis muncul
3. Isi informasi
4. Save → Auto commit dalam 5 menit

### 2. Buat FAQ
1. Buat file baru di `01-knowledge-base/faqs/`
2. Template otomatis muncul
3. Isi Q&A
4. Link ke related FAQs

### 3. Buat Procedure
1. Buat file baru di `01-knowledge-base/procedures/`
2. Template otomatis muncul
3. Isi step-by-step
4. Add checklist

### 4. Buat Custom GPT Config
1. Buat file baru di `02-ai-bots/custom-gpts/`
2. Template otomatis muncul
3. Isi system instructions
4. Link knowledge sources

### 5. Save Conversation
1. Buat file baru di `00-system/conversations/`
2. Template otomatis muncul
3. Copy conversation
4. Add summary & action items

---

## 🎨 Customization Tips

### Theme
Current: GitHub Theme (dark)
Recommended alternatives:
- **Minimal** - Clean & fast
- **Things** - Beautiful & organized
- **Cybertron** - Futuristic
- **Blue Topaz** - Feature-rich

### CSS Snippets
Lokasi: `.obsidian/snippets/`

Buat custom CSS untuk:
- Custom colors
- Custom fonts
- Custom spacing
- Custom animations

### Workspace Layouts
Save layouts untuk:
- Writing mode (single pane)
- Research mode (split panes)
- Dashboard mode (dashboard + sidebar)

---

## 🚀 Pro Tips

### 1. Quick Capture
- `Ctrl+N` → New note di inbox
- Template auto-apply
- Organize later

### 2. Link Everything
- `[[` → Auto-suggest files
- `Alt+Ctrl+K` → Insert link
- Build knowledge graph

### 3. Use Dataview
- Query anything
- Dynamic dashboards
- Auto-update

### 4. Fold Everything
- `Ctrl+Shift+[` → Fold all
- Focus on what matters
- Expand when needed

### 5. Split Views
- `Ctrl+\` → Split vertical
- Compare files
- Multi-task

### 6. Git Workflow
- Edit → Save → Auto-commit (5 min)
- Or `Ctrl+Shift+G` → Manual commit
- Always synced!

---

## 🔧 Troubleshooting

### Template Tidak Muncul
1. Restart Obsidian
2. Check Templater settings
3. Verify folder path

### Dataview Tidak Update
1. `Ctrl+Shift+R` → Force refresh
2. Check query syntax
3. Verify file frontmatter

### Git Tidak Auto-commit
1. Check Git plugin settings
2. Verify interval (5 minutes)
3. Check status bar

### Hotkeys Tidak Jalan
1. Restart Obsidian
2. Check hotkeys.json
3. Verify no conflicts

---

## 📚 Resources

### Documentation
- [Templater Docs](https://silentvoid13.github.io/Templater/)
- [Dataview Docs](https://blacksmithgu.github.io/obsidian-dataview/)
- [Tasks Docs](https://publish.obsidian.md/tasks/)

### Community
- [Obsidian Forum](https://forum.obsidian.md/)
- [Obsidian Discord](https://discord.gg/obsidianmd)
- [r/ObsidianMD](https://reddit.com/r/ObsidianMD)

---

**🎉 Obsidian kamu sekarang SUPER OPTIMIZED!**

**Next Steps**:
1. Restart Obsidian
2. Buka Dashboard (`00-system/DASHBOARD.md`)
3. Test templates
4. Explore hotkeys
5. Enjoy! 🚀
