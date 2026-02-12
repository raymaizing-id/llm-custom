# Scripts

> Automation scripts untuk sync dan integration

---

## 📁 File Scripts

### Python Scripts
- **`sync-to-gdrive.py`** - Sync files dari Git ke Google Drive
  - Digunakan oleh: GitHub Actions
  - Trigger: Push ke branch main
  - Function: Upload changed files ke Google Drive

### JavaScript Scripts
- **`google-apps-script.js`** - Google Apps Script untuk auto-sync
  - Digunakan oleh: Google Drive
  - Trigger: File edit di Google Drive
  - Function: Notify n8n untuk sync ke Git

---

## 🚀 Cara Pakai

### sync-to-gdrive.py
Otomatis dijalankan oleh GitHub Actions saat push.

**Manual run**:
```bash
python 00-system/scripts/sync-to-gdrive.py
```

**Environment variables**:
- `GDRIVE_CREDENTIALS` - Service account JSON
- `GDRIVE_FOLDER_ID` - Google Drive folder ID

### google-apps-script.js
Deploy ke Google Apps Script.

**Setup**:
1. Buka https://script.google.com/
2. New Project
3. Copy paste code
4. Deploy as Add-on
5. Set triggers

---

## ✏️ Cara Menambah Script Baru

1. Buat file di folder ini
2. Tambahkan header comment:
   ```python
   """
   Script Name
   Description
   Author: Your Name
   Date: YYYY-MM-DD
   """
   ```
3. Update README ini
4. Commit ke Git

---

**Catatan**: Semua scripts harus relative path, bukan absolute!
