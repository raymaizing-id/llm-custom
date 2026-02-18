# 🤝 Contributing to RayCorp Knowledge Base

> **Panduan Kontribusi untuk Semua Orang**  
> Mudah, Cepat, dan Jelas!

---

## 🎯 Siapa yang Bisa Kontribusi?

**SEMUA ORANG!** 🎉

- ✅ Business Team (update brand, product info)
- ✅ Marketing Team (update campaign, strategy)
- ✅ Developer (add integration, automation)
- ✅ Content Creator (add documentation)
- ✅ Manager (review and approve)
- ✅ Anyone with knowledge to share!

---

## 🚀 Quick Start (5 Menit)

### Step 1: Clone Repository

```bash
git clone https://github.com/raymaizing-id/llm-custom.git
cd llm-custom
```

### Step 2: Buat Branch Baru

```bash
git checkout -b update/[nama-update]
```

Contoh:
```bash
git checkout -b update/adhwa-new-product
git checkout -b fix/beautylatory-typo
git checkout -b new/raybeauty-brand
```

### Step 3: Edit File

Buka file yang mau diupdate dengan editor favorit:
- VS Code
- Obsidian
- Notepad++
- Atau text editor apapun

### Step 4: Save & Commit

```bash
git add .
git commit -m "Update: [deskripsi singkat]"
git push origin update/[nama-update]
```

### Step 5: Create Pull Request

1. Buka GitHub repository
2. Click "Pull Request"
3. Pilih branch kamu
4. Add description
5. Submit!

**DONE!** ✅ Tim akan review dan merge!

---

## 📝 Jenis Kontribusi

### 1. Update Existing Content

**Kapan**: Info sudah ada tapi perlu diupdate

**Contoh**:
- Update harga produk
- Update contact person
- Update performance metrics
- Fix typo atau grammar

**File Location**:
```
Brands: 01-knowledge-base/perusahaan/05-brands/
Departments: 01-knowledge-base/perusahaan/02-office/departments/
Divisions: 01-knowledge-base/perusahaan/03-manufacturing/divisions/
```

**Template Commit**:
```bash
git commit -m "Update: [apa yang diupdate]"
```

Contoh:
```bash
git commit -m "Update: Harga Adhwa Serum"
git commit -m "Update: Contact person Marketing"
git commit -m "Update: Q1 2026 performance metrics"
```

---

### 2. Add New Content

**Kapan**: Tambah konten baru (brand, product, etc)

**Contoh**:
- Tambah brand baru
- Tambah produk baru
- Tambah department baru
- Tambah SOP baru

**Steps**:
1. Copy template dari `00-system/templates/`
2. Edit dengan info baru
3. Save di lokasi yang sesuai
4. Update index file
5. Commit & push

**Template Commit**:
```bash
git commit -m "New: [apa yang ditambah]"
```

Contoh:
```bash
git commit -m "New: Brand Raybeauty"
git commit -m "New: Adhwa Night Cream product"
git commit -m "New: Product Launch SOP"
```

---

### 3. Fix Issues

**Kapan**: Ada error, typo, atau masalah

**Contoh**:
- Fix typo
- Fix broken link
- Fix incorrect info
- Fix formatting

**Template Commit**:
```bash
git commit -m "Fix: [apa yang difix]"
```

Contoh:
```bash
git commit -m "Fix: Typo di brand voice Adhwa"
git commit -m "Fix: Broken link di README"
git commit -m "Fix: Incorrect price Beautylatory"
```

---

### 4. Improve Documentation

**Kapan**: Dokumentasi perlu diperbaiki atau ditambah

**Contoh**:
- Add examples
- Clarify instructions
- Add diagrams
- Improve readability

**Template Commit**:
```bash
git commit -m "Docs: [apa yang diimprove]"
```

Contoh:
```bash
git commit -m "Docs: Add examples to user guide"
git commit -m "Docs: Clarify update process"
git commit -m "Docs: Add visual diagrams"
```

---

## 📁 Struktur File: Dimana Menyimpan?

### Quick Reference Table

| Jenis Konten | Lokasi | Contoh File |
|--------------|--------|-------------|
| **Brand** | `05-brands/[type]/` | `05-brands/b2c/adhwa.md` |
| **Product** | `06-products/[category]/` | `06-products/skincare/serum.md` |
| **Department** | `02-office/departments/` | `02-office/departments/marketing.md` |
| **Division** | `03-manufacturing/divisions/` | `03-manufacturing/divisions/marksy.md` |
| **SOP** | `_knowledge-hub/procedures/` | `_knowledge-hub/procedures/launch.md` |
| **Policy** | `_knowledge-hub/policies/` | `_knowledge-hub/policies/brand-guide.md` |
| **Documentation** | `00-system/docs/` | `00-system/docs/GUIDE.md` |

---

## ✏️ Format & Style Guide

### File Format

**Gunakan Markdown (.md)**

```markdown
---
type: brand
category: b2c
name: Brand Name
updated: 2026-02-18
---

# Brand Name

## Quick Facts
- Type: B2C
- Target: Women 20-40

## Brand Identity
[content...]

## Products
[content...]
```

