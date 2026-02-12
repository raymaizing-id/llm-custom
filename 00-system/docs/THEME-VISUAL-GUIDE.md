---
title: Haze Futuristic AI - Visual Guide
created: 2026-02-12
updated: 2026-02-12
status: active
tags: [obsidian, theme, visual-guide]
---

# Haze Futuristic AI - Visual Guide

> Visual reference untuk theme "Haze Futuristic AI"

---

## 🎨 Color Showcase

### Background Colors

```
Deep Space Primary:    ████████  #0a0e14
Dark Gray Secondary:   ████████  #161b22
Code Background:       ████████  #161b22
Border Color:          ████████  #21262d
```

### Text Colors

```
Normal Text:           ████████  #c9d1d9
Muted Text:            ████████  #8b949e
Faint Text:            ████████  #6e7681
Accent Text:           ████████  #58a6ff
Accent Hover:          ████████  #79c0ff
```

### Syntax Colors

```
Keywords (if, for):    ████████  #ff7b72
Functions:             ████████  #d2a8ff
Strings:               ████████  #a5d6ff
Tags (HTML):           ████████  #7ee787
Properties:            ████████  #79c0ff
Comments:              ████████  #8b949e
```

### Status Colors

```
Success:               ████████  #3fb950
Error:                 ████████  #f85149
Warning:               ████████  #d29922
```

---

## 📝 Typography Examples

### Headers

# H1 Header - Large & Bold
## H2 Header - Medium & Bold
### H3 Header - Standard Bold
#### H4 Header - Small Bold
##### H5 Header - Tiny Bold
###### H6 Header - Minimal Bold

### Text Styles

