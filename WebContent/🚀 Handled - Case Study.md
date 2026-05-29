# Handled: Transparency by Design

> &nbsp;
> **TLDR**
>
> **The Problem**
> The moving industry trained customers to distrust the estimate. Quotes were vague, fees appeared late, and the most important pricing variables stayed hidden until the customer had already committed.
>
> **The Platform**
> Handled became a mobile-first moving platform spanning customer inventory capture, move coordination, service support, and national agent configuration across 95 markets and 112 agent locations.
>
> **The Design Work**
> The critical decision was to treat the verified inventory as the core product primitive: a customer-confirmed source of truth connecting pricing, labor, scheduling, concierge support, and carrier economics.
>
> **The Outcome**
> The system supported 1,776 booked local moves, 1,843 completed services, and was acquired by UniGroup to support the national networks behind United Van Lines and Mayflower Transit.
> &nbsp;

---

## 🔍 Project Overview

|  | |
|--|--|
| **Role** | Lead Product Designer / Systems Architect |
| **Responsibilities** | UX research, interview planning, synthesis, journey mapping, user flows, prototyping, usability testing, product design, design system direction, engineering handoff, live design reviews, and system definition across consumer, concierge, and enterprise tracks. |
| **Focus** | Trust architecture, automatic inventory, pricing logic, service operations, multi-role workflows, enterprise configuration, customer confidence, and mobile product design. |
| **Platform** | iOS mobile app, concierge operations layer, national agent configuration system, Figma, prototyping workflows, design system components, and engineering collaboration rituals. |
| **Duration** | 2-year engagement |
| **Outcome** | Scaled to 95 markets and 112 agent locations, supported 1,776 booked local moves and 1,843 completed services, and was acquired by UniGroup. |

`95 Markets` · `112 Agent Locations` · `1,776 Moves Booked` · `1,843 Services Completed` · `UniGroup Acquisition`

---

# The Estimate Was the System.

**The moving experience did not need a prettier quote screen. It needed a source of truth strong enough to make the quote believable.**

> &nbsp;
> **Asset → Hero**
>
> Full-width product hero using the dark-background phone composition from the interview PDF, page 29. Place two angled iPhones in the center: the left phone shows the Pan & Scan camera interface with item capture in progress, and the right phone shows the Collections library. Keep the background minimal, with the Handled wordmark low and quiet. The visual should communicate that this is a polished consumer product built on top of a deeper operating model.
> &nbsp;

The moving industry runs on a broken trust contract. A customer opens their home to an estimator, receives a number they cannot audit, and waits for the real cost to reveal itself later. Sometimes after the truck arrives. Sometimes after the furniture is already loaded.

Handled was built against that pattern.

The product used automatic inventory capture to catalog the home, expose the variables behind cost, support a guaranteed quote, and coordinate the move through a full service layer. The business context made the work bigger than a consumer app. A partnership with Opendoor projected more than 7,000 annual referrals across 20 launch markets, which meant the platform had to absorb real operational complexity before the volume arrived.

The screen was the last step. The estimate was not a number on a page. It was the visible output of inventory, pricing logic, market rules, crew planning, and service coordination working together.

---

## The House Had Too Many Hidden Rooms.

**The problem was not that customers disliked moving. The problem was that every important detail was hidden behind someone else's process.**

The early research focused on the customer experience, but the product could not be understood through a single user. Handled had five operating roles: the customer, the Hand supporting packing and loading, the driver, the sales agent, and the move coordinator. Each role touched the same move from a different angle. Each one could either protect trust or break it.

The customer needed clarity. The coordinator needed visibility. The sales agent needed confidence in the estimate. The crew needed an accurate read of the home. The driver needed the physical work to match the plan.

That multi-role reality changed the definition of the product. The app was not just a booking flow. It was a shared operating layer for a high-anxiety service where the physical world, the customer promise, and the business model all had to stay aligned.

