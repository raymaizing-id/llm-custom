# 🏗️ Entity Template Generator - Scalability System

## Purpose: Sistem untuk membuat entity baru dengan mudah dan cepat

> **Vision**: Saat ada brand baru, unit bisnis baru, atau produk baru, tinggal jalankan template ini  
> **Goal**: 9 files lengkap dalam 1-2 jam  
> **Quality**: Production-ready, consistent, integration-ready

---

## 🎯 QUICK START GUIDE

### Langkah Cepat Membuat Entity Baru:

1. **Isi Entity Information Form** (5 menit)
2. **Generate 9 Files** menggunakan template (30 menit)
3. **Customize Content** sesuai entity spesifik (45 menit)
4. **Quality Check** dan validation (15 menit)
5. **Deploy** ke integration platforms (5 menit)

**Total Time**: ~1.5 jam untuk entity baru yang lengkap!

---

## 📋 STEP 1: ENTITY INFORMATION FORM

### Basic Information
```yaml
entity_info:
  # Basic Details
  name: "[Entity Name]"                    # e.g., "Mommylatory"
  name_uppercase: "[ENTITY-NAME]"          # e.g., "MOMMYLATORY"
  type: "[B2C/B2B/B2B2C/Unit/Product]"    # Choose one
  category: "[Skincare/Cosmetics/Service/etc]"
  
  # Hierarchy
  parent_company: "[Rayandra Corp/Lunaray Beauty Factory]"
  related_units: ["unit1", "unit2"]        # Optional
  related_brands: ["brand1", "brand2"]     # Optional
  
  # Target Market
  target_audience:
    primary: "[Description]"               # e.g., "Pregnant women & new moms"
    age_range: "[Age]"                     # e.g., "25-40"
    gender: "[Gender]"                     # e.g., "Female"
    location: ["City1", "City2"]           # e.g., ["Jakarta", "Surabaya"]
  
  # Brand Voice (from Brand Voice Matrix)
  voice:
    primary_attributes: ["Attr1", "Attr2", "Attr3"]  # e.g., ["Nurturing", "Supportive", "Knowledgeable"]
    tone: "[Tone description]"             # e.g., "Warm, caring, expert"
    language_style: "[Style]"              # e.g., "Maternal, reassuring"
    emoji_usage: "[Minimal/Moderate/Generous]"
  
  # Business Model
  business_model:
    revenue_streams: ["Stream1", "Stream2"]
    pricing_strategy: "[Strategy]"
    distribution_channels: ["Channel1", "Channel2"]
  
  # Key Differentiators
  unique_value_proposition: "[UVP]"
  competitive_advantages: ["Advantage1", "Advantage2"]
  
  # Integration
  ai_assistant_name: "[AI Name]"           # e.g., "Mommy Bot"
  platforms: ["Shopee", "Tokopedia", "Website", "etc"]
```

---

## 📝 STEP 2: GENERATE 9 FILES

### File 1: INTERNAL-KB-[ENTITY].md

