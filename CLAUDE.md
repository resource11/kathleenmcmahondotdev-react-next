# Project context

- Astro site migration
- Package manager: pnpm
- Node managed via nvm
- Package updates prioritize pinned version numbers, never ^.
- Migration goal:
  - Astro v2 → v6
  - React 18 → 19
- Final Node target: 22 LTS
- Priority:
  - maintain functionality
  - minimal changes
  - isolate steps
- Human reviews and approves each step
- Human makes all git commits

## Skills

Portfolio case study pipeline (run in order for a new role):

1. `/capture-git-history` — export a repo's commit history to markdown
2. `/extract-case-study-content` — turn commit history + LinkedIn entry into narrative docs
3. `/new-case-study` — build the MDX page from the narrative docs

Supporting:

- `/astro-case-study-component` — add a new CaseStudy Astro component with colocated CSS

TODO: extract Astro site migration context above into a top-level `/astro-site-migration` skill, then slim this file down further.
