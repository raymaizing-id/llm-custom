# Conversations

> Conversation history dengan Kiro

---

## 🎯 Tujuan Folder Ini

Menyimpan semua conversation history dengan Kiro untuk:
- Reference di masa depan
- Track decisions yang dibuat
- Understand context dari perubahan
- Learning dan improvement

---

## 📝 Format File

**Naming**: `YYYY-MM-DD-topic-name.md`

**Contoh**:
- `2026-02-12-initial-setup.md`
- `2026-02-12-obsidian-optimization.md`
- `2026-02-13-n8n-workflow-setup.md`

---

## ✏️ Template

Gunakan template: `00-system/templates/obsidian/conversation-template.md`

**Auto-apply**: Saat buat file baru di folder ini, template otomatis muncul.

---

## 🔍 Cara Mencari Conversation

### Di Obsidian
1. `Ctrl+O` → Ketik keyword
2. Atau search: `Ctrl+Shift+F`

### Di Dataview (Dashboard)
```dataview
TABLE date, status
FROM "00-system/conversations"
SORT date DESC
```

---

**Catatan**: Simpan conversation setelah setiap session penting!
