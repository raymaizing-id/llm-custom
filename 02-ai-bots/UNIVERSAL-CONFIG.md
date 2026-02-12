# Universal AI Bot Configuration

> Single configuration format untuk semua AI platforms (GPT, Gemini, Custom AI)

## 🎯 Konsep: One Config, All Platforms

**Prinsip**: Buat knowledge base sekali, distribute ke semua AI bots otomatis.

---

## 📋 Universal Knowledge Format

### Base Template (Markdown)

```markdown
---
# Metadata (YAML Front Matter)
id: knowledge-001
title: "Product Information - Product Name"
category: products
tags: [product, pricing, features]
platforms: [gpt, gemini, custom-ai]  # Which platforms to sync
priority: high  # high, medium, low
version: 1.0.0
last_updated: 2026-02-12
---

# Product Name

## Overview
Product description here...

## Features
- Feature 1
- Feature 2

## Pricing
Pricing information...

## Target Audience
Who is this for...
```

**Key**: YAML front matter untuk metadata, Markdown untuk content.

---

## 🤖 Platform-Specific Adapters

### 1. Custom GPT (OpenAI)

**Method**: Files API + Instructions

```javascript
// n8n workflow node
{
  "platform": "openai",
  "method": "files_api",
  "config": {
    "api_key": "{{$env.OPENAI_API_KEY}}",
    "assistant_id": "{{$json.bot_id}}",
    "file_purpose": "assistants"
  },
  "transform": {
    "format": "markdown",  // Keep as markdown
    "include_metadata": true
  }
}
```

**API Call**:
```bash
# Upload file
curl https://api.openai.com/v1/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F purpose="assistants" \
  -F file="@knowledge.md"

# Attach to assistant
curl https://api.openai.com/v1/assistants/$ASSISTANT_ID/files \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "file_id": "file-abc123"
  }'
```

### 2. Gemini Gem (Google AI)

**Method**: Context Caching + Grounding

```javascript
// n8n workflow node
{
  "platform": "gemini",
  "method": "context_caching",
  "config": {
    "api_key": "{{$env.GEMINI_API_KEY}}",
    "model": "gemini-1.5-pro",
    "cache_ttl": 3600  // 1 hour
  },
  "transform": {
    "format": "text",  // Convert to plain text
    "include_metadata": false
  }
}
```

**API Call**:
```bash
# Create cached content
curl https://generativelanguage.googleapis.com/v1beta/cachedContents \
  -H "Content-Type: application/json" \
  -H "x-goog-api-key: $GEMINI_API_KEY" \
  -d '{
    "model": "models/gemini-1.5-pro-001",
    "contents": [{
      "role": "user",
      "parts": [{
        "text": "Knowledge base content here..."
      }]
    }],
    "ttl": "3600s"
  }'
```

### 3. Custom AI (Any Platform)

**Method**: Webhook + Custom Format

```javascript
// n8n workflow node
{
  "platform": "custom",
  "method": "webhook",
  "config": {
    "webhook_url": "{{$json.webhook_url}}",
    "auth_type": "bearer",  // or "api_key", "basic"
    "auth_token": "{{$json.api_key}}"
  },
  "transform": {
    "format": "json",  // Custom JSON format
    "include_metadata": true
  }
}
```

**API Call**:
```bash
# Custom webhook
curl https://your-custom-ai.com/api/knowledge \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "knowledge-001",
    "title": "Product Information",
    "content": "...",
    "metadata": {
      "category": "products",
      "tags": ["product", "pricing"]
    }
  }'
```

---

## 🔄 Universal n8n Workflow

### Master Workflow: Knowledge Distribution

```json
{
  "name": "Universal AI Knowledge Distribution",
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "webhook",
      "parameters": {
        "path": "ai-update"
      }
    },
    {
      "name": "Read Knowledge File",
      "type": "readFile",
      "parameters": {
        "filePath": "={{$json.file_path}}"
      }
    },
    {
      "name": "Parse Metadata",
      "type": "function",
      "parameters": {
        "code": "// Extract YAML front matter\nconst content = $json.data;\nconst match = content.match(/^---\\n([\\s\\S]*?)\\n---/);\nconst yaml = match ? match[1] : '';\nconst markdown = content.replace(/^---\\n[\\s\\S]*?\\n---\\n/, '');\n\n// Parse YAML (simple parser)\nconst metadata = {};\nyaml.split('\\n').forEach(line => {\n  const [key, ...values] = line.split(':');\n  if (key && values.length) {\n    metadata[key.trim()] = values.join(':').trim();\n  }\n});\n\nreturn {\n  json: {\n    metadata: metadata,\n    content: markdown,\n    platforms: metadata.platforms || 'gpt,gemini,custom-ai'\n  }\n};"
      }
    },
    {
      "name": "Get Bot Registry",
      "type": "readFile",
      "parameters": {
        "filePath": "02-ai-bots/bot-registry.csv"
      }
    },
    {
      "name": "Filter Bots by Platform",
      "type": "function",
      "parameters": {
        "code": "// Filter bots based on platforms in metadata\nconst platforms = $json.platforms.split(',').map(p => p.trim());\nconst bots = $json.bots.filter(bot => platforms.includes(bot.platform));\nreturn bots.map(bot => ({ json: bot }));"
      }
    },
    {
      "name": "Switch by Platform",
      "type": "switch",
      "parameters": {
        "rules": [
          { "value": "gpt" },
          { "value": "gemini" },
          { "value": "custom-ai" }
        ]
      }
    },
    {
      "name": "Update GPT",
      "type": "httpRequest",
      "parameters": {
        "url": "https://api.openai.com/v1/assistants/{{$json.bot_id}}/files",
        "method": "POST",
        "headers": {
          "Authorization": "Bearer {{$env.OPENAI_API_KEY}}"
        },
        "body": {
          "file_id": "{{$json.file_id}}"
        }
      }
    },
    {
      "name": "Update Gemini",
      "type": "httpRequest",
      "parameters": {
        "url": "https://generativelanguage.googleapis.com/v1beta/cachedContents",
        "method": "POST",
        "headers": {
          "x-goog-api-key": "{{$env.GEMINI_API_KEY}}"
        },
        "body": {
          "model": "models/gemini-1.5-pro-001",
          "contents": [{
            "role": "user",
            "parts": [{ "text": "{{$json.content}}" }]
          }]
        }
      }
    },
    {
      "name": "Update Custom AI",
      "type": "httpRequest",
      "parameters": {
        "url": "={{$json.webhook_url}}",
        "method": "POST",
        "headers": {
          "Authorization": "Bearer {{$json.api_key}}"
        },
        "body": {
          "knowledge": "{{$json.content}}",
          "metadata": "{{$json.metadata}}"
        }
      }
    },
    {
      "name": "Log Success",
      "type": "function",
      "parameters": {
        "code": "console.log('Updated bot:', $json.bot_name);\nreturn { json: { success: true, bot: $json.bot_name } };"
      }
    }
  ]
}
```

