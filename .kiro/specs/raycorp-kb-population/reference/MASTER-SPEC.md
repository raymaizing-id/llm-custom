# 🧠 MASTER SPEC: RayCorp Knowledge Base - OTAK PUSAT PERUSAHAAN

> **Vision**: Membangun otak pusat perusahaan yang ultra-cerdas, modular, dan siap integrasi  
> **Scope**: 235+ files, ~50,000+ lines of comprehensive knowledge  
> **Status**: Ready for Execution  
> **Version**: 2.0 - ULTRA COMPREHENSIVE

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#project-overview)
2. [Requirements (DETAILED)](#requirements-detailed)
3. [Architecture & Design (COMPREHENSIVE)](#architecture--design-comprehensive)
4. [Implementation Tasks (GRANULAR)](#implementation-tasks-granular)
5. [Quality Standards](#quality-standards)
6. [Integration Guide](#integration-guide)
7. [Validation & Testing](#validation--testing)
8. [Deployment Strategy](#deployment-strategy)

---

## 🎯 PROJECT OVERVIEW

### Vision Statement
Membangun **OTAK PUSAT PERUSAHAAN** yang:
- ✅ **Ultra-cerdas**: AI reasoning, decision-making, context awareness, learning capability
- ✅ **Modular**: 9 files per entity, easy to maintain, version control friendly
- ✅ **Integration-ready**: n8n, Custom GPT, Gemini, REST API, Webhooks
- ✅ **Scalable**: Template system untuk entity baru dalam 1.5 jam
- ✅ **Comprehensive**: ~1,800 lines per entity, production-ready content
- ✅ **Intelligent**: Cross-entity linking, smart routing, multi-perspective handling

### Business Context

**Problem Statement**:
RayCorp ecosystem memiliki 24 entities (brands, units, products) dengan knowledge yang tersebar, tidak terstruktur, dan sulit diakses oleh AI systems. Setiap entity membutuhkan AI assistant yang cerdas, konsisten, dan dapat diintegrasikan ke berbagai platform.

**Solution**:
Membangun knowledge base terpusat yang menjadi "otak" perusahaan - sistem yang dapat:
1. Menyimpan dan mengorganisir knowledge dari 24 entities
2. Memberikan akses berbasis role (internal vs external)
3. Menjaga konsistensi brand voice untuk setiap entity
4. Mendukung AI reasoning dan decision-making
5. Terintegrasi dengan n8n, Custom GPT, Gemini, dan platform lainnya
6. Mudah di-scale untuk entity baru


### Scope Definition

**Total Output**:
- **Files**: 235+ files
  - 216 entity files (24 entities × 9 files each)
  - 14 Division AI files
  - 5 Holding AI files
- **Lines**: ~50,000+ lines
  - ~43,200 lines for entities (24 × 1,800)
  - ~4,200 lines for Division AI (14 × 300)
  - ~2,000 lines for Holding AI (5 × 400)
  - ~500+ lines for core brain files
- **Entities**: 24 total
  - 8 B2C Brands
  - 2 B2B Brands
  - 4 B2B2C Brands
  - 7 Business Units
  - 3 Products
- **AI Assistants**: 19 total
  - 14 Division AI (operational)
  - 5 Holding AI (executive)
- **Integration Points**: 5 platforms
  - n8n Workflows
  - Custom GPT (OpenAI)
  - Gemini Gems (Google)
  - REST API
  - Webhooks

**Entity Structure** (per entity - 9 files):
```
entity_name/
├── INTERNAL-KB-[ENTITY].md          (200-300 lines)
│   └── For: Employees, Managers, Partners
│   └── Content: Operations, procedures, business intelligence
│
├── EXTERNAL-KB-[ENTITY].md          (200-300 lines)
│   └── For: Customers, Prospects, Public
│   └── Content: Benefits, purchasing, public info
│
├── brand-voice/
│   └── BRAND-VOICE-[ENTITY].md      (150-250 lines)
│       └── Voice attributes, tone, language style
│
├── brand-knowledge/
│   └── BRAND-IDENTITY-[ENTITY].md   (150-250 lines)
│       └── Brand essence, values, positioning
│
├── marketing-knowledge/
│   └── MARKETING-STRATEGY-[ENTITY].md (150-250 lines)
│       └── Campaigns, channels, budget, KPIs
│
├── customer-segment/
│   └── TARGET-AUDIENCE-[ENTITY].md  (150-250 lines)
│       └── Demographics, personas, journey
│
├── product-knowledge/
│   └── PRODUCT-CATALOG-[ENTITY].md  (150-250 lines)
│       └── Products, specs, pricing, benefits
│
├── sales-knowledge/
│   └── SALES-STRATEGY-[ENTITY].md   (150-250 lines)
│       └── Process, channels, scripts, objections
│
└── operations/
    └── OPERATIONS-MANUAL-[ENTITY].md (150-250 lines)
        └── SOPs, workflows, quality control

Total per entity: 9 files, ~1,800 lines
```

### Glossary & Terminology

**Core Concepts**:
- **KB (Knowledge Base)**: Structured content repository for AI systems
- **Entity**: Brand, business unit, product, or AI division
- **OTAK PUSAT**: Central brain - the core intelligence system
- **Brain Layer**: Architectural layer in the 5-layer system

**Knowledge Types**:
- **INTERNAL-KB**: Knowledge for employees, managers, partners
- **EXTERNAL-KB**: Knowledge for customers, prospects, public
- **Global Knowledge**: Universal principles applicable to all entities
- **Entity Knowledge**: Specific knowledge for one entity

**AI Concepts**:
- **Multiple Choice**: AI response with 1-5 numbered options (1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣)
- **Brand Voice**: Unique communication style per entity
- **Context Awareness**: AI understanding of user, conversation, entity, time
- **Smart Routing**: Intelligent query routing to appropriate knowledge
- **Cross-Entity Linking**: Connections between related entities

**Organizational Terms**:
- **Division AI**: AI assistant for operational divisions (14 total)
- **Holding AI**: AI assistant for executives (5 total)
- **B2C**: Business to Consumer brands
- **B2B**: Business to Business brands
- **B2B2C**: Business to Business to Consumer brands

---

## 📝 REQUIREMENTS (DETAILED)

### R1: Complete File Population

**Goal**: All 235+ KB files populated with comprehensive, production-ready content

**Detailed Acceptance Criteria**:

1. **Entity Files (216 files)**:
   - ✅ 24 entities × 9 files each = 216 files
   - ✅ Each entity has complete folder structure
   - ✅ All 9 files per entity are populated
   - ✅ No missing files or empty placeholders

2. **Division AI Files (14 files)**:
   - ✅ All 14 Division AI knowledge bases created
   - ✅ Each file: 300-400 lines
   - ✅ Covers: capabilities, reasoning, integration, collaboration

3. **Holding AI Files (5 files)**:
   - ✅ All 5 Holding AI knowledge bases created
   - ✅ Each file: 400-500 lines
   - ✅ Covers: executive intelligence, strategic decision support

4. **Folder Structure Integrity**:
   - ✅ Maintain existing folder hierarchy
   - ✅ Consistent naming conventions
   - ✅ Proper sub-folder organization
   - ✅ No orphaned or misplaced files

**Validation Method**:
```bash
# File count validation
- Count all INTERNAL-KB-*.md files = 24
- Count all EXTERNAL-KB-*.md files = 24
- Count all brand-voice/*.md files = 24
- Count all brand-knowledge/*.md files = 24
- Count all marketing-knowledge/*.md files = 24
- Count all customer-segment/*.md files = 24
- Count all product-knowledge/*.md files = 24
- Count all sales-knowledge/*.md files = 24
- Count all operations/*.md files = 24
- Count all AI-KB-*.md files = 19
- Total = 235 files
```

**Success Metrics**:
- File completion rate: 100%
- Missing files: 0
- Empty files: 0
- Folder structure compliance: 100%


### R2: Content Quality Standards

**Goal**: Production-ready content with zero placeholders, realistic data, and comprehensive coverage

**Detailed Acceptance Criteria**:

1. **Line Count Requirements**:
   - ✅ Main KB files (INTERNAL/EXTERNAL): 200-300 lines each
   - ✅ Sub-folder files: 150-250 lines each
   - ✅ Division AI files: 300-400 lines each
   - ✅ Holding AI files: 400-500 lines each
   - ✅ Total per entity: ~1,800 lines minimum

2. **No Placeholder Text**:
   - ❌ NO "[Entity]" placeholders
   - ❌ NO "[Brand Name]" placeholders
   - ❌ NO "TODO" markers
   - ❌ NO "TBD" markers
   - ❌ NO "[Insert...]" placeholders
   - ❌ NO "[Add content here]" markers
   - ❌ NO generic "[Product Name]" placeholders
   - ✅ ALL content must be specific and complete

3. **Real Examples & Data**:
   - ✅ Product names: Specific, branded, realistic
   - ✅ Prices: Market-appropriate, in Rupiah (Rp)
   - ✅ Metrics: Achievable, industry-standard
   - ✅ KPIs: Realistic targets with numbers
   - ✅ Testimonials: Believable, specific, named
   - ✅ Scenarios: Authentic, relatable situations
   - ✅ Use cases: Real-world applications

4. **Template Compliance**:
   - ✅ Follow Beautylatory structure (reference template)
   - ✅ Follow Adhwa structure (reference template)
   - ✅ Maintain consistent formatting
   - ✅ Use same section organization
   - ✅ Apply same level of detail

5. **Content Depth**:
   - ✅ Each section fully developed
   - ✅ Multiple examples per concept
   - ✅ Detailed explanations
   - ✅ Comprehensive coverage
   - ✅ No superficial content

**Validation Method**:
```bash
# Placeholder detection
grep -r "\[Entity\]" *.md = 0 matches
grep -r "\[Brand" *.md = 0 matches
grep -r "TODO" *.md = 0 matches
grep -r "TBD" *.md = 0 matches
grep -r "\[Insert" *.md = 0 matches

# Line count validation
for file in INTERNAL-KB-*.md; do
  lines=$(wc -l < "$file")
  if [ $lines -lt 200 ] || [ $lines -gt 300 ]; then
    echo "FAIL: $file has $lines lines"
  fi
done

# Content quality check
- Check for specific product names (not generic)
- Check for Rupiah prices (Rp format)
- Check for realistic metrics (numbers, percentages)
- Check for named testimonials (not "Customer A")
```

**Success Metrics**:
- Placeholder count: 0
- Line count compliance: 100%
- Realistic data: 100%
- Template compliance: 100%
- Content depth score: >90%

---

### R3: Multiple Choice Interactions

**Goal**: Every AI response has clear, actionable next steps with numbered options

**Detailed Acceptance Criteria**:

1. **Multiple Choice Presence**:
   - ✅ EVERY AI response scenario has multiple choice
   - ✅ Minimum 2-3 complete interaction examples per file
   - ✅ Each interaction includes full conversation flow
   - ✅ No AI response without multiple choice options

2. **Option Count**:
   - ✅ Minimum: 1 option (rare, only for simple confirmations)
   - ✅ Typical: 3-4 options (most scenarios)
   - ✅ Maximum: 5 options (complex scenarios)
   - ✅ Never more than 5 options (avoid overwhelming user)

3. **Emoji Number Format**:
   - ✅ Use emoji numbers: 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣
   - ✅ Consistent formatting across all files
   - ✅ Each option on separate line
   - ✅ Clear visual separation

4. **Option Quality**:
   - ✅ Each option is actionable (user can do something)
   - ✅ Options are clear and specific
   - ✅ Options are distinct (no overlap)
   - ✅ Options cover main user needs
   - ✅ Options are contextually relevant

5. **Interaction Examples**:
   - ✅ Scenario 1: Customer inquiry (product recommendation)
   - ✅ Scenario 2: Internal query (operational guidance)
   - ✅ Scenario 3: Complex situation (multi-step process)
   - ✅ Each scenario shows full conversation
   - ✅ Each scenario demonstrates brand voice

**Example Format**:
```markdown
### Scenario 1: Customer Product Inquiry

Customer: "Saya punya kulit kering, produk apa yang cocok?"

Beautylatory Bot: "Hai Kak! 😊 Untuk kulit kering, kami punya beberapa rekomendasi terbaik:

🌟 REKOMENDASI PRODUK:

1. Hydrating Serum (Rp 150,000)
   - Hyaluronic acid 2%
   - Ceramide complex
   - Hasil: Kulit lembab 24 jam

2. Moisturizing Cream (Rp 180,000)
   - Shea butter + Vitamin E
   - Non-greasy formula
   - Hasil: Kulit kenyal & glowing

3. Night Repair Mask (Rp 200,000)
   - Sleeping mask
   - Intensive hydration
   - Hasil: Bangun dengan kulit super lembut

💡 TIPS TAMBAHAN:
- Gunakan serum pagi & malam
- Aplikasikan cream setelah serum
- Pakai mask 2-3x seminggu

📱 MAU ORDER YANG MANA?

1️⃣ Order Hydrating Serum
2️⃣ Order Moisturizing Cream
3️⃣ Order Night Repair Mask
4️⃣ Order paket lengkap (hemat 15%)
5️⃣ Konsultasi dulu dengan beauty advisor

Pilih yang mana, Kak? 💕"
```

**Validation Method**:
```bash
# Multiple choice detection
grep -c "1️⃣" INTERNAL-KB-*.md >= 2 per file
grep -c "2️⃣" INTERNAL-KB-*.md >= 2 per file

# Scenario count
grep -c "### Scenario" *.md >= 2 per file

# Option quality check (manual)
- Each option starts with action verb or clear noun
- Options don't overlap in meaning
- Options are contextually appropriate
```

**Success Metrics**:
- Files with multiple choice: 100%
- Scenarios per file: ≥2
- Options per scenario: 1-5
- Option quality score: >90%
- User actionability: 100%


### R4: Brand Voice Consistency

**Goal**: Each entity maintains unique, consistent brand voice across all 9 files

**Detailed Acceptance Criteria**:

1. **Voice Attribute Application**:
   - ✅ Apply correct voice from Brand Voice Matrix
   - ✅ Voice consistent across all 9 files per entity
   - ✅ Voice appropriate for entity type (B2C/B2B/B2B2C)
   - ✅ Voice reflects brand personality

2. **Tone Appropriateness**:
   - ✅ Internal KB: Professional but approachable
   - ✅ External KB: Customer-friendly, engaging
   - ✅ Context-aware tone switching
   - ✅ Emotional tone matches brand

3. **Language Style**:
   - ✅ Vocabulary matches target audience
   - ✅ Sentence structure appropriate
   - ✅ Emoji usage follows brand guidelines
   - ✅ Formality level consistent

4. **Brand Voice Matrix** (Complete):

**B2C Brands**:

| Entity | Voice Attributes | Tone | Language Style | Emoji Usage |
|--------|------------------|------|----------------|-------------|
| **Beautylatory** | Empowering, Confident, Knowledgeable | Friendly, expert | Beauty-focused, aspirational | Moderate (✨💕🌟) |
| **Adhwa** | Spiritual, Caring, Trustworthy | Warm, Islamic | Arabic terms, modest | Minimal (🤲☪️💚) |
| **Mommylatory** | Nurturing, Supportive, Knowledgeable | Warm, caring, maternal | Reassuring, expert | Moderate (💕👶🤱) |
| **Babylatory** | Gentle, Trustworthy, Caring | Soft, protective | Tender, safety-focused | Moderate (👶💙🍼) |
| **Dermond** | Masculine, Confident, Straightforward | Bold, direct | Strong, no-nonsense | Minimal (💪🔥⚡) |
| **Sheluna** | Youthful, Fun, Relatable | Energetic, trendy | Gen-Z friendly, casual | Generous (✨🌙💫) |
| **Fantastik** | Magical, Transformative, Exciting | Enthusiastic, wonder | Imaginative, dramatic | Generous (✨🎭🌟) |
| **Rayklin** | Clean, Fresh, Reliable | Crisp, efficient | Simple, practical | Minimal (✨🧼💧) |

**B2B Brands**:

| Entity | Voice Attributes | Tone | Language Style | Emoji Usage |
|--------|------------------|------|----------------|-------------|
| **Myklon** | Professional, Reliable, Partnership-focused | Business-like, collaborative | Industry terms, formal | Minimal (🤝📊💼) |
| **CKK** | Expert, Quality-focused, Collaborative | Knowledgeable, precise | Technical, detailed | Minimal (🔬✅📋) |

**B2B2C Brands**:

| Entity | Voice Attributes | Tone | Language Style | Emoji Usage |
|--------|------------------|------|----------------|-------------|
| **Demalink** | Innovative, Connecting, Empowering | Dynamic, inspiring | Tech-savvy, accessible | Moderate (🔗💡🚀) |
| **Hailogy** | Scientific, Trustworthy, Educational | Authoritative, caring | Medical terms, clear | Minimal (🔬💊🏥) |
| **Inalovers** | Natural, Authentic, Community-driven | Warm, inclusive | Organic-focused, friendly | Moderate (🌿💚🌱) |
| **Mazra** | Agricultural, Sustainable, Reliable | Grounded, honest | Farming terms, practical | Minimal (🌾🚜🌱) |

**Business Units**:

| Entity | Voice Attributes | Tone | Language Style | Emoji Usage |
|--------|------------------|------|----------------|-------------|
| **Raymaizing** | Innovative, Intelligent, Helpful | Tech-forward, friendly | AI terms, accessible | Moderate (🤖💡⚡) |
| **Ray Academy** | Educational, Inspiring, Professional | Motivating, expert | Learning-focused, clear | Moderate (📚🎓💡) |
| **LabCos** | Scientific, Precise, Innovative | Professional, technical | Lab terms, detailed | Minimal (🔬⚗️📊) |
| **Raymedia** | Creative, Dynamic, Engaging | Energetic, artistic | Media terms, vibrant | Generous (🎬📸✨) |
| **Baleide** | Elegant, Sophisticated, Exclusive | Refined, premium | Luxury terms, polished | Minimal (💎✨🎁) |
| **Raypack** | Reliable, Efficient, Professional | Practical, straightforward | Packaging terms, clear | Minimal (📦✅🔧) |
| **Ebook Unit** | Knowledgeable, Accessible, Inspiring | Informative, friendly | Publishing terms, clear | Moderate (📚💡📖) |

**Products**:

| Entity | Voice Attributes | Tone | Language Style | Emoji Usage |
|--------|------------------|------|----------------|-------------|
| **Custom AI** | Intelligent, Innovative, Helpful | Tech-savvy, friendly | AI/tech terms, accessible | Moderate (🤖💡⚡) |
| **Platform** | Efficient, Reliable, User-friendly | Professional, supportive | Platform terms, clear | Moderate (💻🚀📊) |
| **Ebook Product** | Informative, Engaging, Valuable | Educational, inspiring | Content-focused, clear | Moderate (📚✨💡) |

5. **Voice Consistency Checks**:
   - ✅ Same voice attributes in all 9 files
   - ✅ Consistent emoji usage pattern
   - ✅ Consistent language formality
   - ✅ Consistent personality traits
   - ✅ No voice mixing or confusion

**Validation Method**:
```bash
# Voice consistency check (manual review)
- Read INTERNAL-KB and EXTERNAL-KB for same entity
- Verify voice attributes match
- Check emoji usage consistency
- Validate tone appropriateness
- Confirm language style alignment

# Automated checks
- Count emoji usage per file
- Check formality level (word choice analysis)
- Verify brand-specific terms present
```

**Success Metrics**:
- Voice consistency score: >95%
- Tone appropriateness: 100%
- Language style match: >90%
- Emoji usage compliance: 100%


### R5: Internal vs External Clarity

**Goal**: Clear distinction between internal and external perspectives with appropriate content

**Detailed Acceptance Criteria**:

1. **INTERNAL-KB Content Requirements**:
   
   **Must Include**:
   - ✅ Operational procedures (step-by-step processes)
   - ✅ Team guidelines (roles, responsibilities, workflows)
   - ✅ Business intelligence (KPIs, metrics, targets)
   - ✅ Internal tools and systems
   - ✅ Escalation procedures
   - ✅ Cross-team collaboration protocols
   - ✅ Performance metrics and tracking
   - ✅ Internal communication channels
   - ✅ Training and onboarding materials
   - ✅ Troubleshooting guides
   
   **Must NOT Include**:
   - ❌ Customer-facing pricing (use internal cost structure)
   - ❌ Public marketing messages
   - ❌ Customer testimonials
   - ❌ Public contact information
   - ❌ Promotional content

2. **EXTERNAL-KB Content Requirements**:
   
   **Must Include**:
   - ✅ Customer benefits and value propositions
   - ✅ Product/service information
   - ✅ Purchasing information (where to buy, how to order)
   - ✅ Public-facing pricing
   - ✅ Customer testimonials and reviews
   - ✅ FAQ for customers
   - ✅ Contact information (customer service)
   - ✅ Social media handles
   - ✅ Promotions and offers
   - ✅ Brand story and mission
   
   **Must NOT Include**:
   - ❌ Internal procedures
   - ❌ Team structures
   - ❌ Internal KPIs
   - ❌ Cost structures
   - ❌ Internal tools/systems

3. **Metadata Headers**:
   
   **INTERNAL-KB Header**:
   ```markdown
   # [Icon] [Entity Name] - Internal Knowledge Base (Employee)
   
   > **Brand**: [Entity Name]  
   > **Type**: [B2C/B2B/B2B2C] [Category]  
   > **Scope**: INTERNAL ONLY (Employees, Managers, Partners)  
   > **AI Assistant**: [AI Name] Internal  
   > **Access Level**: Employee, Manager, Owner  
   > **Last Updated**: [Date]  
   > **Version**: [Version Number]
   ```
   
   **EXTERNAL-KB Header**:
   ```markdown
   # [Icon] [Entity Name] - External Knowledge Base (Customer)
   
   > **Brand**: [Entity Name]  
   > **Type**: [B2C/B2B/B2B2C] [Category]  
   > **Scope**: EXTERNAL (Customers, Prospects, Public)  
   > **AI Assistant**: [AI Name] Customer  
   > **Access Level**: Public  
   > **Last Updated**: [Date]  
   > **Customer Service**: [Contact Info]
   ```

4. **Scenario Types**:
   
   **INTERNAL Scenarios**:
   - ✅ Employee asking about procedures
   - ✅ Manager requesting performance data
   - ✅ Team member seeking collaboration guidance
   - ✅ New employee onboarding questions
   - ✅ Operational troubleshooting
   - ✅ Cross-department coordination
   
   **EXTERNAL Scenarios**:
   - ✅ Customer product inquiries
   - ✅ Prospect asking about services
   - ✅ Customer seeking purchasing information
   - ✅ User requesting recommendations
   - ✅ Customer service interactions
   - ✅ Post-purchase support

5. **Perspective Consistency**:
   - ✅ Internal: "Our team", "We manage", "Internal process"
   - ✅ External: "You can", "Our customers", "For you"
   - ✅ Internal: Focus on "how we do it"
   - ✅ External: Focus on "what you get"

**Validation Method**:
```bash
# Content type check
INTERNAL-KB should contain:
- "procedure", "process", "workflow"
- "KPI", "metric", "target"
- "team", "employee", "manager"
- "internal", "operational"

EXTERNAL-KB should contain:
- "customer", "you", "your"
- "benefit", "value", "advantage"
- "order", "purchase", "buy"
- "testimonial", "review", "rating"

# Metadata validation
- Check header format compliance
- Verify access level specification
- Confirm scope declaration
```

**Success Metrics**:
- Content type accuracy: 100%
- Metadata compliance: 100%
- Perspective consistency: >95%
- Scenario appropriateness: 100%

---

### R6: Integration Readiness

**Goal**: All files ready for seamless integration with n8n, Custom GPT, Gemini, and other platforms

**Detailed Acceptance Criteria**:

1. **Markdown Format Compliance**:
   - ✅ Valid Markdown syntax (no syntax errors)
   - ✅ Proper heading hierarchy (H1 → H2 → H3)
   - ✅ Consistent list formatting (bullets, numbers)
   - ✅ Code blocks properly formatted
   - ✅ Links properly formatted
   - ✅ Tables properly formatted
   - ✅ No broken formatting

2. **Heading Hierarchy**:
   ```markdown
   # H1: File Title (only one per file)
   ## H2: Major Sections
   ### H3: Sub-sections
   #### H4: Detailed points (if needed)
   ```
   - ✅ Only one H1 per file
   - ✅ H2 for main sections
   - ✅ H3 for sub-sections
   - ✅ No skipping levels (H1 → H3)
   - ✅ Logical hierarchy flow

3. **File Naming Convention**:
   - ✅ INTERNAL-KB-[ENTITY-NAME].md
   - ✅ EXTERNAL-KB-[ENTITY-NAME].md
   - ✅ BRAND-VOICE-[ENTITY-NAME].md
   - ✅ BRAND-IDENTITY-[ENTITY-NAME].md
   - ✅ MARKETING-STRATEGY-[ENTITY-NAME].md
   - ✅ TARGET-AUDIENCE-[ENTITY-NAME].md
   - ✅ PRODUCT-CATALOG-[ENTITY-NAME].md
   - ✅ SALES-STRATEGY-[ENTITY-NAME].md
   - ✅ OPERATIONS-MANUAL-[ENTITY-NAME].md
   - ✅ All caps for file type
   - ✅ Uppercase entity name
   - ✅ Hyphens for spaces
   - ✅ .md extension

4. **AI Parsing Optimization**:
   - ✅ Clear section markers
   - ✅ Consistent formatting patterns
   - ✅ Structured data where applicable
   - ✅ Searchable keywords
   - ✅ Cross-reference links
   - ✅ Metadata tags

5. **Integration Hooks**:
   
   **n8n Integration**:
   ```yaml
   # Metadata for n8n routing
   entity_id: [entity-name]
   entity_type: [b2c|b2b|b2b2c|unit|product]
   perspective: [internal|external]
   voice_profile: [voice-attributes]
   ```
   
   **Custom GPT Integration**:
   ```yaml
   # File upload ready
   - Proper markdown format
   - Clear section structure
   - Searchable content
   - Context-aware responses
   ```
   
   **Gemini Integration**:
   ```yaml
   # Gem-ready format
   - Structured knowledge
   - Clear instructions
   - Example interactions
   - Grounding-friendly
   ```
   
   **API Integration**:
   ```yaml
   # Programmatic access
   - Parseable structure
   - Consistent schema
   - Queryable sections
   - JSON-convertible
   ```

6. **Cross-Reference System**:
   - ✅ Links to related entities
   - ✅ Links to parent/child entities
   - ✅ Links to related knowledge files
   - ✅ Links to global knowledge base
   - ✅ Links to brand voice matrix

**Validation Method**:
```bash
# Markdown validation
markdownlint *.md = 0 errors

# Heading hierarchy check
grep "^#" *.md | check_hierarchy

# File naming validation
ls -1 | grep -E "^[A-Z-]+\.md$"

# Integration test
- Upload to Custom GPT (test parsing)
- Import to n8n (test workflow)
- Load in Gemini (test grounding)
- Query via API (test response)
```

**Success Metrics**:
- Markdown validity: 100%
- Heading hierarchy compliance: 100%
- File naming compliance: 100%
- Integration test pass rate: 100%
- Cross-reference accuracy: >95%


### R7: Realistic Data

**Goal**: All content uses authentic, believable, market-appropriate data

**Detailed Acceptance Criteria**:

1. **Product Names**:
   - ✅ Specific brand names (not "Product A")
   - ✅ Descriptive names (e.g., "Hydrating Serum", "Glow Booster")
   - ✅ Consistent naming across files
   - ✅ Memorable and marketable
   - ✅ Appropriate for brand voice
   
   **Examples**:
   - ✅ GOOD: "Beautylatory Radiance Serum"
   - ❌ BAD: "Product 1" or "[Product Name]"

2. **Pricing**:
   - ✅ Market-appropriate prices
   - ✅ In Rupiah (Rp) format
   - ✅ Realistic price ranges per category
   - ✅ Consistent pricing across mentions
   - ✅ Include price tiers if applicable
   
   **Price Ranges** (Indonesian Market):
   - Skincare: Rp 50,000 - Rp 500,000
   - Cosmetics: Rp 30,000 - Rp 300,000
   - Mom/Baby Care: Rp 75,000 - Rp 400,000
   - Men's Grooming: Rp 40,000 - Rp 250,000
   - B2B Services: Rp 5,000,000 - Rp 50,000,000+
   
   **Examples**:
   - ✅ GOOD: "Rp 150,000"
   - ❌ BAD: "$XX" or "[Price]"

3. **Product Specifications**:
   - ✅ Realistic ingredients/components
   - ✅ Believable percentages/quantities
   - ✅ Industry-standard measurements
   - ✅ Accurate technical details
   - ✅ Proper units (ml, g, %, etc.)
   
   **Examples**:
   - ✅ GOOD: "Hyaluronic Acid 2%, Niacinamide 5%, 30ml"
   - ❌ BAD: "Active ingredients, [X]ml"

4. **KPIs & Metrics**:
   - ✅ Realistic targets (achievable)
   - ✅ Industry-standard benchmarks
   - ✅ Specific numbers (not ranges)
   - ✅ Time-bound goals
   - ✅ Measurable outcomes
   
   **Examples**:
   - ✅ GOOD: "Monthly sales target: Rp 50,000,000"
   - ✅ GOOD: "Customer satisfaction: >4.5/5"
   - ✅ GOOD: "Response time: <2 hours"
   - ❌ BAD: "High sales target" or "[X] units"

5. **Customer Scenarios**:
   - ✅ Realistic customer problems
   - ✅ Believable situations
   - ✅ Authentic language/questions
   - ✅ Relatable pain points
   - ✅ Real-world contexts
   
   **Examples**:
   - ✅ GOOD: "Kulit saya kering dan kusam setelah melahirkan"
   - ❌ BAD: "Customer has skin problem"

6. **Testimonials**:
   - ✅ Named customers (first name + initial)
   - ✅ Specific benefits mentioned
   - ✅ Believable language
   - ✅ Authentic emotions
   - ✅ Realistic timeframes
   
   **Examples**:
   - ✅ GOOD: "Sarah M., Jakarta: 'Setelah 2 minggu pakai Hydrating Serum, kulit saya jadi lebih lembab dan glowing! Jerawat juga berkurang.'"
   - ❌ BAD: "Customer A: 'Good product'"

7. **Use Cases**:
   - ✅ Real-world applications
   - ✅ Specific scenarios
   - ✅ Detailed contexts
   - ✅ Practical examples
   - ✅ Relatable situations
   
   **Examples**:
   - ✅ GOOD: "Untuk ibu hamil trimester 2 yang mengalami stretch marks"
   - ❌ BAD: "For target users with needs"

**Validation Method**:
```bash
# Data realism check (manual review)
- Verify all prices in Rupiah
- Check product names are specific
- Validate KPIs are realistic
- Confirm testimonials are believable
- Review scenarios for authenticity

# Automated checks
grep -r "\[Price\]" *.md = 0 matches
grep -r "Product [0-9]" *.md = 0 matches
grep -r "Customer [A-Z]:" *.md = 0 matches
```

**Success Metrics**:
- Realistic data: 100%
- Specific names: 100%
- Market-appropriate pricing: 100%
- Believable scenarios: >95%
- Authentic testimonials: 100%

---

### R8: Language & Localization

**Goal**: Content appropriate for Indonesian market with natural, conversational language

**Detailed Acceptance Criteria**:

1. **Primary Language**:
   - ✅ Primarily Bahasa Indonesia
   - ✅ Natural, conversational tone
   - ✅ Avoid overly formal language
   - ✅ Use common Indonesian expressions
   - ✅ Appropriate slang where suitable

2. **English Terms**:
   - ✅ Use English for industry-standard terms
   - ✅ Technical terms in English (e.g., "serum", "moisturizer")
   - ✅ Brand names in original language
   - ✅ Product categories in English if common
   - ✅ No forced translation of established terms
   
   **Examples**:
   - ✅ GOOD: "Hydrating serum untuk kulit kering"
   - ❌ BAD: "Serum penghidrasi untuk kulit kering" (too formal)

3. **Arabic Terms** (for Islamic brands like Adhwa):
   - ✅ Bismillah (at beginning)
   - ✅ Alhamdulillah (expressing gratitude)
   - ✅ InsyaAllah (for future plans)
   - ✅ Barakallah (blessings)
   - ✅ Appropriate Islamic greetings
   
   **Examples**:
   - ✅ GOOD: "Bismillah, selamat datang di Adhwa"
   - ✅ GOOD: "Alhamdulillah, produk kami halal certified"

4. **Formality Levels**:
   
   **B2C Brands** (Casual-Friendly):
   - ✅ Use "Kak" for customers
   - ✅ Informal pronouns (kamu, aku)
   - ✅ Friendly expressions
   - ✅ Emoji usage moderate-generous
   
   **B2B Brands** (Professional):
   - ✅ Use "Bapak/Ibu" for clients
   - ✅ Formal pronouns (Anda, kami)
   - ✅ Professional expressions
   - ✅ Emoji usage minimal
   
   **B2B2C Brands** (Adaptable):
   - ✅ Context-aware formality
   - ✅ Switch based on audience
   - ✅ Balanced expressions
   - ✅ Emoji usage moderate

5. **Regional Considerations**:
   - ✅ Jakarta-centric but inclusive
   - ✅ Avoid region-specific slang
   - ✅ Use nationally understood terms
   - ✅ Consider diverse Indonesian audience
   - ✅ Inclusive language

6. **Conversational Patterns**:
   - ✅ Natural question-answer flow
   - ✅ Use common Indonesian expressions
   - ✅ Appropriate interjections (wah, nih, loh)
   - ✅ Friendly closings (Semoga membantu, Terima kasih)
   - ✅ Engaging language

**Examples of Good Language**:

**B2C (Beautylatory)**:
```
"Hai Kak! 😊 Wah, kulit kering nih? Tenang, kami punya solusinya!

Coba deh pakai Hydrating Serum kami. Ini best seller loh! Banyak customer yang bilang kulitnya jadi lembab dan glowing setelah pakai ini.

Mau coba? Yuk order sekarang! 💕"
```

**B2B (Myklon)**:
```
"Selamat pagi, Bapak/Ibu.

Terima kasih atas pertanyaan mengenai layanan maklon kami. Kami menyediakan solusi manufaktur kosmetik yang komprehensif dengan standar GMP.

Untuk informasi lebih detail, silakan hubungi tim kami. Kami siap berdiskusi lebih lanjut."
```

**Islamic Brand (Adhwa)**:
```
"Bismillah, Assalamualaikum Ukhti 🤲

Alhamdulillah, produk Adhwa sudah halal certified dan menggunakan bahan-bahan yang aman untuk muslimah.

Semoga bermanfaat ya, Ukhti. Barakallah 💚"
```

**Validation Method**:
```bash
# Language check (manual review)
- Verify Bahasa Indonesia usage
- Check formality level appropriateness
- Validate Arabic terms for Islamic brands
- Confirm natural conversational flow
- Review regional inclusivity

# Automated checks
- Check for overly formal words
- Verify emoji usage per brand type
- Validate greeting patterns
```

**Success Metrics**:
- Bahasa Indonesia usage: >90%
- Formality appropriateness: 100%
- Natural language score: >90%
- Regional inclusivity: 100%
- Conversational flow: >95%


---

## 🏗️ ARCHITECTURE & DESIGN (COMPREHENSIVE)

### Brain Architecture Overview

**5-Layer Intelligent System**:

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 1: CORE BRAIN                          │
│              (Fundamental Knowledge & Principles)               │
│                                                                 │
│  • GLOBAL-KNOWLEDGE-BASE.md (500+ lines)                       │
│  • KNOWLEDGE-ROUTING-MATRIX.md (300+ lines)                    │
│  • AI-INTEGRATION-GUIDE.md (400+ lines)                        │
│  • ENTITY-TEMPLATE-GENERATOR.md (300+ lines)                   │
│  • CROSS-ENTITY-KNOWLEDGE-MAP.md (250+ lines)                  │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                    LAYER 2: KNOWLEDGE REPOSITORY                │
│                  (Entity Knowledge: 24 × 9 files)               │
│                                                                 │
│  • 24 Entities × 9 Files = 216 Files                           │
│  • ~1,800 lines per entity                                     │
│  • Modular, maintainable, version-controlled                   │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                LAYER 3: ROUTING & ORCHESTRATION                 │
│              (Smart routing, context awareness)                 │
│                                                                 │
│  • Multi-entity query handling                                 │
│  • Context-aware routing                                       │
│  • Permission-based filtering                                  │
│  • Cross-entity knowledge linking                              │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                    LAYER 4: INTELLIGENCE ENGINE                 │
│                (AI reasoning, decision-making)                  │
│                                                                 │
│  • Deductive, inductive, abductive reasoning                   │
│  • Decision frameworks (recommendation, escalation)            │
│  • Context awareness (user, conversation, entity, time)        │
└─────────────────────────┬───────────────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────────────┐
│                    LAYER 5: INTEGRATION LAYER                   │
│              (n8n, Custom GPT, Gemini, API)                     │
│                                                                 │
│  • n8n Workflows                                               │
│  • Custom GPT (OpenAI)                                         │
│  • Gemini Gems (Google)                                        │
│  • REST API                                                    │
│  • Webhooks                                                    │
└─────────────────────────────────────────────────────────────────┘
```


### LAYER 1: CORE BRAIN (Detailed Design)

#### 1.1 GLOBAL-KNOWLEDGE-BASE.md (500+ lines)

**Purpose**: Universal principles dan patterns yang berlaku untuk SEMUA AI dalam ekosistem RayCorp

**Content Structure**:

1. **Multiple Choice Interaction Patterns** (100 lines):
   - Pattern 1: Simple Inquiry (1-3 options)
   - Pattern 2: Product Recommendation (3-5 options)
   - Pattern 3: Complex Decision (4-5 options)
   - Pattern 4: Navigation (2-4 options)
   - Pattern 5: Escalation (2-3 options)
   - Examples for each pattern
   - Best practices and guidelines
   - Common mistakes to avoid

2. **Auto Response Patterns** (80 lines):
   - Greeting patterns (time-based)
   - Acknowledgment patterns
   - Clarification patterns
   - Confirmation patterns
   - Closing patterns
   - Error handling patterns
   - Escalation patterns
   - Examples for each context

3. **User Experience Principles** (100 lines):
   - Principle 1: Always be helpful
   - Principle 2: Provide clear options
   - Principle 3: Maintain context
   - Principle 4: Be proactive
   - Principle 5: Show empathy
   - Principle 6: Respect time
   - Principle 7: Build trust
   - Implementation guidelines for each

4. **User Journey Mapping** (120 lines):
   - Stage 1: Awareness (first contact)
   - Stage 2: Consideration (exploring options)
   - Stage 3: Decision (ready to act)
   - Stage 4: Action (completing task)
   - Stage 5: Retention (follow-up)
   - AI behavior per stage
   - Transition triggers
   - Success metrics per stage

5. **Brand Values (Holding Level)** (50 lines):
   - Innovation & Technology
   - Quality & Excellence
   - Sustainability & Responsibility
   - Customer-Centricity
   - Integrity & Trust
   - How values manifest in AI behavior

6. **Response Quality Standards** (50 lines):
   - Clarity: Easy to understand
   - Completeness: All info provided
   - Accuracy: Factually correct
   - Relevance: On-topic
   - Actionability: Clear next steps
   - Measurement criteria

**Intelligence Features**:
```yaml
universal_reasoning:
  pattern_matching:
    - Identify user intent
    - Match to appropriate pattern
    - Apply context-specific adaptation
  
  decision_making:
    - Evaluate user needs
    - Consider available options
    - Rank by relevance
    - Present top choices
  
  context_awareness:
    - Track conversation history
    - Remember user preferences
    - Adapt to user sentiment
    - Maintain entity context
  
  emotional_intelligence:
    - Detect user emotions
    - Respond with empathy
    - Adjust tone accordingly
    - Build rapport
```

**Integration Hooks**:
```yaml
global_principles:
  multiple_choice:
    enabled: always
    min_options: 1
    max_options: 5
    format: emoji_numbers
  
  auto_response:
    enabled: true
    patterns: time_based
    personalization: user_context
  
  user_journey:
    tracking: enabled
    stage_detection: automatic
    behavior_adaptation: dynamic
  
  quality_check:
    mode: continuous
    validation: real_time
    feedback_loop: enabled
```

---

#### 1.2 KNOWLEDGE-ROUTING-MATRIX.md (300+ lines)

**Purpose**: Intelligent routing system untuk mengarahkan queries ke knowledge yang tepat

**Content Structure**:

1. **Query Type Detection** (60 lines):
   - Internal queries (employee/manager)
   - External queries (customer/prospect)
   - AI queries (division/holding AI)
   - Cross-entity queries
   - Multi-perspective queries
   - Detection algorithms
   - Confidence scoring

2. **Entity Identification** (80 lines):
   - Brand identification patterns
   - Unit identification patterns
   - Product identification patterns
   - Multi-entity detection
   - Ambiguity resolution
   - Fallback strategies

3. **Permission-Based Filtering** (70 lines):
   - Access control matrix
   - Role-based permissions
   - Content filtering rules
   - Sensitive information handling
   - Escalation triggers
   - Audit logging

4. **Routing Logic** (90 lines):
   - Single-entity routing
   - Multi-entity routing
   - Cross-entity routing
   - Fallback routing
   - Error handling
   - Performance optimization

**Routing Algorithm**:
```python
def route_query(query, user_context):
    """
    Intelligent query routing system
    
    Args:
        query: User query string
        user_context: User information (role, history, preferences)
    
    Returns:
        routing_result: Knowledge sources and response strategy
    """
    
    # Step 1: Detect query type
    query_type = detect_query_type(query)
    # Returns: 'internal' | 'external' | 'ai' | 'cross_entity'
    
    # Step 2: Identify relevant entities
    entities = identify_entities(query)
    # Returns: List of entity objects with confidence scores
    
    # Step 3: Determine user perspective
    perspective = get_user_perspective(user_context)
    # Returns: 'employee' | 'manager' | 'customer' | 'prospect' | 'partner'
    
    # Step 4: Check permissions
    if not has_permission(user_context, entities, perspective):
        return handle_permission_denied(user_context, entities)
    
    # Step 5: Retrieve knowledge sources
    knowledge_sources = []
    for entity in entities:
        if perspective in ['employee', 'manager', 'partner']:
            knowledge_sources.append(f"INTERNAL-KB-{entity.name}.md")
        else:
            knowledge_sources.append(f"EXTERNAL-KB-{entity.name}.md")
        
        # Add relevant sub-files based on query
        sub_files = identify_relevant_subfiles(query, entity)
        knowledge_sources.extend(sub_files)
    
    # Step 6: Add global knowledge
    knowledge_sources.append("GLOBAL-KNOWLEDGE-BASE.md")
    knowledge_sources.append("BRAND-VOICE-PERSONALITY-MATRIX.md")
    
    # Step 7: Retrieve and synthesize knowledge
    knowledge = fetch_knowledge(knowledge_sources)
    
    # Step 8: Apply brand voice
    voice_profile = get_voice_profile(entities[0])
    response = apply_voice(knowledge, voice_profile)
    
    # Step 9: Add multiple choice options
    response = add_multiple_choice(response, query_type, entities)
    
    # Step 10: Add context tracking
    response = add_context_tracking(response, user_context, entities)
    
    return {
        'response': response,
        'entities': entities,
        'knowledge_sources': knowledge_sources,
        'confidence': calculate_confidence(entities),
        'next_actions': generate_next_actions(query_type, entities)
    }

def detect_query_type(query):
    """Detect type of query"""
    keywords_internal = ['procedure', 'process', 'team', 'kpi', 'internal']
    keywords_external = ['buy', 'order', 'price', 'product', 'customer']
    
    if any(kw in query.lower() for kw in keywords_internal):
        return 'internal'
    elif any(kw in query.lower() for kw in keywords_external):
        return 'external'
    else:
        return 'general'

def identify_entities(query):
    """Identify relevant entities from query"""
    entities = []
    entity_keywords = {
        'beautylatory': ['beautylatory', 'beauty', 'skincare'],
        'adhwa': ['adhwa', 'halal', 'muslimah'],
        'mommylatory': ['mommylatory', 'mom', 'pregnant', 'ibu hamil'],
        # ... all entities
    }
    
    for entity_name, keywords in entity_keywords.items():
        if any(kw in query.lower() for kw in keywords):
            entities.append({
                'name': entity_name,
                'confidence': calculate_match_confidence(query, keywords)
            })
    
    return sorted(entities, key=lambda x: x['confidence'], reverse=True)
```

**Context Switching Rules**:
```yaml
context_switching:
  triggers:
    - New entity mentioned
    - Topic change detected
    - User explicitly switches
    - Time-based context expiry
  
  behavior:
    - Save current context
    - Load new entity context
    - Apply new voice profile
    - Update conversation history
  
  transition:
    - Acknowledge switch
    - Confirm new context
    - Maintain continuity
```

---

#### 1.3 AI-INTEGRATION-GUIDE.md (400+ lines)

**Purpose**: Comprehensive guide untuk integrasi dengan berbagai platform

**Content Structure**:

1. **n8n Workflow Templates** (120 lines):
   
   **Template 1: Customer Inquiry Workflow**
   ```json
   {
     "name": "Customer Inquiry - [Entity]",
     "nodes": [
       {
         "type": "webhook",
         "name": "Receive Message",
         "parameters": {
           "path": "/webhook/[entity]/customer",
           "method": "POST"
         }
       },
       {
         "type": "function",
         "name": "Parse Query",
         "parameters": {
           "code": "// Extract query and user context\nconst query = items[0].json.message;\nconst user = items[0].json.user;\nreturn [{json: {query, user}}];"
         }
       },
       {
         "type": "http-request",
         "name": "Route Query",
         "parameters": {
           "url": "{{$env.KB_API_URL}}/route",
           "method": "POST",
           "body": {
             "query": "={{$json.query}}",
             "user_context": "={{$json.user}}"
           }
         }
       },
       {
         "type": "function",
         "name": "Fetch Knowledge",
         "parameters": {
           "code": "// Fetch from knowledge base files\nconst sources = items[0].json.knowledge_sources;\n// Implementation..."
         }
       },
       {
         "type": "openai",
         "name": "Generate Response",
         "parameters": {
           "model": "gpt-4",
           "messages": [
             {
               "role": "system",
               "content": "You are [Entity] AI assistant..."
             },
             {
               "role": "user",
               "content": "={{$json.query}}"
             }
           ]
         }
       },
       {
         "type": "function",
         "name": "Apply Voice",
         "parameters": {
           "code": "// Apply brand voice transformation"
         }
       },
       {
         "type": "function",
         "name": "Add Multiple Choice",
         "parameters": {
           "code": "// Add 1-5 options with emoji numbers"
         }
       },
       {
         "type": "http-request",
         "name": "Send Response",
         "parameters": {
           "url": "={{$json.callback_url}}",
           "method": "POST",
           "body": {
             "response": "={{$json.final_response}}"
           }
         }
       }
     ]
   }
   ```
   
   **Template 2: Internal Support Workflow**
   **Template 3: Cross-Entity Workflow**
   **Template 4: Scheduled Knowledge Update**

2. **Custom GPT Configuration** (100 lines):
   
   **Configuration Template**:
   ```yaml
   custom_gpt:
     name: "[Entity Name] AI Assistant"
     description: "AI assistant untuk [Entity Name] - [brief description]"
     
     instructions: |
       # IDENTITY
       You are the official AI assistant for [Entity Name], a [entity type] under RayCorp ecosystem.
       
       # CORE PRINCIPLES
       1. Always provide multiple choice (1-5 options with emoji numbers)
       2. Use [Entity] brand voice: [voice attributes]
       3. Follow user journey stages (awareness → consideration → decision → action)
       4. Maintain context awareness throughout conversation
       5. Be helpful, empathetic, and proactive
       
       # KNOWLEDGE SOURCES
       You have access to:
       - INTERNAL-KB-[ENTITY].md (for employees/managers)
       - EXTERNAL-KB-[ENTITY].md (for customers)
       - GLOBAL-KNOWLEDGE-BASE.md (universal principles)
       - BRAND-VOICE-PERSONALITY-MATRIX.md (voice guidelines)
       - [Entity]-specific knowledge files (9 files total)
       
       # RESPONSE FORMAT
       Always structure responses as:
       1. Greeting (brand voice appropriate)
       2. Acknowledge query
       3. Provide information (clear, comprehensive)
       4. Add relevant tips/recommendations
       5. Present multiple choice options (1-5)
       6. Friendly closing
       
       # BRAND VOICE
       - Attributes: [list attributes]
       - Tone: [tone description]
       - Language: [language style]
       - Emoji: [usage level]
       
       # EXAMPLES
       [Include 2-3 complete interaction examples]
     
     knowledge_files:
       - path: "01-knowledge-base/05-brands/[type]/[entity]/INTERNAL-KB-[ENTITY].md"
         description: "Internal knowledge for employees"
       - path: "01-knowledge-base/05-brands/[type]/[entity]/EXTERNAL-KB-[ENTITY].md"
         description: "External knowledge for customers"
       - path: "01-knowledge-base/00-fundamental/GLOBAL-KNOWLEDGE-BASE.md"
         description: "Universal AI principles"
       - path: "01-knowledge-base/00-fundamental/BRAND-VOICE-PERSONALITY-MATRIX.md"
         description: "Brand voice guidelines"
     
     capabilities:
       web_browsing: false
       code_interpreter: false
       dalle: false
       file_upload: true
     
     conversation_starters:
       - "Halo! Ada yang bisa saya bantu?"
       - "Mau tanya tentang produk kami?"
       - "Butuh rekomendasi?"
       - "Ada pertanyaan seputar [entity]?"
     
     settings:
       temperature: 0.7
       max_tokens: 2000
       top_p: 1.0
       frequency_penalty: 0.0
       presence_penalty: 0.0
   ```

3. **Gemini Gem Setup** (100 lines):
   
   **Gem Configuration**:
   ```yaml
   gemini_gem:
     name: "[Entity Name] Assistant"
     description: "AI assistant untuk [Entity Name]"
     
     system_instruction: |
       You are [Entity Name] AI assistant with deep knowledge about:
       - [Entity] products/services
       - [Entity] brand voice and values
       - Customer needs and pain points
       - Industry best practices
       
       ALWAYS:
       1. Provide multiple choice options (1-5 with emoji numbers)
       2. Use [Entity] brand voice consistently
       3. Be helpful, empathetic, and proactive
       4. Track conversation context
       5. Follow user journey stages
       
       BRAND VOICE:
       - [Voice attributes]
       - [Tone description]
       - [Language style]
       
       RESPONSE STRUCTURE:
       - Greeting
       - Information
       - Recommendations
       - Multiple choice
       - Closing
     
     knowledge_sources:
       upload_files:
         - "INTERNAL-KB-[ENTITY].md"
         - "EXTERNAL-KB-[ENTITY].md"
         - "GLOBAL-KNOWLEDGE-BASE.md"
         - "BRAND-VOICE-PERSONALITY-MATRIX.md"
         - "BRAND-VOICE-[ENTITY].md"
         - "BRAND-IDENTITY-[ENTITY].md"
         - "MARKETING-STRATEGY-[ENTITY].md"
         - "TARGET-AUDIENCE-[ENTITY].md"
         - "PRODUCT-CATALOG-[ENTITY].md"
     
     grounding:
       google_search:
         enabled: true
         use_case: "Real-time information (prices, availability, events)"
       knowledge_base:
         priority: primary
         fallback: google_search
     
     safety_settings:
       harassment: BLOCK_MEDIUM_AND_ABOVE
       hate_speech: BLOCK_MEDIUM_AND_ABOVE
       sexually_explicit: BLOCK_MEDIUM_AND_ABOVE
       dangerous_content: BLOCK_MEDIUM_AND_ABOVE
     
     generation_config:
       temperature: 0.7
       top_p: 0.95
       top_k: 40
       max_output_tokens: 2048
   ```

4. **REST API Specifications** (80 lines):
   
   **API Endpoints**:
   ```yaml
   api_specification:
     base_url: "https://api.raycorp.ai/kb/v1"
     authentication: "Bearer token"
     
     endpoints:
       - path: "/query"
         method: POST
         description: "Query knowledge base"
         request:
           entity: string (required)
           perspective: "internal" | "external" (required)
           query: string (required)
           user_context:
             user_id: string
             role: string
             history: array
             preferences: object
         response:
           answer: string
           multiple_choice: array
           confidence: float (0-1)
           sources: array
           entity: object
           next_actions: array
         example:
           request:
             entity: "beautylatory"
             perspective: "external"
             query: "Produk apa untuk kulit kering?"
             user_context:
               user_id: "user123"
               role: "customer"
           response:
             answer: "Untuk kulit kering, kami rekomendasikan..."
             multiple_choice:
               - "1️⃣ Order Hydrating Serum"
               - "2️⃣ Order Moisturizing Cream"
               - "3️⃣ Konsultasi dengan beauty advisor"
             confidence: 0.95
             sources:
               - "EXTERNAL-KB-BEAUTYLATORY.md"
               - "PRODUCT-CATALOG-BEAUTYLATORY.md"
       
       - path: "/entities"
         method: GET
         description: "List all entities"
         response:
           entities: array
         example:
           response:
             entities:
               - id: "beautylatory"
                 name: "Beautylatory"
                 type: "b2c"
                 category: "skincare"
               - id: "adhwa"
                 name: "Adhwa"
                 type: "b2c"
                 category: "halal_beauty"
       
       - path: "/entity/{entity_id}"
         method: GET
         description: "Get entity details"
         response:
           entity: object
           knowledge_files: array
           voice_attributes: object
       
       - path: "/route"
         method: POST
         description: "Route query to appropriate knowledge"
         request:
           query: string
           user_context: object
         response:
           entities: array
           perspective: string
           knowledge_sources: array
           routing_confidence: float
   ```



#### 1.4 CROSS-ENTITY-KNOWLEDGE-MAP.md (250+ lines)

**Purpose**: Mapping relationships dan dependencies antar entities untuk intelligent cross-entity queries

**Content Structure**:

1. **Hierarchical Relationships** (80 lines):
   ```yaml
   hierarchy:
     rayandra_corp:
       type: holding_company
       children:
         - lunaray_beauty_factory
         - office_divisions
       
     lunaray_beauty_factory:
       type: manufacturing
       parent: rayandra_corp
       children:
         - beautylatory
         - adhwa
         - mommylatory
         - babylatory
         - dermond
         - sheluna
         - fantastik
         - rayklin
         - myklon
         - ckk
         - demalink
         - hailogy
         - inalovers
         - mazra
       
     office_divisions:
       type: operational
       parent: rayandra_corp
       children:
         - raymaizing
         - ray_academy
         - labcos
         - raymedia
         - baleide
         - raypack
         - ebook_unit
   ```

2. **Functional Relationships** (70 lines):
   ```yaml
   functional_links:
     marketing_chain:
       - raymedia (content creation)
       - raymaizing (AI support)
       - social_media_division
       - marketing_sales_division
     
     production_chain:
       - labcos (R&D)
       - production_division
       - quality_assurance
       - raypack (packaging)
     
     sales_chain:
       - marketing_sales_division
       - customer_service
       - logistics
     
     support_chain:
       - raymaizing (AI automation)
       - technology_division
       - customer_service
   ```

3. **Product-Brand Relationships** (50 lines):
   ```yaml
   product_brand_links:
     beautylatory:
       products:
         - skincare_line
         - cosmetics_line
       services:
         - beauty_consultation
         - custom_formulation
       support_units:
         - raymedia (content)
         - raymaizing (AI chatbot)
     
     adhwa:
       products:
         - halal_skincare
         - modest_cosmetics
       services:
         - islamic_beauty_consultation
       support_units:
         - raymedia (islamic content)
         - ray_academy (halal certification training)
   ```

4. **Collaboration Patterns** (50 lines):
   ```yaml
   collaboration:
     new_product_launch:
       involved_entities:
         - brand (product owner)
         - labcos (formulation)
         - raymedia (content creation)
         - raymaizing (AI chatbot setup)
         - marketing_division (campaign)
         - raypack (packaging design)
       workflow:
         - Phase 1: R&D (labcos + brand)
         - Phase 2: Production (manufacturing)
         - Phase 3: Marketing (raymedia + marketing)
         - Phase 4: Launch (all entities)
     
     customer_issue_resolution:
       involved_entities:
         - customer_service (first contact)
         - brand (product knowledge)
         - quality_assurance (if quality issue)
         - logistics (if delivery issue)
       escalation_path:
         - Level 1: AI chatbot (raymaizing)
         - Level 2: Customer service
         - Level 3: Brand manager
         - Level 4: Division head
   ```

**Cross-Entity Query Handling**:
```python
def handle_cross_entity_query(query, entities):
    """
    Handle queries that involve multiple entities
    
    Example: "Beautylatory dan Adhwa punya produk untuk kulit sensitif?"
    """
    
    # Step 1: Identify all relevant entities
    primary_entities = entities[:2]  # Beautylatory, Adhwa
    
    # Step 2: Fetch knowledge from each entity
    knowledge_sets = []
    for entity in primary_entities:
        knowledge = fetch_entity_knowledge(entity, query)
        knowledge_sets.append({
            'entity': entity,
            'knowledge': knowledge
        })
    
    # Step 3: Identify common themes
    common_themes = identify_common_themes(knowledge_sets)
    # Returns: ['sensitive_skin', 'gentle_formula', 'hypoallergenic']
    
    # Step 4: Synthesize response
    response = synthesize_multi_entity_response(
        knowledge_sets,
        common_themes,
        query
    )
    
    # Step 5: Add comparative insights
    response = add_comparative_insights(response, primary_entities)
    
    # Step 6: Provide entity-specific options
    options = []
    for entity in primary_entities:
        options.extend(generate_entity_options(entity, query))
    
    response['multiple_choice'] = options[:5]  # Max 5 options
    
    return response
```

---

### LAYER 2: KNOWLEDGE REPOSITORY (Detailed Design)

#### 2.1 Entity Knowledge Structure (Complete Specification)

**Per Entity: 9 Files, ~1,800 Lines**

**File 1: INTERNAL-KB-[ENTITY].md (200-300 lines)**

**Detailed Structure**:
```markdown
# [Icon] [Entity Name] - Internal Knowledge Base (Employee)

> Metadata (10 lines)

## 🎯 INTERNAL OVERVIEW (20 lines)
- Purpose statement
- Key focus areas (3-5 points)
- Target users (roles)

## 👥 INTERNAL TEAM STRUCTURE (30 lines)
### Brand/Unit Team (15 lines)
- 5-7 roles with responsibilities

### Operations Team (15 lines)
- 3-5 roles with responsibilities

## 📋 INTERNAL OPERATIONS (80 lines)
### 1. [Operation Area 1] (25 lines)
- Process description
- Step-by-step procedures
- Management aspects
- KPIs

### 2. [Operation Area 2] (25 lines)
- Similar structure

### 3. [Operation Area 3] (30 lines)
- Similar structure

## 💬 INTERNAL AI INTERACTIONS (60 lines)
### Scenario 1: [Name] (30 lines)
- Complete conversation
- Data/metrics
- Recommended actions
- Multiple choice (4-5 options)

### Scenario 2: [Name] (30 lines)
- Similar structure

## 📊 INTERNAL KPIs & METRICS (30 lines)
### Business Performance (8 lines)
- 4 key metrics with targets

### Operational Efficiency (8 lines)
- 4 key metrics with targets

### Customer Metrics (7 lines)
- 3-4 key metrics with targets

### Team Performance (7 lines)
- 3-4 key metrics with targets

## 🎓 INTERNAL TRAINING & SOPs (20 lines)
### New Employee Onboarding (10 lines)
- Week-by-week breakdown

### Ongoing Training (10 lines)
- Frequency and types

---
Footer metadata (5 lines)
```

**File 2: EXTERNAL-KB-[ENTITY].md (200-300 lines)**

**Detailed Structure**:
```markdown
# [Icon] [Entity Name] - External Knowledge Base (Customer)

> Metadata (10 lines)

## 🎯 WELCOME TO [ENTITY NAME] (25 lines)
- Greeting (brand voice)
- Brand introduction (2-3 paragraphs)
- Tagline
- Mission statement

## 💎 MENGAPA [ENTITY NAME]? (40 lines)
### 1. [Benefit 1] (10 lines)
- 4 detailed points

### 2. [Benefit 2] (10 lines)
- 4 detailed points

### 3. [Benefit 3] (10 lines)
- 4 detailed points

### 4. [Benefit 4] (10 lines)
- 4 detailed points

## 🛍️ CARA BELANJA / MENGGUNAKAN LAYANAN (35 lines)
### Online Shopping/Service (20 lines)
- Platform 1 details (5 lines)
- Platform 2 details (5 lines)
- Website details (5 lines)
- Other channels (5 lines)

### Offline Shopping/Service (15 lines)
- City 1 locations
- City 2 locations
- Benefits of offline

## 💬 CUSTOMER AI INTERACTIONS (90 lines)
### Scenario 1: [Name] (30 lines)
- Customer query
- AI response (brand voice)
- Product recommendations
- Tips and advice
- Multiple choice (5 options)

### Scenario 2: [Name] (30 lines)
- Similar structure

### Scenario 3: [Name] (30 lines)
- Similar structure

## 🎁 PROMO & PROGRAM (25 lines)
### Current Promotions (15 lines)
- Promo 1 details
- Promo 2 details

### Loyalty Program (10 lines)
- Program description
- Benefits
- How to join

## 📱 FOLLOW US (15 lines)
- Instagram details
- TikTok details
- Other platforms

## ❓ FAQ (25 lines)
- 5 Q&A pairs (5 lines each)

---
Footer metadata (5 lines)
```

**Files 3-9: Sub-Folder Files (150-250 lines each)**

**File 3: brand-voice/BRAND-VOICE-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Voice Attributes Definition (30 lines)
- Tone Variations by Context (40 lines)
- Language Style Guidelines (30 lines)
- Emoji Usage Rules (20 lines)
- Examples: Good vs Bad (40 lines)
- Context-Specific Adaptations (30 lines)
```

**File 4: brand-knowledge/BRAND-IDENTITY-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Brand Essence (25 lines)
- Core Values (30 lines)
- Visual Identity (30 lines)
- Brand Positioning (30 lines)
- Brand Story (40 lines)
- Competitive Differentiation (25 lines)
```

**File 5: marketing-knowledge/MARKETING-STRATEGY-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Marketing Objectives (30 lines)
- Target Campaigns (40 lines)
- Channel Strategy (35 lines)
- Budget Allocation (25 lines)
- Content Strategy (30 lines)
- KPIs and Metrics (20 lines)
```

**File 6: customer-segment/TARGET-AUDIENCE-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Demographics (30 lines)
- Psychographics (30 lines)
- Customer Personas (50 lines - 2-3 personas)
- Customer Journey (40 lines)
- Pain Points and Needs (30 lines)
```

**File 7: product-knowledge/PRODUCT-CATALOG-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Product Categories (30 lines)
- Product Specifications (60 lines - 3-5 products)
- Pricing Structure (25 lines)
- Product Benefits (35 lines)
- Usage Instructions (30 lines)
```

**File 8: sales-knowledge/SALES-STRATEGY-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Sales Process (40 lines)
- Sales Channels (30 lines)
- Sales Targets (25 lines)
- Sales Scripts (40 lines)
- Objection Handling (35 lines)
```

**File 9: operations/OPERATIONS-MANUAL-[ENTITY].md**
```markdown
# Structure (150-250 lines):
- Standard Operating Procedures (50 lines)
- Workflows (40 lines)
- Quality Control (30 lines)
- Logistics (30 lines)
- Customer Service Protocols (40 lines)
```



### LAYER 3: ROUTING & ORCHESTRATION (Detailed Design)

#### 3.1 Smart Routing System

**Multi-Entity Query Handling**:
```python
class SmartRouter:
    """
    Intelligent routing system for knowledge base queries
    """
    
    def __init__(self):
        self.entity_map = self.load_entity_map()
        self.voice_profiles = self.load_voice_profiles()
        self.routing_rules = self.load_routing_rules()
    
    def route(self, query, user_context):
        """Main routing method"""
        
        # 1. Analyze query
        analysis = self.analyze_query(query)
        
        # 2. Identify entities
        entities = self.identify_entities(query, analysis)
        
        # 3. Determine perspective
        perspective = self.get_perspective(user_context)
        
        # 4. Check permissions
        if not self.check_permissions(user_context, entities, perspective):
            return self.handle_permission_denied()
        
        # 5. Build knowledge retrieval plan
        retrieval_plan = self.build_retrieval_plan(
            entities, perspective, analysis
        )
        
        # 6. Execute retrieval
        knowledge = self.retrieve_knowledge(retrieval_plan)
        
        # 7. Synthesize response
        response = self.synthesize_response(
            knowledge, entities, analysis, user_context
        )
        
        return response
    
    def analyze_query(self, query):
        """Analyze query for intent, entities, complexity"""
        return {
            'intent': self.detect_intent(query),
            'complexity': self.assess_complexity(query),
            'entities_mentioned': self.extract_entity_mentions(query),
            'keywords': self.extract_keywords(query),
            'sentiment': self.analyze_sentiment(query)
        }
    
    def identify_entities(self, query, analysis):
        """Identify relevant entities with confidence scores"""
        candidates = []
        
        for entity in self.entity_map:
            score = self.calculate_relevance_score(
                query, entity, analysis
            )
            if score > 0.3:  # Threshold
                candidates.append({
                    'entity': entity,
                    'confidence': score
                })
        
        return sorted(candidates, key=lambda x: x['confidence'], reverse=True)
    
    def build_retrieval_plan(self, entities, perspective, analysis):
        """Build plan for knowledge retrieval"""
        plan = {
            'primary_sources': [],
            'secondary_sources': [],
            'global_sources': []
        }
        
        # Primary: Entity-specific files
        for entity in entities[:2]:  # Top 2 entities
            if perspective == 'internal':
                plan['primary_sources'].append(
                    f"INTERNAL-KB-{entity['entity']['name']}.md"
                )
            else:
                plan['primary_sources'].append(
                    f"EXTERNAL-KB-{entity['entity']['name']}.md"
                )
            
            # Add relevant sub-files based on query intent
            if analysis['intent'] == 'product_inquiry':
                plan['secondary_sources'].append(
                    f"product-knowledge/PRODUCT-CATALOG-{entity['entity']['name']}.md"
                )
            elif analysis['intent'] == 'brand_inquiry':
                plan['secondary_sources'].append(
                    f"brand-knowledge/BRAND-IDENTITY-{entity['entity']['name']}.md"
                )
        
        # Global sources (always included)
        plan['global_sources'] = [
            "GLOBAL-KNOWLEDGE-BASE.md",
            "BRAND-VOICE-PERSONALITY-MATRIX.md"
        ]
        
        return plan
```

#### 3.2 Context-Aware Routing

**Context Management System**:
```python
class ContextManager:
    """
    Manages conversation context for intelligent routing
    """
    
    def __init__(self):
        self.contexts = {}  # user_id -> context
    
    def get_context(self, user_id):
        """Get current context for user"""
        if user_id not in self.contexts:
            self.contexts[user_id] = self.create_new_context()
        return self.contexts[user_id]
    
    def update_context(self, user_id, query, response, entities):
        """Update context after interaction"""
        context = self.get_context(user_id)
        
        # Update conversation history
        context['history'].append({
            'query': query,
            'response': response,
            'entities': entities,
            'timestamp': datetime.now()
        })
        
        # Update current entities
        context['current_entities'] = entities
        
        # Update user preferences (learning)
        self.update_preferences(context, query, response)
        
        # Update sentiment tracking
        context['sentiment_history'].append(
            self.analyze_sentiment(query)
        )
        
        return context
    
    def create_new_context(self):
        """Create new context for user"""
        return {
            'history': [],
            'current_entities': [],
            'preferences': {},
            'sentiment_history': [],
            'session_start': datetime.now()
        }
    
    def should_switch_context(self, current_context, new_query):
        """Determine if context switch is needed"""
        new_entities = self.extract_entities(new_query)
        current_entities = current_context['current_entities']
        
        # Check for explicit switch
        if self.has_explicit_switch(new_query):
            return True
        
        # Check for topic change
        if not self.entities_overlap(new_entities, current_entities):
            return True
        
        # Check for time-based expiry
        if self.is_context_expired(current_context):
            return True
        
        return False
```

#### 3.3 Permission-Based Filtering

**Access Control System**:
```yaml
access_control:
  roles:
    employee:
      access:
        - INTERNAL-KB-*
        - All sub-folder files
        - Division AI knowledge
      restrictions:
        - No executive-level data
        - No financial details (unless finance role)
    
    manager:
      access:
        - INTERNAL-KB-*
        - All sub-folder files
        - Division AI knowledge
        - Holding AI knowledge (limited)
        - Performance metrics
        - Financial summaries
      restrictions:
        - No detailed financial data
        - No strategic plans (unless senior manager)
    
    customer:
      access:
        - EXTERNAL-KB-*
        - Public sub-folder files
        - Customer-facing content
      restrictions:
        - No internal operations
        - No internal metrics
        - No employee information
    
    partner:
      access:
        - INTERNAL-KB-* (limited)
        - Partnership-related content
        - Collaboration protocols
      restrictions:
        - No financial details
        - No strategic plans
        - No employee personal data

  content_filtering:
    sensitive_keywords:
      - "internal only"
      - "confidential"
      - "restricted"
      - "executive level"
    
    redaction_rules:
      - Remove specific numbers (revenue, costs)
      - Mask employee names (except public-facing)
      - Hide internal processes
      - Obscure strategic plans
```

---

### LAYER 4: INTELLIGENCE ENGINE (Detailed Design)

#### 4.1 AI Reasoning Patterns (Complete Implementation)

**Deductive Reasoning**:
```python
def deductive_reasoning(general_principle, specific_case):
    """
    From general to specific
    
    Example:
    General: "All dry skin needs hydration"
    Specific: "User has dry skin"
    Conclusion: "User needs hydrating products"
    """
    
    # Step 1: Identify general principle
    principle = identify_principle(general_principle)
    
    # Step 2: Match specific case to principle
    if matches_principle(specific_case, principle):
        # Step 3: Apply conclusion
        conclusion = apply_principle(principle, specific_case)
        return conclusion
    
    return None

# Example usage:
principle = "Dry skin needs hydration"
user_case = "User has dry skin"
conclusion = deductive_reasoning(principle, user_case)
# Returns: "Recommend hydrating products"
```

**Inductive Reasoning**:
```python
def inductive_reasoning(specific_cases):
    """
    From specific to general
    
    Example:
    Cases: ["User A liked Product X", "User B liked Product X", "User C liked Product X"]
    Conclusion: "Product X is popular"
    """
    
    # Step 1: Collect specific cases
    cases = collect_cases(specific_cases)
    
    # Step 2: Identify patterns
    patterns = identify_patterns(cases)
    
    # Step 3: Generalize
    general_conclusion = generalize(patterns)
    
    # Step 4: Calculate confidence
    confidence = calculate_confidence(cases, general_conclusion)
    
    return {
        'conclusion': general_conclusion,
        'confidence': confidence,
        'supporting_cases': len(cases)
    }
```

**Abductive Reasoning**:
```python
def abductive_reasoning(observation):
    """
    Best explanation for observation
    
    Example:
    Observation: "User's skin is dry and flaky"
    Possible causes: ["Dehydration", "Weather", "Wrong products", "Skin condition"]
    Best explanation: "Dehydration + Wrong products"
    """
    
    # Step 1: Identify observation
    obs = parse_observation(observation)
    
    # Step 2: Generate possible explanations
    explanations = generate_explanations(obs)
    
    # Step 3: Rank explanations by likelihood
    ranked = rank_by_likelihood(explanations, obs)
    
    # Step 4: Select best explanation(s)
    best = select_best_explanations(ranked, threshold=0.7)
    
    return best
```

**Analogical Reasoning**:
```python
def analogical_reasoning(source_case, target_case):
    """
    Reasoning by similarity
    
    Example:
    Source: "User A with oily skin liked Product X"
    Target: "User B also has oily skin"
    Conclusion: "User B might like Product X"
    """
    
    # Step 1: Identify similarities
    similarities = find_similarities(source_case, target_case)
    
    # Step 2: Map relationships
    relationships = map_relationships(source_case, target_case, similarities)
    
    # Step 3: Transfer conclusions
    conclusion = transfer_conclusion(source_case, target_case, relationships)
    
    # Step 4: Adjust confidence based on similarity
    confidence = calculate_similarity_confidence(similarities)
    
    return {
        'conclusion': conclusion,
        'confidence': confidence,
        'basis': similarities
    }
```

#### 4.2 Decision-Making Frameworks (Complete Implementation)

**Product Recommendation Framework**:
```python
class ProductRecommender:
    """
    Intelligent product recommendation system
    """
    
    def recommend(self, user_profile, query):
        """Generate product recommendations"""
        
        # Step 1: Extract user needs
        needs = self.extract_needs(query, user_profile)
        
        # Step 2: Fetch candidate products
        candidates = self.fetch_candidates(needs)
        
        # Step 3: Score products
        scored = []
        for product in candidates:
            score = self.calculate_score(product, needs, user_profile)
            scored.append({
                'product': product,
                'score': score,
                'reasons': self.explain_score(product, needs)
            })
        
        # Step 4: Rank and filter
        ranked = sorted(scored, key=lambda x: x['score'], reverse=True)
        top_recommendations = ranked[:5]
        
        # Step 5: Format recommendations
        formatted = self.format_recommendations(top_recommendations)
        
        return formatted
    
    def calculate_score(self, product, needs, user_profile):
        """Calculate recommendation score"""
        score = 0.0
        
        # Factor 1: Need match (40%)
        need_match = self.match_needs(product, needs)
        score += need_match * 0.4
        
        # Factor 2: User preferences (25%)
        pref_match = self.match_preferences(product, user_profile)
        score += pref_match * 0.25
        
        # Factor 3: Popularity (15%)
        popularity = self.get_popularity(product)
        score += popularity * 0.15
        
        # Factor 4: Price appropriateness (10%)
        price_match = self.match_budget(product, user_profile)
        score += price_match * 0.10
        
        # Factor 5: Availability (10%)
        availability = self.check_availability(product)
        score += availability * 0.10
        
        return score
```

**Escalation Decision Framework**:
```python
class EscalationDecider:
    """
    Decides when to escalate to human
    """
    
    def should_escalate(self, query, context, confidence):
        """Determine if escalation is needed"""
        
        # Trigger 1: Low confidence
        if confidence < 0.7:
            return True, "Low confidence in response"
        
        # Trigger 2: Complex complaint
        if self.is_complex_complaint(query):
            return True, "Complex complaint requiring human touch"
        
        # Trigger 3: Refund/financial request
        if self.is_financial_request(query):
            return True, "Financial matter requires authorization"
        
        # Trigger 4: Technical issue
        if self.is_technical_issue(query):
            return True, "Technical issue needs specialist"
        
        # Trigger 5: Repeated query
        if self.is_repeated_query(query, context):
            return True, "User not satisfied with AI responses"
        
        # Trigger 6: Explicit request for human
        if self.requests_human(query):
            return True, "User explicitly requested human agent"
        
        return False, None
    
    def get_escalation_target(self, reason, entity):
        """Determine who to escalate to"""
        escalation_map = {
            "Low confidence": "customer_service_team",
            "Complex complaint": "senior_customer_service",
            "Financial matter": "finance_team",
            "Technical issue": "technical_support",
            "User not satisfied": "customer_service_supervisor",
            "User requested human": "customer_service_team"
        }
        
        return escalation_map.get(reason, "customer_service_team")
```



#### 4.3 Context Awareness System (Complete Implementation)

**Multi-Dimensional Context Tracking**:
```python
class ContextAwarenessEngine:
    """
    Comprehensive context awareness system
    """
    
    def __init__(self):
        self.user_contexts = {}
        self.conversation_contexts = {}
        self.entity_contexts = {}
        self.temporal_contexts = {}
    
    def get_full_context(self, user_id, conversation_id):
        """Get complete context for decision making"""
        return {
            'user': self.get_user_context(user_id),
            'conversation': self.get_conversation_context(conversation_id),
            'entity': self.get_entity_context(conversation_id),
            'temporal': self.get_temporal_context()
        }
    
    def get_user_context(self, user_id):
        """User-specific context"""
        return {
            'role': self.get_user_role(user_id),
            'history': self.get_user_history(user_id),
            'preferences': self.get_user_preferences(user_id),
            'sentiment': self.get_user_sentiment(user_id),
            'loyalty_status': self.get_loyalty_status(user_id),
            'purchase_history': self.get_purchase_history(user_id)
        }
    
    def get_conversation_context(self, conversation_id):
        """Conversation-specific context"""
        return {
            'topics': self.get_discussed_topics(conversation_id),
            'entities': self.get_mentioned_entities(conversation_id),
            'decisions': self.get_made_decisions(conversation_id),
            'sentiment_flow': self.get_sentiment_flow(conversation_id),
            'stage': self.get_conversation_stage(conversation_id)
        }
    
    def get_entity_context(self, conversation_id):
        """Entity-specific context"""
        current_entity = self.get_current_entity(conversation_id)
        return {
            'current_entity': current_entity,
            'related_entities': self.get_related_entities(current_entity),
            'voice_profile': self.get_voice_profile(current_entity),
            'active_campaigns': self.get_active_campaigns(current_entity),
            'inventory_status': self.get_inventory_status(current_entity)
        }
    
    def get_temporal_context(self):
        """Time-sensitive context"""
        now = datetime.now()
        return {
            'current_time': now,
            'time_of_day': self.get_time_of_day(now),
            'day_of_week': now.strftime('%A'),
            'active_promos': self.get_active_promos(now),
            'upcoming_events': self.get_upcoming_events(now),
            'seasonal_context': self.get_seasonal_context(now)
        }
```

---

### LAYER 5: INTEGRATION LAYER (Complete Implementation)

#### 5.1 n8n Workflow Integration (Production-Ready Templates)

**Complete Workflow: Customer Inquiry to Response**:
```json
{
  "name": "RayCorp KB - Customer Inquiry Workflow",
  "nodes": [
    {
      "parameters": {
        "path": "webhook/customer-inquiry",
        "responseMode": "responseNode",
        "options": {}
      },
      "name": "Webhook - Receive Customer Message",
      "type": "n8n-nodes-base.webhook",
      "position": [250, 300]
    },
    {
      "parameters": {
        "functionCode": "// Extract and validate input\nconst message = items[0].json.message;\nconst userId = items[0].json.user_id;\nconst platform = items[0].json.platform;\n\n// Validate required fields\nif (!message || !userId) {\n  throw new Error('Missing required fields');\n}\n\nreturn [{\n  json: {\n    query: message,\n    user_id: userId,\n    platform: platform || 'unknown',\n    timestamp: new Date().toISOString()\n  }\n}];"
      },
      "name": "Parse and Validate Input",
      "type": "n8n-nodes-base.function",
      "position": [450, 300]
    },
    {
      "parameters": {
        "url": "={{$env.KB_API_URL}}/route",
        "method": "POST",
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            {
              "name": "query",
              "value": "={{$json.query}}"
            },
            {
              "name": "user_context",
              "value": "={{$json}}"
            }
          ]
        },
        "options": {
          "timeout": 10000
        }
      },
      "name": "Route Query to KB",
      "type": "n8n-nodes-base.httpRequest",
      "position": [650, 300]
    },
    {
      "parameters": {
        "functionCode": "// Fetch knowledge from identified sources\nconst sources = items[0].json.knowledge_sources;\nconst knowledgeBase = [];\n\nfor (const source of sources) {\n  const content = await fetchKnowledgeFile(source);\n  knowledgeBase.push({\n    source: source,\n    content: content\n  });\n}\n\nreturn [{\n  json: {\n    ...items[0].json,\n    knowledge: knowledgeBase\n  }\n}];\n\nasync function fetchKnowledgeFile(filename) {\n  // Implementation to fetch from file system or database\n  const fs = require('fs');\n  const path = require('path');\n  const filePath = path.join(process.env.KB_PATH, filename);\n  return fs.readFileSync(filePath, 'utf8');\n}"
      },
      "name": "Fetch Knowledge",
      "type": "n8n-nodes-base.function",
      "position": [850, 300]
    },
    {
      "parameters": {
        "model": "gpt-4-turbo-preview",
        "messages": {
          "values": [
            {
              "role": "system",
              "content": "={{$json.system_prompt}}"
            },
            {
              "role": "user",
              "content": "={{$json.query}}"
            }
          ]
        },
        "options": {
          "temperature": 0.7,
          "maxTokens": 2000
        }
      },
      "name": "Generate AI Response",
      "type": "n8n-nodes-base.openAi",
      "position": [1050, 300]
    },
    {
      "parameters": {
        "functionCode": "// Apply brand voice transformation\nconst response = items[0].json.response;\nconst voiceProfile = items[0].json.voice_profile;\n\n// Transform response based on voice attributes\nlet transformed = response;\n\n// Apply tone\nif (voiceProfile.tone === 'warm') {\n  transformed = addWarmth(transformed);\n} else if (voiceProfile.tone === 'professional') {\n  transformed = makeProfessional(transformed);\n}\n\n// Apply emoji usage\nif (voiceProfile.emoji_usage === 'generous') {\n  transformed = addEmojis(transformed, 'generous');\n} else if (voiceProfile.emoji_usage === 'moderate') {\n  transformed = addEmojis(transformed, 'moderate');\n}\n\nreturn [{\n  json: {\n    ...items[0].json,\n    transformed_response: transformed\n  }\n}];\n\nfunction addWarmth(text) {\n  // Add warm, friendly language\n  return text.replace(/^/, 'Hai Kak! 😊 ');\n}\n\nfunction makeProfessional(text) {\n  // Make more professional\n  return text.replace(/Hai/, 'Selamat pagi/siang');\n}\n\nfunction addEmojis(text, level) {\n  // Add appropriate emojis\n  if (level === 'generous') {\n    return text + ' ✨💕';\n  } else if (level === 'moderate') {\n    return text + ' 😊';\n  }\n  return text;\n}"
      },
      "name": "Apply Brand Voice",
      "type": "n8n-nodes-base.function",
      "position": [1250, 300]
    },
    {
      "parameters": {
        "functionCode": "// Add multiple choice options\nconst response = items[0].json.transformed_response;\nconst queryType = items[0].json.query_type;\nconst entities = items[0].json.entities;\n\n// Generate options based on query type\nlet options = [];\n\nif (queryType === 'product_inquiry') {\n  options = [\n    '1️⃣ Lihat detail produk',\n    '2️⃣ Order sekarang',\n    '3️⃣ Tanya produk lain',\n    '4️⃣ Konsultasi dengan advisor',\n    '5️⃣ Lihat promo'\n  ];\n} else if (queryType === 'general_inquiry') {\n  options = [\n    '1️⃣ Tanya lebih detail',\n    '2️⃣ Lihat produk',\n    '3️⃣ Hubungi customer service'\n  ];\n}\n\n// Format final response\nconst finalResponse = `${response}\n\n${options.join('\\n')}\n\nPilih yang mana, Kak? 💕`;\n\nreturn [{\n  json: {\n    ...items[0].json,\n    final_response: finalResponse,\n    options: options\n  }\n}];"
      },
      "name": "Add Multiple Choice",
      "type": "n8n-nodes-base.function",
      "position": [1450, 300]
    },
    {
      "parameters": {
        "url": "={{$json.callback_url}}",
        "method": "POST",
        "sendBody": true,
        "bodyParameters": {
          "parameters": [
            {
              "name": "response",
              "value": "={{$json.final_response}}"
            },
            {
              "name": "user_id",
              "value": "={{$json.user_id}}"
            },
            {
              "name": "conversation_id",
              "value": "={{$json.conversation_id}}"
            }
          ]
        }
      },
      "name": "Send Response to Platform",
      "type": "n8n-nodes-base.httpRequest",
      "position": [1650, 300]
    },
    {
      "parameters": {
        "respondWith": "json",
        "responseBody": "={{$json}}"
      },
      "name": "Respond to Webhook",
      "type": "n8n-nodes-base.respondToWebhook",
      "position": [1850, 300]
    }
  ],
  "connections": {
    "Webhook - Receive Customer Message": {
      "main": [[{"node": "Parse and Validate Input", "type": "main", "index": 0}]]
    },
    "Parse and Validate Input": {
      "main": [[{"node": "Route Query to KB", "type": "main", "index": 0}]]
    },
    "Route Query to KB": {
      "main": [[{"node": "Fetch Knowledge", "type": "main", "index": 0}]]
    },
    "Fetch Knowledge": {
      "main": [[{"node": "Generate AI Response", "type": "main", "index": 0}]]
    },
    "Generate AI Response": {
      "main": [[{"node": "Apply Brand Voice", "type": "main", "index": 0}]]
    },
    "Apply Brand Voice": {
      "main": [[{"node": "Add Multiple Choice", "type": "main", "index": 0}]]
    },
    "Add Multiple Choice": {
      "main": [[{"node": "Send Response to Platform", "type": "main", "index": 0}]]
    },
    "Send Response to Platform": {
      "main": [[{"node": "Respond to Webhook", "type": "main", "index": 0}]]
    }
  }
}
```

#### 5.2 Custom GPT Configuration (Complete Setup Guide)

**Step-by-Step Configuration**:

1. **Create New GPT**:
   - Go to OpenAI Platform
   - Click "Create a GPT"
   - Choose "Configure" tab

2. **Basic Information**:
   ```
   Name: [Entity Name] AI Assistant
   Description: AI assistant resmi untuk [Entity Name]. Membantu dengan informasi produk, rekomendasi, dan customer service.
   ```

3. **Instructions** (Complete Template):
   ```
   # IDENTITY & ROLE
   You are the official AI assistant for [Entity Name], a [entity type] brand under RayCorp ecosystem specializing in [category].
   
   # CORE MISSION
   Your mission is to provide helpful, accurate, and engaging assistance to users while maintaining [Entity Name]'s unique brand voice and values.
   
   # FUNDAMENTAL PRINCIPLES
   
   1. ALWAYS PROVIDE MULTIPLE CHOICE
      - Every response must end with 1-5 numbered options
      - Use emoji numbers: 1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣
      - Options must be actionable and clear
      - Options should guide user to next logical step
   
   2. MAINTAIN BRAND VOICE
      - Voice Attributes: [list attributes]
      - Tone: [tone description]
      - Language Style: [style description]
      - Emoji Usage: [usage level]
      - Always sound like [Entity Name], not generic AI
   
   3. FOLLOW USER JOURNEY
      - Awareness: Introduce brand, build interest
      - Consideration: Provide details, comparisons
      - Decision: Help choose, remove doubts
      - Action: Guide purchase/signup process
      - Retention: Follow-up, build loyalty
   
   4. CONTEXT AWARENESS
      - Remember conversation history
      - Track user preferences
      - Adapt to user sentiment
      - Maintain entity context
   
   5. BE HELPFUL & PROACTIVE
      - Anticipate user needs
      - Offer relevant suggestions
      - Provide complete information
      - Show empathy and understanding
   
   # KNOWLEDGE SOURCES
   
   You have access to comprehensive knowledge about [Entity Name]:
   
   - INTERNAL-KB: For employees, managers, partners
     * Operational procedures
     * Team guidelines
     * Business intelligence
     * Internal metrics
   
   - EXTERNAL-KB: For customers, prospects, public
     * Product information
     * Purchasing guides
     * Customer benefits
     * Public-facing content
   
   - Brand Knowledge: Identity, values, positioning
   - Marketing Knowledge: Campaigns, strategies
   - Product Knowledge: Catalog, specifications
   - Customer Knowledge: Segments, personas
   - Sales Knowledge: Process, scripts
   - Operations Knowledge: SOPs, workflows
   
   # RESPONSE STRUCTURE
   
   Always structure your responses as follows:
   
   1. GREETING (brand voice appropriate)
      - Time-based if applicable
      - Warm and welcoming
      - Acknowledge user
   
   2. ACKNOWLEDGE QUERY
      - Show you understood
      - Clarify if needed
      - Express empathy
   
   3. PROVIDE INFORMATION
      - Clear and comprehensive
      - Well-organized
      - Easy to understand
      - Include relevant details
   
   4. ADD VALUE
      - Tips and recommendations
      - Related information
      - Proactive suggestions
      - Expert insights
   
   5. MULTIPLE CHOICE OPTIONS (1-5)
      - Actionable next steps
      - Clear and distinct
      - Emoji numbers
      - Contextually relevant
   
   6. FRIENDLY CLOSING
      - Encouraging
      - Supportive
      - Brand voice consistent
   
   # BRAND VOICE EXAMPLES
   
   [Include 2-3 complete interaction examples showing brand voice]
   
   Example 1: Product Inquiry
   Customer: "Produk apa yang cocok untuk kulit kering?"
   
   [Entity] Bot: "[Complete response in brand voice with multiple choice]"
   
   Example 2: General Question
   Example 3: Complex Scenario
   
   # SPECIAL INSTRUCTIONS
   
   - For internal users: Provide operational details, metrics, procedures
   - For customers: Focus on benefits, purchasing, support
   - For complex issues: Offer escalation to human agent
   - For sensitive topics: Handle with care and empathy
   - For technical problems: Provide clear troubleshooting steps
   
   # QUALITY STANDARDS
   
   - Clarity: Easy to understand
   - Completeness: All info provided
   - Accuracy: Factually correct
   - Relevance: On-topic
   - Actionability: Clear next steps
   - Empathy: Understanding and caring
   
   # NEVER DO
   
   - Never respond without multiple choice
   - Never break brand voice
   - Never provide inaccurate information
   - Never be rude or dismissive
   - Never ignore user sentiment
   - Never make promises you can't keep
   
   Remember: You represent [Entity Name]. Every interaction shapes user perception of the brand. Be excellent!
   ```

4. **Upload Knowledge Files**:
   - INTERNAL-KB-[ENTITY].md
   - EXTERNAL-KB-[ENTITY].md
   - GLOBAL-KNOWLEDGE-BASE.md
   - BRAND-VOICE-PERSONALITY-MATRIX.md
   - All 9 entity-specific files

5. **Conversation Starters**:
   ```
   - "Halo! Ada yang bisa saya bantu?"
   - "Mau tanya tentang produk [Entity]?"
   - "Butuh rekomendasi?"
   - "Ada pertanyaan?"
   ```

6. **Capabilities**:
   - Web Browsing: OFF (use knowledge base only)
   - Code Interpreter: OFF
   - DALL-E: OFF

7. **Test & Publish**:
   - Test with sample queries
   - Verify brand voice
   - Check multiple choice presence
   - Validate knowledge accuracy
   - Publish when ready



---

## ✅ IMPLEMENTATION TASKS (GRANULAR)

### PHASE 0: Core Brain Setup (CRITICAL FOUNDATION)

**Duration**: 2-3 days  
**Priority**: HIGHEST - Must complete before other phases  
**Dependencies**: None

---

#### Task 0.1: Enhance GLOBAL-KNOWLEDGE-BASE.md

**Goal**: Create comprehensive universal knowledge base (500+ lines)

**Current State**: Basic file exists (~200 lines)  
**Target State**: Comprehensive file (500+ lines) with all patterns and principles

**Sub-Tasks**:

**0.1.1 Multiple Choice Interaction Patterns** (2 hours):
- [ ] Document Pattern 1: Simple Inquiry (1-3 options)
  - Write pattern description
  - Provide 3 examples
  - List best practices
  - Document common mistakes
- [ ] Document Pattern 2: Product Recommendation (3-5 options)
  - Write pattern description
  - Provide 3 examples
  - List best practices
  - Document common mistakes
- [ ] Document Pattern 3: Complex Decision (4-5 options)
  - Write pattern description
  - Provide 3 examples
  - List best practices
- [ ] Document Pattern 4: Navigation (2-4 options)
  - Write pattern description
  - Provide 2 examples
- [ ] Document Pattern 5: Escalation (2-3 options)
  - Write pattern description
  - Provide 2 examples
- [ ] Create pattern selection guide
- [ ] Add implementation checklist

**0.1.2 Auto Response Patterns** (1.5 hours):
- [ ] Document greeting patterns (time-based)
  - Morning greetings (3 variations)
  - Afternoon greetings (3 variations)
  - Evening greetings (3 variations)
  - Generic greetings (2 variations)
- [ ] Document acknowledgment patterns
  - Simple acknowledgment (3 variations)
  - Empathetic acknowledgment (3 variations)
  - Clarifying acknowledgment (2 variations)
- [ ] Document clarification patterns
  - Request for more info (3 variations)
  - Confirm understanding (2 variations)
- [ ] Document confirmation patterns
  - Action confirmation (3 variations)
  - Information confirmation (2 variations)
- [ ] Document closing patterns
  - Helpful closing (3 variations)
  - Encouraging closing (3 variations)
  - Follow-up closing (2 variations)
- [ ] Document error handling patterns
  - Apology patterns (3 variations)
  - Recovery patterns (2 variations)
- [ ] Document escalation patterns
  - Soft escalation (2 variations)
  - Direct escalation (2 variations)

**0.1.3 User Experience Principles** (2 hours):
- [ ] Principle 1: Always be helpful
  - Write detailed description
  - Provide 3 implementation examples
  - List do's and don'ts
  - Add measurement criteria
- [ ] Principle 2: Provide clear options
  - Write detailed description
  - Provide 3 implementation examples
  - List do's and don'ts
- [ ] Principle 3: Maintain context
  - Write detailed description
  - Provide 2 implementation examples
  - List do's and don'ts
- [ ] Principle 4: Be proactive
  - Write detailed description
  - Provide 3 implementation examples
- [ ] Principle 5: Show empathy
  - Write detailed description
  - Provide 3 implementation examples
- [ ] Principle 6: Respect time
  - Write detailed description
  - Provide 2 implementation examples
- [ ] Principle 7: Build trust
  - Write detailed description
  - Provide 2 implementation examples
- [ ] Create implementation guide
- [ ] Add quality checklist

**0.1.4 User Journey Mapping** (2.5 hours):
- [ ] Stage 1: Awareness
  - Define stage characteristics
  - List user behaviors
  - Document AI behaviors
  - Provide 2 examples
  - Define success metrics
- [ ] Stage 2: Consideration
  - Define stage characteristics
  - List user behaviors
  - Document AI behaviors
  - Provide 2 examples
  - Define success metrics
- [ ] Stage 3: Decision
  - Define stage characteristics
  - List user behaviors
  - Document AI behaviors
  - Provide 2 examples
  - Define success metrics
- [ ] Stage 4: Action
  - Define stage characteristics
  - List user behaviors
  - Document AI behaviors
  - Provide 2 examples
  - Define success metrics
- [ ] Stage 5: Retention
  - Define stage characteristics
  - List user behaviors
  - Document AI behaviors
  - Provide 2 examples
  - Define success metrics
- [ ] Document transition triggers between stages
- [ ] Create stage detection algorithm
- [ ] Add behavior adaptation rules

**0.1.5 Brand Values & Response Quality** (1 hour):
- [ ] Document holding-level brand values
  - Innovation & Technology (description + examples)
  - Quality & Excellence (description + examples)
  - Sustainability & Responsibility (description + examples)
  - Customer-Centricity (description + examples)
  - Integrity & Trust (description + examples)
- [ ] Define how values manifest in AI behavior
- [ ] Document response quality standards
  - Clarity criteria
  - Completeness criteria
  - Accuracy criteria
  - Relevance criteria
  - Actionability criteria
- [ ] Create quality measurement framework

**0.1.6 Integration Hooks & Metadata** (1 hour):
- [ ] Add YAML metadata for n8n integration
- [ ] Add routing configuration
- [ ] Add voice application rules
- [ ] Add quality check configuration
- [ ] Add feedback loop settings
- [ ] Document API integration points
- [ ] Create integration testing checklist

**Validation Checklist**:
- [ ] File has 500+ lines
- [ ] All patterns documented with examples
- [ ] All principles have implementation guides
- [ ] User journey fully mapped
- [ ] Integration hooks present
- [ ] No placeholders or TODOs
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 10 hours  
**Assignee**: Content Lead  
**Dependencies**: None  
**Deliverable**: GLOBAL-KNOWLEDGE-BASE.md (500+ lines)

---

#### Task 0.2: Create KNOWLEDGE-ROUTING-MATRIX.md

**Goal**: Build intelligent routing system (300+ lines)

**Current State**: File doesn't exist  
**Target State**: Complete routing matrix with algorithms and rules

**Sub-Tasks**:

**0.2.1 Query Type Detection** (2 hours):
- [ ] Define query types
  - Internal queries (characteristics + keywords)
  - External queries (characteristics + keywords)
  - AI queries (characteristics + keywords)
  - Cross-entity queries (characteristics + keywords)
  - Multi-perspective queries (characteristics + keywords)
- [ ] Create detection algorithm (pseudocode)
- [ ] Define confidence scoring method
- [ ] Provide 5 examples per query type
- [ ] Document edge cases
- [ ] Create fallback strategy

**0.2.2 Entity Identification** (2.5 hours):
- [ ] Create brand identification patterns
  - List keywords per brand (8 B2C brands)
  - Define matching algorithm
  - Set confidence thresholds
- [ ] Create unit identification patterns
  - List keywords per unit (7 units)
  - Define matching algorithm
- [ ] Create product identification patterns
  - List keywords per product (3 products)
  - Define matching algorithm
- [ ] Document multi-entity detection
  - Algorithm for multiple entities
  - Ranking method
  - Confidence calculation
- [ ] Create ambiguity resolution rules
  - Disambiguation questions
  - Context-based resolution
  - User preference consideration
- [ ] Define fallback strategies
  - When no entity detected
  - When multiple entities equal confidence
  - When entity unclear

**0.2.3 Permission-Based Filtering** (2 hours):
- [ ] Create access control matrix
  - Employee permissions (detailed)
  - Manager permissions (detailed)
  - Customer permissions (detailed)
  - Partner permissions (detailed)
  - Guest permissions (detailed)
- [ ] Define role-based permissions
  - Finance role (special permissions)
  - HR role (special permissions)
  - Executive role (special permissions)
- [ ] Create content filtering rules
  - Sensitive keyword list
  - Redaction rules
  - Masking patterns
- [ ] Document sensitive information handling
  - Financial data rules
  - Personal data rules
  - Strategic information rules
- [ ] Define escalation triggers
  - Permission denied scenarios
  - Approval required scenarios
- [ ] Create audit logging specification
  - What to log
  - Log format
  - Retention policy

**0.2.4 Routing Logic Implementation** (3 hours):
- [ ] Write single-entity routing algorithm
  - Pseudocode
  - Flow diagram
  - Example walkthrough
- [ ] Write multi-entity routing algorithm
  - Pseudocode
  - Flow diagram
  - Example walkthrough
- [ ] Write cross-entity routing algorithm
  - Pseudocode
  - Flow diagram
  - Example walkthrough
- [ ] Define fallback routing
  - When primary routing fails
  - Default entity selection
  - User notification
- [ ] Create error handling procedures
  - Error types
  - Recovery strategies
  - User communication
- [ ] Document performance optimization
  - Caching strategy
  - Query optimization
  - Load balancing

**0.2.5 Context Switching Rules** (1.5 hours):
- [ ] Define context switching triggers
  - New entity mentioned
  - Topic change detected
  - User explicit switch
  - Time-based expiry
- [ ] Document switching behavior
  - Save current context
  - Load new context
  - Apply new voice
  - Update history
- [ ] Create transition handling
  - Acknowledgment messages
  - Confirmation questions
  - Continuity maintenance
- [ ] Provide 3 complete examples

**Validation Checklist**:
- [ ] File has 300+ lines
- [ ] All algorithms documented
- [ ] All rules clearly defined
- [ ] Examples provided
- [ ] Edge cases covered
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 11 hours  
**Assignee**: Technical Lead  
**Dependencies**: Task 0.1 (for reference)  
**Deliverable**: KNOWLEDGE-ROUTING-MATRIX.md (300+ lines)

---

#### Task 0.3: Create AI-INTEGRATION-GUIDE.md

**Goal**: Comprehensive integration guide for all platforms (400+ lines)

**Current State**: File doesn't exist  
**Target State**: Complete guide with templates and configurations

**Sub-Tasks**:

**0.3.1 n8n Workflow Templates** (4 hours):
- [ ] Template 1: Customer Inquiry Workflow
  - Complete JSON workflow
  - Node-by-node explanation
  - Configuration parameters
  - Testing instructions
  - Deployment guide
- [ ] Template 2: Internal Support Workflow
  - Complete JSON workflow
  - Node-by-node explanation
  - Configuration parameters
  - Testing instructions
- [ ] Template 3: Cross-Entity Workflow
  - Complete JSON workflow
  - Node-by-node explanation
  - Configuration parameters
- [ ] Template 4: Scheduled Knowledge Update
  - Complete JSON workflow
  - Scheduling configuration
  - Update procedures
- [ ] Create workflow customization guide
- [ ] Document common issues and solutions
- [ ] Add performance optimization tips

**0.3.2 Custom GPT Configuration** (3 hours):
- [ ] Create complete configuration template
  - Name and description
  - Full instructions (500+ words)
  - Knowledge file list
  - Capabilities settings
  - Conversation starters
- [ ] Write step-by-step setup guide
  - Account setup
  - GPT creation
  - File upload process
  - Testing procedures
  - Publishing steps
- [ ] Document customization options
  - Temperature settings
  - Token limits
  - Behavior modifications
- [ ] Create troubleshooting guide
  - Common issues
  - Solutions
  - Support contacts
- [ ] Provide 3 complete examples
  - B2C brand example
  - B2B brand example
  - Business unit example

**0.3.3 Gemini Gem Setup** (2.5 hours):
- [ ] Create complete Gem configuration
  - System instruction (detailed)
  - Knowledge sources list
  - Grounding settings
  - Safety settings
  - Generation config
- [ ] Write step-by-step setup guide
  - Google AI Studio access
  - Gem creation
  - File upload
  - Testing
  - Deployment
- [ ] Document customization options
  - Temperature tuning
  - Output length
  - Safety levels
- [ ] Create troubleshooting guide
- [ ] Provide 2 complete examples

**0.3.4 REST API Specifications** (2.5 hours):
- [ ] Document all API endpoints
  - /query endpoint (complete spec)
  - /entities endpoint (complete spec)
  - /entity/{id} endpoint (complete spec)
  - /route endpoint (complete spec)
- [ ] Create request/response examples
  - 3 examples per endpoint
  - Success cases
  - Error cases
- [ ] Document authentication
  - Token generation
  - Token usage
  - Token refresh
- [ ] Create error handling guide
  - Error codes
  - Error messages
  - Recovery procedures
- [ ] Write API client examples
  - Python client
  - JavaScript client
  - cURL examples

**0.3.5 Webhook Configurations** (1 hour):
- [ ] Document webhook setup
  - Endpoint configuration
  - Payload format
  - Security settings
- [ ] Create webhook examples
  - Incoming webhooks
  - Outgoing webhooks
- [ ] Document event types
- [ ] Create testing guide

**Validation Checklist**:
- [ ] File has 400+ lines
- [ ] All templates complete
- [ ] All configurations documented
- [ ] Examples provided
- [ ] Testing guides included
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 13 hours  
**Assignee**: Integration Specialist  
**Dependencies**: Tasks 0.1, 0.2  
**Deliverable**: AI-INTEGRATION-GUIDE.md (400+ lines)



---

#### Task 0.4: ENTITY-TEMPLATE-GENERATOR.md (Already Created ✅)

**Status**: COMPLETED  
**File**: Already exists with 350+ lines  
**Content**: Complete template system for creating new entities

**Verification Checklist**:
- [x] File exists
- [x] Has 300+ lines
- [x] Quick start guide present
- [x] Entity information form complete
- [x] All 9 file templates included
- [x] Customization guidelines present
- [x] Quality check procedures documented
- [x] Deployment instructions included
- [x] Example provided (Mommylatory)

**No Action Required** - Template generator is production-ready

---

#### Task 0.5: Create CROSS-ENTITY-KNOWLEDGE-MAP.md

**Goal**: Map all relationships and dependencies between entities (250+ lines)

**Current State**: File doesn't exist  
**Target State**: Complete relationship mapping with collaboration patterns

**Sub-Tasks**:

**0.5.1 Hierarchical Relationships** (2 hours):
- [ ] Map holding company structure
  - Rayandra Corp (top level)
  - Lunaray Beauty Factory (manufacturing)
  - Office Divisions (operational)
- [ ] Map all brand relationships
  - 8 B2C brands under Lunaray
  - 2 B2B brands under Lunaray
  - 4 B2B2C brands under Lunaray
- [ ] Map all unit relationships
  - 7 business units under Office
  - Parent-child relationships
- [ ] Map all product relationships
  - 3 products and their owners
- [ ] Create visual hierarchy diagram (ASCII art)
- [ ] Document inheritance rules
  - What children inherit from parents
  - Override capabilities

**0.5.2 Functional Relationships** (2 hours):
- [ ] Map marketing chain
  - Raymedia → Content creation
  - Raymaizing → AI support
  - Social Media Division → Distribution
  - Marketing Sales → Campaigns
  - Document workflow
- [ ] Map production chain
  - LabCos → R&D
  - Production → Manufacturing
  - QA → Quality control
  - Raypack → Packaging
  - Document workflow
- [ ] Map sales chain
  - Marketing Sales → Lead generation
  - Customer Service → Support
  - Logistics → Delivery
  - Document workflow
- [ ] Map support chain
  - Raymaizing → Automation
  - Technology → Infrastructure
  - Customer Service → User support
  - Document workflow
- [ ] Create cross-functional collaboration rules

**0.5.3 Product-Brand Relationships** (1.5 hours):
- [ ] Map Beautylatory relationships
  - Products list
  - Services list
  - Support units
  - Collaboration patterns
- [ ] Map Adhwa relationships
  - Products list
  - Services list
  - Support units
- [ ] Map all other brands (22 remaining)
  - Products/services per brand
  - Support units per brand
- [ ] Document product lifecycle
  - From R&D to market
  - Involved entities per phase
- [ ] Create product-brand matrix

**0.5.4 Collaboration Patterns** (2 hours):
- [ ] Document new product launch pattern
  - Involved entities (list all)
  - Phase 1: R&D (detailed steps)
  - Phase 2: Production (detailed steps)
  - Phase 3: Marketing (detailed steps)
  - Phase 4: Launch (detailed steps)
  - Timeline and milestones
- [ ] Document customer issue resolution pattern
  - Involved entities
  - Level 1: AI chatbot (procedures)
  - Level 2: Customer service (procedures)
  - Level 3: Brand manager (procedures)
  - Level 4: Division head (procedures)
  - Escalation criteria
- [ ] Document cross-brand campaign pattern
  - Involved entities
  - Coordination procedures
  - Resource sharing
- [ ] Document knowledge sharing pattern
  - How entities share knowledge
  - Update propagation
  - Version control

**0.5.5 Cross-Entity Query Handling** (1.5 hours):
- [ ] Write query handling algorithm (pseudocode)
- [ ] Document multi-entity synthesis
  - How to combine knowledge from multiple entities
  - Conflict resolution
  - Priority rules
- [ ] Create comparative insights generation
  - How to compare entities
  - What to compare
  - Presentation format
- [ ] Provide 5 complete examples
  - Example 1: Compare 2 brands
  - Example 2: Multi-brand query
  - Example 3: Brand + Unit query
  - Example 4: Product comparison
  - Example 5: Complex multi-entity

**Validation Checklist**:
- [ ] File has 250+ lines
- [ ] All relationships mapped
- [ ] All patterns documented
- [ ] Algorithms provided
- [ ] Examples complete
- [ ] Visual diagrams included
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 9 hours  
**Assignee**: Knowledge Architect  
**Dependencies**: Tasks 0.1, 0.2  
**Deliverable**: CROSS-ENTITY-KNOWLEDGE-MAP.md (250+ lines)

---

### PHASE 0 SUMMARY

**Total Tasks**: 5 tasks  
**Total Sub-Tasks**: 50+ sub-tasks  
**Total Estimated Time**: 43 hours (5-6 days with 1 person, 2-3 days with 2 people)  
**Total Lines to Create**: 1,750+ lines

**Deliverables**:
1. ✅ GLOBAL-KNOWLEDGE-BASE.md (500+ lines)
2. ✅ KNOWLEDGE-ROUTING-MATRIX.md (300+ lines)
3. ✅ AI-INTEGRATION-GUIDE.md (400+ lines)
4. ✅ ENTITY-TEMPLATE-GENERATOR.md (300+ lines) - Already done
5. ✅ CROSS-ENTITY-KNOWLEDGE-MAP.md (250+ lines)

**Success Criteria**:
- All 5 files created and validated
- Total lines: 1,750+
- All quality checks passed
- Integration hooks present
- No placeholders or TODOs
- Peer review completed
- Ready for Phase 1

---

### PHASE 1: Fundamental Enhancement

**Duration**: 1-2 days  
**Priority**: HIGH  
**Dependencies**: Phase 0 complete

---

#### Task 1.1: Enhance BRAND-VOICE-PERSONALITY-MATRIX.md

**Goal**: Expand brand voice matrix with adaptation rules (600+ lines from 400)

**Current State**: Basic matrix exists (~400 lines)  
**Target State**: Comprehensive matrix (600+ lines) with all rules and examples

**Sub-Tasks**:

**1.1.1 Voice Adaptation Rules** (3 hours):
- [ ] Create context-based adaptation rules
  - Formal context (business, complaints)
  - Casual context (general inquiry, friendly chat)
  - Urgent context (emergencies, time-sensitive)
  - Emotional context (upset, happy, confused)
- [ ] Document adaptation triggers
  - User sentiment detection
  - Query type detection
  - Urgency detection
- [ ] Create adaptation algorithm (pseudocode)
- [ ] Provide 3 examples per context type
- [ ] Document adaptation boundaries
  - What can change
  - What must stay consistent

**1.1.2 Tone Switching Logic** (2.5 hours):
- [ ] Define tone switching scenarios
  - Customer complaint → Empathetic
  - Product inquiry → Helpful
  - Technical issue → Professional
  - Celebration → Enthusiastic
- [ ] Create tone switching algorithm
- [ ] Document smooth transition techniques
  - How to switch without jarring
  - Acknowledgment phrases
  - Bridge sentences
- [ ] Provide 5 complete examples
  - Show before/after tone switch
  - Explain reasoning
- [ ] Create tone consistency checks
  - Validation rules
  - Quality metrics

**1.1.3 Personality Consistency Checks** (2 hours):
- [ ] Define personality traits per entity (24 entities)
  - Core traits (3-5 per entity)
  - Secondary traits (2-3 per entity)
  - Trait manifestations
- [ ] Create consistency validation rules
  - What to check
  - How to measure
  - Thresholds
- [ ] Document inconsistency detection
  - Red flags
  - Common mistakes
  - Correction procedures
- [ ] Create automated check algorithm
- [ ] Provide validation examples

**1.1.4 Examples for Each Brand** (3.5 hours):
- [ ] Create examples for 8 B2C brands
  - 3 scenarios per brand
  - Show voice in action
  - Highlight unique traits
- [ ] Create examples for 2 B2B brands
  - 3 scenarios per brand
  - Professional tone
  - Business context
- [ ] Create examples for 4 B2B2C brands
  - 3 scenarios per brand
  - Dual perspective
  - Adaptable tone
- [ ] Create examples for 7 business units
  - 2 scenarios per unit
  - Service-oriented
- [ ] Create examples for 3 products
  - 2 scenarios per product
  - Feature-focused
- [ ] Total: 60+ complete examples

**Validation Checklist**:
- [ ] File has 600+ lines (200+ added)
- [ ] All adaptation rules documented
- [ ] Tone switching logic complete
- [ ] Consistency checks defined
- [ ] 60+ examples provided
- [ ] All 24 entities covered
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 11 hours  
**Assignee**: Brand Voice Specialist  
**Dependencies**: Phase 0 complete  
**Deliverable**: Enhanced BRAND-VOICE-PERSONALITY-MATRIX.md (600+ lines)

---

#### Task 1.2: Enhance INTERNAL-KNOWLEDGE-DISTRIBUTION.md

**Goal**: Expand internal knowledge distribution with access control (500+ lines from 300)

**Current State**: Basic distribution map (~300 lines)  
**Target State**: Comprehensive distribution system (500+ lines)

**Sub-Tasks**:

**1.2.1 Access Control Matrix** (2.5 hours):
- [ ] Create detailed role definitions
  - Employee (junior, mid, senior)
  - Manager (team lead, department head, director)
  - Executive (VP, C-level)
  - Partner (vendor, collaborator, investor)
  - Contractor (temporary, consultant)
- [ ] Define access levels per role
  - Read permissions
  - Write permissions
  - Approval permissions
  - Admin permissions
- [ ] Create entity-specific access rules
  - Brand-level access
  - Unit-level access
  - Division-level access
  - Holding-level access
- [ ] Document special access cases
  - Cross-department access
  - Temporary access
  - Emergency access
- [ ] Create access request procedures
  - How to request
  - Approval workflow
  - Duration limits

**1.2.2 Role-Based Permissions** (2 hours):
- [ ] Finance role permissions
  - Financial data access
  - Budget information
  - Cost structures
  - Revenue reports
- [ ] HR role permissions
  - Employee data
  - Performance reviews
  - Compensation info
  - Recruitment data
- [ ] Marketing role permissions
  - Campaign data
  - Customer insights
  - Market research
  - Brand assets
- [ ] Operations role permissions
  - Process documentation
  - SOPs
  - Quality metrics
  - Production data
- [ ] Executive role permissions
  - Strategic plans
  - Board materials
  - Financial summaries
  - All entity access
- [ ] Create permission inheritance rules
- [ ] Document permission conflicts resolution

**1.2.3 Escalation Workflows** (2 hours):
- [ ] Define escalation levels
  - Level 1: AI Assistant
  - Level 2: Team Member
  - Level 3: Team Lead
  - Level 4: Manager
  - Level 5: Director
  - Level 6: Executive
- [ ] Create escalation triggers
  - Complexity threshold
  - Urgency level
  - Permission required
  - Expertise needed
- [ ] Document escalation procedures
  - How to escalate
  - Information to include
  - Response time SLAs
  - Follow-up procedures
- [ ] Create escalation decision tree
- [ ] Provide 5 complete examples
  - Technical escalation
  - Financial escalation
  - Customer complaint escalation
  - Strategic decision escalation
  - Emergency escalation

**1.2.4 Collaboration Protocols** (2.5 hours):
- [ ] Cross-department collaboration
  - Request procedures
  - Approval workflows
  - Communication channels
  - Documentation requirements
- [ ] Cross-entity collaboration
  - Brand-to-brand
  - Unit-to-brand
  - Division-to-entity
  - Coordination procedures
- [ ] Knowledge sharing protocols
  - What to share
  - How to share
  - Update frequency
  - Version control
- [ ] Meeting protocols
  - Scheduling
  - Agenda requirements
  - Documentation
  - Follow-up
- [ ] Decision-making protocols
  - Who decides what
  - Approval requirements
  - Documentation
  - Communication
- [ ] Create collaboration templates
  - Request template
  - Meeting notes template
  - Decision log template

**Validation Checklist**:
- [ ] File has 500+ lines (200+ added)
- [ ] Access control matrix complete
- [ ] All roles defined
- [ ] Escalation workflows documented
- [ ] Collaboration protocols clear
- [ ] Examples provided
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 9 hours  
**Assignee**: Operations Lead  
**Dependencies**: Phase 0 complete  
**Deliverable**: Enhanced INTERNAL-KNOWLEDGE-DISTRIBUTION.md (500+ lines)



---

#### Task 1.3: Enhance EXTERNAL-KNOWLEDGE-DISTRIBUTION.md

**Goal**: Expand external knowledge distribution with personalization (500+ lines from 300)

**Current State**: Basic distribution map (~300 lines)  
**Target State**: Comprehensive customer-facing system (500+ lines)

**Sub-Tasks**:

**1.3.1 Customer Journey Automation** (2.5 hours):
- [ ] Map awareness stage automation
  - Trigger points
  - Content to deliver
  - Channels to use
  - Success metrics
- [ ] Map consideration stage automation
  - Trigger points
  - Content to deliver
  - Comparison tools
  - Success metrics
- [ ] Map decision stage automation
  - Trigger points
  - Incentives to offer
  - Urgency creation
  - Success metrics
- [ ] Map action stage automation
  - Purchase facilitation
  - Checkout optimization
  - Payment options
  - Success metrics
- [ ] Map retention stage automation
  - Follow-up sequences
  - Loyalty programs
  - Re-engagement campaigns
  - Success metrics
- [ ] Create stage transition automation
  - Detection algorithms
  - Transition triggers
  - Content adaptation
- [ ] Document automation workflows
  - n8n workflow examples
  - Trigger configurations
  - Action sequences

**1.3.2 Personalization Rules** (2.5 hours):
- [ ] Create demographic personalization
  - Age-based content
  - Gender-based content
  - Location-based content
  - Income-based content
- [ ] Create behavioral personalization
  - Browse history
  - Purchase history
  - Interaction patterns
  - Engagement level
- [ ] Create preference personalization
  - Stated preferences
  - Inferred preferences
  - Product preferences
  - Communication preferences
- [ ] Create contextual personalization
  - Time of day
  - Day of week
  - Season
  - Events/holidays
- [ ] Document personalization algorithm
  - Data collection
  - Analysis methods
  - Application rules
  - Privacy compliance
- [ ] Create personalization examples
  - 5 complete scenarios
  - Before/after comparison
  - Impact measurement

**1.3.3 Multi-Channel Orchestration** (2.5 hours):
- [ ] Define channel strategy
  - Website (role, content, automation)
  - Mobile app (role, content, automation)
  - WhatsApp (role, content, automation)
  - Instagram (role, content, automation)
  - TikTok (role, content, automation)
  - Email (role, content, automation)
  - SMS (role, content, automation)
- [ ] Create channel coordination rules
  - Message consistency
  - Timing coordination
  - Frequency management
  - Channel preference
- [ ] Document cross-channel journeys
  - Instagram → Website
  - WhatsApp → Purchase
  - Email → App
  - 5 complete journey maps
- [ ] Create channel performance metrics
  - Engagement rates
  - Conversion rates
  - ROI per channel
  - Attribution models
- [ ] Document orchestration workflows
  - Trigger-based orchestration
  - Time-based orchestration
  - Event-based orchestration

**1.3.4 Conversion Optimization** (2.5 hours):
- [ ] Create conversion funnel analysis
  - Awareness → Consideration (drop-off points)
  - Consideration → Decision (drop-off points)
  - Decision → Action (drop-off points)
  - Optimization opportunities
- [ ] Document optimization tactics
  - A/B testing framework
  - Personalization tactics
  - Urgency creation
  - Social proof
  - Incentive strategies
- [ ] Create conversion workflows
  - Cart abandonment recovery
  - Browse abandonment recovery
  - Post-purchase upsell
  - Referral programs
- [ ] Define conversion metrics
  - Conversion rate
  - Average order value
  - Customer lifetime value
  - Return on ad spend
- [ ] Create optimization playbook
  - Quick wins (10 tactics)
  - Medium-term improvements (5 tactics)
  - Long-term strategies (3 tactics)
- [ ] Provide 5 complete examples
  - Successful optimization cases
  - Before/after metrics
  - Implementation steps

**Validation Checklist**:
- [ ] File has 500+ lines (200+ added)
- [ ] Journey automation documented
- [ ] Personalization rules complete
- [ ] Multi-channel orchestration defined
- [ ] Conversion optimization included
- [ ] Examples provided
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Peer review completed

**Estimated Time**: 10 hours  
**Assignee**: Marketing Automation Specialist  
**Dependencies**: Phase 0 complete  
**Deliverable**: Enhanced EXTERNAL-KNOWLEDGE-DISTRIBUTION.md (500+ lines)

---

### PHASE 1 SUMMARY

**Total Tasks**: 3 tasks  
**Total Sub-Tasks**: 30+ sub-tasks  
**Total Estimated Time**: 30 hours (3-4 days with 1 person, 1-2 days with 2 people)  
**Total Lines to Add**: 600 lines

**Deliverables**:
1. ✅ Enhanced BRAND-VOICE-PERSONALITY-MATRIX.md (600+ lines, +200)
2. ✅ Enhanced INTERNAL-KNOWLEDGE-DISTRIBUTION.md (500+ lines, +200)
3. ✅ Enhanced EXTERNAL-KNOWLEDGE-DISTRIBUTION.md (500+ lines, +200)

**Success Criteria**:
- All 3 files enhanced and validated
- Total lines added: 600+
- All quality checks passed
- All examples provided
- No placeholders or TODOs
- Peer review completed
- Ready for Phase 2

---

### PHASE 2: Entity Creation (Priority-Based)

**Duration**: 10-15 days  
**Priority**: HIGH  
**Dependencies**: Phase 0 and Phase 1 complete

---

#### PRIORITY 1: B2C Brands (6 brands × 9 files = 54 files)

**Brands**: Mommylatory, Babylatory, Dermond, Sheluna, Fantastik, Rayklin  
**Duration**: 3-4 days  
**Total Files**: 54 files  
**Total Lines**: ~10,800 lines (54 × 200 average)

---

##### Task 2.1.1: Create Mommylatory Knowledge Base (9 files, ~1,800 lines)

**Brand Profile**:
- **Type**: B2C Skincare & Cosmetics
- **Target**: Pregnant women & new moms (25-40 years)
- **Voice**: Nurturing, Supportive, Knowledgeable
- **Tone**: Warm, caring, maternal
- **Emoji**: Moderate (💕👶🤱)

**Sub-Tasks**:

**2.1.1.1 Create INTERNAL-KB-MOMMYLATORY.md** (3 hours):
- [ ] Write metadata header (10 lines)
- [ ] Write internal overview (20 lines)
  - Purpose for mom care brand
  - Key focus: pregnancy, postpartum, baby care
  - Target internal users
- [ ] Document team structure (30 lines)
  - Brand team (5 roles)
  - Operations team (3 roles)
  - Responsibilities per role
- [ ] Document internal operations (80 lines)
  - Product development for moms
  - Marketing campaigns (pregnancy-focused)
  - Customer service (mom-specific issues)
  - Inventory management
  - Quality control (safety for moms/babies)
- [ ] Create 2 internal AI scenarios (60 lines)
  - Scenario 1: New product launch planning
  - Scenario 2: Customer complaint handling
  - Each with full conversation, data, actions, multiple choice
- [ ] Document KPIs & metrics (30 lines)
  - Business performance (4 metrics)
  - Operational efficiency (4 metrics)
  - Customer metrics (4 metrics)
  - Team performance (4 metrics)
- [ ] Document training & SOPs (20 lines)
  - Onboarding (4 weeks)
  - Ongoing training
- [ ] Add footer metadata (5 lines)
- [ ] Validate: 200-300 lines, no placeholders, brand voice consistent

**2.1.1.2 Create EXTERNAL-KB-MOMMYLATORY.md** (3 hours):
- [ ] Write metadata header (10 lines)
- [ ] Write welcome section (25 lines)
  - Warm greeting for moms
  - Brand introduction (who we are, what we do)
  - Tagline: "Menemani Perjalanan Keibuan Anda"
  - Mission statement
- [ ] Document benefits (40 lines)
  - Benefit 1: Safe for pregnancy (10 lines)
  - Benefit 2: Postpartum care (10 lines)
  - Benefit 3: Expert formulation (10 lines)
  - Benefit 4: Mom community (10 lines)
- [ ] Document shopping guide (35 lines)
  - Online: Shopee, Tokopedia, Website
  - Offline: Jakarta, Surabaya locations
  - Benefits of each channel
- [ ] Create 3 customer AI scenarios (90 lines)
  - Scenario 1: Stretch marks inquiry (30 lines)
  - Scenario 2: Safe products for breastfeeding (30 lines)
  - Scenario 3: Postpartum skincare routine (30 lines)
  - Each with full conversation, recommendations, tips, multiple choice
- [ ] Document promos & programs (25 lines)
  - Current promotions
  - Loyalty program for moms
- [ ] Add social media section (15 lines)
- [ ] Add FAQ (25 lines - 5 Q&A)
- [ ] Add footer metadata (5 lines)
- [ ] Validate: 200-300 lines, no placeholders, maternal voice

**2.1.1.3 Create brand-voice/BRAND-VOICE-MOMMYLATORY.md** (2 hours):
- [ ] Define voice attributes (30 lines)
  - Nurturing (detailed description)
  - Supportive (detailed description)
  - Knowledgeable (detailed description)
- [ ] Document tone variations (40 lines)
  - Pregnancy concerns: Extra gentle
  - Product inquiry: Helpful expert
  - Celebration: Joyful
  - Problem: Empathetic
- [ ] Create language style guide (30 lines)
  - Vocabulary: Maternal, reassuring
  - Sentence structure: Warm, complete
  - Formality: Friendly but expert
- [ ] Define emoji usage (20 lines)
  - Moderate usage
  - Preferred emojis: 💕👶🤱🌸✨
  - When to use, when not to
- [ ] Provide good vs bad examples (40 lines)
  - 5 good examples
  - 5 bad examples
  - Explanations
- [ ] Document context adaptations (20 lines)
- [ ] Validate: 150-250 lines, clear guidelines

**2.1.1.4 Create brand-knowledge/BRAND-IDENTITY-MOMMYLATORY.md** (2 hours):
- [ ] Define brand essence (25 lines)
  - Core identity
  - Brand promise
  - Emotional connection
- [ ] Document core values (30 lines)
  - Safety first
  - Expert care
  - Mom empowerment
  - Community support
  - Natural ingredients
- [ ] Describe visual identity (30 lines)
  - Colors: Soft pink, cream, gold
  - Typography
  - Imagery style
  - Packaging design
- [ ] Define brand positioning (30 lines)
  - Market position
  - Competitive advantage
  - Target segment
  - Price positioning
- [ ] Tell brand story (40 lines)
  - Origin story
  - Founder's journey
  - Mission evolution
  - Milestones
- [ ] Document differentiation (25 lines)
  - vs Competitors
  - Unique selling points
- [ ] Validate: 150-250 lines

**2.1.1.5 Create marketing-knowledge/MARKETING-STRATEGY-MOMMYLATORY.md** (2 hours):
- [ ] Define marketing objectives (30 lines)
  - Awareness goals
  - Consideration goals
  - Conversion goals
  - Retention goals
- [ ] Document target campaigns (40 lines)
  - Pregnancy campaign
  - Postpartum campaign
  - Baby care campaign
  - Mom community campaign
- [ ] Create channel strategy (35 lines)
  - Instagram (content, frequency)
  - TikTok (content, frequency)
  - WhatsApp (usage)
  - Website (role)
  - Offline (events)
- [ ] Define budget allocation (25 lines)
  - Digital ads: 40%
  - Content creation: 25%
  - Influencer: 20%
  - Events: 10%
  - Other: 5%
- [ ] Document content strategy (30 lines)
  - Content pillars
  - Content calendar
  - Content formats
- [ ] Define KPIs (20 lines)
  - Reach, engagement, conversion
  - Targets per metric
- [ ] Validate: 150-250 lines

**2.1.1.6 Create customer-segment/TARGET-AUDIENCE-MOMMYLATORY.md** (2 hours):
- [ ] Document demographics (30 lines)
  - Age: 25-40
  - Gender: Female
  - Location: Urban Indonesia
  - Income: Middle to upper
  - Education: College+
- [ ] Document psychographics (30 lines)
  - Values: Family, health, safety
  - Lifestyle: Active, health-conscious
  - Interests: Parenting, wellness
  - Concerns: Baby safety, self-care
- [ ] Create customer personas (50 lines)
  - Persona 1: First-time mom (25 lines)
  - Persona 2: Experienced mom (25 lines)
  - Each with: Name, age, background, goals, pain points, behavior
- [ ] Map customer journey (40 lines)
  - Awareness stage
  - Consideration stage
  - Decision stage
  - Purchase stage
  - Loyalty stage
- [ ] Document pain points (30 lines)
  - Pregnancy concerns
  - Postpartum challenges
  - Product safety worries
  - Time constraints
- [ ] Validate: 150-250 lines

**2.1.1.7 Create product-knowledge/PRODUCT-CATALOG-MOMMYLATORY.md** (2.5 hours):
- [ ] Document product categories (30 lines)
  - Pregnancy skincare
  - Postpartum care
  - Stretch mark treatment
  - Breastfeeding support
  - Baby care
- [ ] Create product specifications (60 lines)
  - Product 1: Stretch Mark Cream (15 lines)
    * Name, price, size
    * Ingredients
    * Benefits
    * Usage instructions
  - Product 2: Pregnancy Glow Serum (15 lines)
  - Product 3: Postpartum Recovery Oil (15 lines)
  - Product 4: Nursing Balm (15 lines)
- [ ] Define pricing structure (25 lines)
  - Price ranges per category
  - Bundle pricing
  - Subscription pricing
- [ ] Document product benefits (35 lines)
  - Safety for pregnancy
  - Natural ingredients
  - Dermatologist-tested
  - Results timeline
- [ ] Create usage instructions (30 lines)
  - When to use
  - How to use
  - Frequency
  - Tips for best results
- [ ] Validate: 150-250 lines, realistic prices

**2.1.1.8 Create sales-knowledge/SALES-STRATEGY-MOMMYLATORY.md** (2 hours):
- [ ] Document sales process (40 lines)
  - Lead generation
  - Qualification
  - Consultation
  - Recommendation
  - Closing
  - Follow-up
- [ ] Define sales channels (30 lines)
  - E-commerce (Shopee, Tokopedia)
  - Website (direct)
  - Offline (stores, events)
  - Resellers
- [ ] Set sales targets (25 lines)
  - Monthly targets
  - Quarterly targets
  - Annual targets
  - Per channel breakdown
- [ ] Create sales scripts (40 lines)
  - Opening script
  - Product presentation
  - Objection handling
  - Closing script
- [ ] Document objection handling (35 lines)
  - "Too expensive" → Value justification
  - "Not sure if safe" → Safety evidence
  - "Need to think" → Urgency creation
  - "Trying competitor" → Differentiation
  - "No time" → Convenience emphasis
- [ ] Validate: 150-250 lines

**2.1.1.9 Create operations/OPERATIONS-MANUAL-MOMMYLATORY.md** (2 hours):
- [ ] Document SOPs (50 lines)
  - Order processing
  - Inventory management
  - Quality control
  - Packaging
  - Shipping
- [ ] Define workflows (40 lines)
  - Order-to-delivery workflow
  - Customer service workflow
  - Returns/refunds workflow
  - Complaint resolution workflow
- [ ] Create quality control procedures (30 lines)
  - Ingredient verification
  - Safety testing
  - Packaging inspection
  - Expiry date management
- [ ] Document logistics (30 lines)
  - Shipping partners
  - Delivery times
  - Tracking procedures
  - Special handling (temperature-sensitive)
- [ ] Define customer service protocols (40 lines)
  - Response time SLAs
  - Escalation procedures
  - Communication templates
  - Issue resolution steps
- [ ] Validate: 150-250 lines

**Validation Checklist for Mommylatory**:
- [ ] All 9 files created
- [ ] Total lines: ~1,800 (200-300 per main file, 150-250 per sub-file)
- [ ] Brand voice consistent (nurturing, supportive, knowledgeable)
- [ ] Tone appropriate (warm, caring, maternal)
- [ ] Multiple choice in all AI scenarios
- [ ] Realistic data (products, prices, metrics)
- [ ] No placeholders
- [ ] Markdown format valid
- [ ] Cross-references correct
- [ ] Peer review completed

**Estimated Time**: 20 hours  
**Assignee**: Content Creator + Brand Specialist  
**Dependencies**: Phase 0, Phase 1 complete  
**Deliverable**: Complete Mommylatory KB (9 files, ~1,800 lines)

