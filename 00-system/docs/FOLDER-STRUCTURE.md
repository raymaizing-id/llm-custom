# 📁 Folder Structure Guide

> Panduan lengkap struktur folder dan penggunaannya

**Last Updated**: 2026-02-12

---

## 🎯 Prinsip Organisasi

1. **Separation of Concerns** - Setiap folder punya tujuan spesifik
2. **Clear Naming** - Nama folder jelas dan deskriptif
3. **No Mixing** - Jangan campur file types yang berbeda
4. **Relative Paths** - Selalu gunakan relative paths

---

## 📂 Root Level Structure

```
llm-custom/
├── .github/              # GitHub Actions workflows
├── .obsidian/            # Obsidian configuration (managed by Obsidian)
├── 00-inbox/             # Temporary landing zone
├── 00-system/            # System files (YOU manage)
├── 01-knowledge-base/    # Knowledge content (synced to AI)
├── 02-ai-bots/           # AI bot configurations
├── 03-media/             # Media files (images, videos, files)
├── 04-database/          # Database schemas & migrations
├── 05-integrations/      # API integrations & webhooks
├── 99-archive/           # Archived content
├── 99-area/              # User workspace (user manages)
├── README.md             # Project documentation
└── .gitignore            # Git ignore rules
```

---

## 📋 Detailed Breakdown

### .github/
**Purpose**: GitHub-specific files
**Managed by**: System (Kiro)
**Contains**:
- `workflows/` - GitHub Actions workflows
  - `sync-to-gdrive.yml` - Auto-sync to Google Drive

**Don't touch unless**: Modifying CI/CD

---

### .obsidian/
**Purpose**: Obsidian app configuration
**Managed by**: Obsidian app
**Contains**:
- Plugin configurations
- Themes
- Workspace layouts
- Hotkeys

**Don't touch unless**: Configuring Obsidian

---

### 00-inbox/
**Purpose**: Temporary storage untuk notes belum diorganize
**Managed by**: User
**Contains**:
- `00-Notes/` - Quick notes
- `01-Clipping/` - Web clippings
- Temporary action items
- Setup progress files

**Workflow**:
1. Create note here
2. Process daily/weekly
3. Move to proper folder
4. Keep inbox clean!

**Example files**:
- `SETUP-PROGRESS.md` (temporary)
- `QUICK-REFERENCE-CARD.md` (temporary)

---

### 00-system/
**Purpose**: System files untuk automation dan management
**Managed by**: Kiro & System
**Structure**:
```
00-system/
├── architecture/         # System design docs
├── conversations/        # Conversation history dengan Kiro
├── docs/                 # User-facing documentation
├── internal/             # Internal system files
├── scripts/              # Automation scripts
│   ├── sync-to-gdrive.py
│   └── google-apps-script.js
├── templates/            # Template files
│   ├── obsidian/         # Obsidian note templates (.md)
│   └── n8n/              # n8n workflow templates (.json)
└── DASHBOARD.md          # Central dashboard
```

**Key files**:
- `internal/KIRO-SYSTEM-INSTRUCTION.md` - System instructions
- `docs/OBSIDIAN-OPTIMIZATION-GUIDE.md` - Obsidian guide
- `DASHBOARD.md` - Central hub

**Rules**:
- ✅ Organize by file type
- ✅ Use subfolders
- ❌ Don't mix `.md` and `.json` in same folder
- ❌ Don't put files in root

---

### 01-knowledge-base/
**Purpose**: Single source of truth untuk knowledge content
**Managed by**: Content team
**Structure**:
```
01-knowledge-base/
├── products/             # Product information
├── faqs/                 # Frequently Asked Questions
├── procedures/           # Step-by-step procedures
└── marketing/            # Marketing materials
```

**Sync**: ✅ Auto-synced to AI bots
**Templates**: ✅ Auto-apply per folder

**Workflow**:
1. Create file in appropriate folder
2. Template auto-applies
3. Fill content
4. Save → Auto-commit → Sync to AI

---

### 02-ai-bots/
**Purpose**: AI bot configurations dan management
**Managed by**: AI team
**Structure**:
```
02-ai-bots/
├── custom-gpts/          # OpenAI Custom GPT configs
├── gemini-gems/          # Google Gemini Gem configs
├── custom-ai/            # Other custom AI configs
├── bot-registry.csv      # Master list of all bots
├── UNIVERSAL-CONFIG.md   # Universal config template
└── README.md
```

**Key files**:
- `bot-registry.csv` - Track all bots
- `UNIVERSAL-CONFIG.md` - Copy to all platforms

**Workflow**:
1. Create bot config file
2. Link knowledge sources
3. Update registry
4. Deploy to platform

---

