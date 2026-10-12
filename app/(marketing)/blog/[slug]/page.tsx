import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Calendar, CheckCircle, AlertCircle } from 'lucide-react'

const posts: Record<string, {
  slug: string
  category: string
  title: string
  date: string
  readTime: string
  author: string
  description: string
  image: string
  content: string
}> = {
  'average-cost-to-build-a-house-uk-2026': {
    slug: 'average-cost-to-build-a-house-uk-2026',
    category: 'Cost Guides',
    title: 'Average Cost to Build a House in the UK (2026 Guide)',
    date: '10 Oct 2026',
    readTime: '9 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'Building a new home in the UK costs £1,750–£3,500/m² depending on spec, location and build method. A full 2026 cost breakdown with real figures by region, specification level, and project type.',
    content: `
## What does it actually cost to build a house in the UK in 2026?

The honest answer: more than most people expect. Building a new home in the UK in 2026 costs between **£1,750 and £3,500 per m²** of gross internal area (GIA) — and that figure excludes land, professional fees, planning, utilities, and VAT.

For a typical 4-bedroom detached house of 180m², total build costs (construction only) run:

- **Basic specification**: £315,000–£360,000
- **Mid specification**: £360,000–£540,000
- **High specification**: £540,000–£630,000+

Add professional fees (10–15%), planning and Building Control (£5,000–£15,000), infrastructure and utilities connection (£15,000–£40,000), and VAT where applicable — and the all-in cost of building a new 4-bedroom home outside London typically falls between **£400,000 and £750,000**.

---

## Cost per m² by specification

The most reliable way to estimate build cost is cost per m² of gross internal area.

### Basic specification (£1,750–£2,100/m²)

Standard block-and-beam or timber frame construction. Off-the-shelf kitchen and bathroom fittings. Conventional windows. No complex structural elements. Suitable for volume housing or tightly controlled budget builds.

### Mid specification (£2,100–£2,800/m²)

Better-quality fittings throughout. Underfloor heating on ground floor. More architectural interest: bi-fold doors, higher ceiling heights, quality glazing. Typically what homeowners commissioning a one-off build will aim for.

### High specification (£2,800–£3,500/m²+)

Premium kitchen and bathrooms. Smart home systems. Bespoke joinery. Air source heat pump, solar PV, MVHR. Complex rooflines, large structural glazing, premium external materials.

---

## Cost by region (2026)

| Region | Cost per m² range |
|--------|------------------|
| London | £2,200–£4,000/m² |
| South East and East of England | £1,900–£2,800/m² |
| Midlands | £1,750–£2,400/m² |
| North of England | £1,650–£2,200/m² |
| Scotland and Wales | £1,700–£2,300/m² |

---

## What build cost includes — and what it doesn't

A build contract typically covers: groundworks and foundations; superstructure (walls, floors, roof); roof covering and rainwater goods; external doors, windows, and glazing; first-fix plumbing, heating, and electrical; insulation; plasterboard, skim, and decoration; second-fix plumbing and electrical; kitchen and bathroom fittings (if specified).

What a build contract typically **does not** include: land cost; architect fees (typically 8–12% of build cost); structural engineer fees; planning application fees; Building Control fees (£2,000–£6,000); infrastructure connections (£15,000–£50,000 depending on location); VAT.

---

## Common mistakes in estimating build cost

- **Using m² figures without defining specification**: a £2,500/m² estimate at mid-spec is very different from £2,500/m² at basic-spec
- **Ignoring abnormal groundwork costs**: London clay, contaminated ground, high water tables can add £20,000–£80,000
- **Underestimating professional fees**: 12–18% is realistic for a one-off house
- **No contingency**: 10–15% on top of the contractor price is a minimum

---

## How to get an accurate cost for your project

Dwellinger's free estimating tool gives you a project-specific ballpark based on size, location, and specification — before you commit to architect fees.

[Get a free build cost estimate](/estimate)
`,
  },

  'building-costs-per-sqm-london-2026': {
    slug: 'building-costs-per-sqm-london-2026',
    category: 'Cost Guides',
    title: 'Building Costs Per m² in London: 2026 Guide for Homeowners and Developers',
    date: '9 Oct 2026',
    readTime: '7 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&auto=format&q=80',
    description: 'London building costs range from £1,800 to £4,500+ per m² in 2026. This guide breaks down costs by project type, specification level, and London borough.',
    content: `
## Why London building costs are different

Building in London costs more — significantly more — than anywhere else in the UK. The premium has widened since 2020 and, despite softening in some trades, remains substantial in 2026.

The premium reflects: **labour costs** (London trades earn 20–40% more than outside the M25); **logistics** (ULEZ, Congestion Charge, loading restrictions, parking permits); **lead times** (longer, less competitive tendering on mid-sized projects); and **planning complexity** (conservation areas, listed buildings, borough-specific restrictions).

---

## Building costs per m² in London by project type (2026)

### New build residential

- **Basic specification**: £2,200–£2,700/m² GIA
- **Mid specification**: £2,700–£3,400/m² GIA
- **High specification**: £3,400–£4,500/m² GIA

For a 200m² detached house in outer London at mid specification: £540,000–£680,000 build cost (excluding land, fees, and planning).

### Rear extension (single-storey)

| Specification | Cost per m² |
|---|---|
| Basic | £1,800–£2,400/m² |
| Mid specification | £2,400–£3,000/m² |
| High spec (bifold doors / lanterns) | £3,000–£4,200/m² |

A typical 4m × 5m (20m²) single-storey rear extension in London: **£48,000–£84,000** depending on specification.

### Loft conversion

| Type | Cost per m² |
|---|---|
| Rooflight only | £1,200–£1,800/m² |
| Dormer | £1,500–£2,200/m² |
| Mansard | £2,000–£3,000/m² |

A standard 40m² dormer loft conversion in London: **£60,000–£88,000**.

### Full house refurbishment

- Basic refit: £700–£1,100/m²
- Mid-specification: £1,100–£1,600/m²
- High specification: £1,600–£2,500/m²

---

## Cost variation by London borough

- **Inner London (Westminster, Kensington, Islington, Camden)**: Add 15–25% to mid-range figures
- **Outer East London (Hackney, Walthamstow, Leyton)**: Within 5–10% of mid-range figures
- **Outer West London (Ealing, Hounslow, Richmond)**: Mid-range; Richmond has significant conservation area coverage
- **South London (Lambeth, Lewisham, Southwark)**: Generally mid-range

---

## What drives cost per m² higher

**Specification** is the biggest single lever. Bifold doors (£8,000–£20,000), a premium kitchen (£20,000–£60,000 supply-only), or underfloor heating (add £80–£150/m²) can significantly increase overall cost per m².

**Ground conditions** — London clay requires appropriate foundation design. Mini-piles or raft foundations on some sites add £20,000–£60,000 to groundworks costs.

**Programme length** — extended programmes mean higher overhead and supervision costs.

**Access and logistics** — crane lifts, traffic management, or scaffolding on narrow streets add real cost.

---

## How to use cost per m² figures accurately

Cost per m² is a starting point — not a quotation. Always define the gross internal area (GIA) precisely, state the specification level, allow for professional fees (typically 12–18% of build cost in London), and allow 10–15% contingency on all projects.

[Get a free London cost estimate](/estimate)
`,
  },

  'garage-conversion-cost-uk-guide': {
    slug: 'garage-conversion-cost-uk-guide',
    category: 'Cost Guides',
    title: 'Garage Conversion Cost UK: 2026 Price Guide',
    date: '8 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&auto=format&q=80',
    description: 'A garage conversion costs £7,500–£22,000 in the UK in 2026. This guide covers what affects price, planning permission rules, Building Regulations, and how to verify your contractor.',
    content: `
## What does a garage conversion cost in the UK in 2026?

A garage conversion is one of the most cost-effective ways to add usable space to a home — and one of the most frequently underestimated in terms of what a proper conversion involves.

**Typical cost range: £7,500–£22,000**

| Conversion type | Typical cost range |
|---|---|
| Basic habitable conversion (no bathroom) | £7,500–£12,000 |
| Living space or home office (mid-spec) | £10,000–£16,000 |
| Bedroom with en-suite | £14,000–£22,000 |
| High-spec with bifold door | £16,000–£28,000+ |

Add 20–30% in London for the labour premium.

---

## What a garage conversion includes

A properly specified conversion typically covers: structural work (removing or modifying the garage door opening, installing new front wall or glazing, lintels); floor (DPM, insulation, screed or deck, often underfloor heating); walls (insulating external walls, plasterboard and skim); ceiling (insulation and plasterboard); windows and external door; electrics (consumer unit spur, sockets, lighting); heating (extending existing system or new circuit).

Additional costs: en-suite bathroom (add £4,000–£8,000); kitchenette (add £3,000–£8,000).

---

## Do you need planning permission?

Most garage conversions are **permitted development** — no planning application required — provided you're converting the internal space without extending the external footprint.

Exceptions that require planning: the property is in a Conservation Area and the works affect the external appearance; the garage is on the front elevation in a restricted area; the property is listed; permitted development rights have been removed.

---

## Building Regulations: always required

Regardless of planning permission, **Building Regulations approval is always required** for a garage conversion. This covers: structural adequacy of any new opening or lintel; thermal insulation to current standards (Part L); ventilation (Part F); fire safety (Part B) — particularly where the garage connects to the house; damp-proofing (Part C); electrics (Part P).

---

## Will a garage conversion add value?

A well-executed conversion typically adds **70–85% of the conversion cost** to the property value. Key factors: does the property still have off-street parking? Is the conversion genuinely usable (proper ceiling height, good natural light)? Does it have a Building Regulations completion certificate?

---

## Getting the right contractor

Garage conversions are multi-trade projects. A principal contractor who coordinates all trades is worth the coordination premium. Before inviting a quote, check the contractor's Builder Score™ on Dwellinger — it shows verified project reviews, CDM compliance record, and payment behaviour to suppliers.

[Find verified garage conversion contractors](/search)
`,
  },

  'how-much-does-a-rear-extension-cost-uk-2025': {
    slug: 'how-much-does-a-rear-extension-cost-uk-2025',
    category: 'Cost Guides',
    title: 'How much does a rear extension cost in the UK? (2025 guide)',
    date: '12 Sept 2026',
    readTime: '8 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&q=80',
    description: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees.',
    content: `
## The honest answer: it depends — but here are real numbers

A 4m × 4m single-storey rear extension in London will typically cost between **£60,000 and £95,000** in 2025, including VAT. The range is wide because extensions are bespoke construction projects, and cost is shaped by dozens of decisions: how deep you go, what you put in the walls, what the floor does, what glazing you choose, and how much your contractor's overhead and margin are.

---

## The main cost drivers

### 1. Size and footprint

Extension cost scales roughly with floor area, but not linearly. A 3m × 3m extension costs significantly less than twice a 6m × 3m extension, because groundworks, roof structure, and connections to the existing house are relatively fixed costs.

Rule of thumb for London in 2025:
- **£2,500–£3,500/m²** for a standard single-storey extension
- **£3,000–£4,000/m²** for a double-storey
- **£4,000–£6,000/m²+** for high-specification finishes and bespoke glazing

### 2. Specification and finishes

Nothing moves the price like specification: bi-fold or sliding doors (£5,000–£15,000+), underfloor heating (add £80–£150/m²), structural glazing or roof lanterns (£3,000–£10,000+ per unit), oak-framed additions or bespoke joinery.

### 3. Structural complexity

Most single-storey extensions require a steel beam to span the new opening in the existing rear wall (typically £1,500–£4,000 installed). If you have clay soils (common in London), deep strip or mini-pile foundations can add £8,000–£20,000 to groundworks costs.

### 4. Party wall matters

If your extension is within 3m of a neighbour's foundation, the Party Wall Act applies. Budget **£1,000–£3,000** per adjoining neighbour for Party Wall Awards.

---

## What's included in the headline figure?

A well-structured extension quotation includes: groundworks and foundations; structure; roof; external doors and windows; first-fix M&E; insulation; plasterboard and skim; second-fix M&E; decoration; floor finish if specified.

What's often *not* included: kitchen or bathroom fitting; tiles; architect/designer fees (£3,000–£10,000); Building Control applications (£500–£2,000).

---

## London vs rest of UK

London and the South East command a price premium of **20–40%** over equivalent work in the Midlands or North. A £65,000 single-storey extension in London might cost £45,000–£50,000 in Manchester or Birmingham.

---

## How to get an accurate quote

A ballpark figure is useful for budget-setting. A real quotation requires: architectural drawings, structural engineer calculations, specification schedule, and a site visit. If a contractor quotes you from a conversation and a few photos, treat the figure as indicative only.

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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Anyone can buy reviews on Checkatrade. Anyone can create a Companies House record. Neither tells you whether a contractor pays their subcontractors or holds valid insurance.',
    content: `
## The problem with stars

Walk into any contractor's office in London and you'll find the same thing on the wall: a Checkatrade certificate, some five-star reviews, a Gas Safe card. The display is the same whether the contractor is exceptional or barely functional.

The review economy has been gamed. Not universally, not by most contractors — but enough that the signal has degraded. The home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

---

## What star ratings miss

### Payment behaviour
Does the contractor pay their subcontractors on time? A review from a satisfied homeowner says nothing about what happened to the plasterer and the plumber after the job was complete.

### CDM compliance
The Construction (Design and Management) Regulations 2015 place legal duties on contractors. Most homeowners have no idea whether their contractor has ever read the regulations, let alone followed them.

### Insurance currency
A contractor can show you a certificate of public liability insurance dated 18 months ago. Is it still current? A review system cannot answer this.

### Dispute history
A contractor with 47 five-star reviews and one unresolved £14,000 dispute looks identical to a contractor with 47 five-star reviews and a clean record.

---

## How Builder Score™ works

Builder Score™ is Dwellinger's proprietary 0–1000 trust rating, calculated across five weighted dimensions: verified reviews (0–200), CDM and health & safety compliance (0–200), payment behaviour (0–200), dispute history and outcomes (0–200), and insurance and accreditation (0–200).

A Builder Score™ above **800** indicates a contractor with a strong, multi-dimensional trust profile. Above **900** (Platinum tier) indicates outstanding performance across all dimensions.

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
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b46aba2?w=1400&auto=format&q=80',
    description: 'Most loft conversions do not need planning permission — but the rules depend on your property type, location and what changes you make to the roof.',
    content: `
## Permitted development rights for loft conversions

Most loft conversions in England are permitted development — meaning you do not need to apply for planning permission before starting work. But the rules have limits.

Under permitted development, you can add: up to **40m³** of additional roof space for terraced houses; up to **50m³** for detached and semi-detached houses. These limits are cumulative — they include any previous loft conversions.

Key conditions: no extension beyond the plane of the existing roof slope at the front; no alteration higher than the existing ridge; materials must match the existing house; side-facing windows must be obscure-glazed if within 1.7m of floor level.

---

## When you do need planning permission

Planning permission is required when: you exceed the volume limits; you want to alter the ridge height; the property is in a Conservation Area, National Park, or Area of Outstanding Natural Beauty; the property is listed. In Conservation Areas, any roof alteration visible from a public road needs planning consent, even if within volume limits.

---

## Types of loft conversion

- **Rooflight conversion**: simplest — no change to roofline, just add roof windows. Usually permitted development.
- **Dormer conversion**: extends out from the slope, adding headroom. Rear dormers usually permitted development; front dormers typically need planning.
- **Mansard conversion**: flat roof with steeply sloped sides, maximum space. Almost always requires planning.
- **Hip-to-gable conversion**: changes a hipped roof to a gable end. Usually permitted development for detached and semi-detached houses.

---

## Building Regulations — always required

Regardless of whether planning permission is needed, Building Regulations approval is always required for a loft conversion. This covers: structural adequacy of the new floor; fire safety (protected escape route); thermal insulation to current standards; sound insulation between floors; safe stair access.

---

## Party Wall Act

If your loft conversion involves work to a shared wall with a neighbour — common in terraced houses — you may need to serve a Party Wall Notice at least 2 months before starting.

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
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&auto=format&q=80',
    description: 'The single most important number in property investment is the maximum you should pay for a site. Here\'s how to calculate it.',
    content: `
## What is residual land value?

Residual land value (RLV) is the maximum price you should pay for a development site, given the costs involved and the profit you need to make the scheme viable.

**RLV = Gross Development Value − Total Development Costs − Developer\'s Profit**

If the answer is positive, the site has value. If it's negative — or lower than the asking price — the scheme does not work at that price.

---

## Why this number matters more than any other

Most property developers focus on the wrong question. They find a site, fall in love with it, and then try to make the numbers work. The correct process: establish GDV → establish build cost → decide required profit → **calculate maximum land bid**.

---

## The calculation

For a residential scheme of 6 flats in East London (GDV £2,200,000):

| Item | Amount |
|------|--------|
| GDV | £2,200,000 |
| Less build cost (400m² at £2,500/m²) | −£1,000,000 |
| Less professional fees (12%) | −£120,000 |
| Less planning/CIL/S106 | −£80,000 |
| Less finance costs | −£75,000 |
| Less sales & marketing | −£60,000 |
| Less contingency (6%) | −£60,000 |
| Less developer profit (18% GDV) | −£396,000 |
| **Residual Land Value** | **£409,000** |

This means you can pay up to £409,000 for this site and still achieve your required return. If the vendor is asking £500,000, the scheme does not work at the current parameters.

---

## Common mistakes

- **Using optimistic GDV figures**: use comparable evidence from recent sold prices, not asking prices
- **Ignoring CIL**: in some London boroughs, CIL can be substantial
- **Underestimating finance costs**: rolled-up interest on a delayed programme erodes return
- **No contingency**: if it can go wrong, it will

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
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'The Construction (Design and Management) Regulations 2015 apply to domestic projects too. Here is what homeowners commissioning work need to understand.',
    content: `
## CDM 2015: the basics for homeowners

The Construction (Design and Management) Regulations 2015 (CDM 2015) are the primary piece of health and safety legislation governing construction projects in Great Britain. Many homeowners assume CDM applies only to commercial or large-scale projects. It does not.

---

## The five duty-holders

### 1. Client (you, the homeowner)
You can transfer your CDM duties to the principal contractor in writing. If you don't, the law assumes your duties have passed to the principal contractor by default.

### 2. Principal Designer
Coordinates health and safety during the design and pre-construction phase. Must be appointed when more than one contractor is involved.

### 3. Principal Contractor
Overall responsibility for health and safety on site. Must produce a Construction Phase Plan before work starts, ensure the site is run safely, and maintain health and safety documentation.

### 4. Designers and Contractors
Architects, structural engineers, and all trade contractors on site.

---

## When CDM becomes more formal

**More than one contractor**: a principal contractor and principal designer must be formally appointed.

**Notifiable projects**: last longer than 30 working days with more than 20 simultaneous workers, or exceed 500 person-days. These must be registered with the HSE.

---

## What homeowners should actually do

Before appointing a contractor, ask: Who is acting as principal contractor? Can you provide your Construction Phase Plan? Do you have current public liability insurance?

At the end of the project, your principal contractor should hand you a **Health and Safety File** — containing as-built drawings, materials specifications, and maintenance instructions. Keep it. You will need it if you sell the property or do further works.

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
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&q=80',
    description: 'Four AI agents designed specifically for construction: Dwell Coord, Dwell Create, Dwell Clarity, and Dwell Coach.',
    content: `
## The paperwork problem in construction

The average small construction business spends between 20% and 35% of its working hours on administration. Quotations, client communications, compliance documents, invoices, scheduling, scope of works — the administrative burden on a two-person construction business can consume an entire working day each week.

Dwell Agents are built specifically on UK construction — the terminology, the document types, the compliance requirements, and the commercial realities of running a building business.

---

## The four Dwell Agents

### Dwell Coord — Project Coordination Agent
Handles project administration: managing schedules, tracking milestones, sending client updates. Contractors using Dwell Coord report saving 3–6 hours per week.

### Dwell Create — Document Creation Agent
Produces professional construction documents from brief inputs: scope of works, contract summaries, variation notices, practical completion certificates, defects liability notices.

### Dwell Clarity — Technical Query Agent
Answers technical questions about UK construction: Building Regulations compliance, permitted development rules, CDM duties, standard details, material specifications.

### Dwell Coach — Business Development Agent
Helps construction businesses grow: drafts personalised outreach from lead information, suggests pricing strategies based on job type and location, helps contractors present themselves professionally.

---

## How contractors are using them

A typical session: morning — Dwell Coord sends automated progress updates to three active clients. Mid-morning — new enquiry arrives, Dwell Coach produces a personalised response and first-pass scope from the client's brief. Afternoon — Dwell Create produces a formal scope of works document for a loft conversion quotation in fifteen minutes.

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
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'UK rear extension costs range from £1,800–£3,500/m². This guide covers typical costs, what affects price, planning requirements and how to verify your contractor.',
    content: `
## Typical costs in 2026

A rear extension is one of the most effective ways to add space and value to a UK home.

| Extension type | Typical cost range |
|---|---|
| Single-storey (basic to mid-spec) | £25,000–£60,000 |
| Double-storey | £45,000–£120,000 |
| Cost per m² (basic) | £1,800–£2,200/m² |
| Cost per m² (mid-spec) | £2,200–£2,800/m² |
| Cost per m² (high specification) | £2,800–£3,500/m² |

These figures reflect Greater London and the South East. Expect 10–15% lower outside London.

---

## What affects the cost

Size is the primary driver — but specification matters as much. Key factors: structural complexity (steels, underpinning), M&E (full rewire, new heating circuits), quality of finishes (bifold doors, roof lights, underfloor heating), planning fees and surveys, and site access.

A basic 4m × 5m single-storey extension in London typically costs **£36,000–£44,000** fully finished.

---

## Planning permission

Most single-storey rear extensions are permitted development — no planning application required — if they stay within 4m (detached house) or 3m (semi-detached or terraced) from the original rear wall. Extensions beyond this need planning consent (typically 8 weeks). Conservation areas and listed buildings have stricter rules regardless of size.

---

## Getting accurate quotes

Get at least 3 written quotes based on the same detailed scope of works. A quote without a site visit is unreliable. Red flags: quotes that exclude VAT without clearly stating it, demands for full payment upfront, no fixed timeline.

Check each contractor's Builder Score™ on Dwellinger before inviting quotes.
`,
  },

  'cdm-regulations-homeowners-guide': {
    slug: 'cdm-regulations-homeowners-guide',
    category: 'Planning & Compliance',
    title: 'CDM 2015 Regulations: What UK Homeowners Need to Know',
    date: '2 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'The Construction (Design and Management) Regulations 2015 apply to most domestic building projects. Here is what homeowners need to know about their legal duties.',
    content: `
## When CDM applies

The Construction (Design and Management) Regulations 2015 — known as CDM 2015 — set out the legal framework for health and safety on UK construction projects. As a homeowner commissioning work, you have duties under these regulations whether you know it or not.

CDM 2015 applies when: the project involves more than one contractor working simultaneously; or the project lasts more than 30 working days with more than 20 workers; or total person-days exceed 500.

---

## Your duty as domestic client

As a domestic client, you can transfer your CDM duties to your Principal Contractor. This transfer happens automatically when you appoint a single contractor. Your principal contractor then takes on responsibility for: producing a Construction Phase Plan before work starts; ensuring health and safety is managed on site; producing a Health and Safety File at project completion.

---

## Pre-Construction Information

Provide your contractor with any information you hold about the property — asbestos surveys, structural reports, drainage plans, previous works. This is called Pre-Construction Information and helps your contractor plan the work safely.

---

## The Health and Safety File

At the end of the project, your principal contractor should hand you a Health and Safety File — containing as-built drawings, materials specifications, and maintenance instructions. Keep it. You will need it if you sell the property or do further works.

---

## How Dwellinger helps

Builder Score™ includes a CDM compliance component worth 20% of the total score. Dwellinger checks whether contractors have produced Construction Phase Plans and Health and Safety Files on qualifying past projects.
`,
  },

  'how-to-choose-a-building-contractor': {
    slug: 'how-to-choose-a-building-contractor',
    category: 'Choosing a Builder',
    title: 'How to Choose a Building Contractor in the UK: 7 Things to Check',
    date: '4 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&q=80',
    description: 'Choosing the right contractor is the most important decision in any building project. Here are 7 things to verify before you sign anything.',
    content: `
The difference between a successful building project and a nightmare often comes down to the contractor you choose.

## 1. Verify their legal status

Check the company exists on Companies House. A legitimate building contractor should be registered and have at least one year of trading history.

## 2. Confirm public liability insurance

Any contractor working on your property should carry public liability insurance of at least £2 million. Ask for a copy of the certificate and check the expiry date.

## 3. Check their compliance record

Dwellinger's Builder Score™ checks CDM compliance records, payment behaviour to suppliers, and dispute outcomes — data that no review platform provides.

## 4. Read verified project reviews

Look for reviews tied to specific completed projects — with photos, dates, and client names. On Dwellinger, reviews are linked to specific jobs and cannot be submitted without a verified project record.

## 5. Get at least 3 written quotes on the same scope

Never compare quotes that are not based on identical scopes of work. A quote that comes back significantly lower than the others usually means something has been omitted.

## 6. Insist on a written contract

Do not start work without a written contract. At minimum it should cover: full scope of works, payment schedule, start date and estimated completion, and what happens if there are variations.

## 7. Check their Builder Score™ on Dwellinger

Builder Score™ is a 0–1000 trust rating calculated from six independently verified components. A contractor with a Gold or Platinum score has demonstrated verified compliance, payment integrity and a strong review track record.

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
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Star ratings can be bought, faked or manipulated. Builder Score™ is a 0–1000 trust rating calculated from verified compliance data.',
    content: `
Five-star ratings are everywhere in the UK trades industry — and almost meaningless. A contractor can have a 4.9-star average while being months behind on payments to suppliers, with a live dispute from a previous client and no public liability insurance.

## The problem with star ratings

Most trades review platforms allow contractors to: receive reviews without verified project documentation; remove negative reviews through dispute processes; generate reviews from non-project sources; maintain high averages despite serious compliance failures.

## How Builder Score™ works

Builder Score™ is a 0–1000 trust rating calculated from six independently verified components:

| Component | Weight | Max Points |
|---|---|---|
| Verified reviews | 35% | 350 |
| CDM compliance record | 20% | 200 |
| Payment behaviour | 15% | 150 |
| Insurance and accreditation | 15% | 150 |
| Dispute resolution record | 10% | 100 |
| Response rate and platform activity | 5% | 50 |

## Score tiers

- **Platinum**: 900–1000 — outstanding across all components
- **Gold**: 700–899 — strong track record, verified across all key areas
- **Silver**: 500–699 — solid, with some components still building
- **Bronze**: 0–499 — less verified history available

## How to use Builder Score when comparing quotes

When you receive three quotes on the same scope of works, filter by Builder Score before comparing price. A Gold-rated contractor quoting 10% higher than an Unrated contractor is often the lower-risk choice.

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
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
    },
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
      {/* Hero with full-width image */}
      <section style={{ position: 'relative', minHeight: 320, display: 'flex', alignItems: 'flex-end' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,35,64,0.97) 0%, rgba(26,35,64,0.75) 50%, rgba(26,35,64,0.4) 100%)' }} />
        </div>
        {/* Content over image */}
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 760, margin: '0 auto', padding: '80px 24px 48px' }}>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(196,119,59,0.9)', color: '#fff', padding: '4px 12px', borderRadius: 100, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
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
