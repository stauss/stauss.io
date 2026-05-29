# WFCA — Wildfire Map

> &nbsp;
> **TLDR**
>
> **The Problem**
> Wildfire mapping tools had the right data, but the wrong hierarchy. In moments where people needed to decide whether to leave, critical signals were buried under layers of toggles, overlays, and visual noise.
>
> **The Platform**
> WFCA became a mobile-first crisis information system for residents, fire chiefs, and field responders across the Western United States. The product was designed for low-bandwidth, high-stress use, not desktop analysis.
>
> **The Design Work**
> The critical decision was to treat performance, hierarchy, and uncertainty as the architecture. Zero login, progressive disclosure, and approximate-location visualization turned a complex fire data map into an action tool.
>
> **The Outcome**
> The map earned organic adoption from fire chiefs, held under traffic during the Washburn Fire, and received recognition from Mapbox and Government Technology. It worked because it showed less, faster, and with more honesty.
> &nbsp;

---

## 🔍 Project Overview

|  | |
|--|--|
| **Role** | UI/UX Consultant / Information Architecture Lead |
| **Responsibilities** | Crisis UX strategy, mobile-first information architecture, progressive disclosure model, map layer hierarchy, feature scoping, uncertainty visualization, field-use interaction patterns |
| **Focus** | Crisis Information Systems, Mobile Performance, Geospatial UX, Low-Bandwidth Product Strategy, Data Trust, Public Safety Interfaces |
| **Platform** | Mobile web app, geospatial fire mapping interface, federal fire perimeter data, real-time 911 dispatch data, contextual overlays, Mapbox-recognized mapping experience |
| **Duration** | Consulting engagement during WFCA wildfire map product development and launch refinement |
| **Outcome** | Organic institutional adoption across the Western United States, fire chief recommendations, recognition from Mapbox and Government Technology, and reliable performance during a major fire traffic spike |

`Zero-login access` · `3-tier information hierarchy` · `Real-time 911 dispatch integration` · `Held under Washburn Fire traffic`

---

# The Map Had to Breathe Under Smoke.

**In a wildfire, the interface is not there to impress. It is there to remove doubt fast enough for someone to act.**

> &nbsp;
> **Asset → Hero**
>
> Full-width mobile-first wildfire map mockup shown in a dark, low-glare interface. The composition should show the default state first: user location, nearby fire markers, fire size, and nothing else competing for attention. Use restrained typography, sparse controls, and a second faint device behind it showing a selected-fire detail state. The impression should be immediate legibility under pressure, not a feature-rich dashboard.
> &nbsp;

Wildfire season in the American West no longer behaves like a season. It behaves like a standing condition. During active fires, residents, travelers, and first responders are not browsing data. They are making a decision: stay, turn around, evacuate, call someone, pack up, keep moving.

The data existed. That was not the problem.

The problem was the shape of the product around it. Many wildfire maps were built like analysis tools, with layers of overlays, toggles, and competing signals. They rewarded curiosity. WFCA needed to support judgment. That required a different posture entirely: less interface, less delay, less interpretation.

My role was to help define the UI, UX, and information architecture around a simple operating truth. In a crisis, comprehensiveness can become a liability.

---

## Signal Beats Inventory.

**The product could not show everything. It had to show the first thing that mattered.**

Most mapping products treat layers as value. More overlays. More data. More control. That logic breaks down when the user is moving through a canyon on weak service, trying to understand whether the fire they just heard about is close enough to change their plan.

WFCA started with the actual use case, not the ideal one. A wildfire map on a fiber-connected desktop is a different product than a wildfire map opened from a car, a campsite, or a field response vehicle. That context made mobile-first and low-bandwidth performance foundational requirements. Not responsive behavior. Not polish. Survival logic.

That constraint clarified the product. Every element had to justify its cost in load time, attention, and trust. If a layer slowed the map, confused the first read, or required interpretation at the wrong moment, it could not live in the default state.

The product became a hierarchy of action. Fire location. Fire size. Proximity to the user. Everything else waited until the user asked for it.

> &nbsp;
> **Asset → Before State / Signal Audit**
>
> Create a side-by-side diagram. On the left, show a typical overloaded wildfire map with stacked toggles, dense labels, multiple overlays, and ambiguous iconography. On the right, show the WFCA default state reduced to user location, fire markers, and size labels. Add three small annotation tags: “loads fast,” “reads instantly,” and “no account required.” The contrast should make the strategy obvious without needing a paragraph.
> &nbsp;

