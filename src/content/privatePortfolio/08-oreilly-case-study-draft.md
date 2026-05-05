# DRAFT — O'Reilly Media Design System Case Study
# Review and correct before MDX build. Flag: [INFERRED] marks outcomes not sourced from resume/LinkedIn.

---

## 1. Metadata sidebar

| | |
|---|---|
| **Role** | Senior Software Engineer, Design System Tech Lead |
| **Company** | O'Reilly Media |
| **Timeline** | February 2018 – March 2020 |
| **Industry** | Publishing · EdTech |
| **Tools & Tech** | React · Storybook · GatsbyJS · MDX · JSDoc · CSS Design Tokens · NPM · Component-Driven Development |

`[IMAGE PLACEHOLDER]`

---

## 2. Opening paragraph

O'Reilly Media needed a design system that could hold together across 12 product teams and 20+ applications — a publishing company scaling its digital learning platform and running into the limits of building without shared foundations. I joined as a frontend engineer and grew into the tech lead role, owning the system end to end: component architecture, token infrastructure, documentation, contribution model, and the adoption culture that made it stick.

`[IMAGE PLACEHOLDER]`

---

## 3. Challenge — [EVOCATIVE HEADING TBD]

Without a shared component library, teams were solving the same problems in parallel — inconsistent UI patterns, duplicated accessibility work, and no common language between designers and engineers. There was no token architecture for theming, no unified documentation, and no clear path for teams to contribute back to shared foundations. [INFERRED: degree of inconsistency and duplication — specific pre-system metrics not available.]

`[IMAGE PLACEHOLDER]`

---

## 4. Approach — [EVOCATIVE HEADING TBD]

I approached this as an infrastructure and culture problem in equal measure. On the technical side, I designed a scalable CSS design token architecture as the theming backbone — a structural decision that made consistent, brand-aligned UI achievable across a heterogeneous application landscape without each team reinventing it. On the process side, I established Component-Driven Development with Storybook as the shared model, so components could be built, documented, and validated in isolation before landing in products.

Driving the roadmap meant balancing engineering rigor against the practical realities of 12 teams: sequencing what got built first, defining how contributions would work, and keeping the system from becoming a bottleneck rather than an accelerator.

`[IMAGE PLACEHOLDER]`

---

## 5. Execution — [EVOCATIVE HEADING TBD]

The component library grew from accessible, reusable React components — each built with Storybook, documented with usage guidelines, accessibility annotations, and design rationale. I established a unified documentation site using GatsbyJS, bringing together NPM package documentation, MDX content, JSDoc output, and detailed accessibility and design guidelines into a single source of truth teams could find and use.

The design token CSS architecture enabled seamless theming across all 20+ applications. A structural change could propagate brand updates without teams manually touching each product.

To close the loop on adoption, I set up contribution guidelines, office hours, and pairing sessions — and led workshops on inclusive design and accessibility for designers, engineers, and stakeholders across the organization.

`[IMAGE PLACEHOLDER]`

---

## 6. Impact — [EVOCATIVE HEADING TBD]

The system scaled to serve 12 teams and 20+ applications with a consistent, accessible, token-driven foundation. [INFERRED: reduced duplication and workflow efficiency gains across teams — specific metrics not available.] Adoption grew through tooling that worked and a contribution culture teams trusted.

`[PEER TESTIMONIAL PLACEHOLDER — source a quote from a teammate or stakeholder if available]`

`[IMAGE PLACEHOLDER]`

---

## 7. Conclusion

A component library is only as valuable as the documentation, governance, and community built around it. The infrastructure I put in place at O'Reilly gave teams a foundation they could build on, contribute to, and trust — across a product suite too large for any one team to hold together alone.

---

## 8. Related case study

→ EA Help Site Design System

---

# NOTES FOR KATHLEEN
# - Evocative headings (sections 3–6) are marked TBD — these need your input or approval
# - [INFERRED] items flagged above need your confirmation or correction
# - [PEER TESTIMONIAL PLACEHOLDER] — do you have a quote from a teammate or stakeholder?
# - All image placeholders need sourcing (Storybook screenshots, token docs, component library views, etc.)