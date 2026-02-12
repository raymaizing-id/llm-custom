# 🤖 AI Bots

> Configuration dan management untuk semua AI bots

---

## 🎯 Tujuan Folder Ini

Manage semua AI bot configurations:
- Custom GPTs (OpenAI)
- Gemini Gems (Google)
- Custom AI (lainnya)

---

## 📁 Struktur Folder

```
02-ai-bots/
├── custom-gpts/       # OpenAI Custom GPT configs
├── gemini-gems/       # Google Gemini Gem configs
├── custom-ai/         # Other custom AI configs
├── bot-registry.csv   # Master list of all bots
├── UNIVERSAL-CONFIG.md # Universal config template
└── README.md          # This file
```

---

## 📝 Files

### bot-registry.csv
Master list tracking semua bots.

**Columns**:
- Bot Name
- Platform (Custom GPT / Gemini Gem / Custom AI)
- Status (Active / Testing / Archived)
- Purpose
- Knowledge Sources
- Last Updated

### UNIVERSAL-CONFIG.md
Universal configuration template yang bisa di-copy ke semua platforms.

**Usage**:
1. Edit UNIVERSAL-CONFIG.md
2. Copy paste ke Custom GPT
3. Copy paste ke Gemini Gem
4. Copy paste ke Custom AI
5. Semua bot sync!

---

## ✏️ Cara Menambah Bot Baru

### 1. Buat Config File
**Folder**: `custom-gpts/` atau `gemini-gems/` atau `custom-ai/`
**Template**: Auto-apply saat buat file baru
**Content**: System instructions, knowledge sources, capabilities

### 2. Update Registry
Edit `bot-registry.csv` dan tambah entry baru.

### 3. Link Knowledge Sources
Link ke files di `01-knowledge-base/` menggunakan `[[wikilinks]]`.

### 4. Test & Deploy
Test bot, lalu update status di registry.

---

## 🔄 Update Workflow

**When knowledge base changes**:
1. Knowledge file updated
2. Auto-sync ke Google Drive
3. n8n detects change
4. n8n triggers webhook
5. AI bots auto-update

**Manual update**:
1. Edit bot config file
2. Copy system instructions
3. Paste ke bot platform
4. Test
5. Update registry

---

## 📊 Tracking

Lihat di Dashboard:
```dataview
TABLE platform, status, file.mtime as "Updated"
FROM "02-ai-bots"
WHERE type = "custom-gpt"
SORT file.mtime DESC
```

---

**Catatan**: Semua bot harus terdaftar di bot-registry.csv!