---

## No Password at the Fireline.

**Authentication was not a feature gate. It was a life-safety tax.**

The first major product decision was to remove login entirely.

Personalization had real value on paper. Accounts could support saved locations, preference settings, and notifications. But the field reality was blunt. A fire chief made the tradeoff clear: if the product required a username and password, he would not use it.

That single sentence cut through the roadmap.

WFCA needed to open directly into the map. No registration. No remembered password. No confirmation email. No onboarding sequence performing confidence while the user waited for the thing they came to see. The product had to trust the urgency of the moment.

The tradeoff was real. Removing authentication limited personalized notification infrastructure. But it unlocked something more important: instant access, fire chief endorsement, and organic adoption from the people residents were already listening to.

> &nbsp;
> **Asset → Access Model Decision Frame**
>
> Design a clean decision matrix comparing “Account-Based Map” and “Open Crisis Map.” Rows should include time to first fire view, rural usability, personalized alerts, fire chief trust, and operational risk. The open model should win on immediacy, trust, and field reliability. Keep the layout sparse, almost like an internal product principle sheet.
> &nbsp;

---

## Three Layers of Truth.

**The architecture was progressive disclosure for people under stress: see the threat first, investigate only when needed.**

Mobile screen space and cognitive load pointed to the same answer. Show less by default. Reveal more on purpose.

WFCA organized the map into a three-tier information architecture. Tier 1 was the default truth: fire locations and fire sizes. A user opening the product could understand immediate proximity without reading a report or parsing a control panel.

Tier 2 held contextual overlays such as air quality, aircraft tracking, and 3D terrain. These were useful, but not always urgent. They sat one deliberate tap away, close enough for informed users and hidden enough to protect the first read.

Tier 3 contained granular incident data: acreage, containment percentage, personnel, and other details surfaced only after selecting a specific fire. This kept the product from collapsing into a research interface.

That structure made the map behave more like a decision surface than a database. It kept the first screen alive.

> &nbsp;
> **Asset → Three-Tier Information Architecture**
>
> Build a stacked system diagram with three horizontal layers. Tier 1: Default Map, showing fire location, fire size, and user proximity. Tier 2: Context Layers, showing air quality, aircraft, and terrain. Tier 3: Incident Detail, showing acreage, containment, personnel, and selected-fire metadata. Use a vertical “cognitive load” scale on the side, increasing from top to bottom, and a “user intent” scale moving from immediate awareness to deeper investigation.
> &nbsp;

---

## Draw the Doubt.

**The map had to show what the data knew, and just as importantly, what it did not know yet.**

WFCA integrated real-time 911 dispatch data with federal fire perimeters, giving users earlier visibility into emerging threats. That was the breakthrough. It was also the design problem.

Dispatch data is fast because it is early. Early data is useful, but it is often approximate. If those reports were represented with the same visual confidence as confirmed federal perimeters, the interface would lie by accident. It would turn uncertainty into precision.

The solution was to visualize uncertainty directly.

Expanding concentric rings communicated the margin of error around new reports. Tight rings signaled a more confident location. Wider rings signaled approximation. The interaction did not require a tutorial. The visual language carried the ethical distinction: this is real enough to pay attention to, but not precise enough to overtrust.

That was not cosmetic. It was the trust architecture. Fire chiefs understood it because it respected the difference between a confirmed perimeter and an emerging report.

> &nbsp;
> **Asset → Uncertainty Visualization System**
>
> Create a focused map diagram showing three fire-report states: confirmed perimeter, high-confidence dispatch report, and approximate dispatch report. Use a clean legend and concentric rings with varying radius to express uncertainty. Add annotation lines explaining “confirmed shape,” “tight location confidence,” and “wide margin of error.” The asset should feel like a visual standard for honest public safety data.
> &nbsp;

---

## What We Did Not Build Was the Product.

**In public safety, restraint is not minimalism. It is responsibility.**

Several requested features were cut or deferred because the cost was not cosmetic. It was operational.

SMS notifications were cut because the supporting infrastructure would have added weight to a product that needed to load on constrained devices. Twitter feeds were removed because live social feeds created too much performance drag and too much noise for rural 3G use. Evacuation zones were deferred for two reasons: mobile polygon rendering was expensive, and county-level data reliability was inconsistent.

The evacuation decision was the hardest because it touched the exact question people wanted answered. But unreliable evacuation data inside a trusted product can do more harm than no evacuation layer at all. A bad interface annoys people. A bad crisis interface can mislead them.

