# 🗺️ Navigation Map - Knowledge Base RayCorp

> **Purpose**: Peta navigasi visual untuk memudahkan menemukan informasi  
> **Date**: February 18, 2026  
> **Status**: ✅ COMPLETE NAVIGATION MAP

---

## 🎯 QUICK NAVIGATION

### 🔥 Most Used (Paling Sering Diakses)

| Apa yang Dicari | Lokasi File | Shortcut |
|-----------------|-------------|----------|
| **Info Brand** | `05-brands/[type]/[brand].md` | [Go to Brands](#-brands) |
| **Info Product** | `06-products/[category]/` | [Go to Products](#-products) |
| **Info Department** | `02-office/departments/` | [Go to Departments](#-departments) |
| **SOP/Procedure** | `_knowledge-hub/procedures/` | [Go to Procedures](#-procedures) |
| **AI Config** | `02-ai-bots/` | [Go to AI Bots](#-ai-bots) |
| **Documentation** | `00-system/docs/` | [Go to Docs](#-documentation) |

---

## 🌳 STRUKTUR LENGKAP

### 📚 LEVEL 0: Fundamental

**Lokasi**: `00-fundamental/`

**Isi**:
- Struktur organisasi RayCorp
- Hierarki AI RayRanger
- Framework VORTEX
- Nilai & protokol perusahaan

**Kapan Digunakan**: Onboarding, reference global

---

### 🏢 LEVEL 1: Holdings

**Lokasi**: `01-holding/`

**Isi**:
- Rayandra Corporation (Office)
- Lunaray Beauty Factory (Manufacturing)

**Kapan Digunakan**: Info holding company, legal entity

---

### 🏛️ LEVEL 2: Operations

#### Office Operations
**Lokasi**: `02-office/departments/`

**7 Departments**:
1. Corporate Strategy & Legal
2. Finance
3. People & Culture
4. Business & Brand Development
5. Creative & Media
6. Technology & Digital
7. Marketing & Sales

#### Manufacturing Operations
**Lokasi**: `03-manufacturing/`

**8 Departments**:
1. Production
2. Quality Assurance
3. Supply Chain
4. Research & Development
5. Maintenance & Engineering
6. PPIC
7. HSE & Compliance
8. Admin & Legal Support

**14 Divisions** (di `divisions/`):
Rindu, Marksy, Teko, Finny, Strato, Lumina, Nexus, Aegis, Vero, Celestia, Orbis, Helios, Vera, Quanta

---

### 🏪 LEVEL 3: Business Units

**Lokasi**: `04-unit-bisnis/`

**7 Supporting Units**:
1. Baleide (Creative & Design)
2. Raypack (Packaging)
3. LabCos (Laboratory)
4. Ray Academy (Education)
5. Ebook (Digital Publishing)
6. Raymaizing (AI & IT)
7. Raymedia (Media Production)

---

### 🎯 LEVEL 4: Market Facing

#### 🏷️ Brands
**Lokasi**: `05-brands/`

**B2C (8 brands)**: `b2c/`
- beautylatory.md
- mommylatory.md
- babylatory.md
- dermond.md
- adhwa.md
- sheluna.md
- fantastik.md
- rayklin.md

**B2B (2 brands)**: `b2b/`
- myklon.md
- ckk.md

**B2B2C (4 brands)**: `b2b2c/`
- mazra.md
- hailogy.md
- inalovers-santripreneur.md
- dermalink.md

#### 📦 Products
**Lokasi**: `06-products/`

**Categories**:
- cosmetics/
- skincare/
- baby-care/
- mom-care/
- agriculture/
- services/

---

## 🔍 CARI BERDASARKAN KEBUTUHAN

### Scenario 1: "Saya mau update info brand"

```
1. Buka: 05-brands/
2. Pilih type: b2c/ atau b2b/ atau b2b2c/
3. Buka file brand: [brand].md
4. Edit section yang dibutuhkan
5. Save & commit
```

**Contoh**: Update Adhwa
→ `05-brands/b2c/adhwa.md`

---

### Scenario 2: "Saya mau tambah produk baru"

```
1. Buka: 05-brands/[type]/[brand].md
2. Scroll ke section "## Products"
3. Tambah produk baru
4. Update product count
5. Save & commit
```

**Contoh**: Tambah produk di Beautylatory
→ `05-brands/b2c/beautylatory.md` → Section "## Products"

---

### Scenario 3: "Saya mau lihat struktur department"

```
1. Buka: 02-office/departments/
2. Pilih department: [dept].md
3. Lihat struktur, team, KPI
```

**Contoh**: Lihat Marketing & Sales
→ `02-office/departments/marketing-sales.md`

---

### Scenario 4: "Saya mau buat SOP baru"

```
1. Copy template: 00-system/templates/obsidian/procedure-template.md
2. Edit dengan SOP baru
3. Save di: _knowledge-hub/procedures/[sop-name].md
4. Update index
5. Commit
```

**Contoh**: SOP Product Launch
→ `_knowledge-hub/procedures/product-launch-sop.md`

---

### Scenario 5: "Saya mau configure AI baru"

```
1. Copy template: 00-system/templates/obsidian/custom-gpt-template.md
2. Edit dengan AI config
3. Save di: 02-ai-bots/[platform]/[level]/[ai-name].md
4. Register di bot-registry.csv
5. Deploy AI
```

**Contoh**: AI untuk Adhwa
→ `02-ai-bots/custom-gpts/LEVEL-2/adhwa-ai.md`

---

## 📋 INDEX FILES

### Master Indexes

| Index | Lokasi | Isi |
|-------|--------|-----|
| **Brand Index** | `05-brands/_INDEX.md` | List semua 14 brands |
| **Quick Links** | `_index/quick-links.md` | Links penting |
| **Glossary** | `_index/glossary.md` | Istilah & definisi |
| **Bot Registry** | `02-ai-bots/bot-registry.csv` | List semua AI bots |

---

## 🎯 SHORTCUTS

### By Role

**Business Team**:
- Brands → `05-brands/`
- Products → `06-products/`
- Procedures → `_knowledge-hub/procedures/`

**Marketing Team**:
- Brands → `05-brands/`
- Marketing Dept → `02-office/departments/marketing-sales.md`
- Campaigns → `_knowledge-hub/best-practices/`

**Developer**:
- AI Bots → `02-ai-bots/`
- Integration → `_integrations/`
- Documentation → `00-system/docs/`

**Manager**:
- Status → `00-system/docs/KNOWLEDGE-BASE-FINAL-STATUS.md`
- Summary → `00-system/docs/COMPLETE-FOUNDATION-SUMMARY.md`
- Departments → `02-office/departments/`

---

## 📚 DOCUMENTATION

### User Guides

1. **ECOSYSTEM-USER-GUIDE.md** - Complete user guide
2. **QUICK-START-AI-BRAIN.md** - Quick start (5 min)
3. **AI-BRAIN-ARCHITECTURE-DIAGRAM.md** - Visual diagrams
4. **CONTRIBUTING.md** - How to contribute

### Status Reports

1. **KNOWLEDGE-BASE-FINAL-STATUS.md** - Final status
2. **FOUNDATION-MATURITY-COMPLETE.md** - Maturity status
3. **COMPLETE-FOUNDATION-SUMMARY.md** - Overall summary

### Phase Reports

1. **PHASE-5-BRANDS-COMPLETION.md** - Brands (14)
2. **PHASE-6-DEPARTMENTS-COMPLETION.md** - Departments (15)
3. **PHASE-7-DIVISIONS-COMPLETION.md** - Divisions (14)

---

**Last Updated**: 2026-02-18  
**Status**: ✅ COMPLETE  
**For**: All users

---

**Happy Navigating!** 🗺️
