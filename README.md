# AccessFix Website

Astro-based static site for [getaccessfix.app](https://getaccessfix.app). Deployed on Cloudflare Pages.

## Setup

```bash
npm install
npm run dev        # Local dev server at localhost:4321
npm run build      # Build to ./dist
npm run preview    # Preview production build
```

## Project Structure

```
src/
├── content/
│   └── blog/                # Blog posts as Markdown files
│       └── welcome.md
├── layouts/
│   ├── BaseLayout.astro     # Header, footer, nav, theme toggle, global styles
│   └── BlogLayout.astro     # Blog post wrapper
├── pages/
│   ├── index.astro          # Landing page
│   ├── privacy.astro        # Privacy policy
│   ├── support.astro        # Setup guide + FAQ
│   ├── contact.astro        # Contact page
│   └── blog/
│       ├── index.astro      # Blog listing at /blog
│       └── [slug].astro     # Individual post pages
├── content.config.ts        # Blog collection schema
public/
├── icon.svg                 # Favicon
└── logo.svg                 # Logo
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, jurisdictions, risk section, how it works, widget comparison, features, pricing, FAQ, CTA |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts (from `src/content/blog/*.md`) |
| `/privacy` | Privacy policy (Shopify App Store requirement) |
| `/support` | Setup guide + FAQ (Shopify App Store requirement) |
| `/contact` | Contact page with email |

## Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Short description for SEO and the blog listing."
date: 2026-03-15
tags: [accessibility, shopify]
---

Your content here. Standard Markdown.
```

The post will be available at `/blog/your-file-name`.

## Theme System

The site supports dark and light themes:

- **Dark by default** — uses brand tokens (`#08080a` bg, `#111114` surface)
- **Light mode** — clean white (`#ffffff` bg, `#f6f6f8` surface)
- **System preference detection** — respects `prefers-color-scheme`
- **Manual toggle** — sun/moon button in nav, persisted to `localStorage`
- **No flash** — inline `<head>` script sets theme before paint

### Theme variables

All colors are CSS custom properties on `[data-theme="dark"]` and `[data-theme="light"]`. Key variables:

| Variable | Dark | Light |
|----------|------|-------|
| `--bg` | `#08080a` | `#ffffff` |
| `--fg` | `#ededf0` | `#111118` |
| `--fg-muted` | `#b0b0ba` | `#4a4a58` |
| `--fg-faint` | `#8e8e9a` | `#717180` |
| `--accent` | `#22c55e` | `#15803D` |
| `--accent-text` | `#4ade80` | `#15803D` |
| `--surface` | `#111114` | `#f6f6f8` |
| `--border` | `#2a2a32` | `#d8d9e0` |

## Accessibility

The site targets WCAG 2.1 AA compliance:

- All color combinations pass 4.5:1 contrast ratio for normal text
- `--accent-text` variable used for small accent text (passes on surface backgrounds)
- Green CTA buttons use `font-size: 1.125rem; font-weight: 700` to meet large text threshold
- Skip link (`Skip to main content`) as first focusable element
- `<main id="main-content">` landmark wraps all page content
- `<nav aria-label="Main">` with labeled navigation
- All `<section>` elements have `aria-labelledby` with `id` on their headings
- `role="list"` on `<ul>` elements with `list-style: none` (Safari fix)
- `aria-hidden="true"` on decorative SVGs, emoji icons, and flag spans
- Theme toggle `aria-label` updates dynamically with current state
- `:focus-visible` outline on all interactive elements
- `@media (prefers-reduced-motion: reduce)` disables transitions

## Deploy to Cloudflare Pages

1. Push this repo to GitHub
2. In Cloudflare Dashboard > Pages > Create a project
3. Connect your GitHub repo
4. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Deploy

Subsequent pushes to `main` auto-deploy.

## DNS

- `www.storefix.app` or `getaccessfix.app` → Cloudflare Pages (this site)
- `app.storefix.app` → CNAME to Railway (Shopify app backend)
