# 🔗 Integration Guide
## Connecting Brain-Raymaizing to All Platforms

> **Purpose**: Complete guide untuk mengintegrasikan KB dengan semua platforms  
> **Status**: Active  
> **Platforms**: 10+  
> **Last Updated**: 2026-03-12

---

## 🎯 INTEGRATION ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────┐
│                   BRAIN-RAYMAIZING                          │
│              (Central Knowledge Base)                       │
│                                                             │
│  ├── 01-knowledge-base/                                   │
│  ├── _integrations/                                       │
│  ├── _knowledge-hub/                                      │
│  └── 00-fundamental/                                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
        ┌───────────────────┼───────────────────┐
        ↓                   ↓                   ↓
    ┌────────┐         ┌────────┐         ┌────────┐
    │  n8n   │         │ Custom │         │Gemini  │
    │Workflows         │  AI    │         │ Gems   │
    └────────┘         └────────┘         └────────┘
        ↓                   ↓                   ↓
    ┌────────┐         ┌────────┐         ┌────────┐
    │ Vector │         │ Custom │         │ Google │
    │  DB    │         │  GPT   │         │ Cloud  │
    └────────┘         └────────┘         └────────┘
        ↓                   ↓                   ↓
    ┌────────────────────────────────────────────────┐
    │         All AI Bots & Platforms               │
    │  (100% Consistent, Real-time Sync)            │
    └────────────────────────────────────────────────┘
```

---

## 🔌 PLATFORM INTEGRATIONS

### 1. n8n Workflows

**Purpose**: Automate knowledge propagation

**Setup**:
```json
{
  "workflow_name": "KB-Sync-Workflow",
  "trigger": "GitHub Webhook",
  "steps": [
    {
      "name": "Parse KB File",
      "action": "Read File from Git"
    },
    {
      "name": "Extract Entities",
      "action": "Parse Markdown"
    },
    {
      "name": "Generate Embeddings",
      "action": "Call Vector DB API"
    },
    {
      "name": "Update Bots",
      "action": "Call Bot APIs"
    },
    {
      "name": "Notify Platforms",
      "action": "Send Webhooks"
    }
  ]
}
```

**Configuration**: `01-knowledge-base/_integrations/n8n/workflow-mappings.json`

---

### 2. Custom AI (OpenAI GPT)

**Purpose**: Power Custom GPT bots

**Setup**:
```json
{
  "gpt_id": "bot-001",
  "gpt_name": "Adhwa Assistant",
  "system_prompt": "You are Adhwa Assistant...",
  "kb_files": [
    "01-knowledge-base/05-brands/b2c/adhwa/INTERNAL-KB-ADHWA.md",
    "01-knowledge-base/05-brands/b2c/adhwa/EXTERNAL-KB-ADHWA.md",
    "01-knowledge-base/00-fundamental/shared-knowledge/*"
  ],
  "update_trigger": "GitHub Webhook",
  "update_frequency": "real-time"
}
```

**Configuration**: `01-knowledge-base/_integrations/custom-ai/prompt-templates.md`

---

### 3. Gemini Gems (Google)

**Purpose**: Power Gemini Gem bots

**Setup**:
```json
{
  "gem_id": "bot-101",
  "gem_name": "Raymaizing Bot",
  "system_prompt": "You are Raymaizing Bot...",
  "kb_files": [
    "01-knowledge-base/04-unit-bisnis/raymaizing/INTERNAL-KB-RAYMAIZING.md",
    "01-knowledge-base/04-unit-bisnis/raymaizing/EXTERNAL-KB-RAYMAIZING.md",
    "01-knowledge-base/00-fundamental/shared-knowledge/*"
  ],
  "update_trigger": "GitHub Webhook",
  "update_frequency": "real-time"
}
```

**Configuration**: `01-knowledge-base/_integrations/custom-ai/gemini-config.json`

---

### 4. Vector Database

**Purpose**: Enable semantic search & RAG

**Setup**:
```json
{
  "vector_db": "Pinecone/Weaviate/Milvus",
  "embedding_model": "text-embedding-3-large",
  "index_name": "raycorp-kb",
  "namespace_strategy": "entity-based",
  "namespaces": [
    "brands",
    "units",
    "products",
    "divisions",
    "shared-knowledge"
  ],
  "update_trigger": "GitHub Webhook",
  "update_frequency": "real-time"
}
```

**Configuration**: `01-knowledge-base/_integrations/vector-db/schema.json`

---

### 5. REST API

**Purpose**: Enable programmatic access

**Endpoints**:
```
GET  /api/v1/kb/entities              # List all entities
GET  /api/v1/kb/entities/{id}         # Get entity KB
GET  /api/v1/kb/search                # Search KB
GET  /api/v1/bots                     # List all bots
GET  /api/v1/bots/{id}                # Get bot config
POST /api/v1/bots/{id}/sync           # Sync bot
GET  /api/v1/integrations             # List integrations
```

**Configuration**: `01-knowledge-base/_integrations/api/api-spec.yaml`

---

## 🔄 UPDATE PROPAGATION FLOW

### Step 1: Knowledge Base Update
```
Developer edits KB file
    ↓
