# Kiro System Instructions - AI Knowledge Management

> **CRITICAL**: Read this file at the start of EVERY session before doing any work

**Last Updated**: 2026-02-12
**Version**: 1.0

---

## 🎯 Core Mission

You are helping build and maintain a universal AI knowledge management system that:
- Syncs between Obsidian (local), Git (version control), Google Drive (collaboration), and n8n (orchestration)
- Updates multiple AI platforms (Custom GPT, Gemini Gem, Custom AI) from a single source
- Uses event-driven architecture (no polling) for ultra-lightweight performance
- Maintains clean, organized folder structure with relative paths

---

## 📁 Folder Structure Rules

### Root Level (ONLY these allowed)
```
.github/          # GitHub Actions workflows
.obsidian/        # Obsidian configuration (user manages)
00-inbox/         # User-managed action items and to-dos
00-system/        # System files (YOU manage)
01-knowledge-base/# Knowledge content (synced to AI bots)
02-ai-bots/       # AI bot configurations
03-media/         # Media files (images, videos, files)
04-database/      # Database schemas and migrations
05-integrations/  # API integrations and webhooks
99-archive/       # Archived content
99-area/          # User workspace (user manages)
README.md         # Project documentation
.gitignore        # Git ignore rules
```

### 00-system/ Structure
```
00-system/
├── architecture/     # System design documents
├── conversations/    # Conversation history (save all sessions here)
├── docs/            # User-facing documentation
├── internal/        # Internal system files (this file, audits, etc)
├── scripts/         # Python, JavaScript, shell scripts
└── templates/       # n8n workflows, config templates
```

### Critical Rules
- ❌ NEVER create files in root (except README.md, .gitignore)
- ❌ NEVER use absolute paths (always relative)
- ❌ NEVER create emoji folders (except in 00-inbox/ which user manages)
- ✅ ALWAYS organize files in proper folders
- ✅ ALWAYS use relative paths for portability
- ✅ ALWAYS save conversations to 00-system/conversations/
- ✅ ALWAYS save action items to 00-inbox/

---

## 🔄 Development Workflow

### When Starting a Session
1. Read this file (KIRO-SYSTEM-INSTRUCTION.md)
2. Read relevant context files based on task
3. Check current state (Git status, file structure)
4. Proceed with work

### When Creating Files
1. Determine correct folder based on file type
2. Use relative paths only
3. Follow naming conventions (kebab-case for files)
4. Add to appropriate subfolder (never root)

### When Ending a Session
1. Save conversation to 00-system/conversations/YYYY-MM-DD-topic.md
2. Update progress tracking if applicable
3. Commit changes with clear message

---

## 📝 File Creation Rules

### Conversation History
- **Location**: `00-system/conversations/`
- **Format**: `YYYY-MM-DD-topic-name.md`
- **Content**: Full conversation with context, decisions, outcomes

### Action Items / To-Dos
- **Location**: `00-inbox/`
- **Format**: `TASK-NAME.md` or `SETUP-PROGRESS.md`
- **Content**: Step-by-step instructions, checklists, progress tracking

### System Documentation
- **Location**: `00-system/docs/` (user-facing) or `00-system/internal/` (internal)
- **Format**: `DOCUMENT-NAME.md`
- **Content**: Architecture, guides, audits, verification

### Scripts
- **Location**: `00-system/scripts/`
- **Format**: `script-name.py`, `script-name.js`, `script-name.sh`
- **Content**: Executable scripts with proper headers

### Templates
- **Location**: `00-system/templates/`
- **Format**: `template-name.json`, `template-name.yaml`
- **Content**: n8n workflows, configuration templates

---

## 🧠 Context Reading Protocol

### Always Read First
1. `00-system/internal/KIRO-SYSTEM-INSTRUCTION.md` (this file)
2. Task-specific files based on user request

### For Setup Tasks
- `00-inbox/SETUP-PROGRESS.md` (current status)
- `00-inbox/SETUP-STEPS-SIMPLE.md` (detailed steps)
- `.github/workflows/sync-to-gdrive.yml` (GitHub Actions)
- `00-system/scripts/sync-to-gdrive.py` (Python sync)
- `00-system/scripts/google-apps-script.js` (Apps Script)

### For Architecture Tasks
- `00-system/architecture/core-system-design.md` (system design)
- `02-ai-bots/UNIVERSAL-CONFIG.md` (universal config)

### For Audit Tasks
- `00-system/internal/PRE-IMPLEMENTATION-AUDIT.md` (audit results)
- `00-system/internal/LOGIC-VERIFICATION.md` (verification)

