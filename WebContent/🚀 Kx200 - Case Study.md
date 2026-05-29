# BendixKing KX 200

> &nbsp;
> **TLDR**
>
> **The Problem**  
> Pilots trusted BendixKing hardware because their hands already knew what to do. The risk was that modern communication, navigation, and transponder capability could turn that trusted cockpit rhythm into a screen full of interpretation.
>
> **The Platform**  
> A modular, FAA-certified avionics platform built around one physical chassis, one shared operating grammar, and multiple hardware variants across communication, navigation, and transponder use cases.
>
> **The Design Work**  
> The core design move was to translate legacy cockpit muscle memory into a scalable softkey, encoder, menu, and state architecture so new digital capability could behave with the certainty of familiar hardware.
>
> **The Outcome**  
> Across an eighteen-month development cycle, the work supported three certified product variants, simulator-tested hardware prototypes, flight-instructor validation, and hundreds of pages of implementation-ready specifications for engineering and regulatory review.
> &nbsp;

---

## 🔍 Project Overview

|  |  |
|--|--|
| **Role** | Principal Product Designer / Systems Architect |
| **Responsibilities** | Interface architecture, cockpit workload research, human factors strategy, multi-state interaction design, softkey and encoder behavior, prototype development, simulator validation support, usability testing synthesis, FAA-aligned specification documentation, cross-functional engineering alignment |
| **Focus** | Avionics UX, tactile-to-digital interaction, multi-variant product architecture, hardware-constrained interface systems, cockpit workload reduction, regulatory documentation |
| **Platform** | High-fidelity web prototypes, physical cockpit bezels, simulator hardware, BendixKing KX 200 C / CN / CT variants, FAA-aligned specification documentation |
| **Duration** | 18 months |
| **Outcome** | Delivered a scalable avionics interface system supporting 3 product variants through 1 shared operating model, 1 universal chassis logic, and a complete behavioral specification system |

`18-Month Lifecycle` · `3 Product Variants` · `1 Universal Bezel` · `51-Page CT Wireframe Spec` · `6.25" Physical Bezel` · `Simulator-Tested Prototype` · `Hundreds of Spec Pages`

---

# Flight Law. Human Instinct.

**When the cockpit is under pressure, the interface cannot ask the pilot to think about the interface.**

The KX 200 was not a screen assignment. It was a cockpit logic problem disguised as an interface. A familiar hardware lineage needed to gain modern digital capability without creating a new burden for pilots to interpret, remember, or visually hunt through while flying.

In aviation, novelty is not automatically progress. A new interaction pattern can become a liability the moment it interrupts trained behavior. The work required a system that could expand capability while preserving the physical confidence pilots already had in BendixKing radios.

The screen was the last step. The real design problem lived beneath it: mapping tactile memory, mode logic, hardware constraints, regulatory clarity, and variant complexity into one operating model pilots could trust without studying.

> &nbsp;
> **Asset → Hero / Product Variant Triptych**
>
> Use the rendered KX 200 device assets as a full-width hero system. Arrange the C, CN, and CT variants as a precise horizontal triptych or stacked cinematic sequence. Keep the background restrained and technical. The visual should immediately show the same physical chassis carrying different operational responsibilities without changing the pilot-facing rhythm.
> &nbsp;

---

## I Learned the Sky Before Designing the Screen

**The pilot’s attention belongs to the aircraft first. The interface had to earn whatever attention it borrowed.**

The KX 200 replaced behavior pilots had trusted for years. That trust was not abstract. It lived in hand position, eye movement, radio cadence, and the small confirmations pilots make without consciously narrating them. To understand that constraint honestly, the work could not stay inside a conference room.

I took flying lessons to experience the cockpit as a working environment, not as a diagram. The point was not to become a pilot. It was to feel the workload: scanning instruments, managing radios, listening for instructions, watching weather, holding altitude, and making decisions while time kept moving.

That changed the design standard. The interface was no longer judged by whether it looked clear in isolation. It had to stay legible while the pilot was already doing something more important. If the system required exploration, it was asking for the wrong kind of attention.

> &nbsp;
> **Asset → Cockpit Workload Context**
>
> Create a split composition showing the KX 200 interface on one side and a simplified cockpit workload map on the other: airspeed, altitude, radio communication, navigation, weather, traffic, and aircraft control. The impression should be simple and blunt: this device is only one voice in a crowded cockpit.
> &nbsp;

---

## Muscle Memory Became the Map

**The safest interface was not the newest one. It was the one pilots already trusted.**

The KX 200 inherited behavioral gravity from the KY196B, a legacy radio interaction model built around physical rhythm, tactile certainty, and fast frequency control. That history mattered. Pilots had already internalized how their hands, eyes, and instruments should relate under pressure.

The challenge was not to modernize at the expense of that instinct. It was to protect it. Pilots needed access to deeper functionality, richer states, and more system intelligence, but the interface could not become something they had to decode mid-flight. A clever menu that required discovery would have been a failure.