git add .
git commit -m "Update KB"
git push origin main
```

### Step 2: Webhook Trigger
```
GitHub detects push
    ↓
Sends webhook to n8n
    ↓
n8n workflow triggered
```

### Step 3: Process Update
```
n8n reads KB file
    ↓
Parses entities & relationships
    ↓
Generates embeddings
    ↓
Updates Vector DB
```

### Step 4: Bot Update
```
n8n calls bot APIs
    ↓
Updates Custom GPT config
    ↓
Updates Gemini Gem config
    ↓
Updates n8n workflow
```

### Step 5: Platform Sync
```
n8n sends webhooks
    ↓
All platforms notified
    ↓
Platforms pull latest KB
    ↓
All bots updated
```

### Result: <5 Minutes
```
All AI bots & platforms
    ↓
100% Consistent
    ↓
Real-time Sync ✅
```

---

## 📊 INTEGRATION MATRIX

| Platform | Type | Update | Frequency | Status |
|----------|------|--------|-----------|--------|
| n8n | Workflow | Webhook | Real-time | ✅ |
| Custom GPT | API | Webhook | Real-time | ✅ |
| Gemini Gem | API | Webhook | Real-time | ✅ |
| Vector DB | API | Webhook | Real-time | ✅ |
| REST API | API | Webhook | Real-time | ✅ |
| Shopee | API | Scheduled | Hourly | ⏳ |
| Tokopedia | API | Scheduled | Hourly | ⏳ |
| WhatsApp | API | Scheduled | Hourly | ⏳ |
| Slack | API | Scheduled | Hourly | ⏳ |
| Discord | API | Scheduled | Hourly | ⏳ |

---

## 🚀 SETUP INSTRUCTIONS

### Prerequisites
- GitHub account with webhook access
- n8n instance (self-hosted or cloud)
- OpenAI API key (for Custom GPT)
- Google API key (for Gemini)
- Vector DB account (Pinecone/Weaviate/Milvus)

### Step 1: Setup GitHub Webhook
```
1. Go to GitHub repo settings
2. Click "Webhooks"
3. Add webhook:
   - Payload URL: https://your-n8n-instance/webhook/kb-sync
   - Content type: application/json
   - Events: Push events
   - Active: Yes
```

### Step 2: Setup n8n Workflow
```
1. Create new workflow in n8n
2. Add GitHub webhook trigger
3. Add steps:
   - Read KB file from Git
   - Parse Markdown
   - Generate embeddings
   - Update bot configs
   - Send notifications
4. Deploy workflow
```

### Step 3: Setup Custom GPT
```
1. Go to OpenAI GPT Builder
2. Create new GPT
3. Upload KB files
4. Set system prompt
5. Configure actions (optional)
6. Publish GPT
```

### Step 4: Setup Gemini Gem
```
1. Go to Google AI Studio
2. Create new Gem
3. Upload KB files
4. Set system prompt
5. Configure actions (optional)
6. Publish Gem
```

### Step 5: Setup Vector DB
```
1. Create Pinecone/Weaviate index
2. Configure embedding model
3. Create namespaces
4. Setup API keys
5. Test connection
```

---

## 🧪 TESTING INTEGRATIONS

### Test 1: KB Update
```
1. Edit a KB file
2. Commit & push
3. Check n8n workflow execution
4. Verify bot config updated
5. Test bot response
```

### Test 2: Bot Sync
```
1. Manually trigger bot sync
2. Check Vector DB updated
3. Verify embeddings generated
4. Test semantic search
```

### Test 3: Platform Sync
```
1. Update KB file
2. Wait <5 minutes
3. Check all platforms
4. Verify consistency
```

### Test 4: API Access
```
1. Call GET /api/v1/kb/entities
2. Call GET /api/v1/kb/search
3. Call GET /api/v1/bots
4. Verify responses
```

---

## 🔐 SECURITY CONSIDERATIONS

### Authentication
- GitHub: Personal access token
- OpenAI: API key
- Google: Service account
- Vector DB: API key
- REST API: JWT token

### Authorization
- Role-based access control (RBAC)
- Entity-level permissions
- Bot-level permissions
- API-level permissions

### Data Protection
- Encrypt sensitive data
- Use HTTPS for all APIs
- Implement rate limiting
- Log all access

---

## 📞 SUPPORT

### Integration Issues
- Email: integration-support@raycorp.com
- Slack: #integration-support
- GitHub Issues: [Create Issue](https://github.com/raymaizing-id/llm-custom/issues)

### Integration Requests
- Email: integration-requests@raycorp.com
- Slack: #integration-requests
- Form: [Integration Request Form](https://forms.raycorp.com/integration-request)

---

**Integration Guide Created**: 2026-03-12  
**Status**: Active  
**Platforms**: 10+  
**Update Frequency**: Real-time  
**Owner**: Integration Team

