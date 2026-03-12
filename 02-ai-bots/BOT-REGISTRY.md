# 🤖 AI Bot Registry
## Central Registry for All AI Assistants

> **Purpose**: Master registry untuk semua AI bots dalam ekosistem RayCorp  
> **Status**: Active  
> **Total Bots**: 50+  
> **Last Updated**: 2026-03-12

---

## 📋 BOT REGISTRY

### Custom GPT Bots (OpenAI)

| Bot ID | Bot Name | Entity | KB Files | Status | Owner |
|--------|----------|--------|----------|--------|-------|
| bot-001 | Adhwa Assistant | Adhwa Brand | adhwa/* | Active | Marketing |
| bot-002 | Babylatory Helper | Babylatory Brand | babylatory/* | Active | Marketing |
| bot-003 | Beautylatory Expert | Beautylatory Brand | beautylatory/* | Active | Marketing |
| bot-004 | Dermond Specialist | Dermond Brand | dermond/* | Active | Marketing |
| bot-005 | Fantastik Fun | Fantastik Brand | fantastik/* | Active | Marketing |
| bot-006 | Mommylatory Care | Mommylatory Brand | mommylatory/* | Active | Marketing |
| bot-007 | Rayklin Premium | Rayklin Brand | rayklin/* | Active | Marketing |
| bot-008 | Sheluna Night | Sheluna Brand | sheluna/* | Active | Marketing |

### Gemini Gem Bots (Google)

| Bot ID | Bot Name | Entity | KB Files | Status | Owner |
|--------|----------|--------|----------|--------|-------|
| bot-101 | Raymaizing Bot | Raymaizing Unit | raymaizing/* | Active | Sales |
| bot-102 | Ray Academy Tutor | Ray Academy Unit | ray-academy/* | Active | Education |
| bot-103 | LabCos Analyzer | LabCos Unit | labcos/* | Active | Operations |
| bot-104 | Raymedia Producer | Raymedia Unit | raymedia/* | Active | Media |
| bot-105 | Baleide Events | Baleide Unit | baleide/* | Active | Events |
| bot-106 | Raypack Logistics | Raypack Unit | raypack/* | Active | Logistics |
| bot-107 | Ebook Publisher | Ebook Unit | ebook/* | Active | Publishing |

### Division AI Bots (n8n)

| Bot ID | Bot Name | Division | KB Files | Status | Owner |
|--------|----------|----------|----------|--------|-------|
| bot-201 | STRATO | Strategy | strato/* | Active | Strategy |
| bot-202 | FINNY | Finance | finny/* | Active | Finance |
| bot-203 | NEXUS | Technology | nexus/* | Active | IT |
| bot-204 | HELIOS | Sustainability | helios/* | Active | Sustainability |
| bot-205 | RINDU | R&D | rindu/* | Active | R&D |
| bot-206 | MARKSY | Marketing | marksy/* | Active | Marketing |
| bot-207 | TEKO | Production | teko/* | Active | Operations |
| bot-208 | LUMINA | Legal | lumina/* | Active | Legal |
| bot-209 | AEGIS | Risk | aegis/* | Active | Risk |
| bot-210 | VERO | Customer Service | vero/* | Active | Support |
| bot-211 | CELESTIA | Communications | celestia/* | Active | PR |
| bot-212 | PPIC | Quality | ppic/* | Active | Quality |
| bot-213 | ORBIS | Supply Chain | orbis/* | Active | Logistics |
| bot-214 | QUANTA | Analytics | quanta/* | Active | Analytics |

### B2B Bot Bots

| Bot ID | Bot Name | Entity | KB Files | Status | Owner |
|--------|----------|--------|----------|--------|-------|
| bot-301 | CKK Solutions | CKK Brand | ckk/* | Active | B2B Sales |
| bot-302 | Myklon Industrial | Myklon Brand | myklon/* | Active | B2B Sales |

### B2B2C Bot Bots

| Bot ID | Bot Name | Entity | KB Files | Status | Owner |
|--------|----------|--------|----------|--------|-------|
| bot-401 | Demalink Platform | Demalink Brand | demalink/* | Active | Platform |
| bot-402 | Hailogy Solutions | Hailogy Brand | hailogy/* | Active | Platform |
| bot-403 | Inalovers Marketplace | Inalovers Brand | inalovers/* | Active | Platform |
| bot-404 | Mazra Creative | Mazra Brand | mazra/* | Active | Platform |

### Product Bot Bots

| Bot ID | Bot Name | Product | KB Files | Status | Owner |
|--------|----------|---------|----------|--------|-------|
| bot-501 | Custom AI Builder | Custom AI | custom-ai/* | Active | Product |
| bot-502 | Platform Assistant | Platform | platform/* | Active | Product |
| bot-503 | Ebook Publisher | Ebook Product | ebook/* | Active | Product |

---

## 🔄 BOT LIFECYCLE

### Bot States
- **Active**: Bot is live and operational
- **Inactive**: Bot is paused but can be reactivated
- **Development**: Bot is in development
- **Testing**: Bot is in testing phase
- **Deprecated**: Bot is no longer used

### Bot Update Cycle
```
Knowledge Base Update
    ↓ (Git Commit)
Webhook Trigger
    ↓ (GitHub)
n8n Workflow
    ↓ (Parse & Process)
Update Bot Config
    ↓ (API Call)
Bot Updated
    ↓ (<5 minutes)
All Platforms Synced ✅
```

---

## 📊 BOT STATISTICS

### By Platform
- **Custom GPT (OpenAI)**: 8 bots
- **Gemini Gem (Google)**: 7 bots
- **Division AI (n8n)**: 14 bots
- **B2B Bots**: 2 bots
- **B2B2C Bots**: 4 bots
- **Product Bots**: 3 bots
- **Total**: 38 bots (Phase 1-4)

### By Entity Type
- **Brands**: 14 bots
- **Units**: 7 bots
- **Divisions**: 14 bots
- **Products**: 3 bots
- **Total**: 38 bots

### Coverage
- **Brands**: 14/14 (100%)
- **Units**: 7/7 (100%)
- **Divisions**: 14/14 (100%)
- **Products**: 3/3 (100%)
- **Total Coverage**: 100%

---

## 🚀 BOT EXPANSION ROADMAP

### Phase 1-4 (Current)
- 38 bots created
- All entities covered
- Basic functionality

### Phase 2 (6 Months)
- 50+ bots
- 20+ new brands
- Advanced features

### Phase 3 (1 Year)
- 100+ bots
- 30+ brands
- Enterprise features

### Phase 4 (3 Years)
- 500+ bots
- 50+ brands
- Full ecosystem

---

## 📝 BOT MANAGEMENT

### Adding New Bot
1. Create bot configuration
2. Add to registry
3. Configure KB files
4. Set up integrations
5. Test bot
6. Deploy to production

### Updating Bot
1. Update KB files
2. Trigger webhook
3. n8n processes update
4. Bot config updated
5. All platforms synced

### Retiring Bot
1. Mark as deprecated
2. Notify users
3. Migrate to new bot
4. Archive configuration
5. Remove from active registry

---

## 🔗 BOT INTEGRATIONS

### Integration Points
- **Knowledge Base**: Git-based
- **Vector DB**: Embedding-based
- **n8n**: Workflow-based
- **Custom AI**: API-based
- **Platforms**: Webhook-based

### Integration Flow
```
KB Update
    ↓
Git Webhook
    ↓
n8n Workflow
    ├── Parse KB
    ├── Generate Embeddings
    ├── Update Vector DB
    ├── Update Bot Config
    └── Notify Platforms
    ↓
All Bots Updated
```

---

## 📞 BOT SUPPORT

### Bot Issues
- Report to: bot-support@raycorp.com
- Slack: #bot-support
- GitHub Issues: [Create Issue](https://github.com/raymaizing-id/llm-custom/issues)

### Bot Requests
- Request new bot: bot-requests@raycorp.com
- Slack: #bot-requests
- Form: [Bot Request Form](https://forms.raycorp.com/bot-request)

---

**Bot Registry Created**: 2026-03-12  
**Status**: Active  
**Total Bots**: 38  
**Coverage**: 100%  
**Owner**: AI Operations Team

