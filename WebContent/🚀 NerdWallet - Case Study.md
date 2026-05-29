# NerdWallet Currency Design System

> &nbsp;
> **TLDR**
>
> **The Problem**
> NerdWallet had a working design system that few teams trusted enough to use. Designers and engineers knew it existed, but inconsistent documentation, buried component variants, and unclear contribution paths made local workarounds faster than the official system.
>
> **The Platform**
> Currency transformed the design system from an internal reference site into organizational infrastructure: a named product, a documentation platform, a Figma library, a React component library, Storybook support, grid tooling, and a contribution model serving more than 10 product teams.
>
> **The Design Work**
> The critical architectural decision was a variants-first documentation model. It moved the most common user question to the top of every component page, separating designer and engineer needs while keeping one shared source of truth.
>
> **The Outcome**
> Within the first month after launch, weekly documentation visits tripled. Post-launch research showed 80% of employees found the style guide useful, and the new component templates cut the time needed to find component variants by more than 50%.
> &nbsp;

---

## 🔍 Project Overview

|  | |
|--|--|
| **Role** | Product Designer, Design Systems Strategist, Documentation Architect |
| **Responsibilities** | Research synthesis, documentation architecture, template design, system identity, contribution model, grid tooling, workshop support, adoption strategy, success metrics |
| **Focus** | Design System Adoption, Information Architecture, Component Documentation, Contribution Governance, Internal Product Marketing |
| **Platform** | Figma, React component library, Storybook, Chrome grid extension, nerdwallet.style documentation site |
| **Duration** | Design system refresh and adoption program |
| **Outcome** | Currency became a more useful and measurable internal platform, with 3× weekly documentation visits, 80% usefulness rating, and more than 50% faster component-variant discovery. |

`3× Weekly Visits` · `80% Useful Rating` · `50%+ Faster Variant Discovery` · `10+ Product Teams` · `4 Designers + 7 Engineers Interviewed`

---

# The System Had No Currency.

**A design system with no adoption is not infrastructure. It is expensive documentation waiting for someone to care.**

> &nbsp;
> **Asset → Hero**
>
> Full-width hero using the Currency documentation site from nerdwallet.style. Show the Currency wordmark, the geometric green cube identity, and a clean product-documentation landing page treatment. The visual should feel like a real internal product with a name, a destination, and a point of view, not a collection of reference pages. Use generous whitespace, clear typographic hierarchy, and a single strong headline: “Currency Design System.”
> &nbsp;

NerdWallet’s style guide had existed for roughly two years. The company was growing, consistency mattered more every quarter, and the design system was supposed to make teams faster. Instead, many teams worked around it.

The components were not the only issue. The system had awareness problems, documentation gaps, minimal contribution, and no strong internal identity. Designers and engineers knew the guide existed, but the experience disappointed them. They came looking for a specific component variation. They left when the answer took too long.

That was the real brief. Not “refresh the style guide.” Make the official path faster than the workaround.

---

## The Thirty-Second Breakpoint

**When a designer cannot find the right variant quickly, the system loses the argument.**

User research with 4 designers and 7 engineers clarified the failure. Most people were not unaware of the style guide. They were unwilling to interrupt real product work for a resource that made them hunt.

The primary job was simple: browse component variations. Yet that task was tedious. The pages carried too much unnecessary content, lacked the information designers needed, and made scanning harder than it should have been. Poor usability damaged the perceived reliability of the system itself.

That changed the strategy. The system did not need more explanation at the top. It needed the answer at the top. Variants first. Usage second. Implementation details where engineers could find them without forcing designers to read past them.

> &nbsp;
> **Asset → Research Finding**
>
> Create a split research board. Left side: a typographic quote card reading “Most users come to the style guide for viewing component variations.” Right side: a simple task breakdown showing the old experience as a long scan path and the new target as a fast decision path. Add a small footer with “Research: 4 designers, 7 engineers.” The impression should be specific and behavioral, not abstract.
> &nbsp;

---

## Variants Became the Front Door