---

## ✅ Quality Checklist

Before completing any task, verify:

### File Organization
- [ ] All files in correct folders (not root)
- [ ] Relative paths used everywhere
- [ ] Naming conventions followed
- [ ] No emoji folders created (except 00-inbox/)

### Code Quality
- [ ] Scripts have proper headers and comments
- [ ] Paths are relative (not absolute)
- [ ] Error handling included
- [ ] Tested (if applicable)

### Documentation
- [ ] Clear and concise
- [ ] Proper formatting (markdown)
- [ ] Examples included where helpful
- [ ] Updated timestamps

### Git
- [ ] Changes committed with clear message
- [ ] No sensitive data in commits
- [ ] .gitignore properly configured

---

## 🚫 Common Mistakes to Avoid

### File Organization
- ❌ Creating files in root directory
- ❌ Using absolute paths (D:\01-raymaizing\...)
- ❌ Creating emoji folders
- ❌ Mixing file types in wrong folders

### Development
- ❌ Not reading context files first
- ❌ Assuming state without checking
- ❌ Overwriting user-managed files
- ❌ Creating unnecessary files

### Communication
- ❌ Being overly verbose in summaries
- ❌ Repeating yourself unnecessarily
- ❌ Creating summary markdown files unprompted
- ❌ Bullet-point lists in final summaries (unless requested)

---

## 🎯 Success Criteria

### You're Doing Great When:
- ✅ Files are organized in correct folders
- ✅ Relative paths used consistently
- ✅ Conversations saved to proper location
- ✅ Action items in 00-inbox/
- ✅ Code is clean and well-commented
- ✅ Documentation is clear and concise
- ✅ User can easily understand next steps

### You Need to Improve When:
- ❌ Files created in root
- ❌ Absolute paths used
- ❌ Folder structure messy
- ❌ Conversations not saved
- ❌ Unclear documentation
- ❌ Overly verbose responses

---

## 🔑 Key Information to Remember

### Repository
- **URL**: https://github.com/raymaizing-id/llm-custom.git
- **Owner**: raymaizing-id
- **Email**: raymaizing@gmail.com

### Google Drive
- **Folder**: AI Knowledge Base
- **ID**: 1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO
- **URL**: https://drive.google.com/drive/folders/1ds2xM4Qjy0CRKKSoEebmL8ijYCSChDpO

### n8n
- **Instance**: https://n8n.raycorpgroup.com
- **Webhooks**: /webhook/ai-update, /webhook/gdrive-sync

### Architecture Decisions
- **Primary Sync**: Git (not Google Drive)
- **Event-Driven**: No polling, only triggers
- **Local Editor**: Obsidian
- **Collaboration**: Google Drive (periodic backup)
- **Orchestrator**: n8n

---

## 📚 Reference Documents

### Must Read
- This file (KIRO-SYSTEM-INSTRUCTION.md)
- 00-inbox/SETUP-PROGRESS.md (current status)
- 02-ai-bots/UNIVERSAL-CONFIG.md (universal config)

### Architecture
- 00-system/architecture/core-system-design.md
- 00-system/conversations/2026-02-12-initial-design.md

### Implementation
- .github/workflows/sync-to-gdrive.yml
- 00-system/scripts/sync-to-gdrive.py
- 00-system/scripts/google-apps-script.js
- 00-system/templates/n8n-universal-ai-update.json
- 00-system/templates/n8n-workflow-gdrive-to-git.json

---

## 🎓 Learning from Past Sessions

### What Worked Well
- Clean folder structure with numbered prefixes
- Relative paths for portability
- Event-driven architecture (no polling)
- Comprehensive documentation
- Step-by-step setup guides

### What to Improve
- Always read system instructions first
- Check current state before assuming
- Save conversations consistently
- Keep summaries minimal and concise
- Avoid creating unnecessary files

---

## 💡 Pro Tips

### Efficiency
- Read multiple files at once when possible
- Use relative paths from the start
- Organize as you go (don't leave cleanup for later)
- Test incrementally (don't wait until the end)

### Communication
- Be concise and direct
- Show, don't tell
- Provide examples when helpful
- Minimal summaries (2-3 sentences max)

### Quality
- Double-check folder locations
- Verify paths are relative
- Test scripts before committing
- Document decisions clearly

---

**Remember**: This system is designed to be ultra-lightweight, event-driven, and maintainable. Every decision should support these goals.

**Your Role**: Help the user build and maintain this system with excellence, clarity, and efficiency.

**Success**: When the user can easily understand, use, and maintain the system without confusion.

---

**Now you're ready to work! 🚀**
