# Walmart — Endless Aisles

> &nbsp;  
> **TLDR**
>
> **The Problem**  
> During a full rebuild of Walmart’s mobile infrastructure, the store floor lost a critical digital support layer. Customers standing in physical aisles had no clear path to out-of-stock products, deeper product comparison, or the broader depth of Walmart.com inventory. The business ask was direct: increase conversion at shelf.
>
> **The Platform**  
> Endless Aisles was a modular in-store kiosk platform designed as a retail bridge. It launched through the toy department pilot, then scaled across 20+ product categories while the permanent mobile solution caught up.
>
> **The Design Work**  
> The core design decision was a three-part Find / Scan / Play model that stayed structurally consistent across every department. Category content could change. The architecture could not.
>
> **The Outcome**  
> The platform was validated in live retail conditions using Raspberry Pi and Kinect prototypes, scaled to 20+ departments without structural modification, and was eventually absorbed by the rebuilt Walmart mobile app. That was the intended exit.
> &nbsp;

---

## 🔍 Project Overview

|  | |
|--|--|
| **Role** | Lead Product Designer / Systems Architect / Prototype Lead |
| **Responsibilities** | User interviews, associate interviews, leadership workshop facilitation, wireframes, prototypes, UI/UX design, visual direction, front-end development, design system, modular platform architecture, live retail validation |
| **Focus** | Retail Infrastructure, Modular Interaction Systems, In-Store Digital Commerce, Category Architecture, Designed Obsolescence |
| **Platform** | 60" portrait touchscreen kiosk, product housing, barcode scanner, Raspberry Pi prototype hardware, Kinect/depth-sensing camera, Walmart.com search and product data logic |
| **Duration** | Concept through pilot launch |
| **Outcome** | Validated in live retail, scaled across 20+ departments without structural modification, and sunset into the mobile app on the intended timeline |

`Primary Objective: Increase Conversion at Shelf` · `20+ Departments` · `60" Touchscreen` · `Raspberry Pi + Kinect` · `Live Retail Testing` · `Designed to Sunset`

---

# Built to Step Aside.

**The best bridge is not the one that lasts forever. It is the one that holds until the road is ready.**

> &nbsp;  
> **Asset → Hero**
>
> Full-width production image of the deployed Endless Aisles kiosk in the Walmart toy department. Use a portrait crop with the 55" screen centered, surrounded by real shelving, product packaging, aisle lighting, and store noise. Avoid polishing the environment too much. The point is not a showroom render. The point is proof that the system lived inside the mess it was designed for.
>
> **Source:** `Endless_Aisles__Final_Product.jpg` or `Endless_Aisles__Final_Product_2.jpg`  
> **Impression:** This should immediately read as a deployed retail system, not a pitch artifact.
> &nbsp;

---

## The Floor Couldn’t Wait.

**A strategic rebuild created an operational gap. Customers found it at the shelf.**

Walmart’s mobile platform was undergoing a complete rebuild. Strategically, that made sense. Operationally, it created a hole in the store experience.

Customers were still walking aisles. Shelves were still missing products. Parents were still trying to compare toys, electronics, sporting goods, and automotive items without enough context to make confident decisions. The physical store had inventory limits. Walmart.com did not. But in that moment, the customer standing in front of the shelf had no reliable bridge between the two.

That was the real problem. Not a screen problem. Not a kiosk problem. A continuity problem.

Endless Aisles was designed for that specific window of time. It did not need to become the future of Walmart retail. It needed to protect the present while the future was being rebuilt. The exit condition was part of the architecture from the beginning: work reliably, absorb category complexity, reduce lost sales, then step aside when the mobile app was ready.

The most dangerous losses were the ones Walmart could not see. Leadership identified a blind spot: customers who abandoned the aisle because a product was missing or too hard to locate were not reliably measurable. Endless Aisles gave that failure a visible path back into the system.