---

### Naming Convention

**Files**: `lowercase-with-dash.md`

✅ GOOD:
- `adhwa.md`
- `marketing-sales.md`
- `product-launch-sop.md`

❌ BAD:
- `Adhwa.md`
- `Marketing_Sales.md`
- `ProductLaunchSOP.md`

**Folders**: `lowercase-with-dash`

✅ GOOD:
- `b2c/`
- `marketing-sales/`
- `knowledge-hub/`

❌ BAD:
- `B2C/`
- `Marketing_Sales/`
- `KnowledgeHub/`

---

### Content Style

**Clear & Concise**

✅ GOOD:
```markdown
## Products

### 1. Adhwa Serum
- Price: Rp 150,000
- Size: 30ml
- Benefits: Brightening, anti-aging
```

❌ BAD:
```markdown
## Products

We have a serum product called Adhwa Serum which is priced at around Rp 150,000 and comes in a 30ml bottle and it has benefits like brightening and anti-aging...
```

**Use Headings**

```markdown
# Main Title (H1)
## Section (H2)
### Subsection (H3)
#### Detail (H4)
```

**Use Lists**

```markdown
- Item 1
- Item 2
- Item 3

1. First
2. Second
3. Third
```

**Use Tables**

```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data 1   | Data 2   |
```

---

## ✅ Checklist Sebelum Submit

### Content Checklist

- [ ] Info akurat dan up-to-date
- [ ] Tidak ada typo atau grammar error
- [ ] Format konsisten dengan file lain
- [ ] Frontmatter metadata lengkap
- [ ] Headings jelas dan terstruktur
- [ ] Links tidak broken

### Technical Checklist

- [ ] File di lokasi yang benar
- [ ] Naming convention benar
- [ ] Tidak ada file duplikat
- [ ] Git commit message jelas
- [ ] Branch name descriptive

### Documentation Checklist

- [ ] Update index jika perlu
- [ ] Update README jika perlu
- [ ] Add examples jika perlu
- [ ] Cross-reference jika perlu

---

## 🔍 Review Process

### 1. Automatic Checks

Saat submit PR, automatic checks akan run:
- ✅ File format valid
- ✅ No broken links
- ✅ Naming convention correct
- ✅ Frontmatter valid

### 2. Peer Review

Tim akan review:
- ✅ Content accuracy
- ✅ Completeness
- ✅ Consistency
- ✅ Quality

### 3. Approval & Merge

Setelah approved:
- ✅ PR merged to main
- ✅ Changes deployed
- ✅ AI updated automatically

**Timeline**: 1-2 hari kerja

---

## 🆘 Need Help?

### Documentation

📚 **Read First**:
- `00-system/docs/ECOSYSTEM-USER-GUIDE.md` - Complete user guide
- `00-system/docs/QUICK-START-AI-BRAIN.md` - Quick start
- `00-system/docs/README.md` - Documentation hub

### Ask Team

💬 **Contact**:
- **ARAY** (AI Coordinator) - For AI-related questions
- **Tech Team** - For technical issues
- **Business Team** - For content questions

### Report Issues

🐛 **Found a Bug?**
1. Create GitHub Issue
2. Describe the problem
3. Add screenshots if possible
4. Tag relevant team members

---

## 🎯 Best Practices

### DO ✅

1. **Read Documentation First**
   - Check existing guides
   - Follow examples
   - Ask if unclear

2. **Use Templates**
   - Copy from `00-system/templates/`
   - Maintain consistency
   - Save time

3. **Test Locally**
   - Preview changes
   - Check formatting
   - Verify links

4. **Write Clear Commits**
   - Descriptive messages
   - Follow convention
   - One change per commit

5. **Update Regularly**
   - Pull latest changes
   - Sync with main
   - Avoid conflicts

### DON'T ❌

1. **Don't Commit Directly to Main**
   - Always use branches
   - Create PR for review
   - Wait for approval

2. **Don't Duplicate Content**
   - One file = one topic
   - Use links for reference
   - Avoid redundancy

3. **Don't Ignore Feedback**
   - Address review comments
   - Make requested changes
   - Communicate with reviewers

4. **Don't Break Existing Structure**
   - Follow current organization
   - Discuss major changes first
   - Maintain consistency

5. **Don't Forget to Update**
   - Update metadata
   - Update indexes
   - Update related docs

---

## 🎉 Thank You!

Terima kasih sudah berkontribusi ke RayCorp Knowledge Base!

Setiap kontribusi, sekecil apapun, sangat berarti untuk:
- ✅ Meningkatkan kualitas knowledge base
- ✅ Memberdayakan AI ecosystem
- ✅ Membantu tim bekerja lebih efisien
- ✅ Membangun otak hidup yang dinamis

**Your contribution matters!** 🌟

---

## 📞 Contact

- **Email**: support@raycorp.com
- **GitHub**: https://github.com/raymaizing-id/llm-custom
- **Internal Chat**: #knowledge-base channel

---

**Last Updated**: 2026-02-18  
**Version**: 1.0.0  
**Status**: ✅ ACTIVE

---

**Happy Contributing!** 🚀