**Template Structure**:
```markdown
# [Icon] [Entity Name] - Internal Knowledge Base (Employee)

> **Brand**: [Entity Name]  
> **Type**: [Type] [Category]  
> **Scope**: INTERNAL ONLY (Employees, Managers, Partners)  
> **AI Assistant**: [AI Name] Internal  
> **Access Level**: Employee, Manager, Owner

---

## 🎯 INTERNAL OVERVIEW

**[Entity Name] Internal KB** adalah knowledge base untuk internal team (marketing, sales, operations, customer service) yang berisi operational procedures, internal processes, team guidelines, dan business intelligence.

**Purpose**: [Specific purpose for this entity]

**Key Focus Areas**:
- [Focus 1]
- [Focus 2]
- [Focus 3]

---

## 👥 INTERNAL TEAM STRUCTURE

### Brand/Unit Team
- [Role 1]: [Responsibility]
- [Role 2]: [Responsibility]
- [Role 3]: [Responsibility]
- [Role 4]: [Responsibility]
- [Role 5]: [Responsibility]

### Operations Team
- [Role 1]: [Responsibility]
- [Role 2]: [Responsibility]
- [Role 3]: [Responsibility]

---

## 📋 INTERNAL OPERATIONS

### 1. [Operation Area 1]

**[Process Name]**:

[Detailed process description with steps]

Week -X: [Phase]
- [Activity 1]
- [Activity 2]
- [Activity 3]

Week -Y: [Phase]
- [Activity 1]
- [Activity 2]

**[Management Aspect]**:
- [Detail 1]
- [Detail 2]
- [Detail 3]

---

### 2. [Operation Area 2]

**[Aspect Name]**:
- [Detail 1]: [Description]
- [Detail 2]: [Description]
- [Detail 3]: [Description]

**[Monitoring Aspect]**:
- [Frequency]: [Items to monitor]
- [Frequency]: [Items to monitor]

**[Allocation/Distribution]**:
- [Channel 1]: [Percentage]
- [Channel 2]: [Percentage]
- [Channel 3]: [Percentage]

**[KPIs]**:
- [KPI 1]: [Target]
- [KPI 2]: [Target]
- [KPI 3]: [Target]

---

### 3. [Operation Area 3]

[Similar structure as above]

---

## 💬 INTERNAL AI INTERACTIONS

### Scenario 1: [Scenario Name]

```
System: "[Trigger event]"

[AI Name] Internal: "[Response with context]

📦 [SECTION TITLE]:

[Relevant data/information]

🎯 RECOMMENDED ACTIONS:

IMMEDIATE (Today):
1️⃣ [Action 1]
   - [Detail]
   - [Detail]

2️⃣ [Action 2]
   - [Detail]
   - [Detail]

3️⃣ [Action 3]
   - [Detail]
   - [Detail]

SHORT-TERM (This Week):
1️⃣ [Action 1]
2️⃣ [Action 2]
3️⃣ [Action 3]

💰 FINANCIAL IMPACT:

[Impact analysis]

📋 NEXT STEPS:

1️⃣ [Step 1]
2️⃣ [Step 2]
3️⃣ [Step 3]
4️⃣ [Step 4]

[Question with multiple choice]
1️⃣ [Option 1]
2️⃣ [Option 2]
3️⃣ [Option 3]
4️⃣ [Option 4]

[Urgency indicator]"
```

---

### Scenario 2: [Scenario Name]

[Similar structure as Scenario 1]

---

## 📊 INTERNAL KPIs & METRICS

### Business Performance
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]
- [Metric 4]: [Target]

### Operational Efficiency
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]
- [Metric 4]: [Target]

### Customer Metrics
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]
- [Metric 4]: [Target]

### Team Performance
- [Metric 1]: [Target]
- [Metric 2]: [Target]
- [Metric 3]: [Target]
- [Metric 4]: [Target]

---

## 🎓 INTERNAL TRAINING & SOPs

### New Employee Onboarding
- Week 1: [Activities]
- Week 2: [Activities]
- Week 3: [Activities]
- Week 4: [Activities]

### Ongoing Training
- Monthly: [Training type]
- Quarterly: [Training type]
- Annually: [Training type]
- Ad-hoc: [Training type]

---

**Document Created**: [Date]  
**Classification**: INTERNAL ONLY  
**Access**: Employees, Managers, Partners  
**Update Frequency**: [Frequency]  
**Owner**: [Owner role] [Entity Name]
```

**Target**: 200-300 lines

---

### File 2: EXTERNAL-KB-[ENTITY].md