The architecture preserved the cockpit cadence. Physical controls stayed anchored. Digital states were wrapped around that anchor, allowing the system to grow without forcing pilots to relearn the primary relationship between action and response.

This was the first structural decision: use legacy behavior as the organizing system, not as an aesthetic reference. Every new state had to earn its place by respecting existing spatial memory.

> &nbsp;
> **Asset → Legacy-to-Digital Interaction Map**
>
> Build a side-by-side comparison of the legacy KY196B control model and the KX 200 softkey architecture. The left panel should identify trusted tactile actions. The right panel should show those same behaviors translated into contextual labels, active fields, encoders, and confirmation states. The emotional impression should be continuity, not disruption.
> &nbsp;

---

## One Bezel. Three Missions.

**The hardware could change. The operating logic could not.**

The KX 200 had to operate as a modular avionics platform, not a one-off product. One physical footprint needed to support communication, navigation, and transponder capabilities across separate product variants. Each variant carried different functional demands. The pilot-facing logic had to remain consistent.

That constraint shaped everything. Softkey positions, menu layers, confirmation states, scroll behavior, mode transitions, alerts, and fallback behaviors could not be solved one screen at a time. They needed to behave as one expandable grammar.

The physical constraint made the problem sharper. The CT specification documented a 6.25-inch wide by 2-inch high bezel and a 5.15-inch by 1.24-inch LCD active area. This was not an open canvas. It was a fixed cockpit instrument with a narrow display, physical buttons, rotary inputs, active margins, and certification pressure.

The result was a universal interaction architecture. New capability could appear without changing the pilot’s mental model. The product line could scale. The cockpit did not get noisier.

> &nbsp;
> **Asset → Variant Architecture Diagram**
>
> Use the C, CN, and CT product renderings as the visual base. Overlay a thin systems diagram showing the shared control grammar: global softkeys, encoder behavior, active field logic, mode regions, emergency behavior, and confirmation rules. The asset should make the reader understand that the variants are different missions running on one behavioral chassis.
> &nbsp;

---

## A Button Was Never Just a Button

**Every label, press, hold, timeout, and fallback behavior had to mean one thing under pressure.**

The physical bezel was not a container around the product. It was part of the language system. Every softkey label depended on physical placement. Every mode depended on recognition. Every confirmation state depended on timing, hierarchy, and predictable recovery.

The interaction model had to define what happened when a button was pressed, held, unavailable, interrupted, or overridden by an alert. It had to decide when a label could change, when CANCEL should appear, when a timer should take priority, when a field became editable, and when an emergency action should persist.

The CT wireframe specification treated those details as rules, not preferences. Global behavior covered color meaning, outline states, reverse video, active and inactive fields, long-press thresholds, edit timeouts, IDENT duration, alert interruption, linked encoder entry, and menu recovery. That is the real system. The screen was only its surface.

The strongest systems disappear when they are working. In the KX 200, that disappearance was the point. Pilots did not need to memorize the architecture. They felt it through repeated, predictable behavior.

> &nbsp;
> **Asset → Behavior Grid / Animated Flow Set**
>
> Use a 2x2 grid of the animated assets: Function Countdown, Function Lookup, Function Memory, and Device Startup. Caption each as a state machine, not a screen. The grid should show how behavior moves through labels, inputs, active fields, timers, and recovery states.
> &nbsp;

---

## No Discovery at Altitude

**If a pilot had to search for meaning, the interaction failed.**

Static screens could not validate this product. The interface had to be tested in the conditions where it would actually be used: workload, motion, distraction, pressure, and consequence. Functional web-based prototypes were embedded into physical bezels and tested inside cockpit simulator environments at Honeywell Aerospace Labs.

The evaluation focused less on preference and more on threshold. Could pilots recognize the active state instantly? Could they complete the task without pausing? Could the interface survive turbulence, competing cockpit demands, and emergency scenarios without becoming another source of work?

Testing included pilots with different levels of experience, from newer aviators to veteran instructors. Additional evaluation with flight instructors at Embry-Riddle Aeronautical University exposed the kind of feedback internal reviews rarely produce: where labels confused, where long-press actions needed discovery support, where emergency behavior required more certainty, and where visual hierarchy needed to survive low-light conditions.

That changed the design standard. The question was no longer “does this screen look clear?” The question was sharper: “does this behavior hold when attention is divided?”

> &nbsp;
> **Asset → Simulator Validation Loop**
>
> Create a three-part loop showing prototype software, physical bezel hardware, and cockpit simulator testing. Include callouts for mode recognition, visual search, frequency swap risk, emergency clarity, night readability, long-press discoverability, and task completion under workload. The graphic should communicate that design decisions were validated in context, not approved from static mockups.
> &nbsp;

---

## The Simulator Found What Screens Couldn’t

**The most valuable feedback was not aesthetic. It was operational.**

