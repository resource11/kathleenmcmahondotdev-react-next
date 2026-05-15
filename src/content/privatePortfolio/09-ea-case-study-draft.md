# DRAFT — EA Help Site Design System (Paloma) Case Study

# Review and correct before MDX build. Flag: [INFERRED] marks outcomes not sourced from resume/LinkedIn.

---

## 1. Metadata sidebar

|                  |                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Role**         | Senior Design Technologist, Design Systems                                                                                               |
| **Company**      | Electronic Arts (EA)                                                                                                                     |
| **Timeline**     | November 2024 – Present                                                                                                                  |
| **Industry**     | Gaming · EdTech                                                                                                                          |
| **Tools & Tech** | React · TypeScript · Tailwind CSS · Figma · Storybook · Chromatic · Style Dictionary · DTCG · MCP · GitHub Copilot · 14-package monorepo |

`[IMAGE PLACEHOLDER]`

---

## 2. Opening paragraph

Paloma was created as part of an 18-month, org-wide initiative to overhaul help.ea.com — EA's global player support platform. The redesign brought together product, design, content, research, and engineering teams across the organization, with the design system being built and shipped in the middle of active product delivery. When the backlog grew large enough that the team needed design technologists to help stabilize, I joined as the primary cross-functional point of contact across design, engineering, PM, and partner teams — one of three technologists, and the only one working across both Figma and code.

`[IMAGE PLACEHOLDER]`

---

## 3. Challenge — [EVOCATIVE HEADING TBD]

Paloma was being built alongside a live product delivery. As teams adopted the system, inconsistencies between the component and Figma libraries surfaced. The backlog grew to include multi-theme support, a brand update, and ongoing bugs — none of which could introduce breaking changes into planned sprint cycles. The system launched with a single theme and expanded to support distinct brand experiences for Battlefield, FC, The Sims 4, and other EA titles as the 18-month redesign progressed.

`[IMAGE PLACEHOLDER]`

---

## 4. Approach — [EVOCATIVE HEADING TBD]

The work ran on two parallel tracks: stabilizing the system for teams already using it while building out new capabilities. Without feature flag software, I designed a deprecation strategy using an `isUpdatedBrand` prop — letting old and new brand coexist in the same components so teams could migrate without missing sprint commitments. For multi-theme support, I improved the existing token pipeline to handle multiple themes with consistent structure. Coordinating across design, engineering, PM, and partner teams kept both tracks moving without one blocking the other.

`[IMAGE PLACEHOLDER]`

---

## 5. Execution — [EVOCATIVE HEADING TBD]

The component and token work centered on a single source of truth across Figma and code. I maintained both the Figma and React component libraries in parallel, improving the token pipeline — Figma to Style Dictionary to CSS variables to Tailwind — to support multiple themes with consistent output. To cut the overhead of adding new themes, I used GitHub Copilot to build a utility that auto-generates the `THEME_VALUES` array and `Theme` type union directly from the theme directory.

On the infrastructure side, I led a zero-downtime Storybook 8 to 10 migration with MCP server integration and wired Chromatic visual regression testing into CI/CD. AI-readiness work included migrating to the DTCG token specification and producing machine-readable documentation.

Process work ran alongside the build: weekly office hours with Fan Care and partner teams, component delivery, backlog prioritization, and sprint planning, including supporting GitHub Copilot adoption across the team.

`[IMAGE PLACEHOLDER]`

---

## 6. Impact — [EVOCATIVE HEADING TBD]

The help.ea.com redesign launched July 30, 2025. In the first three weeks, the site served 6.5 million sessions with zero outages — including a traffic spike from the Battlefield 6 beta that doubled peak load. Contact rate dropped 70%, bounce rate fell 19%, and the SEO score improved from 75 to 92.

On the system side, the multi-theme token architecture reduced custom theme production time from six weeks to one week. [INFERRED: reduced manual overhead and improved cross-team delivery consistency — specific team metrics not available.]

`[PEER TESTIMONIAL PLACEHOLDER]`

`[IMAGE PLACEHOLDER]`

---

## 7. Conclusion

The Storybook 10 upgrade with MCP integration, Chromatic in CI/CD, and the machine readability roadmap I defined left Paloma ready for AI tooling without needing to revisit the foundation. The weekly office hours gave Fan Care a consistent support channel to keep shipping independently.

---

## 8. Related case study

→ O'Reilly Media Design System

---

# NOTES FOR KATHLEEN

# - Evocative headings (sections 3–6) are marked TBD — these need your input or approval

# - Section 3 (Challenge) flagged as draft — revisit

# - Section 4 (Approach) flagged as draft — revisit

# - [INFERRED] items flagged above need your confirmation or correction

# - [PEER TESTIMONIAL PLACEHOLDER] — do you have a quote from a teammate or stakeholder?

# - All image placeholders need sourcing

# - DTCG migration: noted as part of AI roadmap you defined, not yet completed