**Bold text** for emphasis
*Italic text* for subtle emphasis
~~Strikethrough~~ for deleted content
`inline code` for technical terms
[Link text](#) for hyperlinks

### Lists

- Unordered list item 1
- Unordered list item 2
  - Nested item 2.1
  - Nested item 2.2
- Unordered list item 3

1. Ordered list item 1
2. Ordered list item 2
   1. Nested item 2.1
   2. Nested item 2.2
3. Ordered list item 3

### Tasks

- [ ] Uncompleted task
- [x] Completed task
- [>] Forwarded task
- [<] Scheduled task
- [!] Important task
- [-] Cancelled task

---

## 💻 Code Examples

### Inline Code

Use `const variable = "value"` for inline code snippets.

### Code Blocks

#### JavaScript
```javascript
// Function example with syntax highlighting
function greetUser(name) {
  const greeting = `Hello, ${name}!`;
  console.log(greeting);
  return greeting;
}

// Call the function
greetUser("World");
```

#### Python
```python
# Class example with syntax highlighting
class AIAssistant:
    def __init__(self, name):
        self.name = name
    
    def greet(self):
        return f"Hello, I'm {self.name}!"

# Create instance
assistant = AIAssistant("Kiro")
print(assistant.greet())
```

#### JSON
```json
{
  "theme": "Haze Futuristic AI",
  "version": "1.0.0",
  "colors": {
    "background": "#0a0e14",
    "accent": "#58a6ff"
  },
  "features": [
    "Dark mode",
    "Syntax highlighting",
    "Full width"
  ]
}
```

#### YAML
```yaml
# Configuration example
theme:
  name: Haze Futuristic AI
  version: 1.0.0
  colors:
    background: "#0a0e14"
    accent: "#58a6ff"
  features:
    - Dark mode
    - Syntax highlighting
    - Full width
```

---

## 📊 Tables

### Simple Table

| Feature | Status | Priority |
|---------|--------|----------|
| Dark Mode | ✅ Active | High |
| Syntax Highlighting | ✅ Active | High |
| Full Width | ✅ Active | Medium |
| Responsive | ✅ Active | Medium |
| Print Support | ✅ Active | Low |

### Dataview Table Example

```dataview
TABLE
  status as "Status",
  priority as "Priority",
  tags as "Tags"
FROM "01-knowledge-base"
WHERE status = "active"
SORT priority DESC
```

---

## 📦 Callouts & Blockquotes

### Blockquote

> This is a blockquote with left border accent.
> It uses italic text and muted colors.
> Perfect for quotes and important notes.

### Callouts (if plugin installed)

> [!note] Note Callout
> This is a note callout for general information.

> [!tip] Tip Callout
> This is a tip callout for helpful suggestions.

> [!warning] Warning Callout
> This is a warning callout for caution messages.

> [!danger] Danger Callout
> This is a danger callout for critical alerts.

---

## 🔗 Links & References

### Internal Links

- [[00-system/DASHBOARD|Dashboard]]
- [[01-knowledge-base/README|Knowledge Base]]
- [[02-ai-bots/README|AI Bots]]

### External Links

- [GitHub Repository](https://github.com/raymaizing-id/llm-custom)
- [Obsidian Documentation](https://help.obsidian.md)
- [Theme Guide](00-system/docs/HAZE-THEME-GUIDE.md)

### Footnotes

Here's a sentence with a footnote[^1].

[^1]: This is the footnote content.

---

## 🏷️ Tags

#obsidian #theme #dark-mode #futuristic #coding #ai-engineer

---

## 📐 Layout Examples

### Two Column Layout (using HTML)

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<div>

#### Left Column
- Feature 1
- Feature 2
- Feature 3

</div>

<div>

#### Right Column
- Benefit 1
- Benefit 2
- Benefit 3

</div>

</div>

### Horizontal Rule

---

### Embedded Images (placeholder)

![Theme Screenshot](../media/images/theme-screenshot.png)

---

## 🎯 UI Elements

### Buttons (in modals)

- Primary Button (CTA)
- Secondary Button
- Danger Button
- Cancel Button

### Status Bar Items

- Word count: 1,234 words
- Character count: 5,678 chars
- Reading time: 5 min
- Git status: ✅ Synced

### File Explorer

```
📁 00-system
  📁 architecture
  📁 conversations
  📄 DASHBOARD.md
📁 01-knowledge-base
  📁 faqs
  📁 products
  📄 README.md
📁 02-ai-bots
  📁 custom-gpts
  📄 README.md
```

---

## 🔍 Search Results

### Example Search

**Query**: "theme"

**Results**:
1. **HAZE-THEME-GUIDE.md** - Theme documentation
   > ...custom **theme** designed for coders...
   
2. **appearance.json** - Obsidian settings
   > ..."cssTheme": "haze-futuristic-ai"...

---

## 📱 Responsive Design

### Desktop (1920x1080)
- Full width content
- Sidebars visible
- All features accessible

### Tablet (768x1024)
- Adjusted padding
- Collapsible sidebars
- Touch-friendly buttons

### Mobile (375x667)
- Single column layout
- Compact navigation
- Optimized font sizes

---

## 🖨️ Print Preview

When printing:
- White background
- Black text
- No sidebars
- No status bar
- Clean, professional output

---

## ⚡ Performance Indicators

### GPU Acceleration
- Smooth scrolling ✅
- Fast transitions ✅
- No lag ✅

### Load Time
- Theme CSS: < 50ms
- First paint: < 100ms
- Interactive: < 200ms

### Memory Usage
- Minimal footprint
- Efficient selectors
- Optimized animations

---

## 🎨 Customization Examples

### Change Accent Color

Edit `.obsidian/appearance.json`:
```json
{
  "accentColor": "#ff7b72"  // Red accent
}
```

### Adjust Font Size

Edit `.obsidian/appearance.json`:
```json
{
  "baseFontSize": 18  // Larger text
}
```

### Add Custom CSS Snippet

Create `.obsidian/snippets/custom.css`:
```css
/* Custom heading colors */
.markdown-preview-view h1 {
  color: #ff7b72;
}
```

---

## 📚 Plugin Integration Examples

### Dataview Query

```dataview
LIST
FROM "02-ai-bots"
WHERE status = "active"
SORT file.name ASC
```

### Tasks Query

```tasks
not done
path includes 01-knowledge-base
sort by priority
```

### Graph View

- Nodes: Cyan (#58a6ff)
- Links: Gray (#21262d)
- Highlights: Light cyan (#79c0ff)

---

## 🌟 Best Practices

### For Coders
- Use code blocks for all code snippets
- Leverage syntax highlighting
- Organize with headers
- Use tables for data

### For Writers
- Use blockquotes for emphasis
- Leverage callouts for notes
- Use lists for structure
- Add tags for organization

### For Editors
- Use full width for review
- Leverage search for finding
- Use graph for connections
- Add metadata for tracking

---

## 🔧 Troubleshooting Visual Issues

### Colors Not Showing
1. Check theme is activated
2. Verify dark mode is enabled
3. Clear cache and restart

### Font Not Loading
1. Check font files exist
2. Verify font-family in CSS
3. Use fallback fonts

### Layout Issues
1. Check viewport width
2. Verify CSS grid support
3. Test in different views

---

**Theme**: Haze Futuristic AI v1.0.0
**Status**: ✅ Active
**Last Updated**: 2026-02-12

---

*This visual guide demonstrates all theme features and styling options.*