**Template Structure**:
```markdown
# [Icon] [Entity Name] - External Knowledge Base (Customer)

> **Brand**: [Entity Name]  
> **Type**: [Type] [Category]  
> **Scope**: EXTERNAL (Customers, Prospects, Public)  
> **AI Assistant**: [AI Name] Customer  
> **Access Level**: Public

---

## 🎯 WELCOME TO [ENTITY NAME]

**[Greeting appropriate to brand voice]**

[Brand introduction paragraph - who you are, what you do]

**Tagline**: "[Tagline]"  
**Mission**: [Mission statement]

---

## 💎 MENGAPA [ENTITY NAME]?

### 1. [Benefit 1]
- [Detail 1]
- [Detail 2]
- [Detail 3]
- [Detail 4]

### 2. [Benefit 2]
- [Detail 1]
- [Detail 2]
- [Detail 3]
- [Detail 4]

### 3. [Benefit 3]
- [Detail 1]
- [Detail 2]
- [Detail 3]
- [Detail 4]

### 4. [Benefit 4]
- [Detail 1]
- [Detail 2]
- [Detail 3]
- [Detail 4]

---

## 🛍️ CARA BELANJA / CARA MENGGUNAKAN LAYANAN

### Online [Shopping/Service]

**[Platform 1]**: @[handle]
- [Feature 1]
- [Feature 2]
- [Feature 3]
- Rating [X]/5

**[Platform 2]**: [Store Name]
- [Feature 1]
- [Feature 2]
- [Feature 3]
- Rating [X]/5

**Website**: www.[entity].com
- [Feature 1]
- [Feature 2]
- [Feature 3]
- [Feature 4]

### Offline [Shopping/Service]

**[City 1]**:
- [Location 1]
- [Location 2]

**[City 2]**:
- [Location 1]
- [Location 2]

**[Benefits]**:
- [Benefit 1]
- [Benefit 2]
- [Benefit 3]
- [Benefit 4]

---

## 💬 CUSTOMER AI INTERACTIONS

### Scenario 1: [Scenario Name]

```
Customer: "[Customer query]"

[AI Name]: "[Greeting in brand voice]

[Response content with helpful information]

🎯 [SECTION TITLE]:

[Relevant information organized clearly]

📦 [PACKAGE/OFFER]:

[Details about offering]

✨ HASIL YANG BISA DIHARAPKAN:

Week 1-2:
- [Result 1]
- [Result 2]
- [Result 3]

Week 3-4:
- [Result 1]
- [Result 2]
- [Result 3]

💡 TIPS [RELEVANT]:

✅ DO:
- [Tip 1]
- [Tip 2]
- [Tip 3]

❌ DON'T:
- [Tip 1]
- [Tip 2]
- [Tip 3]

📱 CARA ORDER:

Mau order dimana?
1️⃣ [Option 1]
2️⃣ [Option 2]
3️⃣ [Option 3]
4️⃣ [Option 4]
5️⃣ [Option 5]

[Closing in brand voice]"
```

---

### Scenario 2: [Scenario Name]

[Similar structure as Scenario 1]

---

### Scenario 3: [Scenario Name]

[Similar structure as Scenario 1]

---

## 🎁 PROMO & PROGRAM

### Current Promotions

**[Promo 1]**
- [Detail 1]
- [Detail 2]
- [Detail 3]
- [Detail 4]

**[Promo 2]**
- [Detail 1]
- [Detail 2]
- [Detail 3]

### Loyalty Program

**[Program Name]**
- [How it works]
- [Benefits]
- [Tiers if applicable]

---

## 📱 FOLLOW US

**Instagram**: @[handle]
- [Content type 1]
- [Content type 2]
- [Content type 3]
- [Content type 4]

**TikTok**: @[handle]
- [Content type 1]
- [Content type 2]
- [Content type 3]
- [Content type 4]

**[Other Platform]**: [Handle/Link]
- [Content type 1]
- [Content type 2]
- [Content type 3]

---

## ❓ FAQ

**Q: [Question 1]**
A: [Answer]

**Q: [Question 2]**
A: [Answer]

**Q: [Question 3]**
A: [Answer]

**Q: [Question 4]**
A: [Answer]

**Q: [Question 5]**
A: [Answer]

---

**Last Updated**: [Date]  
**Classification**: PUBLIC  
**Access**: All Customers  
**Customer Service**: Available [Hours]
```

**Target**: 200-300 lines

---

### Files 3-9: Sub-Folder Files

**File 3: brand-voice/BRAND-VOICE-[ENTITY].md** (150-250 lines)
- Voice attributes definition
- Tone variations
- Language style guidelines
- Examples (good vs bad)
- Context-specific adaptations