With no dedicated UX researcher assigned, I led the discovery work myself: interviewing customers, speaking with in-store associates, and facilitating a human-centered design workshop with Walmart leadership to turn a broad retail opportunity into a testable service model.

The kiosk was never meant to copy the app. Customers already had phones. The job was narrower and more disciplined: create an in-aisle bridge to mobile and Walmart.com inventory at the exact moment shelf inventory failed.

> &nbsp;  
> **Asset → Before State / Retail Gap Diagram**
>
> Create a clean two-panel diagram. On the left: a customer standing at a physical shelf with a missing item, limited shelf inventory, and no clear path forward. On the right: Walmart.com inventory depth, product comparison, reviews, and ship-to-home options. Between them: a broken connection labeled “Mobile rebuild in progress.”
>
> Use a restrained black, white, and Walmart-blue palette. Keep icons minimal. The emotional read should be simple: the customer is close to buying, but the system has gone quiet.
>
> **Caption:** Every gap between shelf and .com was a lost sale.  
> **Impression:** The business problem should be legible before the paragraph is read.
> &nbsp;

---

## One Kiosk. Two Humans.

**The toy aisle was not a single-user environment. It was a split-screen behavior problem.**

The pilot began in toys because toys exposed the hardest version of the system.

Adults were often buying for children, but not always with the confidence of someone who understood the category. They needed filters, comparisons, age ranges, product confidence, availability, and a fast path to purchase. Children, standing beside them, cared about none of that. They wanted motion, discovery, color, and play.

Both audiences occupied the same aisle. Both influenced the same purchase. Both had to be served by the same kiosk.

That changed the design from a simple retail lookup tool into a behavioral system. If the interface only helped the adult, the child could pull the parent away before the purchase completed. If it only entertained the child, the adult had no reason to trust it. The product needed to hold attention and support decision-making at the same time.

Shopper needs made the split sharper. Adults wanted help finding the right product, enough content to feel confident, coupons or offers when available, and a quicker way to complete the purchase in-store or online. They were not only asking for availability. They were asking for confidence at the shelf.

The toy department made that tension impossible to avoid. Which is why it was the right place to start.

> &nbsp;  
> **Asset → Audience Split**
>
> Build a two-column diagram that converges into a single kiosk.  
>
> Left column: **Adult Shopper**  
> Needs: find a gift, compare options, filter by age, check availability, ship to home.  
>
> Right column: **Child**  
> Needs: explore, react, play, stay engaged.  
>
> Both paths should point into one shared 55" kiosk interface, with a subtle tension line between “decision” and “attention.”
>
> **Caption:** Same kiosk. Two entirely different jobs.  
> **Impression:** The reader should understand that this was not an interface preference. It was a structural constraint.
> &nbsp;

---

## The Pattern Had to Hold.

**A platform that needs a redesign for every department is not a platform.**

Walmart does not have simple categories. Toys require age, interest, skill level, brand, and seasonality. Automotive requires compatibility, fitment, and part confidence. Sporting goods crosses activities, equipment types, sizes, use cases, and price points. Every department could make a reasonable argument for why it deserved a custom experience.

That was the trap.

Custom experiences would have created a design and governance burden too large to maintain. Every new department would trigger another round of layout debates, taxonomy exceptions, content rules, and technical edge cases. At Walmart’s scale, that kind of flexibility becomes fragility.

So the system was designed around invariance.

Find / Scan / Play became the operating model. The page structures, inventory logic, product detail patterns, navigation rules, and ship-to-home moments stayed fixed. The content could flex by department. The system could not.

That constraint gave the platform its strength. Toys, automotive, sporting goods, and the other departments were not treated as separate products. They were treated as category expressions inside one architecture.

The pattern was the product.