> &nbsp;
> **Asset → Five User Roles**
>
> Build a clean role map based on page 3 of the PDF. Put the move at the center. Around it, place Customer, Hand, Driver, Sales Agent, and Move Coordinator. Add one concise responsibility under each role. Use thin connecting lines to show that each role depends on the same move record. The point is to show that one consumer action creates consequences across the service system.
> &nbsp;

---

## Trust Broke Before the Truck Arrived.

**Research showed that customers were not afraid of automation. They were exhausted by ambiguity.**

We ran ten 60-minute interviews with people who had used a moving company in the previous six months. The original concern was that customers might resist a computer-assisted inventory process inside their homes. The interviews told a sharper story.

Customers did not reject technology. They rejected processes they could not inspect.

One participant said they wanted a professional opinion because they had no way to know how long a move would take, how many people were needed, or how many boxes their home would require. Another almost refused an estimator visit after already providing information because the process had become so frustrating. The frustration was not abstract. It was specific. Customers had already done work, but the company still held the authority.

The journey map made the trust decay visible. During search, users felt overwhelmed and nervous. During the quote stage, they felt frustrated, uncertain, annoyed, and disappointed. By the time a customer was asked to commit, the relationship had already been damaged.

That insight reframed the work. The job was not to make AI feel impressive. It was to make Handled feel inspectable.

> &nbsp;
> **Asset → Research Evidence Spread**
>
> Create a two-column editorial spread. Left side: the seven-stage journey from pages 7 and 12, with the uncertainty line called out above the process. Right side: two large quote cards pulled from page 6, using the Andrea and Janice quotes as evidence. Keep the design restrained. The visual should feel like a research finding, not a decoration.
> &nbsp;

---

## Rename the Machine. Restore the Agency.

**The same technology can feel invasive or useful depending on the contract created by language and control.**

One of the first design moves was a language decision. “Computer vision” described the technology, but it carried the wrong emotional weight. It sounded like surveillance. It made the customer feel watched.

“Automatic inventory” described the customer value. It made the system feel like help.

That naming shift mattered because the product was asking the user to point a camera around their home. The interface had to give the customer control at every step. Pan the room. See what was identified. Confirm the items. Edit what was wrong. Add what was missed. Mark what was fragile or important. Move forward only when the inventory felt accurate.

The trust mechanism was not automation alone. It was automation with a human override.

> &nbsp;
> **Asset → Pan & Scan Flow**
>
> Use a horizontal four-screen strip based on pages 15, 17, and 18 of the PDF. Screen one shows room capture. Screen two shows detected item markers. Screen three shows an item detail view with editable fields and fragile or important toggles. Screen four shows the confirmation state: “Looking good! This room has 9 items.” Add a small label above the strip: “Automatic inventory, not computer vision.” The asset should make control feel obvious.
> &nbsp;

---

## A Quote Only Works When It Can Defend Itself.

**The price could not appear as a promise. It had to appear as a calculation the customer could understand.**

The quote process was the emotional breaking point. Customers were comparing estimates across channels: on-site visits, phone calls, home size guesses, text messages, hourly rates, flat rates, truck fees, gas fees, packing costs, and supply charges. The industry trained people to expect the number to move.

Handled could not solve that with confidence theater.

The quote had to show its logic. Inventory volume. Distance. Timing. Crew size. Truck requirements. Stairs. Packing needs. Service add-ons. The design work was to make the variables visible enough to feel honest without making the user do the company's math.

That is why the verified inventory mattered. Once the customer confirmed the inventory, the platform had a defensible input. That input could support pricing, labor planning, scheduling, and operations. A quote backed by confirmed inventory is no longer a guess. It is a structured claim.

> &nbsp;
> **Asset → Quote Logic Diagram**
>
> Create a left-to-right system diagram. Left: Verified Inventory. Middle: pricing variables such as volume, distance, stairs, timing, crew size, truck size, packing, and supplies. Right: guaranteed quote and move plan. Under the diagram, add a second thin line showing downstream outputs: labor, schedule, route, concierge tasks, and carrier economics. The diagram should make pricing feel explainable.
> &nbsp;

---

## The Verified Inventory Became the Primitive.

