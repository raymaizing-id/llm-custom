# AI Bots Registry

> Semua custom AI bots dan konfigurasinya

## 📁 Structure

```
02-ai-bots/
├── custom-gpts/       # Custom GPT configurations
├── gemini-gems/       # Gemini Gem configurations
├── custom-ai/         # Other custom AI configs
├── bot-registry.csv   # Master registry (imported from root)
└── README.md          # This file
```

## 🤖 Bot Types

### Custom GPTs
- Platform: OpenAI
- Configuration: JSON files
- Update Method: API

### Gemini Gems
- Platform: Google AI
- Configuration: YAML files
- Update Method: API

### Custom AI
- Platform: Various
- Configuration: JSON/YAML
- Update Method: Webhook/API

## 📋 Bot Registry Format

```csv
bot_id,bot_name,bot_type,specialty,knowledge_domains,status,api_endpoint
```

## 🔄 Knowledge Distribution

Bots automatically receive knowledge updates based on:
1. **Specialty matching** - Bot specialty matches content category
2. **Domain mapping** - Explicit domain assignments
3. **Priority level** - Core vs optional knowledge

## 📊 Bot-Knowledge Mapping

See: `../00-system/architecture/bot-knowledge-mapping.md`

---

**Auto-maintained by system**
