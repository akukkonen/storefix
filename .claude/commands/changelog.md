---
description: Generate a user-facing changelog from recent git commits. Use when asked to write release notes, changelogs, or summarize recent changes.
argument-hint: [range: e.g. "last 5 commits", "since last week"]
allowed-tools: Read, Bash(git log*), Bash(git diff*), Bash(git show*)
---

Generate a user-facing changelog entry.

Range: $ARGUMENTS (default: last 10 commits)

## Process

1. Run `git log --oneline` for the specified range
2. Read actual diffs with `git show` to understand what changed — commit messages can be misleading
3. Group changes:
   - **New** — new features or capabilities
   - **Improved** — enhancements to existing features
   - **Fixed** — bug fixes
4. Rewrite each for merchants, not developers:
   - Bad: "Fix blank dashboard when latest scan is stuck pending/running"
   - Good: "Fixed an issue where the dashboard could appear blank after a scan"
5. Skip internal-only changes (refactors, dev tooling) unless they affect the user experience

## Output format

```markdown
## [Date] — [Short version title]

### New
- ...

### Improved
- ...

### Fixed
- ...
```

Suggest a descriptive version title (e.g., "Faster Scans", "Dashboard Improvements").