### 03-media/
**Purpose**: Storage untuk media files
**Managed by**: Content team
**Structure**:
```
03-media/
├── images/               # .png, .jpg, .svg
├── videos/               # .mp4, .mov
└── files/                # .pdf, .docx, etc
```

**Naming**: `YYYY-MM-DD-descriptive-name.ext`

**Obsidian attachment**: Auto-save to `files/`

---

### 04-database/
**Purpose**: Database schemas dan migrations
**Managed by**: Dev team
**Structure**:
```
04-database/
├── schemas/              # Database schemas
├── migrations/           # Migration scripts
└── seeds/                # Seed data
```

**Status**: 🚧 Not yet implemented

---

### 05-integrations/
**Purpose**: API integrations dan webhooks
**Managed by**: Dev team
**Structure**:
```
05-integrations/
├── apis/                 # API configurations
├── credentials/          # API credentials (gitignored)
└── webhooks/             # Webhook handlers
```

**Status**: 🚧 Not yet implemented

---

### 99-archive/
**Purpose**: Archived content (old/unused)
**Managed by**: User
**Contains**: Anything yang sudah tidak dipakai tapi mau disimpan

**Workflow**:
1. Identify unused content
2. Move to archive
3. Keep organized by date/topic

---

### 99-area/
**Purpose**: User personal workspace
**Managed by**: User (you!)
**Contains**: Apapun yang kamu mau

**Freedom**: ✅ Bebas organize sesuka hati
**Sync**: ❌ Tidak di-sync ke AI bots

---

## 🚫 Anti-Patterns (Jangan Lakukan!)

### ❌ Mixing File Types
```
BAD:
templates/
├── product-template.md
├── n8n-workflow.json      # ❌ Campur .md dan .json
└── script.py              # ❌ Script di folder template
```

```
GOOD:
templates/
├── obsidian/
│   └── product-template.md
└── n8n/
    └── n8n-workflow.json
```

### ❌ Files in Root
```
BAD:
llm-custom/
├── my-note.md             # ❌ File di root
├── script.py              # ❌ Script di root
└── config.json            # ❌ Config di root
```

```
GOOD:
llm-custom/
├── 00-inbox/
│   └── my-note.md
├── 00-system/scripts/
│   └── script.py
└── 00-system/internal/
    └── config.json
```

### ❌ Absolute Paths
```
BAD:
D:\01-raymaizing\llm custom\00-system\scripts\sync.py
```

```
GOOD:
00-system/scripts/sync.py
```

### ❌ Emoji Folders (except 00-inbox)
```
BAD:
📋 Templates/              # ❌ Emoji di folder name
💡 Ideas/                  # ❌ Emoji di folder name
```

```
GOOD:
00-system/templates/       # ✅ Clean naming
01-knowledge-base/         # ✅ Numbered prefix
```

---

## ✅ Best Practices

### 1. Use Subfolders
Organize by type, not by dumping everything in one folder.

### 2. README Everywhere
Every folder should have README.md explaining its purpose.

### 3. Consistent Naming
- Folders: `kebab-case`
- Files: `kebab-case.ext`
- Dates: `YYYY-MM-DD`

### 4. Clean Inbox Regularly
Don't let inbox accumulate. Process daily or weekly.

### 5. Link Everything
Use `[[wikilinks]]` to connect related files.

### 6. Archive Old Content
Move unused content to `99-archive/` instead of deleting.

---

## 🔍 Quick Reference

### Where to Put...

**New note (unorganized)** → `00-inbox/00-Notes/`
**Product info** → `01-knowledge-base/products/`
**FAQ** → `01-knowledge-base/faqs/`
**Procedure** → `01-knowledge-base/procedures/`
**Bot config** → `02-ai-bots/custom-gpts/` (or gemini-gems/ or custom-ai/)
**Image** → `03-media/images/`
**Video** → `03-media/videos/`
**PDF** → `03-media/files/`
**Conversation log** → `00-system/conversations/`
**System doc** → `00-system/docs/`
**Internal file** → `00-system/internal/`
**Script** → `00-system/scripts/`
**Obsidian template** → `00-system/templates/obsidian/`
**n8n workflow** → `00-system/templates/n8n/`
**Old content** → `99-archive/`
**Personal stuff** → `99-area/`

---

## 📊 Folder Health Check

**Monthly review**:
- [ ] Inbox is clean (< 5 files)
- [ ] All folders have README
- [ ] No files in root (except README.md, .gitignore)
- [ ] No mixing of file types
- [ ] All paths are relative
- [ ] Archive is organized
- [ ] Media files are optimized

---

**🎉 Struktur folder sekarang SUPER ORGANIZED!**

**Questions?** Check README.md di setiap folder!