The usability findings read like cockpit risk, not product opinion. Pilots questioned whether EMER could be confused with ENTER. They flagged accidental frequency swapping as a certification issue. They pushed on CODE timeout behavior, Flight ID entry, lookup discoverability, and the temptation to tap small touch targets rather than physical line-select keys.

Visual feedback carried the same weight. Editable fields needed to be more obvious. Blue needed to hold up under night lighting. Reverse-video labels could be overlooked. SQ, ALT, and D ALT labels needed sharper meaning. Emergency mode needed less ambiguity and more persistence.

Those findings mattered because each one exposed a place where the interface could steal attention at the wrong moment. The design work was not to defend the original pattern. It was to refine the operating system until the behavior became harder to misunderstand.

This is where avionics design becomes unforgiving in the best way. Preference gets stripped away. What remains is consequence.

> &nbsp;
> **Asset → Usability Findings to Design Rules**
>
> Design a before-and-after evidence board. The left column shows raw test findings grouped by operational risk: emergency confusion, frequency swap risk, night readability, long-press discovery, editable field visibility, and label ambiguity. The right column translates each finding into a design rule, interaction change, or specification requirement. The asset should feel like a decision ledger.
> &nbsp;

---

## The Spec Was the Product

**In certified avionics, ambiguity is not a handoff problem. It is a flight risk.**

The work required daily alignment across hardware engineering, embedded software, product, compliance, and regulatory teams. Every interaction needed to be defined in enough detail that the system could be built, tested, reviewed, and certified without interpretation drift.

The documentation became part of the product architecture. Button behavior, state transitions, visual hierarchy, timing rules, edge cases, menu structures, hardware dependencies, labeling conventions, startup behavior, emergency paths, and alert rules all needed to be captured with precision. A vague handoff would have created risk. The specification had to remove ambiguity before the product reached manufacturing.

The CT documentation alone included global rules, long-press actions, additional button actions, FUNC and LOOKUP menus, touch interface constraints, physical dimensions, aircraft and rotorcraft layouts, editable fields, encoder labels, stuck mic and squelch states, COM airport IDs, frequency types, timer behavior, traffic behavior, altitude alerts, memory behavior, line select keys, emergency behavior, and startup flows.

By the end of the engagement, the interface system was supported by hundreds of pages of detailed documentation. Every pixel, label, state, and interaction existed for a reason that could be traced, tested, and implemented.

The spec was not paperwork after design. It was design expressed as law.

> &nbsp;
> **Asset → Interaction Specification Blueprint**
>
> Use a high-density spread of the actual wireframe deliverables. Recommended panels: Global Rules, Physical Dimensions, Long-Press Actions, Rotary and Dual Concentric Encoder Functionality, and Screen Display Layout. Add restrained callouts that identify color logic, timing rules, active field outlines, encoder behavior, alert priority, and softkey labels. The asset should prove that the design system was not visual styling. It was an implementation contract.
> &nbsp;

---

## Portfolio Card

**BendixKing: KX 200 Avionics Interface System**  
Designed the behavioral operating system for BendixKing’s KX 200 avionics platform, translating the trusted tactile rhythm of legacy cockpit radios into a scalable digital architecture for communication, navigation, and transponder variants. Across an eighteen-month development cycle, the work unified one physical chassis, one softkey grammar, one encoder model, and hundreds of documented interaction rules into a system pilots could operate without relearning the cockpit. Functional web prototypes were embedded into physical bezels and tested inside simulator environments, with flight-instructor feedback shaping emergency behavior, long-press discovery, label clarity, frequency safety, night readability, and editable field visibility. The final system was delivered as implementation-grade specification documentation for engineering, compliance, and certification review, proving the central thesis of the project: in avionics, the interface is not the screen. It is the law of behavior beneath it.

---

### Headline Story

- **The problem:** Legacy avionics hardware needed to absorb modern communication, navigation, and transponder capability without increasing cockpit complexity or breaking pilot muscle memory.

- **The finding:** In flight, discovery is risk. Any interaction that forced pilots to visually search, pause, interpret, or recover from ambiguity introduced operational friction.

- **The decision:** Preserve the trusted spatial logic of legacy BendixKing cockpit hardware and use it as the foundation for a modern softkey, encoder, menu, and state architecture.

- **The architecture:** Built one modular interaction model that allowed C, CN, and CT product variants to share the same physical footprint, global behaviors, active field logic, confirmation patterns, and emergency rules.

- **The tooling:** Developed functional web prototypes, embedded them into physical bezels, and validated behavior in cockpit simulator environments with pilots and flight instructors.

- **The governance:** Created a detailed specification system covering global rules, dimensions, screen layouts, long-press actions, menu behavior, timers, traffic, alerts, memory, startup flows, labels, edge cases, and implementation logic.

- **The adoption model:** Used simulator and usability feedback to refine the operating model around legibility, night readability, long-press discovery, emergency clarity, frequency safety, and reduced cognitive workload.

- **The outcome:** Delivered three product variants through one universal operating model, supported by simulator-tested prototypes and hundreds of pages of implementation-ready documentation for engineering and certification.
