import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

const posts: Record<string, {
  slug: string
  category: string
  title: string
  date: string
  readTime: string
  author: string
  description: string
  content: string
}> = {
  'how-much-does-a-rear-extension-cost-uk-2025': {
    slug: 'how-much-does-a-rear-extension-cost-uk-2025',
    category: 'Cost Guides',
    title: 'How much does a rear extension cost in the UK? (2025 guide)',
    date: '12 Sept 2026',
    readTime: '8 min read',
    author: 'James Hargrove',
    description: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees.',
    content: `
## The honest answer: it depends — but here are real numbers

The most common question we get from homeowners is also the most frustrating to answer with a single figure: "How much does a rear extension cost?"

A 4m × 4m single-storey rear extension in London will typically cost between **£60,000 and £95,000** in 2025, including VAT. But "typically" is doing a lot of work in that sentence.

The range is wide because extensions are not products — they are bespoke construction projects, and the cost is shaped by dozens of decisions: how deep you go, what you put in the walls, what the floor does, what glazing you choose, and how much your contractor's overhead and margin are.

---

## The main cost drivers

### 1. Size and footprint

Extension cost scales roughly with floor area, but not linearly. A 3m × 3m extension (9m²) costs significantly less than twice a 6m × 3m (18m²) extension, because groundworks, roof structure, and connections to the existing house are relatively fixed costs.

Rule of thumb for London in 2025:
- **£2,500–£3,500/m²** for a standard single-storey extension
- **£3,000–£4,000/m²** for a double-storey
- **£4,000–£6,000/m²+** for high-specification finishes and bespoke glazing

### 2. Specification and finishes

Nothing moves the price like specification. A standard tiled floor, plasterboard, and painted walls costs far less than:
- Bi-fold or sliding doors (£5,000–£15,000+ depending on size and brand)
- Underfloor heating (add £80–£150/m²)
- Structural glazing or roof lanterns (£3,000–£10,000+ per unit)
- Oak-framed additions or bespoke joinery

### 3. Structural complexity

Most single-storey extensions require:
- **A steel beam** to span the new opening in the existing rear wall (typically £1,500–£4,000 installed)
- **Foundations** appropriate to the soil conditions and local authority requirements

If you have clay soils (common in London), deep strip or mini-pile foundations may be required. This alone can add £8,000–£20,000 to groundworks costs.

### 4. Party wall matters

If your extension is within 3m of a neighbour's foundation (or 6m for certain spread footings), the Party Wall Act applies. You will need Party Wall Awards, which require a surveyor on each side. Budget **£1,000–£3,000** per adjoining neighbour.

---

## What's included in the headline figure?

A well-structured extension quotation should include:

- **Groundworks and foundations**: Excavation, concrete, drainage connections
- **Structure**: Block and beam or timber floor, masonry walls or structural frame
- **Roof**: Flat or pitched, including waterproofing and insulation
- **External doors and windows**: Supply and installation
- **First-fix M&E**: Plumbing roughed in, electrical wiring
- **Insulation**: Walls, floor and roof
- **Plasterboard and skim**: All walls and ceiling
- **Second-fix M&E**: Sockets, switches, lighting, radiators or UFH
- **Decorated**: Primed and painted
- **Floor finish**: If specified

What's often *not* included in a headline quote:
- Kitchen or bathroom fitting and appliances
- Tiles (often "allow" figures only)
- Decorating beyond primer
- Connection fees for gas or electricity upgrades
- Structural engineer fees
- Architect/designer fees (typically £3,000–£10,000 for a standard scheme)
- Building Control applications (£500–£2,000)

---

## London vs rest of UK

London and the South East command a price premium of **20–40%** over equivalent work in the Midlands or North. This reflects higher labour costs, harder logistics (parking, access, materials delivery), and longer lead times for skilled trades.

A £65,000 single-storey extension in London might cost £45,000–£50,000 in Manchester or Birmingham.

---

## How to get an accurate quote

A ballpark figure is useful for budget-setting. A real quotation requires:

1. **Architectural drawings**: Planning drawings are a start, but technical drawings with specifications are what a contractor prices from
2. **Structural engineer calculations**: Defines the steel specification, foundation type, and floor loading
3. **Specification schedule**: What tiles, what doors, what boiler, what glazing
4. **Site visit**: The contractor must see the existing house, access constraints, and services before pricing

If a contractor quotes you from a conversation and a few photos, treat the figure as indicative only. The real price emerges from real information.

---

## Getting started

The Dwellinger estimating tool can give you a free ballpark based on your project type, size, location, and specification level — then connect you with Builder Score™-verified contractors for a formal quotation.

[Get a free estimate](/estimate)
`,
  },

  'builder-score-explained-why-star-ratings-arent-enough': {
    slug: 'builder-score-explained-why-star-ratings-arent-enough',
    category: 'Builder Score™',
    title: 'Why star ratings aren\'t enough — the case for Builder Score™',
    date: '5 Sept 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    description: 'Anyone can buy reviews on Checkatrade. Anyone can create a Companies House record. Neither tells you whether a contractor pays their subcontractors or holds valid insurance.',
    content: `
## The problem with stars

Walk into any contractor's office in London and you'll find the same thing on the wall: a Checkatrade certificate, some five-star reviews, a Gas Safe card, a Constructionline card. The display is the same whether the contractor is exceptional or barely functional.

The review economy has been gamed. Not universally, not by most contractors — but enough that the signal has degraded. Reviews that used to mean something now compete with bought ones, review-swapped ones, and ones written by the contractor's relatives.

This matters because the home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

---

## What star ratings miss

Here are the things a five-star rating cannot tell you:

### Payment behaviour

Does the contractor pay their subcontractors on time? Do they hold deposits on materials and then fail to pay suppliers, leaving homeowners exposed when insolvency follows? A review from a satisfied homeowner says nothing about what happened to the plasterer and the plumber after the job was complete.

### CDM compliance

The Construction (Design and Management) Regulations 2015 place legal duties on contractors. A principal contractor must produce a Construction Phase Plan, ensure coordination between trades, maintain a health and safety file, and manage site safely. Most homeowners have no idea whether their contractor has ever read the regulations, let alone followed them.

### Insurance currency

A contractor can show you a certificate of public liability insurance dated 18 months ago. Is it still current? Has it been renewed? What is the claims history? A review system cannot answer any of these questions.

### Dispute history

A contractor with 47 five-star reviews and one unresolved dispute — where a homeowner is owed £14,000 — looks identical to a contractor with 47 five-star reviews and a clean record.

---

## How Builder Score™ works

Builder Score™ is Dwellinger's proprietary 0–1000 trust rating for contractors. It is calculated across five weighted dimensions:

**1. Verified reviews (0–200 points)**
Not just the star average — we weight by recency, job type, and whether the review is independently corroborated. Recent reviews on a diverse mix of project types score higher than a cluster of reviews from a single period.

**2. CDM and health & safety compliance (0–200 points)**
We review documentation and assess whether the contractor demonstrates awareness of their statutory duties as principal contractor.

**3. Payment behaviour (0–200 points)**
We review trade credit data, supplier payment records where available, and any reports from subcontractors through our platform.

**4. Dispute history and outcomes (0–200 points)**
Unresolved disputes reduce the score significantly. Resolved disputes — where the contractor made good — are treated differently to stonewalled ones.

**5. Insurance and accreditation (0–200 points)**
Current proof of public liability and employers' liability insurance, plus any relevant industry accreditations.

---

## What the score tells you

A Builder Score™ above **800** indicates a contractor with a strong, multi-dimensional trust profile. Above **900** (Platinum tier) indicates outstanding performance across all dimensions.

A score below **600** should prompt careful questions, even if the contractor has attractive reviews.

The score is not a guarantee. No scoring system can eliminate risk entirely. But it provides a substantially richer signal than a star average — because it evaluates the things that actually matter when something goes wrong on a project.

---

## Why it matters for homeowners

When a £70,000 extension has a problem, you need a contractor who:
- Has the insurance to respond to a claim
- Hasn't left a trail of unpaid subcontractors
- Understands their legal duties on site
- Has resolved disputes fairly when they've occurred before

These are the things Builder Score™ is designed to surface.

[Find Builder Score™-verified contractors](/search)
`,
  },

  'loft-conversion-planning-permission-guide': {
    slug: 'loft-conversion-planning-permission-guide',
    category: 'Planning & Compliance',
    title: 'Loft Conversion Planning Permission: A UK Homeowner\'s Complete Guide',
    date: '3 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    description: 'Most loft conversions do not need planning permission — but the rules depend on your property type, location and what changes you make to the roof.',
    content: `
## Permitted development rights for loft conversions

Most loft conversions in England are permitted development — meaning you do not need to apply for planning permission before starting work. But the rules have limits, and getting it wrong can mean enforcement action or problems when you sell.

Under permitted development, you can add: up to 40m³ of additional roof space for terraced houses; up to 50m³ for detached and semi-detached houses. These limits are cumulative — they include any previous loft conversions. Key conditions: no extension beyond the plane of the existing roof slope at the front; no alteration higher than the existing ridge; materials must match the existing house; side-facing windows must be obscure-glazed if within 1.7m of floor level.

## When you do need planning permission

Planning permission is required when: you exceed the volume limits; you want to alter the ridge height; the property is in a Conservation Area, National Park, or Area of Outstanding Natural Beauty; the property is listed. In Conservation Areas, any roof alteration visible from a public road needs planning consent, even if within volume limits.

## Types of loft conversion

Rooflight conversion: simplest — no change to roofline, just add roof windows (Velux-style). Dormer conversion: extends out from the slope, adding headroom. Usually permitted development for rear dormers; front dormers visible from the street typically need planning. Mansard conversion: flat roof with steeply sloped sides, maximum space. Almost always requires planning as it significantly alters the roofline. Hip-to-gable conversion: changes a hipped roof to a gable end. Usually permitted development for detached and semi-detached houses.

## Building Regulations — always required

Regardless of whether planning permission is needed, Building Regulations approval is always required for a loft conversion. This covers: structural adequacy of the new floor; fire safety — protected escape route from the new room; thermal insulation to current standards; sound insulation between floors; safe stair access.

## Party Wall Act

If your loft conversion involves work to a shared wall with a neighbour — common in terraced houses — you may need to serve a Party Wall Notice at least 2 months before starting. Your contractor or architect can advise on whether this applies.

Find a verified loft conversion specialist on Dwellinger and check their Builder Score before inviting quotes.
`,
  },

  'residual-land-value-calculator-explained': {
    slug: 'residual-land-value-calculator-explained',
    category: 'For Investors',
    title: 'Residual land value explained — and how to calculate it in 5 minutes',
    date: '20 Aug 2026',
    readTime: '7 min read',
    author: 'James Hargrove',
    description: 'The single most important number in property investment is the maximum you should pay for a site. Here\'s how to calculate it.',
    content: `
## What is residual land value?

Residual land value (RLV) is the maximum price you should pay for a development site, given the costs involved and the profit you need to make the scheme viable.

It is calculated by working backward from the end value:

**RLV = Gross Development Value − Total Development Costs − Developer's Profit**

If the answer is positive, the site has value. If it's negative — or lower than the asking price — the scheme does not work at that price.

---

## Why this number matters more than any other

Most property developers focus on the wrong question. They find a site, fall in love with it, and then try to make the numbers work. This is backwards.

The correct process:
1. Establish what the completed development will be worth (GDV)
2. Establish what it will cost to build (total development costs)
3. Decide what profit margin you require
4. **Calculate the maximum you can pay for the land**

This final step is the residual land value. It is the number that determines whether you can make money — and it is the number that tells you your maximum bid.

---

## The components of RLV

### 1. Gross Development Value (GDV)

GDV is the total value of the completed development — all units sold or valued at completion, at current market prices.

For a residential scheme of six flats in East London:
- 2 × studio at £280,000 = £560,000
- 3 × 1-bed at £380,000 = £1,140,000
- 1 × 2-bed at £500,000 = £500,000
- **GDV = £2,200,000**

### 2. Build costs

Build costs include everything required to construct the development:
- Demolition and enabling works
- Groundworks and foundations
- Superstructure
- Roof
- M&E (mechanical and electrical)
- Internal fit-out
- External works

For a residential scheme, build costs in London typically run **£2,000–£3,500/m²** GIA (Gross Internal Area), depending on specification and scheme complexity.

In our example: 400m² GIA at £2,500/m² = £1,000,000

### 3. Professional fees

Add 10–15% of build cost for:
- Architect
- Structural engineer
- QS / cost consultant
- Planning consultant
- Party wall surveyor

In our example: £1,000,000 × 12% = £120,000

### 4. Planning, CIL, and S106

- Planning application fees
- Community Infrastructure Levy (CIL) — varies by borough, can be significant
- Section 106 affordable housing contributions

Allow £50,000–£150,000 for these on a scheme of 6 units in inner London.

### 5. Finance costs

If you are borrowing to fund the scheme:
- Arrangement fees (typically 1–2% of loan)
- Rolled-up interest during construction
- Exit/redemption fees

On a 12-month build programme with 65% LTC at 8% interest: approximately £65,000–£90,000.

### 6. Sales and marketing costs

Agent fees (1–2.5% of GDV), legal fees, and marketing.

Allow £55,000–£80,000 on a £2.2m GDV.

### 7. Contingency

**Always include 5–10% contingency** on build cost. Unexpected groundwork conditions, programme overruns, and scope changes are normal in development.

Allow £60,000 (6% of build cost).

### 8. Developer's profit

The required return on risk. Typically **15–20% of GDV** or **20–25% of total development costs** for residential development in the UK.

At 18% of GDV: £2,200,000 × 18% = £396,000

---

## The calculation

| Item | Amount |
|------|--------|
| GDV | £2,200,000 |
| Less build cost | −£1,000,000 |
| Less professional fees | −£120,000 |
| Less planning/CIL/S106 | −£80,000 |
| Less finance costs | −£75,000 |
| Less sales & marketing | −£60,000 |
| Less contingency | −£60,000 |
| Less developer profit (18% GDV) | −£396,000 |
| **Residual Land Value** | **£409,000** |

This means you can pay up to £409,000 for this site and still achieve your required return.

If the vendor is asking £500,000, the scheme does not work at the current specification, GDV assumptions, or profit requirement. You need to either renegotiate the price, increase the GDV (through redesign, planning uplift, or specification increase), or reduce costs.

---

## Common mistakes

- **Using optimistic GDV figures**: Use comparable evidence from recent sold prices, not asking prices
- **Ignoring CIL**: In some London boroughs, CIL can be substantial
- **Underestimating finance costs**: Rolled-up interest on a delayed programme can significantly erode return
- **No contingency**: If it can go wrong, it will

---

## Use the Dwellinger development appraisal tool

Our free development appraisal tool walks you through this calculation for any UK residential scheme — and connects you with QS-reviewed build cost estimates when you need more precision.

[Use the Development Appraisal Tool](/tools/development-appraisal)
`,
  },

  'cdm-2015-for-homeowners-what-you-need-to-know': {
    slug: 'cdm-2015-for-homeowners-what-you-need-to-know',
    category: 'Planning & Compliance',
    title: 'CDM 2015 for homeowners — what you actually need to know',
    date: '14 Aug 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    description: 'The Construction (Design and Management) Regulations 2015 apply to domestic projects too. Here is what homeowners commissioning work need to understand.',
    content: `
## CDM 2015: the basics for homeowners

The Construction (Design and Management) Regulations 2015 (CDM 2015) are the primary piece of health and safety legislation governing construction projects in Great Britain.

Many homeowners assume CDM applies only to commercial or large-scale projects. It does not. CDM 2015 applies to virtually all construction work in Great Britain — including domestic projects.

What changes for domestic projects is who carries the legal duties, and how onerous those duties are. But the law applies.

---

## The five duty-holders

CDM 2015 defines five categories of duty-holder:

### 1. Client

In a domestic project, the **client is you** — the homeowner commissioning the work. CDM recognises that domestic clients are not construction professionals and makes a significant concession: you can transfer your client duties to the **principal contractor** or **principal designer** in writing.

If you don't do this, the law assumes your duties have passed to the principal contractor by default.

### 2. Principal Designer

The principal designer (PD) coordinates health and safety during the design and pre-construction phase. On projects where more than one contractor is involved, a PD must be appointed.

For a kitchen extension with an architect drawing the plans, the architect may take on the PD role — or you may need to appoint a separate CDM coordinator.

### 3. Principal Contractor

The principal contractor (PC) has overall responsibility for health and safety on site during the construction phase. This is typically your main contractor.

The PC must:
- Produce a **Construction Phase Plan** before work starts
- Ensure the site is run safely
- Coordinate sub-contractors
- Maintain health and safety documentation

A quality principal contractor takes these duties seriously and can demonstrate it through documentation. Be wary of contractors who cannot explain what a Construction Phase Plan is.

### 4. Designers

Architects, structural engineers, and anyone producing design information that will be built from.

### 5. Contractors

Any trade or firm carrying out construction work on site.

---

## When do CDM requirements become more formal?

CDM 2015 scales with project complexity. Two thresholds trigger additional requirements:

**Threshold 1: More than one contractor**
If two or more contractors work on your project, a **principal contractor** and **principal designer** must be formally appointed. This is true for virtually all extensions and refurbishments.

**Threshold 2: Notifiable projects**
A project becomes notifiable if it is likely to:
- Last longer than 30 working days with more than 20 workers simultaneously, or
- Exceed 500 person-days total

Notifiable projects must be registered with the Health and Safety Executive (HSE) before work starts. Most domestic projects don't reach this threshold — but large refurbishments or complex extensions involving multiple trades over extended periods may.

---

## What should homeowners actually do?

### Before appointing a contractor

Ask your contractor:
- Who is acting as principal contractor on this project?
- Can you provide your Construction Phase Plan?
- Who is the principal designer?
- Do you have current public liability insurance? Can I see the certificate?

A contractor who cannot answer these questions clearly should prompt caution.

### Get it in writing

Your contract with the principal contractor should specify:
- That they are acting as principal contractor and accepting your client duties
- Their CDM responsibilities
- Health and safety obligations on site

### The Health and Safety File

At the end of the project, the principal designer must prepare a **Health and Safety File** — a record of the completed work, including as-built drawings, materials used, and any information future owners would need for maintenance or alteration. Keep this file safely.

---

## What can go wrong?

- **Uninsured accident on site**: If a worker is injured on your property and your contractor is not compliant with CDM requirements, you may face liability
- **Enforcement action**: The HSE has the power to issue improvement notices and prohibition notices — and in serious cases, to prosecute
- **Sale implications**: An absence of CDM documentation can complicate conveyancing, particularly if Building Control sign-off was not obtained

---

## The Dwellinger approach

When you work with a Builder Score™-verified contractor through Dwellinger, you are working with a contractor who has been assessed on their CDM compliance — not just their review ratings.

[Find CDM-aware contractors](/search)
`,
  },

  'dwell-agents-ai-for-construction-businesses': {
    slug: 'dwell-agents-ai-for-construction-businesses',
    category: 'Platform',
    title: 'Dwell Agents — how AI is changing the day-to-day for construction businesses',
    date: '8 Aug 2026',
    readTime: '5 min read',
    author: 'James Hargrove',
    description: 'Four AI agents designed specifically for construction: Dwell Coord, Dwell Create, Dwell Clarity, and Dwell Coach. Here\'s what they do and how contractors are using them.',
    content: `
## The paperwork problem in construction

The average small construction business spends between 20% and 35% of its working hours on administration. Quotations, client communications, compliance documents, invoices, scheduling, scope of works documents — the administrative burden on a two-person construction business can consume an entire working day each week.

This is not a new observation. But the solutions have been inadequate. Generic project management software doesn't understand construction terminology. CRM tools designed for sales teams don't know what a Construction Phase Plan is. Spreadsheets require manual maintenance that nobody has time for.

Dwell Agents are different because they are trained specifically on UK construction — the terminology, the document types, the compliance requirements, and the commercial realities of running a building business.

---

## The four Dwell Agents

### Dwell Coord — Project Coordination Agent

Dwell Coord handles project administration: managing schedules, tracking milestones, sending client updates, and keeping programme information organised.

What Dwell Coord can do:
- Generate project programmes from a scope of works
- Send automated progress updates to clients at key milestones
- Flag scheduling conflicts across active projects
- Produce professional project handover documentation

**Time saved**: Contractors using Dwell Coord report saving 3–6 hours per week on scheduling and client communication.

### Dwell Create — Document Creation Agent

Dwell Create produces professional construction documents from brief inputs. It understands the language of UK construction and can produce:
- Scope of works documents (stage by stage or room by room)
- Contract summaries
- Variation notices
- Practical completion certificates
- Defects liability notices
- Client-facing project reports

The documents Dwell Create produces are professional-grade and specific to construction — not generic templates with fields to fill in.

### Dwell Clarity — Technical Query Agent

Dwell Clarity answers technical questions about UK construction: Building Regulations compliance, permitted development rules, CDM duties, standard details, material specifications, and more.

It is not a replacement for a structural engineer or planning consultant — but it handles the day-to-day technical queries that currently require calls, Google searches, or guesswork:

- "Does a dormer on a semi-detached house need planning permission?"
- "What fire resistance does a party wall need in a terraced house?"
- "What are the minimum ceiling heights under Part K?"

### Dwell Coach — Business Development Agent

Dwell Coach helps construction businesses grow. It works with lead information to draft personalised outreach, helps with follow-up sequences, suggests pricing strategies based on job type and location, and helps contractors present themselves professionally to prospective clients.

---

## How contractors are using them

A typical session for a contractor using the Dwell Agent suite:

1. **Morning**: Dwell Coord sends automated progress updates to three active clients — no manual drafting required
2. **Mid-morning**: New enquiry comes in. Dwell Coach produces a personalised response email and a first-pass scope of works from the client's brief
3. **Lunchtime**: Dwell Clarity answers a question about permitted development on a tricky rear extension
4. **Afternoon**: Dwell Create produces a formal scope of works document for a loft conversion quotation — a task that previously took two hours now takes fifteen minutes

---

## Access through the Dwellinger platform

Dwell Agents are available to contractors on Dwellinger's Professional and Enterprise plans. They run through the platform's portal — no installation required, accessible on any device.

[See contractor plans](/platform/pricing)
`,
  },

  'rear-extension-cost-uk-guide': {
    slug: 'rear-extension-cost-uk-guide',
    category: 'Cost Guides',
    title: 'How Much Does a Rear Extension Cost in the UK? (2026 Guide)',
    date: '1 Oct 2026',
    readTime: '7 min read',
    author: 'James Hargrove',
    description: 'UK rear extension costs range from £1,800–£3,500/m². This guide covers typical costs, what affects price, planning requirements and how to verify your contractor.',
    content: `
## Typical costs in 2026

A rear extension is one of the most effective ways to add space and value to a UK home. But costs vary significantly — and understanding what drives price is essential before you sign anything.

Single-storey rear extension: £25,000–£60,000 (basic to mid-spec). Double-storey rear extension: £45,000–£120,000. Cost per m²: £1,800–£2,200 (basic), £2,200–£2,800 (mid-spec), £2,800–£3,500 (high specification). These figures reflect Greater London and the South East. Expect 10–15% lower outside London.

## What affects the cost

Size is the primary driver — but specification matters as much. Key factors: structural complexity (steels, underpinning), M&E (full rewire, new heating circuits), quality of finishes (bifold doors, roof lights, underfloor heating), planning fees and surveys, and site access. A basic 4m × 5m single-storey extension in London typically costs £36,000–£44,000 fully finished.

## Planning permission

Most single-storey rear extensions are permitted development — no planning application required — if they stay within 4m (detached house) or 3m (semi-detached or terraced) from the original rear wall. Extensions beyond this need planning consent, which typically takes 8 weeks. Conservation areas and listed buildings have stricter rules regardless of size.

## Getting accurate quotes

Get at least 3 written quotes based on the same detailed scope of works. A quote without a site visit is unreliable. Ask each contractor for their Builder Score™ on Dwellinger — it shows their CDM compliance record, payment history and verified review track record. Red flags: quotes that exclude VAT without clearly stating it, demands for full payment upfront, no fixed timeline.

## FAQ

Do I need an architect? Not always — but you need someone to produce drawings for Building Control approval. For anything structural, a structural engineer is also required. How long does a rear extension take? 12–20 weeks from start on site is typical for a single-storey extension. Does a rear extension need building regulations approval? Yes, always — regardless of whether planning permission is required.

Search verified extension contractors on Dwellinger and check their Builder Score before you invite quotes.
`,
  },

  'cdm-regulations-homeowners-guide': {
    slug: 'cdm-regulations-homeowners-guide',
    category: 'Planning & Compliance',
    title: 'CDM 2015 Regulations: What UK Homeowners Need to Know',
    date: '2 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    description: 'The Construction (Design and Management) Regulations 2015 apply to most domestic building projects. Here is what homeowners need to know about their legal duties.',
    content: `
## When CDM applies

The Construction (Design and Management) Regulations 2015 — known as CDM 2015 — set out the legal framework for health and safety on UK construction projects. As a homeowner commissioning work, you have duties under these regulations whether you know it or not.

CDM 2015 applies to virtually all construction work. For domestic clients (homeowners), the regulations apply when: the project involves more than one contractor working simultaneously; or the project lasts more than 30 working days with more than 20 workers; or total person-days exceed 500. Even smaller projects must comply with basic notification requirements.

## Your duty as domestic client

As a domestic client, you can transfer your CDM duties to your Principal Contractor — the main contractor managing the project. This transfer happens automatically when you appoint a single contractor. Your principal contractor then takes on responsibility for: producing a Construction Phase Plan before work starts; ensuring health and safety is managed on site; producing a Health and Safety File at project completion.

## Pre-Construction Information

You should provide your contractor with any information you hold about the property — asbestos surveys, structural reports, drainage plans, previous works. This is called Pre-Construction Information and helps your contractor plan the work safely.

## The Health and Safety File

At the end of the project, your principal contractor should hand you a Health and Safety File — a document containing as-built drawings, materials specifications, and maintenance instructions. Keep it. You will need it if you ever sell the property or do further works.

## How Dwellinger helps

Builder Score™ includes a CDM compliance component worth 20% of the total score. Dwellinger checks whether contractors have produced Construction Phase Plans and Health and Safety Files on qualifying past projects. A contractor with a strong CDM record is less likely to create problems for you on site. Reference: HSE CDM 2015 guidance at hse.gov.uk/construction/cdm/2015.

## FAQ

Do I need CDM for a kitchen refurbishment? If only one contractor is involved and the project is under 30 working days, CDM notification is not required — but basic H&S obligations still apply. Who is the Principal Contractor? The company or individual you appoint to manage and coordinate the work on site. What are the penalties for non-compliance? Improvement notices, prohibition notices, and in serious cases prosecution by the HSE.
`,
  },

  'how-to-choose-a-building-contractor': {
    slug: 'how-to-choose-a-building-contractor',
    category: 'Choosing a Builder',
    title: 'How to Choose a Building Contractor in the UK: 7 Things to Check',
    date: '4 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    description: 'Choosing the right contractor is the most important decision in any building project. Here are 7 things to verify before you sign anything.',
    content: `
The difference between a successful building project and a nightmare often comes down to the contractor you choose. These 7 checks help you separate trustworthy professionals from those who will cause problems.

## 1. Verify their legal status

Check the company exists on Companies House (find-and-update.company-information.service.gov.uk). A legitimate building contractor should be registered and have at least one year of trading history. Check their registered address matches what they have told you.

## 2. Confirm public liability insurance

Any contractor working on your property should carry public liability insurance of at least £2 million. Ask for a copy of the certificate and check the expiry date. If they cannot provide it, walk away.

## 3. Check their compliance record

A contractor's track record on health, safety and compliance matters more than any marketing claim. Ask for references on previous projects. Dwellinger's Builder Score™ checks CDM compliance records, payment behaviour to suppliers, and dispute outcomes — data that no review platform provides.

## 4. Read verified project reviews

Look for reviews tied to specific completed projects — with photos, dates, and client names. Reviews without project context are easy to fake. On Dwellinger, reviews are linked to specific jobs and cannot be submitted without a verified project record.

## 5. Get at least 3 written quotes on the same scope

Never compare quotes that are not based on identical scopes of work. Write your own brief — or use Dwellinger's Scope Builder tool — and give it to all three contractors. A quote that comes back significantly lower than the others usually means something has been omitted.

## 6. Insist on a written contract

Do not start work without a written contract. At minimum it should cover: full scope of works, payment schedule, start date and estimated completion, what happens if there are variations. For projects over £10,000, consider a JCT Minor Works Contract.

## 7. Check their Builder Score™ on Dwellinger

Builder Score™ is a 0–1000 trust rating calculated from six independently verified components — not self-reported reviews. A contractor with a Gold or Platinum score has demonstrated verified compliance, payment integrity and a strong review track record. Search by trade and location at dwellinger.co.uk.

## Red flags to avoid

Cash-only payment; pressure to start immediately; no fixed business address; unwillingness to provide references; requesting more than 25% upfront before work starts.
`,
  },

  'why-builder-score-beats-star-ratings': {
    slug: 'why-builder-score-beats-star-ratings',
    category: 'Builder Score™',
    title: 'Why Star Ratings Are Not Enough: Introducing Builder Score™',
    date: '5 Oct 2026',
    readTime: '7 min read',
    author: 'James Hargrove',
    description: 'Star ratings can be bought, faked or manipulated. Builder Score™ is a 0–1000 trust rating calculated from verified compliance data — here is how it works and why it matters.',
    content: `
Five-star ratings are everywhere in the UK trades industry — and almost meaningless. A contractor can have a 4.9-star average while being months behind on payments to suppliers, with a live dispute from a previous client and no public liability insurance. None of that appears in their star rating. Builder Score™ was built to fix this.

## The problem with star ratings

Most trades review platforms allow contractors to: receive reviews without verified project documentation; remove negative reviews through dispute processes; generate reviews from non-project sources; maintain high averages despite serious compliance failures. The result is that star ratings tell you how good a contractor is at gathering positive reviews — not how good they are at building.

## How Builder Score™ works

Builder Score™ is a 0–1000 trust rating published by Dwellinger Ltd for every contractor on the platform. It is calculated from six independently verified components:

- Verified reviews (35% — 350 points): reviews must be tied to a completed project with photos and client confirmation
- CDM compliance record (20% — 200 points): Pre-Construction Information, Construction Phase Plan and Health and Safety File for qualifying projects
- Payment behaviour (15% — 150 points): supplier and subcontractor payment patterns — late payments, disputes and non-payment events
- Insurance and accreditation (15% — 150 points): current public liability insurance, professional indemnity where applicable, trade body membership, identity check
- Dispute resolution record (10% — 100 points): outcome of disputes lodged through Dwellinger or third-party resolution
- Response rate and platform activity (5% — 50 points): lead response time and communication quality

## Score tiers

Platinum: 900–1000 — outstanding across all components. Gold: 700–899 — strong track record, verified across all key areas. Silver: 500–699 — solid, with some components still building. Bronze: 0–499 — less verified history available. Unrated: new contractor, score issued within one working day of verification.

## What a Platinum contractor looks like

A Platinum-rated contractor has: a strong portfolio of verified project reviews; full CDM documentation on all qualifying projects; a clean payment record with no supplier disputes; current insurance and trade body membership; no unresolved disputes.

## How to use Builder Score when comparing quotes

When you receive three quotes on the same scope of works, filter by Builder Score before comparing price. A Gold-rated contractor quoting 10% higher than an Unrated contractor is often the lower-risk choice — the difference in price is unlikely to cover the cost of a dispute or remedial work.

Search contractors by Builder Score™ on Dwellinger.
`,
  },

}

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = posts[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
  }
}