**One confirmed object connected the customer interface to the business model.**

The most important design object in the system was not a screen. It was the verified inventory.

Every item the customer confirmed became part of the operational truth of the move. That truth shaped the quote. The quote shaped labor. Labor shaped scheduling. Scheduling shaped concierge work. Exceptions could be handled against a known record instead of reconstructed through calls, notes, and assumptions.

Bad inventory creates bad pricing. Bad pricing creates margin risk. Margin risk becomes operational pressure. Operational pressure becomes a broken customer promise.

Handled's design challenge was to stop that chain before it started. The verified inventory did that by turning the home into structured data the customer could see, correct, and own.

> &nbsp;
> **Asset → System Primitive Map**
>
> Build a clean relational diagram with “Verified Inventory” as the central node. Connect it to Quote Generation, Crew Planning, Concierge Scheduling, Carrier Pricing, Customer Confidence, and Claims Support. Around the outside, show the five roles that consume or update the same truth. The diagram should make the architecture feel simple without hiding the complexity.
> &nbsp;

---

## One Move. Three Platforms Underneath.

**The consumer app created the promise. The operational layers made the promise survivable.**

Handled had to operate across three simultaneous tracks.

The consumer layer guided the customer through home inventory, booking, move status, services, supplies, checklists, and post-move support. It had to reduce a stressful life event into a set of visible, manageable steps.

The concierge layer handled everything the app could not quietly absorb: date changes, item corrections, edge cases, customer anxiety, service coordination, and the handoff between the digital plan and the physical move.

The enterprise layer made the model deployable across markets. Regional pricing, agent coverage, service availability, and operational rules had to be configured rather than hard-coded. With 95 markets and 112 agent locations, local variation was not an edge case. It was the platform.

Designing the three tracks together was not scope creep. It was risk control. A simple consumer app on top of an unresolved service model would have failed the first time reality pushed back.

> &nbsp;
> **Asset → Three-Layer Platform Stack**
>
> Create a stacked diagram with three horizontal bands: Consumer Experience, Concierge Operations, and Enterprise Configuration. Place representative screens inside each band. Use page 31 for consumer breadth, page 30 for tracking and review, and page 22 for V1.0 scope references. Add a vertical line labeled “Verified Inventory” running through all three bands.
> &nbsp;

---

## The Scope Was a Map of the Business.

**V1.0 was not a feature list. It was a service model translated into screens, flows, and rules.**

The V1.0 scope covered dashboard services, move status, maps, order information, move summaries, timelines, crew information, additional services, collections, item search, item listings, images, item creation, collection editing, notes, tags, packing calculators, supplies, moving resources, concierge services, mail forwarding, DMV address changes, utilities, and voter information.

That breadth only makes sense when the product is viewed as an operating system for moving. The move was the center. Everything else existed to reduce ambiguity before, during, and after the physical event.

The design process stayed close to engineering because the product could not afford interpretation drift. User flows were reviewed daily. Problems were resolved in live working sessions. The interface, the flow, and the underlying behavior had to stay synchronized as the system expanded.

> &nbsp;
> **Asset → V1.0 Scope Board**
>
> Use page 22 of the PDF as the foundation. Rebuild it as a crisp product architecture board with three columns: Dashboard, Services, and Collections. Add small thumbnail cards for key flows on the right. The goal is to show that the product scope was structured around the whole move lifecycle, not a narrow booking moment.
> &nbsp;

---

## Testing Exposed Where Trust Could Fracture.

**A critical error was not a UI mistake. It was any moment that could produce wrong move data.**

Usability testing was framed around completion, divergence, non-critical errors, and critical errors. That distinction mattered. In this product, incorrect data was not just a usability issue. It could change the quote, crew plan, truck size, and customer expectation.

The testing work focused on where users hesitated, where they misunderstood the inventory process, and where the system needed to provide stronger guidance. App permissions, cognitive load, item identification, booking, and inventory flows were inspected as trust points.

