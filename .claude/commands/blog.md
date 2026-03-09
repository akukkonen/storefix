---
description: Write an SEO-optimized blog post for the AccessFix website. Use when asked to create blog content, write about accessibility topics, or produce SEO content.
argument-hint: [topic or keyword]
allowed-tools: Read, Write, Grep, Glob, Bash(npm run build)
---

Write a blog post for the AccessFix Astro website about: $ARGUMENTS

## SEO requirements

1. Identify a primary keyword and 2-3 long-tail secondary keywords
2. Create frontmatter for the Astro content collection:
   ```yaml
   ---
   title: "..." # 50-60 chars, primary keyword near the start
   description: "..." # 150-160 chars, includes keyword
   date: YYYY-MM-DD
   tags: ["accessibility", ...] # 2-4 tags
   ---
   ```
3. Use H2s and H3s with keywords included naturally
4. 800-1500 words
5. Include internal links to `/support` or other posts where relevant
6. End with a CTA mentioning AccessFix

## Writing style — CRITICAL

Write like a knowledgeable person sharing what they know, NOT like an AI generating content. Follow these rules strictly:

**Never use these AI patterns:**
- "In today's digital landscape..." or any "In today's..." opener
- "Let's dive in" / "Let's explore" / "Let's take a look"
- "In this article, we'll..." or any meta-commentary about the article itself
- "It's important to note that..." / "It's worth mentioning..."
- "Whether you're a... or a..." false dichotomies
- "At the end of the day" / "In conclusion" / "To sum up"
- "The reality is..." / "The truth is..." / "Here's the thing..."
- Ending paragraphs with rhetorical questions
- Starting consecutive paragraphs with the same structure
- Bullet points for everything — use flowing prose primarily
- Generic filler sentences that could apply to any topic

**Do this instead:**
- Start with a specific fact, anecdote, or direct statement
- Write in first person plural ("we") or second person ("you") naturally
- Vary sentence length — some short, some long
- Be specific: cite real numbers, name real laws, reference real court cases
- Have opinions — take a stance, don't hedge everything
- Use contractions (don't, isn't, you'll)
- If a section is boring, cut it — don't pad word count
- Read it back: would a real person actually write this? If not, rewrite.

**Voice:** Practical, direct, slightly opinionated. We're experts who want merchants to succeed, not marketers trying to sound smart.

**Audience:** Shopify merchants, not developers. Plain English, actionable advice.

## Save and verify

Save to `src/content/blog/[slug].md` with a URL-friendly slug. Run `npm run build` to verify.
