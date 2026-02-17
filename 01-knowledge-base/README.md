# 📚 Knowledge Base

> Central repository untuk semua knowledge content RayCorp ecosystem

---

## 🎯 Tujuan Folder Ini

Knowledge Base adalah **single source of truth** untuk:
- Organizational structure & fundamental knowledge
- Business unit knowledge bases
- Product information (all units)
- Brand information (B2C, B2B, B2B2C)
- Marketing materials & strategies
- Cross-company resources (FAQs, procedures, policies)
- Semua content yang akan di-sync ke AI bots

---

## 📁 Struktur Folder (IDEAL STRUCTURE)

```
01-knowledge-base/
├── _fundamental/           # 🏛️ Fundamental knowledge (organizational structure, AI hierarchy, frameworks)
│   ├── organizational-structure/   # Company structure, business units
│   ├── ai-hierarchy/              # 4-level AI Digital Employee structure
│   ├── frameworks/                # VCORETEX Framework, protocols
│   └── archives/                  # Historical fundamental knowledge
│
├── _holding/               # 🏢 Holding company (Rayandra Corporation)
│   └── rayandra-corporation/
│
├── _cross-company/         # 🔗 Cross-company resources
│   ├── faqs/              # Cross-company FAQs
│   ├── procedures/        # Standard Operating Procedures
│   ├── policies/          # Company-wide policies
│   ├── guidelines/        # Best practices
│   └── templates/         # Document templates
│
├── unit-bisnis/           # 🏭 Business Units
│   ├── lunaranger/        # Cosmetics & Skincare (14 divisions ✅)
│   ├── dianranger/        # Digital Services
│   ├── raycademy/         # Education & Training
│   ├── agroranger/        # Agriculture
│   └── cosranger/         # Consulting
│
├── _brands/               # 🎨 All Brands (centralized)
│   ├── b2c/              # Business-to-Consumer brands
│   ├── b2b/              # Business-to-Business brands
│   └── b2b2c/            # Business-to-Business-to-Consumer brands
│
├── _products/             # 📦 All Products (cross-unit)
│   ├── cosmetics/        # Cosmetic products (Lunaranger)
│   ├── skincare/         # Skincare products (Lunaranger)
│   ├── agriculture/      # Agricultural products (Agroranger)
│   └── services/         # Service offerings (all units)
│
└── _marketing/            # 📢 Marketing Resources (cross-unit)
    ├── campaigns/        # Marketing campaigns
    ├── content/          # Marketing content & copy
    ├── strategies/       # Marketing strategies
    └── assets/           # Marketing asset references
```

## 📖 Folder Naming Convention

- **`_prefix`**: Meta-information folders (not operational content)
  - `_fundamental/` - Core knowledge
  - `_holding/` - Holding company
  - `_cross-company/` - Shared resources
  - `_brands/` - Brand portfolio
  - `_products/` - Product catalog
  - `_marketing/` - Marketing resources

- **`no-prefix`**: Operational content
  - `unit-bisnis/` - Business units (operational entities)

---

## 🗂️ Folder Descriptions

### 🏛️ `_fundamental/` - Fundamental Knowledge
**Purpose**: Core organizational knowledge that defines RayCorp
**Contains**:
- Organizational structure (3-tier model)
- AI hierarchy (4-level: RANGERRAY → Sub-Superbot → Superbot Divisi → Otobot)
- VCORETEX Framework
- Command protocols and interaction guidelines
- Character identity and voice tone

### 🏢 `_holding/` - Holding Company
**Purpose**: Rayandra Corporation (holding company) information
**Contains**: Holding company structure, governance, portfolio management

### 🔗 `_cross-company/` - Cross-Company Resources
**Purpose**: Resources that apply across all business units
**Contains**: FAQs, SOPs, policies, guidelines, templates

### 🏭 `unit-bisnis/` - Business Units
**Purpose**: Individual business unit knowledge bases
**Contains**:
- **Lunaranger**: Cosmetics & Skincare (14 divisions complete ✅)
- **Dianranger**: Digital Services
- **Raycademy**: Education & Training
- **Agroranger**: Agriculture
- **Cosranger**: Consulting

### 🎨 `_brands/` - Brands
**Purpose**: Centralized brand portfolio management
**Contains**: B2C, B2B, and B2B2C brands across all business units

### 📦 `_products/` - Products
**Purpose**: Product catalog across all business units
**Contains**: Cosmetics, skincare, agriculture, services

### 📢 `_marketing/` - Marketing
**Purpose**: Marketing resources and campaigns
**Contains**: Campaigns, content, strategies, assets

---

## ✏️ Cara Menambah Content

### 1. Business Unit Content
**Folder**: `unit-bisnis/{unit-name}/`
**Content**: Unit-specific knowledge, divisions, operations

### 2. Products
**Folder**: `_products/{category}/`
**Template**: Use `_products/example-product.md`
**Content**: Product specs, pricing, variants, target market

### 3. Brands
**Folder**: `_brands/{b2c|b2b|b2b2c}/{brand-name}/`
**Content**: Brand identity, positioning, products, strategy

### 4. Marketing
**Folder**: `_marketing/{campaigns|content|strategies}/`
**Content**: Marketing materials, campaigns, strategies

### 5. Cross-Company Resources
**Folder**: `_cross-company/{faqs|procedures|policies}/`
**Content**: Universal resources for all units

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

## 📊 Key Documents

### Master Documents
- `unit-bisnis/MASTER-STRUKTUR-RAYCORP.md` - Complete organizational structure
- `unit-bisnis/ECOSYSTEM-GUIDE.md` - Ecosystem overview
- `unit-bisnis/QUICK-REFERENCE.md` - Quick reference guide
- `_fundamental/frameworks/` - Core frameworks and protocols

### Implementation Status
- `unit-bisnis/IMPLEMENTATION-STATUS.md` - AI bot deployment status
- Lunaranger: 14/14 divisions complete ✅
- Other units: Pending Phase 2

---

## 🔗 Related Folders

- `00-system/` - System documentation and internal guides
- `02-ai-bots/` - AI bot configurations
- `99-area/media/` - Media assets (images, videos, files)

---

## 📈 Tracking

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

## 🎯 Restructure Notes

**Date**: February 17, 2026
**Status**: Complete ✅

This knowledge base has been restructured to the IDEAL structure with:
- Clear separation between meta-information (`_prefix`) and operational content
- Consolidated fundamental knowledge in `_fundamental/`
- Centralized brands, products, and marketing resources
- Organized business units under `unit-bisnis/`
- Cross-company resources in `_cross-company/`

See `00-system/docs/KNOWLEDGE-BASE-RESTRUCTURE-PLAN.md` for full details.

---

**Catatan**: Semua file di sini akan di-sync ke AI bots!