> &nbsp;  
> **Asset → Structural Invariance Diagram**
>
> Create a landscape system diagram with three fixed vertical columns: **Find**, **Scan**, **Play**. Beneath those columns, show three horizontal category rows: **Toys**, **Automotive**, **Sporting Goods**.
>
> Each row should contain category-specific examples, but the columns should remain visibly locked. Use consistent grid lines and repeatable modules to make the architecture feel stable. The content should look variable. The structure should look immovable.
>
> **Caption:** The content changed. The system didn’t.  
> **Impression:** This should make the key design decision obvious in one glance.
> &nbsp;

---

## Find. Scan. Play.

**Three verbs turned a retail kiosk into a category system.**

Find served the adult shopper. It gave customers a structured way to reach a product without needing to know the exact product name. In the toy department, that meant filtering by age, interest, skill level, and gift context. It also supported direct search tied to Walmart.com logic, because some customers knew exactly what they wanted and did not need to be slowed down by a guided flow.

Scan connected the shelf to the screen. A customer could bring a physical product into the digital layer, compare details, check availability, review adjacent options, or discover products not stocked in-store. This mattered because the kiosk was not meant to replace the shelf. It was meant to extend it.

Play solved the cold-start problem. In a loud, crowded, visually competitive retail environment, a passive screen is easy to ignore. Play gave the kiosk a reason to be noticed before a shopper had decided to use it. For children, it created an invitation. For adults, it explained the purpose of the system without requiring a sign, a staff member, or a sales pitch.

Beneath those entry points was a commerce journey: Find, Digital Shelf, Product Info, Close. Find handled category-specific entry. Digital Shelf supported filtering, sorting, comparison, offers, and availability. Product Info gave shoppers reviews, specs, price, video, related items, and Q&A. Close connected the decision to Walmart.com, the Walmart app, pickup, ship-to-home, scheduling, plans, services, and scan-to-phone behavior.

Three verbs. Four commerce stages. One architecture.

> &nbsp;  
> **Asset → Find / Scan / Play Screen Triptych**
>
> Show three final interface screens side by side in a wide composition.
>
> **Find:** wizard-based toy filtering with age, interest, and product category visible.  
> **Scan:** a shelf product pulled into the interface with product details, reviews, inventory status, and ship-to-home CTA.  
> **Play:** attract-loop or engagement state designed to draw children into the interaction.
>
> Use portrait screenshots with equal sizing and strong alignment. Add small labels above each screen, not below, so the structure reads first.
>
> **Source:** `Endless_Aisles__Final_Screen_1.jpg`, `Endless_Aisles__Final_Screen_2.jpg`, `Endless_Aisles__Final_Screen_3.jpg`  
> **Caption:** Find. Scan. Play. One model. Every department.  
> **Impression:** The reader should see three different behaviors governed by one system.
> &nbsp;

---

## No Associate Required.

**At Walmart scale, a kiosk that needs constant help is already broken.**

The system had to serve three audiences at once: the adult shopper, the child, and the store associate who could not be expected to intervene every time the interaction stalled.

That third audience shaped the work more than it may seem.

Every flow had to explain itself. Every screen had to recover from hesitation. Every interaction had to tolerate interruption. A customer might walk away halfway through. A child might touch the screen unexpectedly. A parent might begin in Play, move into Find, scan a product, then abandon the session because the child lost interest or the aisle got crowded.

The kiosk needed to absorb that behavior without becoming a maintenance task.

This is where the attract loop did more than create energy. It carried operational weight. It told nearby customers what the kiosk could do before they engaged. It pulled children in without requiring adult explanation. It made the object legible in the aisle.

The passive state was treated as its own product surface. I tested low-fidelity wireframes, high-fidelity animation states, promotional modules, sales highlights, and CTA language to find the smallest possible prompt that could make a shopper understand the kiosk before touching it.

A good retail interface does not wait to be understood. It announces its job quietly, repeatedly, and without needing a person standing beside it.