That became the product ethic. Only publish what the system could stand behind completely.

> &nbsp;
> **Asset → Feature Scoping Ethics Board**
>
> Create a four-column product scoping table: Feature, User Value, System Cost, Decision. Include SMS notifications, Twitter feeds, evacuation zones, and real-time dispatch reports. The layout should show that features were not rejected because they lacked value, but because performance, reliability, or trust risk outweighed the benefit at launch.
> &nbsp;

---

## Built for the Spike.

**The system mattered most when everyone needed it at once.**

The Washburn Fire in July 2022 exposed the difference between a map designed for normal traffic and a crisis product designed around constraint.

Competitors slowed under the load. WFCA held. That outcome was not a backend anecdote separated from design. It was the result of earlier product decisions: mobile-first performance, reduced default layers, no login barrier, and a hierarchy that avoided unnecessary data calls before the user needed them.

Performance was not downstream engineering polish. It was part of the user experience architecture from the beginning.

The broader result was trust. Fire chiefs recommended WFCA to residents. The map gained organic institutional adoption across the Western United States. Recognition from Mapbox and Government Technology followed, but the more meaningful signal was simpler: people closest to the emergency trusted it enough to tell others to use it.

> &nbsp;
> **Asset → Crisis Load Narrative**
>
> Build a timeline-style asset centered on the Washburn Fire traffic spike. Show “normal conditions,” “active fire event,” and “traffic surge.” Below the timeline, connect product decisions to performance outcomes: no login, lightweight default map, delayed secondary overlays, low-bandwidth-first architecture. The visual should connect UX restraint directly to operational resilience.
> &nbsp;

---

## The Unfinished Infrastructure.

**The next frontier was not more map features. It was a better contribution model for local fire intelligence.**

The 911 integration gave WFCA a faster signal. But the broader operating system still had a gap: local fire agencies needed a cleaner way to submit, validate, and correct data directly.

That path remained too manual. Too slow. Too dependent on ad hoc coordination.

The next phase needed to turn agency contribution into a governed workflow: intake, verification, source confidence, timestamping, approval, correction, and visible trust status. Not just more data. Better data custody.

That is the deeper architecture behind any high-stakes information product. The map is only the surface. The real system is how truth enters, changes, and earns the right to be shown.

> &nbsp;
> **Asset → Agency Data Contribution Model**
>
> Create a workflow diagram showing local agency submission, validation queue, confidence scoring, update approval, and public map publication. Include correction paths and timestamp/status labels. The asset should suggest the future infrastructure WFCA needed: a governed operational layer beneath the public map.
> &nbsp;

---

## Portfolio Card

**WFCA: Crisis-Ready Wildfire Intelligence**
WFCA turned a dense fire data map into a mobile-first crisis information system for residents, first responders, and fire chiefs across the Western United States. The core failure was not data availability, but decision clarity: most wildfire maps buried urgent signals under overlays, logins, and exploratory controls. By treating low-bandwidth performance as a survival requirement, the product moved to zero-login access, a three-tier progressive disclosure model, and uncertainty visualization for real-time 911 dispatch reports. The result was a map that opened fast, showed only what mattered first, and earned trust by refusing false precision. WFCA held under Washburn Fire traffic, gained organic fire chief adoption, and received recognition from Mapbox and Government Technology because the system worked where users actually were.

---

### Headline Story

- **The problem:** Wildfire data existed, but critical signals were buried inside crowded map interfaces built for exploration instead of urgent action.
- **The finding:** The real use case was mobile, stressful, low-bandwidth, and often rural. A desktop-first fire map could not simply shrink into that context.
- **The decision:** Remove authentication completely so users could open the map, see the threat, and make a decision without account friction.
- **The architecture:** Build a three-tier hierarchy: fire location and size by default, contextual overlays on request, granular incident data only after selection.
- **The trust model:** Integrate real-time 911 dispatch data while visualizing uncertainty through expanding rings, avoiding false precision for early reports.
- **The scoping ethic:** Cut SMS, remove Twitter feeds, and defer evacuation zones because performance drag or unreliable data would create real public safety risk.
- **The resilience proof:** WFCA held under traffic during the Washburn Fire while competitors slowed, validating the low-bandwidth-first architecture.
- **The outcome:** Organic adoption across the Western United States, fire chief recommendations, and recognition from Mapbox and Government Technology.