When a customer was unsure what to scan, the price became less reliable. When a customer did not know whether an item was captured, the crew plan became weaker. The testing process pushed the interface toward clearer feedback, fewer hidden states, and stronger confirmation moments.

> &nbsp;
> **Asset → Testing Findings Board**
>
> Create a board based on pages 19, 20, and 21. Left: definitions for scenario completion, non-critical error, and critical error. Right: annotated screenshots showing permission friction, cognitive load, and item recognition uncertainty. Use red callouts sparingly. The impression should be analytical and disciplined.
> &nbsp;

---

## The Promise Had to Hold After the Move.

**Trust was not complete at booking. It had to survive tracking, claims, reviews, supplies, and post-move support.**

The system extended beyond the inventory and quote because customer anxiety does not end at checkout. It continues through arrival timing, crew visibility, packing needs, damage risk, final payment, and review.

Handled's broader service layer included move tracking, packing self-assessment, supply ordering, claims documentation, reviews, and move-related services. These were not add-ons. They were trust preservation points.

A moving company is judged most harshly when something changes. The product had to give the customer a place to look, a next step to take, and a record to return to.

> &nbsp;
> **Asset → Service Continuity Spread**
>
> Use the isometric phone spreads from pages 30, 31, and 32. Show move tracking, review, packing calculator, claims, supplies, and booking details in a single wide layout. Label the spread “Before, During, After.” The visual should communicate continuity across the full move lifecycle.
> &nbsp;

---

## Acquired for the Operating Model.

**The final validation was not that the app looked polished. It was that the system could scale into a national network.**

Handled scaled to 95 markets and 112 agent locations, supported 1,776 booked local moves, and completed 1,843 services.

The UniGroup acquisition validated the deeper architecture: a verified inventory model, a pricing system grounded in real operational variables, and a configurable service layer that could support the national networks behind United Van Lines and Mayflower Transit.

That is the difference between a product interface and product infrastructure.

Handled was not a better moving app. It was a more believable moving system.

> &nbsp;
> **Asset → Final Product Proof**
>
> Close with a full-width composition using page 32 of the PDF. Four angled iPhones show booking, packing, tracking, and preparation screens. Keep the layout clean and premium. Add a small metric strip below the phones: “95 Markets · 112 Agent Locations · 1,776 Moves Booked · 1,843 Services Completed.”
> &nbsp;

---

## Portfolio Card

**Handled: Trust Architecture**
Handled redesigned the moving experience around a verified inventory primitive that connected customer confidence, pricing logic, labor planning, concierge operations, and enterprise configuration. The work began with research that revealed the real barrier was not automation, but ambiguity. From there, the product shifted from “computer vision” to automatic inventory, giving users control over the AI output while giving the business a reliable input for quotes, crews, schedules, and carrier economics. The platform scaled across consumer, concierge, and enterprise tracks, reached 95 markets and 112 agent locations, supported 1,776 booked local moves and 1,843 completed services, and was acquired by UniGroup to support the national networks behind United Van Lines and Mayflower Transit.

---

### Headline Story

- **The problem:** The moving industry hid the variables that determined price, forcing customers to trust estimates they could not inspect.
- **The finding:** Users were not afraid of automation. They were frustrated by ambiguity, repeated handoffs, and quote processes that ignored information they had already provided.
- **The decision:** Reframe “computer vision” as “automatic inventory” and give customers the ability to verify, edit, and complete the system's output before it affected their quote.
- **The architecture:** Make the verified inventory the core primitive connecting pricing, labor, scheduling, concierge support, claims, and carrier economics.
- **The tooling:** Embed the system into active move workflows: Pan & Scan inventory capture, collections, item details, booking, move tracking, packing, supplies, claims, and reviews.
- **The governance:** Treat critical errors as any moment that could produce incorrect move data, not simply visual or interaction mistakes.
- **The adoption model:** Structure the platform for consumer trust, concierge operations, and enterprise configuration so local market differences could scale across a national agent network.
- **The outcome:** 95 markets, 112 agent locations, 1,776 booked local moves, 1,843 completed services, and acquisition by UniGroup.
