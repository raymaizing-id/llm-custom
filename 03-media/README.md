# 🎨 Media

> Storage untuk semua media files

---

## 🎯 Tujuan Folder Ini

Central storage untuk:
- Images (screenshots, diagrams, photos)
- Videos (tutorials, demos)
- Files (PDFs, documents, attachments)

---

## 📁 Struktur Folder

```
03-media/
├── images/            # Image files (.png, .jpg, .svg)
├── videos/            # Video files (.mp4, .mov)
├── files/             # Other files (.pdf, .docx, etc)
└── README.md          # This file
```

---

## 📝 Naming Convention

**Format**: `YYYY-MM-DD-descriptive-name.ext`

**Examples**:
- `2026-02-12-dashboard-screenshot.png`
- `2026-02-12-system-architecture.svg`
- `2026-02-12-setup-tutorial.mp4`
- `2026-02-12-user-guide.pdf`

---

## ✏️ Cara Menambah Media

### Via Obsidian
1. Drag & drop file ke note
2. Otomatis save ke `03-media/files/`
3. Auto-link di note

### Manual
1. Copy file ke folder yang sesuai
2. Rename dengan naming convention
3. Link di note: `![[filename.ext]]`

---

## 🔗 Linking Media

### Images
```markdown
![[image-name.png]]
```

### Videos
```markdown
![[video-name.mp4]]
```

### Files
```markdown
[[file-name.pdf]]
```

---

## 🗑️ Cleanup

**Monthly**:
- Review unused media
- Delete duplicates
- Optimize file sizes
- Archive old files

**Tools**:
- Obsidian: "Detect unused files"
- Manual: Check file references

---

**Catatan**: Jangan upload file terlalu besar (>10MB) ke Git!