**The documentation stopped behaving like a manual and started behaving like a decision surface.**

The central design move was structural. Each component page was reorganized around the way teams actually used it. Component variants moved to the top, where they could be scanned immediately. Designers could compare options without reading a wall of guidance first. Engineers could move into code and implementation details once the correct pattern was clear.

The new structure grouped information by persona and sorted it by user priority. Designers needed visual examples, behavior, and usage context. Engineers needed implementation notes, code references, and edge cases. Both groups needed the same truth, but not the same reading order.

To keep the system from becoming a custom page design exercise every time new guidance was added, the refresh introduced a scalable template model: Foundation, Component, and Pattern. Foundation pages handled core decisions. Component pages handled reusable UI. Pattern pages gave broader experience guidelines a proper home.

This was information architecture as operating leverage. Every future page became easier to create, easier to compare, and easier to maintain.

> &nbsp;
> **Asset → Documentation Architecture**
>
> Design a before-and-after spread. On the left, show a dense old component page with variants buried below explanatory content. On the right, show a Currency component template with variants displayed immediately in a clean grid, followed by usage, design guidance, and implementation content. Label the three template types beneath the redesigned side: Foundation, Component, Pattern. The reader should understand the architecture without reading the body copy.
> &nbsp;

---

## A Name Made It Real

**“The component library” described a folder. Currency gave the system institutional weight.**

Naming was not decoration. It was adoption infrastructure.

Before Currency, the system behaved like a shared internal resource. Useful in theory, easy to ignore in practice. A name gave it something teams could reference in meetings, link to in documentation, promote in workshops, and hold accountable over time.

Currency also fit the company. The word suggests value, exchange, shared acceptance, and daily use. A design system needs all four. It only works when teams agree that the same patterns carry value across different parts of the product.

The dedicated documentation destination reinforced the shift. A URL, a visual identity, and a recognizable product surface told the organization that the system had ownership. It was not a static archive. It was maintained infrastructure.

> &nbsp;
> **Asset → Currency Identity**
>
> Build a simple identity board showing the Currency name, green geometric cube artwork, nerdwallet.style URL, and a few documentation UI fragments. Keep it restrained and editorial. The goal is to show the naming decision as a product strategy move, not a logo exercise.
> &nbsp;

---

## The Grid Moved Into the Work

**Documentation can explain the standard. Tooling makes the standard harder to miss.**

The documentation site solved the reference problem. The tooling solved the behavior problem.

A Chrome extension brought NerdWallet’s grid directly onto live product pages. Designers and engineers no longer had to open a separate spec, remember column rules, or mentally compare a page against a diagram. The grid appeared inside the workflow, on top of the thing being evaluated.

The same logic extended into Figma. A system-aligned library made correct components available where designers were already working. This mattered because adoption rarely happens through discipline alone. It happens when the right choice costs less effort than the wrong one.

Currency became useful at the speed of real work.

> &nbsp;
> **Asset → Grid Tooling**
>
> Create a two-panel workflow mockup. Left: a NerdWallet product page in the browser without the grid. Right: the same page with the Currency grid overlay active through the Chrome extension, showing columns, gutters, and alignment. Add a small Figma library panel beside it with Currency components visible. The visual should communicate that the system is embedded in daily workflows, not trapped inside a documentation tab.
> &nbsp;

---

## Contribution Needed a Clear Door

**A small systems team cannot scale through heroics. Governance had to become part of the product.**

Currency also had to answer a quieter organizational question: how does a team contribute without creating chaos?

The previous model made contribution feel ambiguous. Teams did not always know whether a pattern belonged in the shared system, inside a local product library, or somewhere in between. That uncertainty slowed participation before it even started.

The contribution model created a practical decision path. Broadly reusable components moved toward Currency. Product-specific work stayed local. Unclear cases moved through office hours. The point was not bureaucracy. It was routing.

Adoption was treated as an internal product launch, not a policy memo. Roadshows, workshops, all-hands communication, quarterly roadmaps, and success metrics made Currency visible. The system needed marketing because adoption is a user behavior. You do not get it just because the resource exists.