---

## 📊 Bot Registry Format (CSV)

```csv
bot_id,bot_name,platform,specialty,webhook_url,api_key,status
gpt-001,Marketing Bot,gpt,marketing,,sk-...,active
gem-001,Product Bot,gemini,products,,AIza...,active
custom-001,Support Bot,custom-ai,support,https://api.example.com/kb,abc123,active
```

**Columns**:
- `bot_id`: Unique identifier
- `bot_name`: Display name
- `platform`: gpt | gemini | custom-ai
- `specialty`: Category (products, marketing, support, etc.)
- `webhook_url`: For custom AI (optional)
- `api_key`: Platform API key (optional, can use env vars)
- `status`: active | inactive

---

## 🎨 Knowledge Mapping Strategy

### Auto-mapping by Category

```javascript
// n8n function node
const categoryMapping = {
  'products': ['gpt-001', 'gem-001', 'custom-001'],
  'marketing': ['gpt-002', 'gem-002'],
  'support': ['custom-001', 'custom-002'],
  'faqs': ['gpt-001', 'gem-001', 'custom-001']
};

const category = $json.metadata.category;
const botIds = categoryMapping[category] || [];

return botIds.map(id => ({ json: { bot_id: id } }));
```

### Manual mapping via Front Matter

```markdown
---
platforms: [gpt, gemini]  # Only sync to GPT and Gemini
bot_ids: [gpt-001, gem-002]  # Specific bots
---
```

---

## 🚀 Implementation Steps

### Step 1: Setup Bot Registry

1. Open `02-ai-bots/bot-registry.csv`
2. Add all your bots:
   ```csv
   bot_id,bot_name,platform,specialty,webhook_url,api_key,status
   gpt-marketing,Marketing GPT,gpt,marketing,,sk-...,active
   gem-product,Product Gemini,gemini,products,,AIza...,active
   ```

### Step 2: Add Platform Credentials

In n8n, add environment variables:
```bash
OPENAI_API_KEY=sk-...
GEMINI_API_KEY=AIza...
CUSTOM_AI_KEY=abc123...
```

### Step 3: Create Knowledge Files

In `01-knowledge-base/`, create files with metadata:
```markdown
---
category: products
platforms: [gpt, gemini, custom-ai]
priority: high
---

# Your content here
```

### Step 4: Import n8n Workflow

1. Go to n8n
2. Import workflow (see template above)
3. Configure platform nodes
4. Activate workflow

### Step 5: Test

```bash
# Trigger update
curl -X POST https://n8n.raycorpgroup.com/webhook/ai-update \
  -H "Content-Type: application/json" \
  -d '{
    "file_path": "01-knowledge-base/products/product-1.md"
  }'
```

---

## 💡 Advanced Features

### 1. Selective Sync

```markdown
---
platforms: [gpt]  # Only sync to GPT
exclude_bots: [gpt-002]  # Exclude specific bot
---
```

### 2. Priority-based Updates

```javascript
// High priority = immediate update
// Medium = batch update (every 15 mins)
// Low = daily update

if ($json.metadata.priority === 'high') {
  // Update immediately
} else if ($json.metadata.priority === 'medium') {
  // Queue for batch
} else {
  // Queue for daily
}
```

### 3. Version Control

```markdown
---
version: 2.0.0
changelog: "Added new pricing information"
---
```

Track versions in database, allow rollback.

### 4. A/B Testing

```markdown
---
variant: A  # or B
test_group: pricing-test
---
```

Different content for different bot groups.

---

## 📊 Monitoring Dashboard

Simple JSON status file:

```json
{
  "last_update": "2026-02-12T10:30:00Z",
  "bots_updated": [
    {
      "bot_id": "gpt-001",
      "status": "success",
      "timestamp": "2026-02-12T10:30:05Z"
    },
    {
      "bot_id": "gem-001",
      "status": "success",
      "timestamp": "2026-02-12T10:30:08Z"
    }
  ],
  "errors": []
}
```

---

## ✅ Summary

**One Config → All Platforms**

1. ✅ Write knowledge once (Markdown + YAML)
2. ✅ Auto-distribute to all platforms
3. ✅ Platform-specific adapters handle differences
4. ✅ Universal n8n workflow
5. ✅ Single bot registry (CSV)
6. ✅ Zero manual work

**Supported Platforms:**
- ✅ Custom GPT (OpenAI)
- ✅ Gemini Gem (Google AI)
- ✅ Custom AI (Any platform with API/webhook)

**Result**: Buat knowledge sekali, semua AI bots auto-update! 🎉
