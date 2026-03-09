---
description: Audit and optimize meta titles and descriptions across all website pages. Use when asked about SEO, meta tags, or page titles.
allowed-tools: Read, Edit, Glob, Grep, Bash(npm run build)
---

Audit meta titles and descriptions for every page on the AccessFix website.

## Process

1. Read every `.astro` page in `src/pages/` and check the `<title>` and `<meta name="description">` values. Also check `title` and `description` in blog post frontmatter under `src/content/blog/`.

2. Evaluate each against these criteria:
   - **Title**: 50-60 characters, primary keyword near start, brand at end
   - **Description**: 150-160 characters, compelling, includes keyword, has implicit CTA

3. Target keywords by page:
   - Homepage: "shopify accessibility", "WCAG compliance shopify"
   - Support: "accessfix setup guide", "shopify accessibility help"
   - Blog posts: topic-specific long-tail keywords
   - Privacy/Contact: skip SEO optimization

4. Output a table:
   | Page | Title (chars) | Description (chars) | Issues | Suggested fix |
   |------|--------------|--------------------|---------|----|

5. Apply fixes for any real improvements. Don't change things that are already fine. Verify build after.
