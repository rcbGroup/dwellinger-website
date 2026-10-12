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
  'average-cost-to-build-a-house-uk-2026': {
    slug: 'average-cost-to-build-a-house-uk-2026',
    category: 'Cost Guides',
    title: 'Average Cost to Build a House in the UK (2026 Guide)',
    date: '10 Oct 2026',
    readTime: '9 min read',
    author: 'James Hargrove',
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

Premium kitchen and bathrooms. Smart home systems. Bespoke joinery. Air source heat pump, solar PV, MVHR (mechanical ventilation with heat recovery). Complex rooflines, large structural glazing, premium external materials.

Sustainable and Passivhaus builds typically fall in the higher range — but energy savings over time partially offset the premium.

---

## Cost by region (2026)

London and the South East command the highest build costs:

| Region | Cost per m² range |
|--------|------------------|
| London | £2,200–£4,000/m² |
| South East and East of England | £1,900–£2,800/m² |
| Midlands | £1,750–£2,400/m² |
| North of England | £1,650–£2,200/m² |
| Scotland and Wales | £1,700–£2,300/m² |

These figures reflect labour rates — which account for roughly 40–45% of total build cost. London trades cost significantly more per day than equivalent trades in the North, and logistics, parking, and access add further overhead.

---

## What build cost includes — and what it doesn't

A build contract typically covers:

- Groundworks and foundations
- Superstructure (walls, floors, roof)
- Roof covering and rainwater goods
- External doors, windows, and glazing
- External rendering or brick/stone cladding
- First-fix plumbing, heating, and electrical
- Insulation (walls, floor, roof)
- Internal walls and partitions
- Plasterboard, skim, and decoration
- Second-fix plumbing and electrical
- Kitchen and bathroom fittings (if specified)

What a build contract typically **does not** include:

- Land cost
- Architect fees (typically 8–12% of build cost)
- Structural engineer fees (typically 1–3%)
- QS / cost consultant fees
- Planning application fees
- Building Control fees (£2,000–£6,000 for a new house)
- Infrastructure: road, drainage, electricity, water connections (£15,000–£50,000 depending on location)
- VAT — new build homes are zero-rated for the end owner, but VAT applies in the supply chain

---

## Common mistakes in estimating build cost

- **Using m² figures without defining specification**: a £2,500/m² estimate at mid-spec is very different from £2,500/m² at basic-spec
- **Ignoring abnormal groundwork costs**: London clay, contaminated ground, high water tables can add £20,000–£80,000 to foundation costs
- **Underestimating professional fees**: 12–18% is realistic for a one-off house; budget cuts here create risk later
- **No contingency**: 10–15% on top of the contractor price is a minimum. Unexpected conditions are normal, not exceptional.

---

## How to get an accurate cost for your project

1. **Architectural drawings** — Planning drawings are insufficient for pricing. You need technical drawings.
2. **Structural calculations** — Foundation type, beam sizes, and floor loadings.
3. **Specification document** — What finishes, appliances, and systems.
4. **Three contractor tenders** — From contractors who have visited the site.
5. **Contingency allowance** — 10–15% over the contractor figure.

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
    description: 'London building costs range from £1,800 to £4,500+ per m² in 2026. This guide breaks down costs by project type, specification level, and London borough.',
    content: `
## Why London building costs are different

Building in London costs more — significantly more — than anywhere else in the UK. The premium has widened since 2020 and, despite softening in some trades, remains substantial in 2026.

The premium reflects:

- **Labour costs**: London trades earn 20–40% more than equivalent trades outside the M25. A skilled electrician or plumber charges £350–£600/day in London versus £220–£380 elsewhere.
- **Logistics**: Loading restrictions, ULEZ and Congestion Charge zones, parking permits, and tight delivery windows add real cost to every project.
- **Lead times**: Demand for skilled trades means longer lead times and less competitive tendering on mid-sized projects.
- **Planning complexity**: Conservation areas, listed buildings, and borough-specific restrictions add cost and time.

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

- Rooflight only: £1,200–£1,800/m² of new floor area
- Dormer: £1,500–£2,200/m²
- Mansard: £2,000–£3,000/m²

For a standard 40m² dormer loft conversion in London: **£60,000–£88,000**.

### Full house refurbishment

- Basic refit: £700–£1,100/m²
- Mid-specification: £1,100–£1,600/m²
- High specification: £1,600–£2,500/m²

These figures cover all trades. Kitchen units, bathroom suites, and appliances are typically priced separately.

---

## Cost variation by London borough

- **Inner London (Westminster, Kensington, Islington, Camden)**: Add 15–25% to mid-range figures. Logistics are harder, trades charge more, conservation constraints are more common.
- **Outer East London (Hackney, Walthamstow, Leyton)**: Within 5–10% of the mid-range figures above.
- **Outer West London (Ealing, Hounslow, Richmond)**: Mid-range on most project types. Richmond has significant conservation area coverage.
- **South London (Lambeth, Lewisham, Southwark)**: Generally mid-range.

---

## What drives cost per m² higher

**Specification** is the biggest single lever. Choosing bifold doors (£8,000–£20,000 for a typical opening), a premium kitchen (£20,000–£60,000 supply-only), or underfloor heating (add £80–£150/m²) can increase overall cost per m² significantly.

**Ground conditions** — London clay is prevalent and requires appropriate foundation design. On some sites, mini-piles or raft foundations replace conventional strip footings at significant additional cost.

**Programme length** increases cost. A project that takes 6 months instead of 3 months runs higher overhead and supervision costs.

**Access and logistics** — projects requiring crane lifts, traffic management, or scaffolding on narrow streets cost more than the equivalent project with clear site access.

---

## How to use cost per m² figures accurately

Cost per m² is a starting point — not a quotation. Always:

1. Define the gross internal area (GIA) precisely — every floor, including circulation
2. State the specification level — basic, mid, or high
3. State the project type — new build, extension, or refurbishment
4. Allow for professional fees: typically 12–18% of build cost in London
5. Allow 10–15% contingency on all projects

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

A properly specified conversion typically covers:

- **Structural work**: Removing or modifying the garage door opening; installing a new front wall or glazing; lintels where required
- **Floor**: DPM (damp-proof membrane), insulation, and floor screed or deck; often underfloor heating
- **Walls**: Insulating external walls (cavity or internal board); plasterboard and skim
- **Ceiling**: Insulation and plasterboard
- **Windows and external door**: Supply and installation
- **Electrics**: Consumer unit spur, sockets, lighting
- **Heating**: Extending existing system or new circuit

Additional costs for a bedroom/bathroom conversion:
- En-suite bathroom: add £4,000–£8,000
- Kitchenette: add £3,000–£8,000

---

## Do you need planning permission?

Most garage conversions are **permitted development** — no planning application required — provided you're converting the internal space without extending the external footprint.

Exceptions that require planning permission:

- The property is in a Conservation Area and the works affect the external appearance
- The garage is on the front elevation in an area where this is restricted
- The property is a listed building
- Permitted development rights have been removed by a planning condition or Article 4 Direction

Always check with your local planning authority if in doubt. Most councils offer a pre-application enquiry service.

---

## Building Regulations: always required

Regardless of planning permission, **Building Regulations approval is always required** for a garage conversion. This covers:

- Structural adequacy of any new opening or lintel
- Thermal insulation to current standards (Part L)
- Ventilation (Part F)
- Fire safety (Part B) — particularly important where the garage connects to the house
- Damp-proofing (Part C)
- Electrics (Part P)

You have two routes: Full Plans approval (submit drawings for checking before work starts) or Building Notice (inspections as you go). Full Plans is usually preferred for conversions — it confirms compliance before money is spent.

---

## Will a garage conversion add value?

A well-executed conversion typically adds **70–85% of the conversion cost** to the property value. In high-demand areas — most of London and the South East commuter belt — well-designed conversions can add more than they cost.

Key value factors:

- **Off-street parking**: Does the property still have parking after conversion? Loss of parking reduces value, particularly in outer London.
- **Usability**: Proper ceiling height, good natural light, appropriate insulation.
- **Building Regulations certificate**: Essential for conveyancing. Without it, expect delays or deductions at sale.

---

## Getting the right contractor

Garage conversions are multi-trade projects — structural builder, electrician, plumber (if adding a bathroom), and plasterer. A principal contractor who coordinates all trades is worth the coordination premium.

Before inviting a quote, check the contractor's Builder Score™ on Dwellinger — it shows verified project reviews, CDM compliance record, and payment behaviour to suppliers.

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

### Payment behaviour

Does the contractor pay their subcontractors on time? Do they hold deposits on materials and then fail to pay suppliers, leaving homeowners exposed when insolvency follows? A review from a satisfied homeowner says nothing about what happened to the plasterer and the plumber after the job was complete.

### CDM compliance

The Construction (Design and Management) Regulations 2015 place legal duties on contractors. A principal contractor must produce a Construction Phase Plan, ensure coordination between trades, maintain a health and safety file, and manage site safely. Most homeowners have no idea whether their contractor has ever read the regulations, let alone followed them.

### Insurance currency

A contractor can show you a certificate of public liability insurance dated 18 months ago. Is it still current? Has it been renewed? A review system cannot answer any of these questions.

### Dispute history

A contractor with 47 five-star reviews and one unresolved dispute — where a homeowner is owed £14,000 — looks identical to a contractor with 47 five-star reviews and a clean record.

---

## How Builder Score™ works

Builder Score™ is Dwellinger's proprietary 0–1000 trust rating for contractors. It is calculated across five weighted dimensions:

**1. Verified reviews (0–200 points)**
Not just the star average — we weight by recency, job type, and whether the review is independently corroborated.

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

This final step is the residual land value. It determines whether you can make money — and sets your maximum bid.

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

For a residential scheme, build costs in London typically run **£2,000–£3,500/m²** GIA, depending on specification and scheme complexity.

In our example: 400m² GIA at £2,500/m² = £1,000,000

### 3. Professional fees (10–15% of build cost)

Architect, structural engineer, QS/cost consultant, planning consultant, party wall surveyor.

In our example: £1,000,000 × 12% = £120,000

### 4. Planning, CIL, and S106

Planning fees, Community Infrastructure Levy (CIL), and Section 106 contributions. Allow £50,000–£150,000 for 6 units in inner London.

### 5. Finance costs

On a 12-month build programme with 65% LTC at 8% interest: approximately £65,000–£90,000.

### 6. Contingency

**Always include 5–10% contingency** on build cost. Allow £60,000 (6% of build cost).

### 7. Developer's profit

Typically **15–20% of GDV** for residential development. At 18% of GDV: £2,200,000 × 18% = £396,000

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

This means you can pay up to £409,000 for this site and still achieve your required return. If the vendor is asking £500,000, the scheme does not work at the current parameters.

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

---

## The five duty-holders

### 1. Client

In a domestic project, the **client is you** — the homeowner commissioning the work. You can transfer your client duties to the **principal contractor** in writing. If you don't, the law assumes your duties have passed to the principal contractor by default.

### 2. Principal Designer

The principal designer coordinates health and safety during the design and pre-construction phase. On projects where more than one contractor is involved, a PD must be appointed.

### 3. Principal Contractor

The principal contractor has overall responsibility for health and safety on site. They must:
- Produce a **Construction Phase Plan** before work starts
- Ensure the site is run safely
- Coordinate sub-contractors
- Maintain health and safety documentation

### 4. Designers and Contractors

Architects, structural engineers, and anyone producing design information, as well as all trade contractors on site.

---

## When CDM becomes more formal

**More than one contractor**: If two or more contractors work on your project, a principal contractor and principal designer must be formally appointed.

**Notifiable projects**: A project becomes notifiable if it is likely to last longer than 30 working days with more than 20 workers simultaneously, or exceed 500 person-days total. These must be registered with the HSE before work starts.

---

## What homeowners should actually do

Before appointing a contractor, ask:
- Who is acting as principal contractor on this project?
- Can you provide your Construction Phase Plan?
- Do you have current public liability insurance?

At the end of the project, your principal contractor should hand you a **Health and Safety File** — keep it. You will need it if you sell the property or do further works.

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

Dwell Agents are built specifically on UK construction — the terminology, the document types, the compliance requirements, and the commercial realities of running a building business.

---

## The four Dwell Agents

### Dwell Coord — Project Coordination Agent

Handles project administration: managing schedules, tracking milestones, sending client updates, and keeping programme information organised.

- Generate project programmes from a scope of works
- Send automated progress updates to clients at key milestones
- Flag scheduling conflicts across active projects
- Produce professional project handover documentation

### Dwell Create — Document Creation Agent

Produces professional construction documents from brief inputs:
- Scope of works documents (stage by stage or room by room)
- Contract summaries
- Variation notices
- Practical completion certificates
- Defects liability notices

### Dwell Clarity — Technical Query Agent

Answers technical questions about UK construction: Building Regulations compliance, permitted development rules, CDM duties, standard details, material specifications, and more.

### Dwell Coach — Business Development Agent

Helps construction businesses grow. Works with lead information to draft personalised outreach, helps with follow-up sequences, and suggests pricing strategies based on job type and location.

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

CDM 2015 applies to virtually all construction work. For domestic clients (homeowners), the regulations apply when: the project involves more than one contractor working simultaneously; or the project lasts more than 30 working days with more than 20 workers; or total person-days exceed 500.

## Your duty as domestic client

As a domestic client, you can transfer your CDM duties to your Principal Contractor — the main contractor managing the project. This transfer happens automatically when you appoint a single contractor. Your principal contractor then takes on responsibility for: producing a Construction Phase Plan before work starts; ensuring health and safety is managed on site; producing a Health and Safety File at project completion.

## Pre-Construction Information

You should provide your contractor with any information you hold about the property — asbestos surveys, structural reports, drainage plans, previous works. This is called Pre-Construction Information and helps your contractor plan the work safely.

## The Health and Safety File

At the end of the project, your principal contractor should hand you a Health and Safety File — a document containing as-built drawings, materials specifications, and maintenance instructions. Keep it. You will need it if you ever sell the property or do further works.

## How Dwellinger helps

Builder Score™ includes a CDM compliance component worth 20% of the total score. Dwellinger checks whether contractors have produced Construction Phase Plans and Health and Safety Files on qualifying past projects.

## FAQ

Do I need CDM for a kitchen refurbishment? If only one contractor is involved and the project is under 30 working days, CDM notification is not required — but basic H&S obligations still apply. Who is the Principal Contractor? The company or individual you appoint to manage and coordinate the work on site.
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

Check the company exists on Companies House (find-and-update.company-information.service.gov.uk). A legitimate building contractor should be registered and have at least one year of trading history.

## 2. Confirm public liability insurance

Any contractor working on your property should carry public liability insurance of at least £2 million. Ask for a copy of the certificate and check the expiry date.

## 3. Check their compliance record

A contractor's track record on health, safety and compliance matters more than any marketing claim. Dwellinger's Builder Score™ checks CDM compliance records, payment behaviour to suppliers, and dispute outcomes.

## 4. Read verified project reviews

Look for reviews tied to specific completed projects — with photos, dates, and client names. Reviews without project context are easy to fake. On Dwellinger, reviews are linked to specific jobs and cannot be submitted without a verified project record.

## 5. Get at least 3 written quotes on the same scope

Never compare quotes that are not based on identical scopes of work. A quote that comes back significantly lower than the others usually means something has been omitted.

## 6. Insist on a written contract

Do not start work without a written contract. At minimum it should cover: full scope of works, payment schedule, start date and estimated completion, and what happens if there are variations.

## 7. Check their Builder Score™ on Dwellinger

Builder Score™ is a 0–1000 trust rating calculated from six independently verified components — not self-reported reviews. A contractor with a Gold or Platinum score has demonstrated verified compliance, payment integrity and a strong review track record.

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

Most trades review platforms allow contractors to: receive reviews without verified project documentation; remove negative reviews through dispute processes; generate reviews from non-project sources; maintain high averages despite serious compliance failures.

## How Builder Score™ works

Builder Score™ is a 0–1000 trust rating published by Dwellinger Ltd for every contractor on the platform. It is calculated from six independently verified components:

- Verified reviews (35% — 350 points): reviews must be tied to a completed project with photos and client confirmation
- CDM compliance record (20% — 200 points): Pre-Construction Information, Construction Phase Plan and Health and Safety File for qualifying projects
- Payment behaviour (15% — 150 points): supplier and subcontractor payment patterns
- Insurance and accreditation (15% — 150 points): current public liability insurance, professional indemnity where applicable, trade body membership
- Dispute resolution record (10% — 100 points): outcome of disputes lodged through Dwellinger or third-party resolution
- Response rate and platform activity (5% — 50 points): lead response time and communication quality

## Score tiers

Platinum: 900–1000. Gold: 700–899. Silver: 500–699. Bronze: 0–499.

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
