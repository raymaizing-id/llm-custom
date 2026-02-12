---
title: Haze Futuristic AI Theme Guide
created: 2026-02-12
updated: 2026-02-12
status: active
tags: [obsidian, theme, documentation]
---

# Haze Futuristic AI Theme Guide

## Overview

**Haze Futuristic AI** is a custom dark theme designed specifically for coders, programmers, AI engineers, and professional editors. It combines modern aesthetics with functional design to create the perfect environment for technical work.

## Theme Philosophy

- **Dark Modern Futuristic**: Deep space color palette with cyan accents
- **Minimalist**: Clean design without unnecessary elements
- **Professional**: Optimized for coding and technical documentation
- **Lightweight**: GPU-accelerated with smooth transitions
- **Accessible**: High contrast and clear focus indicators

## Color Palette

### Background Colors
- Primary: `#0a0e14` (Deep Space)
- Secondary: `#161b22` (Dark Gray)
- Code Background: `#161b22`

### Text Colors
- Normal: `#c9d1d9` (Light Gray)
- Muted: `#8b949e` (Medium Gray)
- Accent: `#58a6ff` (Cyan Blue)

### Syntax Highlighting
- Keywords: `#ff7b72` (Red)
- Functions: `#d2a8ff` (Purple)
- Strings: `#a5d6ff` (Light Blue)
- Tags: `#7ee787` (Green)
- Properties: `#79c0ff` (Cyan)
- Comments: `#8b949e` (Gray)

## Features

### 1. Full Width Layout
- No artificial line length restrictions
- Utilizes entire screen width
- Perfect for wide code blocks and tables

### 2. Optimized Typography
- Font: Inter for text, JetBrains Mono for code
- Size: 16px base (adjustable)
- Line Height: 1.6 for readability

### 3. Enhanced Code Blocks
- Syntax highlighting for multiple languages
- Clear borders and backgrounds
- Horizontal scrolling for long lines
- Monospace font optimized for coding

### 4. Plugin Integration
- **Dataview**: Styled tables with hover effects
- **Tasks**: Custom checkboxes with smooth animations
- **Graph View**: Futuristic node colors
- **Search**: Highlighted results with accent colors

### 5. Responsive Design
- Adapts to different screen sizes
- Mobile-friendly (tablets and phones)
- Print-optimized styles

### 6. Performance
- GPU acceleration for smooth scrolling
- Optimized transitions (cubic-bezier)
- Minimal repaints and reflows

## Installation

The theme is already installed and activated in your Obsidian vault.

### Manual Installation (if needed)
1. Copy theme files to: `.obsidian/themes/haze-futuristic-ai/`
2. Open Obsidian Settings → Appearance
3. Select "Haze Futuristic AI" from theme dropdown

## Customization

### Change Accent Color
Edit `.obsidian/appearance.json`:
```json
{
  "accentColor": "#58a6ff"
}
```

### Adjust Font Size
Edit `.obsidian/appearance.json`:
```json
{
  "baseFontSize": 16
}
```

### Custom CSS Snippets
Add custom styles in: `.obsidian/snippets/`

## Theme Components

### Workspace
- Dark background with subtle borders
- Smooth tab transitions
- Active tab highlighting with accent color

### Sidebars
- File explorer with hover effects
- Active file highlighting
- Collapsible folders with indicators

### Editor
- Full-width content area
- Syntax highlighting for markdown
- Code blocks with language-specific colors
- Tables with hover effects
- Blockquotes with left border accent

### UI Elements
- Buttons with hover states
- Modals with rounded corners
- Status bar with muted colors
- Tags with background and borders

## Keyboard Shortcuts

The theme works seamlessly with all Obsidian hotkeys. Recommended shortcuts:

- `Ctrl+P`: Command palette
- `Ctrl+O`: Quick switcher
- `Ctrl+N`: New note
- `Ctrl+E`: Toggle edit/preview
- `Ctrl+,`: Settings

## Troubleshooting

### Theme Not Showing
1. Check if theme files exist in `.obsidian/themes/haze-futuristic-ai/`
2. Verify `appearance.json` has `"cssTheme": "haze-futuristic-ai"`
3. Restart Obsidian

### Colors Look Wrong
1. Ensure you're in dark mode (not light mode)
2. Check if CSS snippets are conflicting
3. Disable other themes

### Performance Issues
1. Disable unused plugins
2. Reduce number of open files
3. Clear cache (Settings → About → Clear cache)

## Compatibility

### Tested With
- Obsidian v1.0.0+
- Windows 10/11
- All core plugins
- Community plugins: Dataview, Tasks, Templater, Git

### Known Issues
None reported

## Updates

### Version 1.0.0 (2026-02-12)
- Initial release
- Full dark theme implementation
- Plugin integration (Dataview, Tasks)
- Performance optimizations
- Accessibility features

## Support

For issues or suggestions:
- GitHub: https://github.com/raymaizing-id/llm-custom
- Email: raymaizing@gmail.com

## Credits

- **Author**: Raymaizing AI Team
- **Inspired by**: GitHub Dark, Tokyo Night, Cybertron
- **Fonts**: Inter (Google Fonts), JetBrains Mono

## License

MIT License - Free to use and modify

---

**Enjoy your new futuristic coding environment!** 🚀
