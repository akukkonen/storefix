---
description: Verify the AccessFix website deployment is working correctly. Use after pushing to check the live site.
argument-hint: [url, default: https://getaccessfix.app]
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, WebFetch
---

Verify the live deployment of the AccessFix website.

Target: $ARGUMENTS (default: https://getaccessfix.app)

## Checks

### 1. Page availability
Fetch each page and verify HTTP 200:
- `/` (homepage)
- `/blog`
- `/blog/welcome`
- `/support`
- `/privacy`
- `/contact`

### 2. Content verification
For each page check:
- `<title>` present and not empty
- `<meta name="description">` present
- No placeholder text ("Lorem ipsum", "[your app]", "TODO")
- Email shows `support@getaccessfix.app` (not gmail)

### 3. Internal links
Verify links with `href="/..."` point to pages that exist.

### 4. Assets
- `/icon.svg` loads
- Google Fonts CSS reference present in `<head>`

### 5. Waitlist forms
On homepage, verify:
- Email input exists
- Submit button exists
- formsubmit.co reference in script

## Report

```
✓ Homepage — 200, title OK, meta OK
✓ Blog — 200, title OK, meta OK
✗ Contact — [describe issue]
```

Flag issues and suggest fixes.
