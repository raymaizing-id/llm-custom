# 📚 Knowledge Base

> Central repository untuk semua knowledge content

---

## 🎯 Tujuan Folder Ini

Knowledge Base adalah **single source of truth** untuk:
- Product information
- FAQs
- Procedures & how-tos
- Marketing materials
- Semua content yang akan di-sync ke AI bots

---

## 📁 Struktur Folder

```
01-knowledge-base/
├── products/          # Product information
├── faqs/              # Frequently Asked Questions
├── procedures/        # Step-by-step procedures
└── marketing/         # Marketing materials
```

---

## ✏️ Cara Menambah Content

### 1. Products
**Folder**: `products/`
**Template**: Auto-apply saat buat file baru
**Content**: Product overview, features, pricing, use cases

### 2. FAQs
**Folder**: `faqs/`
**Template**: Auto-apply saat buat file baru
**Content**: Question & answer format

### 3. Procedures
**Folder**: `procedures/`
**Template**: Auto-apply saat buat file baru
**Content**: Step-by-step instructions dengan checklist

### 4. Marketing
**Folder**: `marketing/`
**Template**: Manual (belum ada)
**Content**: Marketing copy, campaigns, materials

---

## 🔄 Sync Workflow

**Automatic**:
1. Edit file di Obsidian
2. Save (Ctrl+S)
3. Auto-commit dalam 5 menit
4. GitHub Actions → Sync ke Google Drive
5. n8n → Update AI bots

**Manual**:
1. Edit file
2. `Ctrl+Shift+G` → Commit & push
3. Sync immediately

---

## 📊 Tracking

Lihat di Dashboard:
- Recent updates
- Most referenced files
- Growth chart

```dataview
TABLE file.mtime as "Last Modified"
FROM "01-knowledge-base"
SORT file.mtime DESC
LIMIT 10
```

---

**Catatan**: Semua file di sini akan di-sync ke AI bots!
