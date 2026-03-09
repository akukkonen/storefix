---
description: Run a WCAG 2.1 AA accessibility audit on the AccessFix website. Use when asked to check accessibility, audit the site, or find WCAG issues.
argument-hint: [page: homepage|blog|support|all]
allowed-tools: Read, Edit, Glob, Grep, Bash(npm run build)
---

Audit the AccessFix website for WCAG 2.1 AA compliance.

Scope: $ARGUMENTS (default: all pages)

## Checklist

### Structure
- Heading hierarchy (h1 → h2 → h3, no skipped levels, one h1 per page)
- Landmark regions (`<main>`, `<nav>`, `<header>`, `<footer>`)
- `lang` attribute on `<html>`
- Descriptive `<title>`

### Images & SVGs
- `<img>` has `alt` (meaningful or `alt=""` with `aria-hidden` if decorative)
- Decorative SVGs have `aria-hidden="true"`
- Meaningful SVGs have `role="img"` + `aria-label`

### Color & contrast
- Text meets 4.5:1 normal / 3:1 large text (≥18px or ≥14px bold)
- Calculate contrast for CSS custom properties against their actual backgrounds
- Information not conveyed by color alone

### Interactive elements
- All interactive elements keyboard-focusable
- `:focus-visible` styles defined
- Skip link present
- Link text is descriptive (no "click here")

### Forms
- Inputs have `<label>` or `aria-label`
- Required fields indicated accessibly

### Motion
- `prefers-reduced-motion` respected

## Output

Report as a table:
| Page | Issue | WCAG Criterion | Severity | Fix |
|------|-------|---------------|----------|-----|

Fix all issues found, then verify `npm run build` passes.