**File 4: brand-knowledge/BRAND-IDENTITY-[ENTITY].md** (150-250 lines)
- Brand essence
- Core values
- Visual identity
- Brand positioning
- Brand story

**File 5: marketing-knowledge/MARKETING-STRATEGY-[ENTITY].md** (150-250 lines)
- Marketing objectives
- Target campaigns
- Channel strategy
- Budget allocation
- KPIs and metrics

**File 6: customer-segment/TARGET-AUDIENCE-[ENTITY].md** (150-250 lines)
- Demographics
- Psychographics
- Customer personas
- Customer journey
- Pain points and needs

**File 7: product-knowledge/PRODUCT-CATALOG-[ENTITY].md** (150-250 lines)
- Product categories
- Product specifications
- Pricing structure
- Product benefits
- Usage instructions

**File 8: sales-knowledge/SALES-STRATEGY-[ENTITY].md** (150-250 lines)
- Sales process
- Sales channels
- Sales targets
- Sales scripts
- Objection handling

**File 9: operations/OPERATIONS-MANUAL-[ENTITY].md** (150-250 lines)
- Standard operating procedures
- Workflows
- Quality control
- Logistics
- Customer service protocols

---

## 🎨 STEP 3: CUSTOMIZATION GUIDELINES

### Brand Voice Customization

**For B2C Brands**:
- Use friendly, conversational tone
- Moderate emoji usage
- Focus on benefits and emotions
- Customer-centric language

**For B2B Brands**:
- Professional, formal tone
- Minimal emoji usage
- Focus on ROI and partnerships
- Business-centric language

**For B2B2C Brands**:
- Adaptable tone (context-aware)
- Balanced emoji usage
- Focus on value for both audiences
- Dual-perspective language

**For Business Units**:
- Service-oriented tone
- Professional but approachable
- Focus on capabilities and expertise
- Solution-centric language

**For Products**:
- Feature-focused tone
- Technical but accessible
- Focus on use cases and benefits
- User-centric language

---

### Content Customization

**Realistic Data Requirements**:
- Product names: Specific, branded, realistic
- Prices: Market-appropriate, in Rupiah
- Metrics: Achievable, industry-standard
- Examples: Authentic, relatable
- Testimonials: Believable, specific

**Multiple Choice Requirements**:
- Every AI response must have 1-5 options
- Use emoji numbers (1️⃣, 2️⃣, 3️⃣, 4️⃣, 5️⃣)
- Options must be actionable
- Options must be clear and distinct

**Integration Hooks**:
- Add metadata for n8n routing
- Include API-friendly structure
- Use consistent naming conventions
- Add cross-references to related entities

---

## ✅ STEP 4: QUALITY CHECK

### Automated Checks
```bash
# Line count check
- INTERNAL-KB: 200-300 lines ✓
- EXTERNAL-KB: 200-300 lines ✓
- Sub-folder files: 150-250 lines each ✓

# Placeholder check
- No "[Entity]" placeholders ✓
- No "TODO" or "TBD" ✓
- No "[Insert...]" placeholders ✓

# Multiple choice check
- All AI scenarios have 1-5 options ✓
- All options use emoji numbers ✓

# Brand voice check
- Voice attributes consistent ✓
- Tone appropriate for context ✓
- Language style matches guidelines ✓
```

### Manual Checks
- [ ] Content accuracy verified
- [ ] Examples are realistic
- [ ] Data is market-appropriate
- [ ] Voice is consistent across all 9 files
- [ ] Integration hooks are present
- [ ] Cross-references are correct
- [ ] No grammatical errors
- [ ] Formatting is consistent

---

## 🚀 STEP 5: DEPLOYMENT

### n8n Deployment
1. Create workflow for entity
2. Add knowledge retrieval nodes
3. Configure routing logic
4. Test with sample queries
5. Deploy to production

### Custom GPT Deployment
1. Create new GPT
2. Upload 9 knowledge files
3. Configure system prompt
4. Add conversation starters
5. Test and publish