function renderContent(markdown: string) {
  const lines = markdown.trim().split('\n')
  const elements: JSX.Element[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} style={{ color: '#1A2340', fontSize: '1.4rem', fontWeight: 800, marginTop: 40, marginBottom: 12 }}>
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} style={{ color: '#1A2340', fontSize: '1.1rem', fontWeight: 700, marginTop: 28, marginBottom: 8 }}>
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith('---')) {
      elements.push(<hr key={i} style={{ border: 'none', borderTop: '1px solid #EDE8DC', margin: '32px 0' }} />)
    } else if (line.startsWith('- ')) {
      const listItems: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2))
        i++
      }
      elements.push(
        <ul key={i} style={{ paddingLeft: 20, marginBottom: 16 }}>
          {listItems.map((item, j) => (
            <li key={j} style={{ color: '#4A5568', lineHeight: 1.8, marginBottom: 6 }} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ul>
      )
      continue
    } else if (line.startsWith('| ')) {
      // Table
      const tableLines: string[] = []
      while (i < lines.length && lines[i].startsWith('|')) {
        tableLines.push(lines[i])
        i++
      }
      const headers = tableLines[0].split('|').filter(c => c.trim()).map(c => c.trim())
      const rows = tableLines.slice(2).map(row => row.split('|').filter(c => c.trim()).map(c => c.trim()))
      elements.push(
        <div key={i} style={{ overflowX: 'auto', marginBottom: 24 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#1A2340' }}>
                {headers.map((h, j) => <th key={j} style={{ color: '#fff', padding: '10px 16px', textAlign: 'left', fontWeight: 700 }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} style={{ borderBottom: '1px solid #EDE8DC', backgroundColor: j % 2 === 0 ? '#fff' : '#FAFAF7' }}>
                  {row.map((cell, k) => <td key={k} style={{ padding: '10px 16px', color: '#4A5568' }}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
      continue
    } else if (line.match(/^\[(.+)\]\((.+)\)$/)) {
      const match = line.match(/^\[(.+)\]\((.+)\)$/)
      if (match) {
        elements.push(
          <div key={i} style={{ marginTop: 32 }}>
            <a href={match[2]} style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              {match[1]}
            </a>
          </div>
        )
      }
    } else if (line.trim()) {
      elements.push(
        <p key={i} style={{ color: '#4A5568', lineHeight: 1.85, marginBottom: 18, fontSize: '1rem' }}
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/`(.*?)`/g, '<code style="background:#F5F0E8;padding:2px 6px;border-radius:3px;font-size:0.9em">$1</code>')
          }}
        />
      )
    }
    i++
  }
  return elements
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug]
  if (!post) notFound()

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', padding: '64px 24px 48px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(196,119,59,0.15)', color: '#C4773B', padding: '4px 12px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            {post.category}
          </div>
          <h1 style={{ color: '#FFFFFF', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: 24, color: '#c8c0b0', fontSize: '0.85rem', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Calendar size={14} />
              {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={14} />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: '48px 24px 80px' }}>
        <Link
          href="/blog"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: '#C4773B', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, marginBottom: 40 }}
        >
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <div style={{ fontSize: '1.05rem', color: '#4A5568', lineHeight: 1.9, marginBottom: 32, borderLeft: '3px solid #C4773B', paddingLeft: 20 }}>
          {post.description}
        </div>

        {renderContent(post.content)}
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>
            Ready to start your project?
          </h2>
          <p style={{ color: '#4A5568', marginBottom: 28 }}>
            Get a free ballpark estimate in minutes, then connect with Builder Score™-verified contractors.
          </p>
          <Link
            href="/estimate"
            style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#fff', padding: '14px 32px', borderRadius: 6, fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>
    </div>
  )
}