> &nbsp;  
> **Asset → Self-Service Flow**
>
> Build a four-panel horizontal sequence:
>
> 1. Customer notices kiosk through attract loop.  
> 2. Child engages with Play while adult approaches.  
> 3. Adult enters Find or Scan to evaluate a product.  
> 4. Customer reaches ship-to-home or product decision state.
>
> Keep the panels simple and sequential, like a retail service blueprint reduced to its most important moments. Include a small “associate intervention” line beneath the sequence that remains flat at zero.
>
> **Source:** `Endless_Aisles__How_it_Works_1.jpg` through `Endless_Aisles__How_it_Works_4.jpg`  
> **Caption:** From passive attention to purchase path, without staff intervention.  
> **Impression:** The system should feel self-sufficient.
> &nbsp;

---

## The Screen Had a Body.

**Retail interaction design had to account for reach, height, posture, children, wheelchairs, scanners, cameras, and the shelf beside it.**

Endless Aisles was not a website placed inside a store. It was a physical retail object with a body, a camera, a scanner, a screen, a computer, and a customer standing in front of it.

The totem architecture included product housing, a 60" touchscreen, a depth-sensing Kinect camera, a barcode scanner, and computer hardware. The physical housing was mapped around a 36"w x 78"h frame, with promotional space above, a bottom bevel below, and a defined live interaction area. The interface had to respect the hand, the eye, the shelf, and the store around it.

Accessibility was not an afterthought. The interaction zone was designed around an inclusive reach band between 34" and 48", making the core touch area usable for children and people with disabilities. That constraint affected layout, hierarchy, navigation placement, tap targets, scan behavior, and the balance between promotional content and active controls.

A portrait screen at retail scale changes the design problem. The upper screen can attract. The middle screen can guide. The lower screen must remain reachable. The hardware forced the interface to become a system of zones, not a page.

> &nbsp;  
> **Asset → Totem Hardware / Interaction Zone**
>
> Create a clean annotated hardware diagram using the kiosk elevation. Label the product housing, 60" touchscreen, depth-sensing camera, barcode scanner, computer, promotional housing, ADA live area, and inclusive 34"–48" interaction zone.
>
> Keep the visual technical but elegant: white background, thin measurement lines, Walmart-blue highlights for the reachable interaction zone, and a small human silhouette for scale.
>
> **Source:** Old case study pages showing “The Totems,” “Sizing and Measurements,” and “Interaction Space.”  
> **Caption:** The interface was designed around the body, not just the screen.  
> **Impression:** The reader should understand that the design system had physical constraints, not just digital ones.
> &nbsp;

---

## Start With the Worst Aisle.

**The toy department was not the easiest pilot. That was the point.**

The toy department carried the highest concentration of complexity. Split audiences. Seasonal pressure. Emotional purchases. Category ambiguity. Children pulling attention in one direction while adults tried to make a decision in another.

It was the worst aisle in the building.

That made it the best proving ground.

If the architecture held in toys, it had a strong chance of holding anywhere. If it broke, the break would happen early enough to fix. Starting with the hardest environment forced the design to confront behavior, noise, distraction, and category logic before the system spread across departments.

Play was not just a child-friendly screen. It became a motion-based interaction model. Rather than adding more buttons to an already large touch interface, the team used computer vision to track user movement, turning the aisle itself into the input surface.

The team did not wait for enterprise hardware procurement to validate the model. Functional prototypes were built with Raspberry Pi single-board computers and Kinect gesture tracking, then tested in live retail conditions. That decision compressed the learning cycle. Instead of presenting a theoretical kiosk, the team watched real customers react to a working one.

Children were pulled in by the attract loop. Parents moved through the filter logic. Product pages were reached without prompting. Interactions completed without associate support.

The store was the lab.

> &nbsp;  
> **Asset → Prototype Testing**
>
> Use a real prototype image showing the Raspberry Pi and Kinect-driven kiosk in a live retail setting. Do not over-clean the image. The value is in the contrast: scrappy validation against enterprise-scale ambition.
>
> Pair the image with three small annotation tags:
>
> `Live Store Conditions`  
> `Gesture Tracking Prototype`  
> `Weeks, Not Months`
>
> **Source:** `Endless_Aisles__Prototype_Testing.jpg`  
> **Caption:** The store was the lab.  
> **Impression:** The reader should feel speed, proof, and practical judgment.
> &nbsp;

