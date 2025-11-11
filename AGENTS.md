# AGENTS.md - Emtiaze Company Website

## Build/Lint/Test Commands
- **Serve locally**: `python -m http.server 8000` (or any static server)
- **No build process**: Static HTML/CSS/JS files
- **No linting**: No linter configured
- **No tests**: No testing framework or tests present

## Architecture & Codebase Structure
- **Static multi-page website** for petroleum derivatives transportation company
- **Main page**: `index.html` (home with hero, about, services, projects, partners)
- **Subpages**: `pages/` directory with about.html, services.html, projects.html, quote.html, contact.html
- **Shared components**: Header/footer/menu injected via `shared.js` using DOM manipulation
- **Navigation system**: Hamburger menu (mobile) + fixed sidebar with labels (desktop) - no navigation in header
- **Modern UI**: CSS custom properties, dark mode, glassmorphism effects, smooth animations
- **Internationalization**: Complete English/Arabic support via `script.js` translations object (170+ keys), RTL layout for Arabic, persistent language selection, translated alt attributes and form placeholders
- **Assets**: `images/` for logos, project images, etc.
- **No backend**: Pure frontend static site
- **No frameworks**: Vanilla HTML/CSS/JavaScript

## Code Style Guidelines
- **JavaScript**: Vanilla ES6+, DOM manipulation, event listeners, IntersectionObserver for animations
- **Naming**: camelCase for variables/functions (e.g., `updateLanguage`, `loadSharedComponents`)
- **Imports**: No modules, scripts loaded via `<script>` tags in HTML
- **Formatting**: Consistent indentation, semicolons, multi-line object literals
- **Error handling**: Basic try-catch not present; forms use simple alerts on submit
- **CSS**: BEM-like classes, CSS Grid/Flexbox, responsive design with media queries
- **HTML**: Semantic elements, data-i18n attributes for translations, accessible structure
- **Comments**: Sparse, mostly for section headers (e.g., "// Translation system")
- **Functions**: Short functions, event-driven architecture, DOMContentLoaded for initialization