> &nbsp;
> **Asset → Contribution Decision Tree**
>
> Create a clean flowchart titled “Should this live in Currency?” Branches should include: “Reusable across products” leading to Currency contribution, “Specific to one product” leading to local library, and “Unclear” leading to office hours. Add a small sidebar showing rollout channels: workshops, roadshows, roadmap, dashboard. The impression should be operational clarity.
> &nbsp;

---

## The System Earned Return Visits

**A return visit is a stronger signal than a launch announcement.**

The launch changed the system’s relationship with the organization. Weekly visits tripled. Employees reported that the refreshed style guide was useful at an 80% rate. The new component templates saved more than 50% of the time required to find component variants.

Those numbers matter because they measure behavior, not intent. Teams returned to a resource they had previously abandoned. Designers and engineers could complete the most common task faster. The documentation became a working surface instead of a static reference.

Currency did not become the standard because someone asked teams to use it. It became the standard because it lowered the cost of making the right decision.

> &nbsp;
> **Asset → Outcome Metrics**
>
> Design a four-stat metrics card using large typographic numbers: 3× weekly visits, 80% usefulness, 50%+ faster variant discovery, 10+ product teams. Under each number, include one short signal label. Keep the visual minimal, with Currency green used sparingly for emphasis.
> &nbsp;

---

## The Operating Cost Was the Lesson

**A design system is not a finished library. It is infrastructure with maintenance pressure.**

The refresh solved the adoption layer, but it also exposed the next constraint: contribution throughput.

The decision tree clarified where work belonged. It did not fully solve who had the capacity to review, refine, and ship every contribution. A small central systems team can create standards, but it cannot absorb unlimited product-team demand without a stronger distributed model.

The next evolution would be team-level system advocates. Not as ceremonial champions, but as accountable owners who could shepherd contribution quality closer to the work. The front door had been designed. The review pipeline needed the same rigor.

That is the honest lesson. Design systems do not fail only because components are missing. They fail when the operating model is weaker than the demand placed on it.

> &nbsp;
> **Asset → Operating Model**
>
> Create a simple maturity diagram. Stage 1: Central systems team owns everything. Stage 2: Currency creates templates, contribution paths, and measurement. Stage 3: Product-team advocates share ownership and reduce review bottlenecks. Use clean horizontal progression with one sentence under each stage.
> &nbsp;

---

## Portfolio Card

**NerdWallet Currency: Adoption Infrastructure**
NerdWallet had a functional design system that more than 10 product teams were not using with consistency. The failure was not missing UI. It was speed, trust, and unclear ownership. Currency reframed the style guide as an internal product: a named system with a dedicated documentation site, variants-first component pages, Foundation, Component, and Pattern templates, Figma and React library support, Storybook contribution workflows, a Chrome grid extension, and a contribution model built for scale. The result was measurable adoption: weekly documentation visits tripled, 80% of employees found the refreshed guide useful, and component-variant discovery became more than 50% faster. The system earned adoption by becoming faster than the workaround.

---

### Headline Story

- **The problem:** NerdWallet had a working style guide, but teams still built local variants because the official system was slower to use.
- **The finding:** Research with 4 designers and 7 engineers showed the core job was browsing component variations, yet the old pages made that task tedious.
- **The decision:** Currency turned an unnamed internal resource into a named product with a dedicated destination and stronger institutional identity.
- **The architecture:** Variants-first component templates moved the most common user question to the top of the page.
- **The tooling:** A Figma library, React component library, Storybook workflow, and Chrome grid extension embedded system logic directly into active work.
- **The governance:** A contribution decision tree clarified when work belonged in Currency, when it should stay local, and when teams should bring questions to office hours.
- **The adoption model:** Workshops, roadshows, all-hands communication, quarterly roadmaps, and success metrics treated internal adoption as a product behavior.
- **The outcome:** Weekly visits tripled, 80% of employees found the guide useful, component-variant discovery became more than 50% faster, and Currency supported more than 10 product teams.
