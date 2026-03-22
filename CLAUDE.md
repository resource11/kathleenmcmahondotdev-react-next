Project context:

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
