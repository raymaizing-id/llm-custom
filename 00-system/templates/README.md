# Templates

> Template files untuk berbagai keperluan

---

## 📁 Struktur Folder

```
templates/
├── obsidian/          # Obsidian note templates (.md)
│   ├── product-template.md
│   ├── faq-template.md
│   ├── procedure-template.md
│   ├── custom-gpt-template.md
│   ├── conversation-template.md
│   ├── business-unit-template.md      # NEW: Template unit bisnis
│   ├── division-template.md           # NEW: Template divisi (14 divisi)
│   ├── brand-template.md              # NEW: Template brand
│   └── otobot-template.md             # NEW: Template Otobot (Level 4 AI)
│
└── n8n/               # n8n workflow templates (.json)
    ├── n8n-universal-ai-update.json
    └── n8n-workflow-gdrive-to-git.json
```

---

## 🎯 Penggunaan

### Obsidian Templates
Digunakan oleh Templater plugin untuk auto-insert template saat buat file baru.

**Lokasi**: `00-system/templates/obsidian/`

**Auto-apply**:
- `product-template.md` → Folder `01-knowledge-base/products/`
- `faq-template.md` → Folder `01-knowledge-base/faqs/`
- `procedure-template.md` → Folder `01-knowledge-base/procedures/`
- `custom-gpt-template.md` → Folder `02-ai-bots/custom-gpts/`
- `conversation-template.md` → Folder `00-system/conversations/`

**AI Ecosystem Templates** (Manual use):
- `business-unit-template.md` → Untuk membuat unit bisnis baru
- `division-template.md` → Untuk membuat divisi baru (14 divisi standar)
- `brand-template.md` → Untuk membuat brand baru
- `otobot-template.md` → Untuk membuat Otobot (Level 4 AI)

📖 **Panduan lengkap:** `01-knowledge-base/perusahaan/ECOSYSTEM-GUIDE.md`

### n8n Templates
Workflow templates untuk import ke n8n.

**Lokasi**: `00-system/templates/n8n/`

**Import**:
1. Buka n8n: https://n8n.raycorpgroup.com
2. Click "+" → "Import from File"
3. Select file dari folder ini
4. Configure & activate

---

## ✏️ Cara Menambah Template Baru

### Obsidian Template
1. Buat file `.md` di `00-system/templates/obsidian/`
2. Gunakan Templater syntax: `<% tp.date.now() %>`
3. Update `.obsidian/plugins/templater-obsidian/data.json`
4. Restart Obsidian

### n8n Template
1. Export workflow dari n8n
2. Save file `.json` di `00-system/templates/n8n/`
3. Commit ke Git

---

**Catatan**: Jangan campur file `.md` dan `.json` dalam satu folder!
