# Major League Pickleball

# **From Fault to Rally**

***Architecting the relational backbone for a live sports league.***

---

- **TLDR**
**The problem** A live professional sports league with an ESPN broadcast deadline and a digital foundation built like a brochure: no relational data, no live operations layer, no schema to hold the sport together.
    
    **The outcome**
    Three seasons live on ESPN with zero structural failures. A schema-first architecture that turned six manual edits per score change into one, collapsed multi-step content tagging workflows into single-record entries, and earned its own custom platform when the sport’s needs outgrew the validator stack.
    

---

<aside>

## **Role:** Product Design Lead & Systems Architect

**Responsibilities:** Led product strategy, system architecture, UX/UI, front-end development, data modeling, and live operations as the primary designer-developer. Architected the platform in two deliberate phases: a Webflow + Airtable validator stack that ran for the first 1.5+ years, then a custom full-stack build with headless CMS when the league’s specific needs (live events, tournaments, brackets, standings, membership) outgrew what off-the-shelf tooling could carry.

**Focus:** Ecosystem Strategy, Relational Data Modeling, Platform Architecture, Live Broadcast Operations

**Platform:** Validator Stack (Webflow + Airtable) → Scale Phase (Custom Full-Stack + Headless CMS)

**Duration:** 3 Years

---

`3 Years` · `Data Architecture` · `Live on ESPN` · `Real-Time Scoring + Draft` 

</aside>

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

## A Sport Moving at Speed

#### *The interface is the last mile of a live broadcast.*

Major League Pickleball was moving into the national spotlight with a locked ESPN broadcast date, a fast-growing audience, and a digital foundation closer to a static brochure than a live sports platform. That distinction mattered. In live sports, a score is not just content. It is operational infrastructure.

One update on the court affects standings, brackets, team records, player profiles, event pages, and the broadcast experience at the same time. If the system cannot resolve those relationships automatically, the interface becomes a liability. The league did not need better pages. It needed infrastructure the business could trust at game speed.

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

</aside>

![MLP → [ESPN Intro].png](Major%20League%20Pickleball/MLP__ESPN_Intro.png)

![MLP → [ESPN Supporting Images Alt].jpg](Major%20League%20Pickleball/MLP__ESPN_Supporting_Images_Alt.jpg)

## The Fault Line

#### *The Pieces Existed. The System Didn’t.*

The platform had no relational data model. Scores lived as static text fields. Players, teams, media, and events existed as parallel collections with no awareness of each other. When the league went live, operational staff had to patch scores, player profiles, brackets, and roster changes simultaneously, in multiple places, with no version control and no rollback. Supporting that first broadcast meant staying up nearly three days to manually override failures as they happened.

A single score change required six manual updates: the player record, the team record, the standings table, the schedule entry, the bracket position, and the event rankings, each edited by hand, in sequence, under broadcast pressure. Miss one, and the public-facing site contradicted itself within minutes.

Content was worse. A single video clip featuring a player like Ben Johns required four separate manual operations to publish correctly: upload the media, tag the player, navigate to the player page to tag the media back, then go to the team page and tag it a third time using a static text field with a manually entered URL. Every relationship that should have been a query was a hand-typed string. The system didn't fail because the team was careless. It failed because it had been designed as a brochure, not a live data product.

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

</aside>

## Calling a Timeout

#### *Pausing feature work to fix the foundation.*

After the first broadcast, the natural request was to keep adding surfaces: new layouts, richer team pages, more content modules. Those needs were valid, but each new page would have created another place where live data could fall out of sync.

The most important decision was to stop adding surfaces long enough to fix the structure underneath them. Instead of asking what the site should show next, I reframed the work around what the platform needed to understand about the sport.

The stack was a phased choice, not a permanent one. Webflow alone couldn't carry the data model. It caps at 10,000 CMS entries, allows only two levels of nested relationships, and treats schema design as an afterthought. Pairing it with Airtable for the validator phase gave the league a relational engine it could operate without engineering support from day one, and a clear sunset condition: stay until the sport outgrew it.

***The pause protected every update that hadn’t happened yet.***

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

## Calm in the Kitchen

#### *Designing the invisible logic of the game.*

The architecture introduced update-once, resolve-everywhere logic across the ecosystem. Players connect to Teams; Teams connect to Scores; Scores cascade to Standings. Media connects to Players, Teams, and Events through real relationships, not static text fields.

Get the relationships right, and one record change updates standings, brackets, player pages, team pages, and the live scoreboard simultaneously. Get them wrong, and that same change becomes six manual edits done under broadcast pressure. The math doesn't sound dramatic until it's 9pm on a Sunday and the next match starts in eleven minutes.