### Gemini Gem Deployment
1. Create new Gem
2. Upload knowledge files
3. Configure system instruction
4. Enable grounding
5. Test and deploy

### API Integration
1. Register entity in API
2. Configure endpoints
3. Test knowledge retrieval
4. Monitor performance
5. Document API usage

---

## 📊 SUCCESS METRICS

### Completeness
- ✅ All 9 files created
- ✅ All files meet line count requirements
- ✅ No placeholders or skeleton content

### Quality
- ✅ Content is accurate and realistic
- ✅ Brand voice is consistent
- ✅ Multiple choice in all AI scenarios
- ✅ Integration hooks present

### Integration
- ✅ Deployed to n8n
- ✅ Custom GPT created
- ✅ Gemini Gem configured
- ✅ API endpoints functional

### Performance
- ✅ Response time < 3 seconds
- ✅ Accuracy > 95%
- ✅ User satisfaction > 4.5/5

---

## 🔄 MAINTENANCE

### Regular Updates
- **Weekly**: Performance metrics review
- **Monthly**: Content accuracy check
- **Quarterly**: Major updates if needed
- **Annually**: Complete review and refresh

### Version Control
- Use Git for version tracking
- Tag major releases
- Document all changes
- Maintain changelog

### Feedback Loop
- Collect user feedback
- Analyze AI performance
- Identify improvement areas
- Implement updates

---

## 📝 EXAMPLE: Creating "Mommylatory"

### Step 1: Fill Form (5 minutes)
```yaml
entity_info:
  name: "Mommylatory"
  name_uppercase: "MOMMYLATORY"
  type: "B2C"
  category: "Mom Care"
  parent_company: "Lunaray Beauty Factory"
  target_audience:
    primary: "Pregnant women & new moms"
    age_range: "25-40"
    gender: "Female"
  voice:
    primary_attributes: ["Nurturing", "Supportive", "Knowledgeable"]
    tone: "Warm, caring, expert"
    language_style: "Maternal, reassuring"
    emoji_usage: "Moderate"
  ai_assistant_name: "Mommy Bot"
```

### Step 2: Generate Files (30 minutes)
- Use templates above
- Replace [Entity Name] with "Mommylatory"
- Replace [AI Name] with "Mommy Bot"
- Apply voice attributes

### Step 3: Customize (45 minutes)
- Add specific mom care products
- Create pregnancy-related scenarios
- Add postpartum care information
- Include breastfeeding support

### Step 4: Quality Check (15 minutes)
- Verify line counts
- Check for placeholders
- Validate multiple choice
- Test brand voice consistency

### Step 5: Deploy (5 minutes)
- Upload to n8n
- Create Custom GPT
- Configure Gemini Gem
- Test integrations

**Total Time**: ~1.5 hours ✅

---

## 🎯 QUICK REFERENCE

### File Naming Convention
```
INTERNAL-KB-[ENTITY-NAME].md
EXTERNAL-KB-[ENTITY-NAME].md
BRAND-VOICE-[ENTITY-NAME].md
BRAND-IDENTITY-[ENTITY-NAME].md
MARKETING-STRATEGY-[ENTITY-NAME].md
TARGET-AUDIENCE-[ENTITY-NAME].md
PRODUCT-CATALOG-[ENTITY-NAME].md
SALES-STRATEGY-[ENTITY-NAME].md
OPERATIONS-MANUAL-[ENTITY-NAME].md
```

### Line Count Requirements
- Main KB files: 200-300 lines
- Sub-folder files: 150-250 lines
- Total per entity: ~1,800 lines

### Must-Have Elements
- ✅ Multiple choice in every AI scenario
- ✅ Brand voice consistency
- ✅ Realistic data and examples
- ✅ No placeholders
- ✅ Integration hooks
- ✅ Cross-references

---

**Document Created**: 2026-02-21  
**Classification**: TEMPLATE SYSTEM  
**Owner**: RayCorp Knowledge Base Team  
**Status**: READY TO USE  
**Purpose**: Rapid entity creation with quality and consistency