---

## Designed to Disappear.

**The pilot proved the system. The mobile app proved the exit.**

Endless Aisles scaled to 20+ departments without requiring structural redesign. That was the architectural proof. Each new category became a content and configuration exercise, not a new product strategy conversation.

Then the mobile rebuild accelerated.

The app absorbed the core functions faster than originally expected. In many organizations, that could look like a platform being replaced. Here, it was the intended outcome. Endless Aisles had been designed as a bridge. The bridge did its job.

A temporary product can still be a serious product. It still needs logic, resilience, governance, hardware thinking, human behavior, and operational clarity. But its success cannot be measured by how long it survives. It has to be measured by whether it protects the business during the transition, reduces customer friction, and avoids leaving debt behind.

Endless Aisles held. Then it stepped aside.

That was the win.

> &nbsp;  
> **Asset → Final Product in Context**
>
> Use a full-height image of the final kiosk deployed inside a Walmart department. The kiosk should be the hero, but the surrounding retail environment must remain visible. Shelves, signage, lighting, and aisle context should stay in frame.
>
> Add one small text overlay in the lower corner:
>
> `Built to bridge. Designed to exit.`
>
> **Source:** `Endless_Aisles__Final_Product_2.jpg`  
> **Impression:** The reader should see the finished system inside the environment it was built to survive.
> &nbsp;

---

## Portfolio Card

**Walmart: Endless Aisles Retail Bridge**  
During a full rebuild of Walmart’s mobile infrastructure, the store floor lost the digital layer customers needed to reach out-of-stock inventory, compare complex products, and connect physical shelves to Walmart.com depth. The business objective was direct: increase conversion at shelf while creating an in-store experience strong enough to engage shoppers without associate support. Endless Aisles was designed as a modular kiosk platform with an intentional exit condition: protect customer experience while the permanent mobile solution caught up, then step aside without leaving structural debt. I led the work across research, user flows, prototyping, visual direction, front-end development, design system, hardware interaction, and live retail validation. The system centered on a fixed Find / Scan / Play architecture, supported by a deeper commerce journey from Find to Digital Shelf to Product Info to Close. It was validated first in the toy department because toys exposed the hardest combination of split audiences, category complexity, seasonal pressure, retail distraction, and physical reach constraints. Using Raspberry Pi and Kinect prototypes in live store conditions, the team proved the model before enterprise hardware procurement, then scaled the architecture across 20+ departments without structural modification. When the rebuilt mobile app absorbed the functionality faster than projected, the platform had done exactly what it was designed to do.

---

### Headline Story

- **The problem:** Walmart’s mobile rebuild created a temporary but costly gap between physical shelves and online inventory, with the explicit objective to increase conversion at shelf.

- **The finding:** Customers needed more than product lookup. Adults needed confidence, children needed engagement, associates could not be required to support every interaction, and Walmart lacked a clean way to see abandoned shelf-level demand.

- **The decision:** Build a temporary retail bridge with a defined exit condition instead of a permanent kiosk platform looking for long-term ownership.

- **The architecture:** Find / Scan / Play became the fixed interaction model, with Find → Digital Shelf → Product Info → Close operating as the commerce journey underneath it.

- **The tooling:** Raspberry Pi, Kinect/depth tracking, barcode scanning, and a 60" portrait touchscreen moved the concept into live retail testing before enterprise hardware timelines could slow validation.

- **The governance:** Structural invariance became the rule. New departments could configure content, but not reinvent the platform or break the shared design system.

- **The adoption model:** The system was tested against the toy department first, the most complex retail environment in scope, then scaled to 20+ departments without redesign.

- **The outcome:** Endless Aisles validated the architecture, protected the in-store experience during the mobile rebuild, scaled to 20+ departments, and exited when the mobile app absorbed the functionality.