The same logic governed content. A single photo, tagged once, resolves across player profiles, team pages, and event galleries with all metadata intact. The four-step Ben Johns workflow collapsed into a single record entry.

***The schema was the real product. The screens were simply its surface.***

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

## Designed for the Sideline

#### *The schema solved the data problem. The experience solved the human one.*

The operators running league operations during a live broadcast weren't engineers. They were field staff entering scores and swapping rosters while a national audience watched. Every input had downstream consequences, so the system had to hide complexity without removing control.

The Matches table became the operational hub. Fixtures were pre-created with placeholder content, keeping the public site stable before bracket outcomes were known. As teams advanced, operators updated a single record and the site updated in place. When match timing shifted, which it always did, they could adjust without touching the structure underneath.

Score entry came down to two fields. Everything downstream, including wins, standings, and bracket progression, calculated automatically. The system held the complexity so the operator didn't have to.

The guiding question was never "what does the database need?" It was "what does a stressed, non-technical person need at 9pm during a live match?"

***A well-designed screen is easy to recognize. A well-designed system is what you notice when nothing breaks.***

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

## On the Clock

#### *The hardest test wasn’t the one we built for.*

Nothing about live scoring was forgiving. Thousands of fans watched matches render in real time, refreshing for the next point, while franchise owners tracked their own teams from courtside, suites, and phones. The audience for accuracy was public, loud, and personally invested, and that audience included LeBron James, Tom Brady, Patrick Mahomes, Kevin Durant, Mark Cuban, Naomi Osaka, Michael Phelps, and dozens more across sports, entertainment, and finance.

When that's the room watching their teams render on the live site, accuracy isn't a UX nicety. It's a credibility floor.

The Season 2 draft tested the architecture under a different kind of pressure. A live draft is synchronous, public, and entirely irreversible. When a franchise owner makes a pick on national television, there is no correction window, and the audience watching is the same audience that owns the teams.

Every pick aired in real time, propagating instantly from a single operator entry across player profiles, team rosters, draft boards, and the public-facing event surface. The system handled the full event with zero broadcast errors and zero engineering interventions. Because the architecture was strictly relational, the draft required no new infrastructure. The same schema that handled scoring handled the draft, unchanged.

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

## Performance at Every Altitude

#### *From a deadline emergency to a league standard, then earning a custom build.*

| **3 seasons** | Zero structural failures · zero rebuilds |
| --- | --- |
| **1.5+ years** | On the validator stack before earning the custom rebuild |
| **Multiple Spin-offs** | PickleballTournaments and adjacent platforms reusing the schema |
| **Category standard** | UI patterns adopted independently across competing platforms |

The lightweight Webflow and Airtable validator stack carried Major League Pickleball for eighteen months, anchoring real-time draft events, live scoring, and high-stakes content cascades. As the sport scaled, custom tournament structures, bracket logic, real-time standings, and membership tiers began asking complex operational questions that off-the-shelf tools were never built to answer. Shifting to a custom full-stack headless architecture was not a failure of no-code, but the natural consequence of the data model being right. The foundational schema, relational data models, and operator workflows carried forward completely unchanged. The custom build inherited a proven, zero-failure product; it simply gave it a bigger engine.

This architecture supported three consecutive seasons of live, national broadcasts without a single structural failure. By solving for every altitude, from the operational scale of the league to the precision of the pixel, we engineered a logic so resilient it became the architectural standard for the entire pickleball ecosystem. The same relational schema and UI patterns were later reused to power Pickleball Tournaments, league and club platforms, and DUPR-adjacent products. When an entire category independently arrives at your design decisions to build their own platforms, you have moved past solving a client problem. You have set the standard for an industry.

<aside>
<img src="https://www.notion.so/icons/photo-landscape_gray.svg" alt="https://www.notion.so/icons/photo-landscape_gray.svg" width="40px" />

**Asset→**  

---

…

</aside>

<aside>

## After the Whistle

---

**The high price of an easy start.**

The hardest problems on this project were never purely design problems. They were information architecture challenges with public-facing consequences. Recognizing that distinction, and being willing to work in that space rather than defaulting to screens, is what allowed the system to hold for three seasons, earn its own custom rebuild, and keep holding well beyond the initial build.

When another team can skip the blank-page phase because the foundation is already there, the work has done more than support a project. It has become infrastructure.

---

### *The screens were the last step because, just like on the court, real mastery is mostly invisible.*

</aside>