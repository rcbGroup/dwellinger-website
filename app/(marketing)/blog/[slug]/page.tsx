import React from 'react'
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
  image: string
  content: string
}> = {
  'loft-conversion-cost-london-2026': {
    slug: 'loft-conversion-cost-london-2026',
    category: 'Cost Guides',
    title: 'Loft Conversion Cost in London: 2026 Guide',
    date: '13 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b46aba2?w=1400&auto=format&q=80',
    description: 'A loft conversion in London costs £60,000–£130,000 depending on type and specification. This 2026 guide breaks down costs by conversion type, borough premiums, what’s included, and how to get accurate quotes.',
    content: `
## Loft conversion costs in London in 2026

A loft conversion in London will typically cost between **£60,000 and £130,000** in 2026, depending on the type of conversion, size of the loft, specification level, and your location within Greater London.

The London premium over equivalent work elsewhere in the UK is typically **20–40%**, driven by higher trade labour rates, ULEZ and Congestion Charge logistics costs, and longer lead times for specialist subcontractors.

---

## Cost by conversion type (London, 2026)

| Conversion type | Typical London cost |
|---|---|
| Rooflight conversion | £25,000–£45,000 |
| Dormer (rear) | £55,000–£90,000 |
| Dormer (rear) with en-suite | £65,000–£105,000 |
| Hip-to-gable conversion | £60,000–£95,000 |
| Hip-to-gable with rear dormer | £75,000–£120,000 |
| Mansard conversion | £85,000–£130,000+ |

All figures include structural floor, staircase, insulation, windows, basic finishes, and Building Regulations compliance. En-suite bathroom costs are included where stated. Second-fix materials vary.

---

## What drives the cost up in London

### Labour rates
London carpenters, electricians, plumbers, and plasterers earn 20–40% more than equivalent trades in the Midlands or North. A specialist loft conversion carpenter in South East London may charge £300–£450 per day.

### Structural complexity
Most London lofts are Victorian or Edwardian terraced houses with traditional cut-roof structures. Converting these properly requires careful removal of purlins and ceiling joists, insertion of steel beams, and often temporary propping. On a party wall structure, this adds cost and Party Wall Agreement requirements.

### The staircase
A new staircase is one of the highest cost items. A straight flight in a simple position costs £2,500–£4,500 installed. An alternating tread staircase (for tight spaces) costs £4,000–£6,500. A bespoke helical or open-tread design can reach £15,000–£25,000.

### Planning and heritage
London has a higher concentration of Conservation Areas, Article 4 Directions, and listed buildings than most UK cities. In Conservation Areas, front-facing dormers typically require planning permission. Mansard conversions in Article 4 areas always need consent.

---

## London borough cost comparison

- **Inner London (Westminster, Kensington & Chelsea, Islington)**: Add 20–30% to mid-range figures
- **East London (Hackney, Tower Hamlets, Newham)**: Within 10% of mid-range figures
- **South London (Lambeth, Lewisham, Southwark)**: Within 5–12% of mid-range
- **West London (Ealing, Hammersmith, Richmond)**: Mid-range; Richmond adds heritage premium
- **North London (Barnet, Enfield, Haringey)**: Generally mid-range for terraced work

---

## What is included (and what is not)

**Typically included**: structural works (new floor, steels, propping), roof alterations (dormer construction or rooflight openings), Velux or equivalent roof windows, staircase supply and fit, insulation to current Part L standards, plasterboard and skim, electrics (lighting, sockets, fuse spur), heating (extension of existing system), basic decoration.

**Not typically included**: en-suite unless specified, joinery and fitted storage, flooring, high-specification bathroom, structural engineer fees (£1,500–£4,000), architect or designer fees if used, Building Control fees (£2,000–£4,000), Party Wall Surveyor fees (£1,200–£2,500 per adjoining neighbour).

---

## Getting an accurate quote

Any quote generated without a site visit and survey of the existing loft is indicative only. A properly prepared quote requires the contractor or their representative to: measure the loft, assess the existing roof structure, check head height at different points, identify the best staircase position, and assess the feasibility of the en-suite plumbing route.

Get at least 3 written quotes on the same specification. Check each contractor Builder Score on Dwellinger before inviting them to site.

[Get a free loft conversion estimate](/estimate)
`,
  },

  'house-extension-planning-permission-uk': {
    slug: 'house-extension-planning-permission-uk',
    category: 'Planning & Compliance',
    title: 'House Extension Planning Permission UK: Complete 2026 Guide',
    date: '12 Oct 2026',
    readTime: '8 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'Many house extensions in England do not need planning permission. But the rules are specific and the exceptions matter. This 2026 guide covers exactly when you do and do not need to apply.',
    content: `
## Do you need planning permission for a house extension?

In England, many house extensions can be built under **Permitted Development (PD) rights** — meaning you do not need to apply for planning permission. But the rules are more specific than most homeowners realise, and the exceptions are significant.

The key factors that determine whether your extension needs planning permission: the size and height of the extension, where it sits relative to the original house, whether you have a detached, semi-detached, or terraced property, whether you are in a restricted area, and whether your PD rights have been removed.

---

## Permitted development rules for rear extensions

### Single-storey rear extensions

**Detached houses**: up to **6 metres** from the original rear wall, or up to **8 metres** under the Larger Home Extension scheme (with prior approval). **Semi-detached and terraced houses**: up to **3 metres** from the original rear wall, or up to **6 metres** under the Larger Home Extension scheme (with prior approval).

Additional conditions: maximum height at the eaves of 3m (4m at the ridge); maximum height of 4m overall; does not cover more than half the garden; materials must match the existing house.

### Double-storey rear extensions

Double-storey extensions are more restricted: up to **3 metres** from the original rear wall. The roof pitch must match the existing house. There must be no windows or doors on the upper floor side elevation within 1 metre of the side boundary. A minimum 7 metres must remain between the rear of the extension and the rear boundary.

---

## Side extensions

Single-storey side extensions are permitted development if they do not exceed half the width of the original house. Extensions on the principal elevation (front of the house) always need planning permission.

---

## The Larger Home Extension scheme

For single-storey rear extensions that exceed the basic 3m or 6m thresholds, homeowners in England can apply under the Larger Home Extension scheme. This allows extensions up to 6m (semi/terraced) or 8m (detached) provided: prior approval is obtained from the local authority, neighbours are notified and given the opportunity to object, and the authority assesses impact on amenity.

Prior approval applications take 42 days. This is different from planning permission.

---

## When you always need planning permission

Planning permission is always required for: extensions that exceed the PD volume or dimension thresholds; extensions on listed buildings (which also need Listed Building Consent); extensions in National Parks, AONBs, World Heritage Sites, or Conservation Areas that alter the external appearance from the road; properties where permitted development rights have been removed by an Article 4 Direction; flats and maisonettes (PD rights apply to houses only).

---

## How to check whether PD applies to your property

The most reliable method: apply for a **Lawful Development Certificate (LDC)** from your local planning authority. This is a formal confirmation that your proposed works are permitted development and do not need planning permission. An LDC costs £103 (England, 2026) and provides legal certainty.

---

## Building Regulations always required

Even if your extension does not need planning permission, **Building Regulations approval is always required** for: structural work, thermal insulation to Part L standards, fire safety, electrical work, plumbing and drainage connections, and means of escape from upper floors.

[Check your planning situation with our free guide](/tools/planning)
`,
  },

  'quantity-surveyor-cost-uk': {
    slug: 'quantity-surveyor-cost-uk',
    category: 'Cost Guides',
    title: 'How Much Does a Quantity Surveyor Cost in the UK? (2026 Guide)',
    date: '11 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Quantity surveyor fees in the UK range from 1% to 3% of project value for residential work, or £800–£6,000+ as a fixed fee. Here is what you get for your money and when a QS is worth it.',
    content: `
## What does a quantity surveyor cost in the UK?

Quantity surveyor fees for domestic projects in the UK typically fall into two models:

**Percentage-based**: 1–3% of the total project construction cost. On a £150,000 extension and loft project, this means £1,500–£4,500 in QS fees.

**Fixed fee**: £800–£6,000+ for domestic residential projects, depending on complexity, scope, and what services are included.

---

## What a QS does for domestic projects

### Pre-contract services
- **Cost planning**: establishing a realistic budget before committing to design
- **Cost estimation**: detailed cost plan based on drawings and specification
- **Value engineering**: identifying where specification can be adjusted to improve value without compromising quality
- **Tender management**: preparing bills of quantities, issuing to contractors, evaluating returns, recommending award

### During construction
- **Interim valuations**: checking contractor applications and certifying the correct amount for each payment stage
- **Variation assessment**: pricing changes to scope as they arise
- **Final account agreement**: agreeing the final total with the contractor

---

## Fixed-fee QS services for domestic projects

| Service | Typical cost |
|---|---|
| Ballpark estimate (phone/online) | £150–£400 |
| Detailed cost estimate from drawings | £500–£1,500 |
| Tender documents and bills of quantities | £1,500–£3,500 |
| Full pre-contract QS service | £2,000–£6,000 |
| Interim valuations (per visit) | £350–£700 per visit |

---

## When is a QS worth it for a domestic project?

A QS provides clearest value when: the project is above £80,000–£100,000; you are using a traditional procurement route and need to evaluate competitive tenders properly; you need objective, professionally prepared figures before approaching contractors; the project involves significant complexity, unknowns, or structural elements; you are managing the project yourself without a main contractor.

---

## The difference between an estimate and a QS

A contractor estimate is prepared by someone with a financial interest in winning the work. A QS estimate is prepared by an independent professional with no stake in who is appointed. This independence matters most when evaluating multiple tenders, when the project is large enough that errors are costly, and when client-contractor disputes are more likely.

[Get a free estimate](/estimate)
`,
  },

  'average-cost-to-build-a-house-uk-2026': {
    slug: 'average-cost-to-build-a-house-uk-2026',
    category: 'Cost Guides',
    title: 'Average Cost to Build a House in the UK (2026 Guide)',
    date: '10 Oct 2026',
    readTime: '9 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'Building a new home in the UK costs £1,750–£3,500/m² depending on spec, location and build method. A full 2026 cost breakdown with real figures by region, specification level, and project type.',
    content: `
## What does it cost to build a house in the UK in 2026?

Building a new home in the UK in 2026 costs between **£1,750 and £3,500 per m²** of gross internal area (GIA) — and that figure excludes land, professional fees, planning, utilities, and VAT.

For a typical 4-bedroom detached house of 180m², total build costs (construction only) run:

- **Basic specification**: £315,000–£360,000
- **Mid specification**: £360,000–£540,000
- **High specification**: £540,000–£630,000+

Add professional fees (10–15%), planning and Building Control (£5,000–£15,000), infrastructure and utilities connection (£15,000–£40,000), and VAT where applicable.

---

## Cost per m² by specification

### Basic specification (£1,750–£2,100/m²)

Standard block-and-beam or timber frame construction. Off-the-shelf kitchen and bathroom fittings. Conventional windows. No complex structural elements.

### Mid specification (£2,100–£2,800/m²)

Better-quality fittings throughout. Underfloor heating on ground floor. More architectural interest: bi-fold doors, higher ceiling heights, quality glazing.

### High specification (£2,800–£3,500/m²+)

Premium kitchen and bathrooms. Smart home systems. Bespoke joinery. Air source heat pump, solar PV, MVHR.

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

## Common mistakes in estimating build cost

- **Using m² figures without defining specification**: a £2,500/m² estimate at mid-spec is very different from £2,500/m² at basic-spec
- **Ignoring abnormal groundwork costs**: London clay, contaminated ground, high water tables can add £20,000–£80,000
- **Underestimating professional fees**: 12–18% is realistic for a one-off house
- **No contingency**: 10–15% on top of the contractor price is a minimum

[Get a free build cost estimate](/estimate)
`,
  },

  'building-costs-per-sqm-london-2026': {
    slug: 'building-costs-per-sqm-london-2026',
    category: 'Cost Guides',
    title: 'Building Costs Per m² in London: 2026 Guide',
    date: '9 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&auto=format&q=80',
    description: 'London building costs range from £1,800 to £4,500+ per m² in 2026. Costs by project type, specification level, and London borough.',
    content: `
## Why London building costs are different

Building in London costs more than anywhere else in the UK. The premium reflects: **labour costs** (London trades earn 20–40% more than outside the M25); **logistics** (ULEZ, Congestion Charge, loading restrictions, parking permits); **lead times** (longer, less competitive tendering on mid-sized projects); and **planning complexity** (conservation areas, listed buildings, borough-specific restrictions).

---

## Building costs per m² in London by project type (2026)

### New build residential

| Specification | Cost per m² GIA |
|---|---|
| Basic | £2,200–£2,700/m² |
| Mid specification | £2,700–£3,400/m² |
| High specification | £3,400–£4,500/m² |

### Rear extension (single-storey)

| Specification | Cost per m² |
|---|---|
| Basic | £1,800–£2,400/m² |
| Mid specification | £2,400–£3,000/m² |
| High spec (bifold doors / lanterns) | £3,000–£4,200/m² |

### Loft conversion

| Type | Typical London cost |
|---|---|
| Rooflight only | £25,000–£45,000 |
| Dormer | £55,000–£90,000 |
| Mansard | £85,000–£130,000 |

### Full house refurbishment

- Basic refit: £700–£1,100/m²
- Mid-specification: £1,100–£1,600/m²
- High specification: £1,600–£2,500/m²

---

## What drives cost per m² higher

**Specification** is the biggest single lever. Bifold doors (£8,000–£20,000), a premium kitchen (£20,000–£60,000 supply-only), or underfloor heating (add £80–£150/m²) can significantly increase overall cost per m².

**Ground conditions** — London clay requires appropriate foundation design. Mini-piles or raft foundations on some sites add £20,000–£60,000 to groundworks costs.

[Get a free London cost estimate](/estimate)
`,
  },

  'garage-conversion-cost-uk-guide': {
    slug: 'garage-conversion-cost-uk-guide',
    category: 'Cost Guides',
    title: 'Garage Conversion Cost UK: 2026 Price Guide',
    date: '8 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1400&auto=format&q=80',
    description: 'A garage conversion costs £7,500–£22,000 in the UK in 2026. Covers planning permission rules, Building Regulations, and how to verify your contractor.',
    content: `
## What does a garage conversion cost in the UK in 2026?

A garage conversion is one of the most cost-effective ways to add usable space to a home.

| Conversion type | Typical cost range |
|---|---|
| Basic habitable conversion (no bathroom) | £7,500–£12,000 |
| Living space or home office (mid-spec) | £10,000–£16,000 |
| Bedroom with en-suite | £14,000–£22,000 |
| High-spec with bifold door | £16,000–£28,000+ |

Add 20–30% in London for the labour premium.

---

## Do you need planning permission?

Most garage conversions are **permitted development** — no planning application required — provided you are converting the internal space without extending the external footprint. Exceptions: the property is in a Conservation Area and the works affect the external appearance; PD rights have been removed; the garage is on the front elevation in a restricted area; the property is listed.

---

## Building Regulations: always required

Regardless of planning permission, **Building Regulations approval is always required** for a garage conversion. This covers: structural adequacy; thermal insulation to current standards (Part L); ventilation (Part F); fire safety (Part B); damp-proofing (Part C); electrics (Part P).

---

## Will a garage conversion add value?

A well-executed conversion typically adds **70–85% of the conversion cost** to the property value. Key factors: does the property still have off-street parking? Is the conversion genuinely usable? Does it have a Building Regulations completion certificate?

[Find verified garage conversion contractors](/search)
`,
  },

  'why-builder-score-beats-star-ratings': {
    slug: 'why-builder-score-beats-star-ratings',
    category: 'Builder Score',
    title: 'Why Star Ratings Are Not Enough: Introducing Builder Score',
    date: '5 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Star ratings can be bought, faked or manipulated. Builder Score is a 0-1000 trust rating calculated from verified compliance data.',
    content: `
## The problem with stars

The review economy has been gamed. The home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

---

## What star ratings miss

### Payment behaviour
Does the contractor pay their subcontractors on time? A review from a satisfied homeowner says nothing about what happened to the plasterer and the plumber after the job was complete.

### CDM compliance
The Construction (Design and Management) Regulations 2015 place legal duties on contractors. Most homeowners have no idea whether their contractor has ever read the regulations, let alone followed them.

### Insurance currency
A contractor can show you a certificate of public liability insurance dated 18 months ago. Is it still current? A review system cannot answer this.

---

## How Builder Score works

Builder Score is a 0–1000 trust rating, calculated across five weighted dimensions: verified reviews (0–200), CDM and health & safety compliance (0–200), payment behaviour (0–200), dispute history and outcomes (0–200), and insurance and accreditation (0–200).

A Builder Score above **800** indicates a contractor with a strong, multi-dimensional trust profile. Above **900** (Platinum tier) indicates outstanding performance across all dimensions.

[Find Builder Score-verified contractors](/search)
`,
  },

  'how-to-choose-a-building-contractor': {
    slug: 'how-to-choose-a-building-contractor',
    category: 'Choosing a Builder',
    title: 'How to Choose a Building Contractor in the UK: 7 Things to Check',
    date: '4 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&q=80',
    description: 'Choosing the right contractor is the most important decision in any building project. Here are 7 things to verify before you sign anything.',
    content: `
The difference between a successful building project and a nightmare often comes down to the contractor you choose.

## 1. Verify their legal status

Check the company exists on Companies House. A legitimate building contractor should be registered and have at least one year of trading history.

## 2. Confirm public liability insurance

Any contractor working on your property should carry public liability insurance of at least £2 million. Ask for a copy of the certificate and check the expiry date.

## 3. Check their Builder Score on Dwellinger

Builder Score checks CDM compliance records, payment behaviour to suppliers, and dispute outcomes — data that no review platform provides.

## 4. Read verified project reviews

Look for reviews tied to specific completed projects — with photos, dates, and client names.

## 5. Get at least 3 written quotes on the same scope

Never compare quotes that are not based on identical scopes of work. A quote that comes back significantly lower than the others usually means something has been omitted.

## 6. Insist on a written contract

Do not start work without a written contract covering: full scope of works, payment schedule, start date and estimated completion, and what happens if there are variations.

## 7. Check their Builder Score on Dwellinger

Builder Score is a 0–1000 trust rating calculated from six components. A Gold or Platinum contractor has demonstrated verified compliance, payment integrity and a strong review track record.

## Red flags to avoid

Cash-only payment; pressure to start immediately; no fixed business address; unwillingness to provide references; requesting more than 25% upfront.
`,
  },

  'loft-conversion-planning-permission-guide': {
    slug: 'loft-conversion-planning-permission-guide',
    category: 'Planning & Compliance',
    title: 'Loft Conversion Planning Permission: A UK Homeowner Complete Guide',
    date: '3 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b46aba2?w=1400&auto=format&q=80',
    description: 'Most loft conversions do not need planning permission — but the rules depend on your property type, location and what changes you make to the roof.',
    content: `
## Permitted development rights for loft conversions

Most loft conversions in England are permitted development — meaning you do not need to apply for planning permission before starting work. But the rules have limits.

Under permitted development, you can add: up to **40m³** of additional roof space for terraced houses; up to **50m³** for detached and semi-detached houses. These limits are cumulative — they include any previous loft conversions.

Key conditions: no extension beyond the plane of the existing roof slope at the front; no alteration higher than the existing ridge; materials must match the existing house; side-facing windows must be obscure-glazed if within 1.7m of floor level.

---

## When you do need planning permission

Planning permission is required when: you exceed the volume limits; you want to alter the ridge height; the property is in a Conservation Area, National Park, or AONB; the property is listed. In Conservation Areas, any roof alteration visible from a public road needs planning consent, even if within volume limits.

---

## Types of loft conversion

- **Rooflight**: no change to roofline, just add roof windows. Usually permitted development.
- **Dormer**: extends out from the slope, adding headroom. Rear dormers usually PD; front dormers typically need planning.
- **Mansard**: flat roof with steeply sloped sides. Almost always requires planning.
- **Hip-to-gable**: changes a hipped roof to a gable end. Usually PD for detached and semi-detached.

---

## Building Regulations always required

Regardless of planning permission, Building Regulations approval is always required for a loft conversion. This covers: structural adequacy; fire safety (protected escape route); thermal insulation; sound insulation between floors; safe stair access.

[Find verified loft conversion specialists](/search)
`,
  },

  'cdm-regulations-homeowners-guide': {
    slug: 'cdm-regulations-homeowners-guide',
    category: 'Planning & Compliance',
    title: 'CDM 2015 Regulations: What UK Homeowners Need to Know',
    date: '2 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'The Construction (Design and Management) Regulations 2015 apply to most domestic building projects. Here is what homeowners need to know about their legal duties.',
    content: `
## When CDM applies

CDM 2015 applies when: the project involves more than one contractor working simultaneously; or the project lasts more than 30 working days with more than 20 workers; or total person-days exceed 500.

## Your duty as domestic client

As a domestic client, you can transfer your CDM duties to your Principal Contractor. This transfer happens automatically when you appoint a single contractor. Your principal contractor then takes on responsibility for: producing a Construction Phase Plan before work starts; ensuring health and safety is managed on site; producing a Health and Safety File at project completion.

## Pre-Construction Information

Provide your contractor with any information you hold about the property — asbestos surveys, structural reports, drainage plans, previous works.

## The Health and Safety File

At the end of the project, your principal contractor should hand you a Health and Safety File — containing as-built drawings, materials specifications, and maintenance instructions. Keep it. You will need it if you sell the property or do further works.

[Find CDM-aware contractors](/search)
`,
  },

  'rear-extension-cost-uk-guide': {
    slug: 'rear-extension-cost-uk-guide',
    category: 'Cost Guides',
    title: 'How Much Does a Rear Extension Cost in the UK? (2026 Guide)',
    date: '1 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'UK rear extension costs range from £1,800–£3,500/m². Typical costs, what affects price, planning requirements and how to verify your contractor.',
    content: `
## Typical costs in 2026

| Extension type | Typical cost range |
|---|---|
| Single-storey (basic to mid-spec) | £25,000–£60,000 |
| Double-storey | £45,000–£120,000 |
| Cost per m² (basic) | £1,800–£2,200/m² |
| Cost per m² (mid-spec) | £2,200–£2,800/m² |
| Cost per m² (high specification) | £2,800–£3,500/m² |

These figures reflect Greater London and the South East. Expect 10–15% lower outside London.

## What affects the cost

Size is the primary driver — but specification matters as much. Key factors: structural complexity (steels, underpinning), M&E (full rewire, new heating circuits), quality of finishes (bifold doors, roof lights, underfloor heating), planning fees and surveys, and site access.

## Planning permission

Most single-storey rear extensions are permitted development — no planning application required — if they stay within 4m (detached house) or 3m (semi-detached or terraced) from the original rear wall. Extensions beyond this need planning consent (typically 8 weeks).

## Getting accurate quotes

Get at least 3 written quotes based on the same detailed scope of works. A quote without a site visit is unreliable.

[Get a free estimate](/estimate)
`,
  },

  'how-much-does-a-rear-extension-cost-uk-2025': {
    slug: 'how-much-does-a-rear-extension-cost-uk-2025',
    category: 'Cost Guides',
    title: 'How much does a rear extension cost in the UK? (2025 guide)',
    date: '12 Sept 2026',
    readTime: '8 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&q=80',
    description: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees.',
    content: `
## The honest answer: it depends — but here are real numbers

A 4m x 4m single-storey rear extension in London will typically cost between **£60,000 and £95,000** in 2025, including VAT. The range is wide because extensions are bespoke construction projects.

## The main cost drivers

### 1. Size and footprint

Rule of thumb for London in 2025: **£2,500–£3,500/m²** for a standard single-storey extension; **£3,000–£4,000/m²** for a double-storey; **£4,000–£6,000/m²+** for high-specification finishes and bespoke glazing.

### 2. Specification and finishes

Nothing moves the price like specification: bi-fold or sliding doors (£5,000–£15,000+), underfloor heating (add £80–£150/m²), structural glazing or roof lanterns (£3,000–£10,000+ per unit).

### 3. Structural complexity

If you have clay soils (common in London), deep strip or mini-pile foundations can add £8,000–£20,000 to groundworks costs.

### 4. Party wall matters

If your extension is within 3m of a neighbour's foundation, the Party Wall Act applies. Budget **£1,000–£3,000** per adjoining neighbour for Party Wall Awards.

## London vs rest of UK

London and the South East command a price premium of **20–40%** over equivalent work in the Midlands or North.

[Get a free estimate](/estimate)
`,
  },

  'builder-score-explained-why-star-ratings-arent-enough': {
    slug: 'builder-score-explained-why-star-ratings-arent-enough',
    category: 'Builder Score',
    title: 'Why star ratings are not enough — the case for Builder Score',
    date: '5 Sept 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Builder Score™ combines evidence-based components to give homeowners a clearer picture when choosing a contractor.',,
    content: `
## The problem with stars

The review economy has been gamed. The home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

## What star ratings miss

- Does the contractor pay their subcontractors on time?
- Do they hold current public liability insurance?
- Do they have a CDM compliance record?
- What is their dispute history?

Builder Score answers all of these. It is a 0–1000 trust rating calculated across five components.

[Find Builder Score-verified contractors](/search)
`,
  },

  'residual-land-value-calculator-explained': {
    slug: 'residual-land-value-calculator-explained',
    category: 'For Investors',
    title: 'Residual land value explained — and how to calculate it in 5 minutes',
    date: '20 Aug 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&auto=format&q=80',
    description: 'The single most important number in property investment is the maximum you should pay for a site. Here is how to calculate it.',
    content: `
## What is residual land value?

Residual land value (RLV) is the maximum price you should pay for a development site, given the costs involved and the profit you need to make the scheme viable.

**RLV = Gross Development Value minus Total Development Costs minus Developer Profit**

If the answer is positive, the site has value. If it is negative — or lower than the asking price — the scheme does not work at that price.

## The calculation

For a residential scheme of 6 flats in East London (GDV £2,200,000):

| Item | Amount |
|------|--------|
| GDV | £2,200,000 |
| Less build cost (400m² at £2,500/m²) | minus £1,000,000 |
| Less professional fees (12%) | minus £120,000 |
| Less planning/CIL/S106 | minus £80,000 |
| Less finance costs | minus £75,000 |
| Less sales & marketing | minus £60,000 |
| Less contingency (6%) | minus £60,000 |
| Less developer profit (18% GDV) | minus £396,000 |
| **Residual Land Value** | **£409,000** |

[Use the Development Appraisal Tool](/tools/development-appraisal)
`,
  },

  'cdm-2015-for-homeowners-what-you-need-to-know': {
    slug: 'cdm-2015-for-homeowners-what-you-need-to-know',
    category: 'Planning & Compliance',
    title: 'CDM 2015 for homeowners — what you actually need to know',
    date: '14 Aug 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'The Construction (Design and Management) Regulations 2015 apply to domestic projects too.',
    content: `
## CDM 2015: the basics for homeowners

CDM 2015 are the primary piece of health and safety legislation governing construction projects in Great Britain. Many homeowners assume CDM applies only to commercial or large-scale projects. It does not.

## The five duty-holders

### 1. Client (you, the homeowner)
You can transfer your CDM duties to the principal contractor in writing.

### 2. Principal Designer
Coordinates health and safety during the design and pre-construction phase. Must be appointed when more than one contractor is involved.

### 3. Principal Contractor
Overall responsibility for health and safety on site. Must produce a Construction Phase Plan before work starts.

### 4. Designers and Contractors
Architects, structural engineers, and all trade contractors on site.

## What homeowners should actually do

Before appointing a contractor, ask: Who is acting as principal contractor? Can you provide your Construction Phase Plan? Do you have current public liability insurance?

At the end of the project, your principal contractor should hand you a **Health and Safety File**.

[Find CDM-aware contractors](/search)
`,
  },

  'dwell-agents-ai-for-construction-businesses': {
    slug: 'dwell-agents-ai-for-construction-businesses',
    category: 'Platform',
    title: 'Planned tools — AI built for construction businesses',
    date: '8 Aug 2026',
    readTime: '5 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&q=80',
    description: 'Four AI agents designed specifically for construction: Dwell Coord, Dwell Create, Dwell Clarity, and Dwell Coach.',
    content: `
## The paperwork problem in construction

The average small construction business spends between 20% and 35% of its working hours on administration. Planned tools are built specifically on UK construction — the terminology, the document types, the compliance requirements, and the commercial realities of running a building business.

## The four Planned tools

### Dwell Coord — Project Coordination Agent
Handles project administration: managing schedules, tracking milestones, sending client updates.

### Dwell Create — Document Creation Agent
Produces professional construction documents from brief inputs: scope of works, contract summaries, variation notices, practical completion certificates.

### Dwell Clarity — Technical Query Agent
Answers technical questions about UK construction: Building Regulations compliance, permitted development rules, CDM duties, standard details, material specifications.

### Dwell Coach — Business Development Agent
Helps construction businesses grow: drafts personalised outreach from lead information, suggests pricing strategies based on job type and location.

[See contractor plans](/platform/pricing)
`,
  },

  'extension-cost-calculator-guide': {
    slug: 'extension-cost-calculator-guide',
    category: 'Cost Guides',
    title: 'How to Use an Extension Cost Calculator (2026 Guide)',
    date: '14 Oct 2026',
    readTime: '6 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&auto=format&q=80',
    description: 'Online extension cost calculators give you a starting point — but they can be dangerously misleading if you treat the output as a quote. This guide explains what calculators get right, what they miss, and how to use one sensibly in 2026.',
    content: `
## What does an extension cost calculator actually do?

An online extension cost calculator takes a small number of inputs — usually floor area, extension type, and location — and multiplies them by a cost-per-square-metre rate to produce an estimate. Most use figures in the range of £1,500–£3,500/m², sometimes with a regional multiplier for London or the South East.

That is the extent of what they do. They do not account for:

- The complexity of your specific structure
- Whether groundworks are straightforward or involve contaminated material, high water table, or tree roots
- Whether you need a structural steel frame
- What level of internal finishes you want
- Whether you need planning permission, a Party Wall Agreement, or building over a sewer
- How accessible your site is
- What your existing services (electrics, heating, plumbing) look like and whether they need extending

---

## How extension cost calculators can mislead you

The biggest danger is anchoring. Once you have seen a figure — even a rough one — it becomes your reference point. If a contractor quotes you significantly more, your instinct is to assume they are overpriced, rather than to consider that the calculator was oversimplified.

In practice, a calculator might show you £45,000 for a 25m² rear extension. A properly qualified contractor who has visited your property, reviewed your drawings, and understood your specification might quote £68,000. That difference is not markup — it is real scope the calculator could not see.

---

## Cost-per-m² ranges in 2026

| Extension type | UK-wide range | London premium |
|---|---|---|
| Single-storey rear | £1,800–£2,800/m² | £2,400–£3,800/m² |
| Single-storey side | £1,800–£2,800/m² | £2,400–£3,800/m² |
| Double-storey rear | £1,600–£2,500/m² | £2,200–£3,400/m² |
| Wrap-around | £1,900–£3,000/m² | £2,600–£4,000/m² |
| Kitchen extension (high spec) | £2,500–£4,000/m² | £3,200–£5,000/m² |

These figures include structural work, roofing, insulation, glazing, plastering, first-fix electrics and plumbing, and basic finishes. They exclude: kitchen or bathroom fixtures, flooring, decoration, external landscaping, professional fees, and VAT.

---

## What a calculator cannot tell you

### Groundworks

Groundworks are one of the highest-risk cost items in any extension project. Clay soils require deeper strip foundations or engineered piles. Made ground from previous development can require significant over-excavation. Tree roots from protected trees require specialist root management. Water tables in some areas require waterproofing membranes. None of this is visible on a calculator form.

### Structural steels

Most extensions that create a large opening into the existing house require a structural steel beam (RSJ or UC section). Depending on span, loading, and what is above, this can range from £800 to £8,000+ installed. Some projects require multiple beams. A calculator has no way of knowing this.

### Services and utilities

If your extension includes a kitchen or utility room, you will need gas, hot and cold water, drainage, and electrical circuits extended into the new space. If your boiler is at capacity, you may need a new one. If your consumer unit is outdated, it may need upgrading to support additional circuits. These are real costs not captured by a floor-area calculation.

### Planning and professional fees

Planning applications cost £258 per house in England as of 2026 (or are free under Permitted Development if you notify via Prior Approval). But architect fees, structural engineer fees, CDM coordinator fees, party wall surveyor fees, and Building Control fees can add £3,000–£12,000 to a project. A cost calculator does not include these.

---

## How to use a calculator sensibly

1. **Use it as a broad filter only.** If the calculator says £35,000 and your budget is £50,000, you may have headroom. If the calculator says £95,000 and your budget is £50,000, the project is very unlikely to be viable.

2. **Use multiple calculators.** Take the range rather than a single figure.

3. **Add 15–25% for contingency** to any figure you get, before you do anything else.

4. **Do not compare calculator outputs with contractor quotes.** They are measuring different things.

5. **Get a proper feasibility estimate.** A qualified quantity surveyor or design-and-build contractor can give you a structured ballpark estimate based on your drawings and a site visit. This is far more useful than any online tool.

---

## The right way to budget a UK extension in 2026

The most reliable budget process for a UK extension is:

1. Brief an architect or designer to produce planning drawings
2. Obtain a pre-planning feasibility estimate from a contractor or QS
3. Submit for planning if required, or confirm Permitted Development compliance
4. Commission technical drawings (structural, M&E, building regulations)
5. Get detailed contractor quotes based on full information
6. Confirm budget, agree contract, and proceed

A cost calculator sits at step zero — it tells you whether it is even worth pursuing the conversation. After that, it should be set aside.

---

## Get a structured estimate

Dwellinger connects homeowners with Builder Score-verified contractors who can provide structured ballpark estimates based on your specific project and drawings — not a generic price per square metre.
    `,
  },
  'find-builder-london': {
    slug: 'find-builder-london',
    category: 'Choosing a Builder',
    title: 'How to Find a Trusted Builder in London: 7 Steps',
    date: '15 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&auto=format&q=80',
    description: 'Finding a reliable builder in London is harder than it looks. There are over 90,000 construction businesses in the capital, and no central register that verifies who is actually trustworthy. Here are 7 steps that will cut the risk.',
    content: `
## Why finding a good builder in London is genuinely hard

London has more construction businesses per capita than almost anywhere in the UK. The London Building Control area alone processes tens of thousands of building regulations applications annually. Yet the number of truly verified, consistently high-quality residential contractors is a fraction of the total market.

The problems are structural. Construction is one of the least regulated industries in the UK. Anyone can legally describe themselves as a builder, general contractor, or project manager without qualifications, insurance, or a track record of completion. Review platforms are widely acknowledged to be gameable. Word of mouth is valuable but limited in a city where most people do not know their neighbours.

Here are the seven steps that will meaningfully reduce your risk.

---

## Step 1: Define your project precisely before making contact

Before you approach a single builder, you need to know what you are asking them to price. A vague brief ("we want to extend at the back") will produce vague — and incomparable — quotes.

At minimum, clarify:
- The type of project (rear extension, loft conversion, refurbishment, etc.)
- Approximate size and scope
- Whether you have planning permission or drawings yet
- Your intended start date and budget range
- Whether you want a design-and-build service or build-only

Builders who quote without this information are giving you a number that means very little.

---

## Step 2: Check company registration and trading history

Every legitimate building company in the UK should be registered at Companies House. Search for the company name or director's name at companieshouse.gov.uk and check:

- How long the company has been registered
- Whether accounts have been filed consistently
- Whether the company is active or has been dissolved and reformed
- Whether the director has a history of dissolved companies

A company that has been trading for less than two years under its current name, or whose director has a trail of dissolved companies, warrants extra scrutiny.

---

## Step 3: Verify their insurance — not just that they have it

Ask for a copy of their public liability insurance certificate. The minimum acceptable limit for a London residential project is £2 million, though £5–10 million is more appropriate for larger projects.

Check:
- That the policy is current (not expired)
- That the insured trading name matches the company you are dealing with
- That the policy covers the type of work you are commissioning

Employers' liability insurance is legally required if the contractor employs staff directly. Ask for this too.

---

## Step 4: Ask for references from similar recent projects — and call them

Testimonials on a website or portfolio photos tell you very little. What matters is speaking directly to someone who commissioned similar work in the last 12–24 months.

Ask the reference:
- Did the project complete on budget and on time?
- How was communication during the project?
- Were there unexpected additional costs? How were they handled?
- Would you use them again?

A builder who cannot provide references from recent comparable projects should be treated with caution.

---

## Step 5: Get at least three detailed, itemised quotes

Do not accept a single-line quote ("extension, supply and fit, £65,000"). Require an itemised breakdown that allows you to compare like for like, including:

- Demolition and enabling works
- Structural works and steelwork
- Roofing
- Glazing and external doors
- First-fix electrics and plumbing
- Insulation and drylining
- Second-fix (and whether materials are included or client-supplied)
- Provisional sums for items to be confirmed

If two quotes are far apart, the difference is almost always in what is included — not in who is overcharging.

---

## Step 6: Check CDM compliance awareness

Under the Construction (Design and Management) Regulations 2015, any domestic project involving more than one contractor working at the same time triggers duties for the homeowner as Client. A reputable builder should know what these are and be able to advise you on appointing a Principal Contractor.

If a builder looks blank when you mention CDM 2015, or tells you it does not apply to domestic work (it does), that is a warning sign about their professional standards.

---

## Step 7: Use a verified contractor platform

Checkatrade, Rated People, and similar platforms aggregate reviews but do not verify compliance data. For a London extension or refurbishment project worth £50,000+, look for platforms that verify:

- Companies House registration
- Public liability insurance currency
- HSE notifiable project history
- Director trading history

Dwellinger's Builder Score™ is a 0–1000 composite rating built from this verified data — giving you a compliance-grounded assessment alongside customer reviews.

---

## Red flags to avoid

- Builder asks for large cash upfront (more than 10–15% deposit before work starts)
- No written contract offered
- Unwilling to provide insurance certificate or Companies House number
- Pressure to start immediately or discount expires today
- No professional fee for site visit or estimate (may indicate low-quality leads)
- Refuses to provide references

---

## The bottom line

Finding a trustworthy builder in London requires more due diligence than most homeowners expect. The market is large, loosely regulated, and full of operators who look credible on the surface. The seven steps above will not guarantee a perfect project — but they will significantly reduce the probability of a bad one.
    `,
  },
  'planning-permission-extension-uk': {
    slug: 'planning-permission-extension-uk',
    category: 'Planning & Compliance',
    title: 'Do I Need Planning Permission for a Rear Extension?',
    date: '16 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'Most single-storey rear extensions in England can be built under Permitted Development — but only if they meet specific size, height, and material conditions. This 2026 guide covers exactly when you need planning and when you do not.',
    content: `
## The short answer

Most single-storey rear extensions to a house in England do **not** need a planning application — they fall under **Permitted Development Rights** (PDR). However, PDR has strict limits, and if your extension exceeds them in any way, a full planning application is required.

Permitted Development rights do not apply if:
- Your property is in a Conservation Area, National Park, AONB, or World Heritage Site
- Your property has had PDR removed by an Article 4 Direction
- The property is a flat, maisonette, or listed building
- You have already used your PDR allowance through previous extensions

---

## Permitted Development limits for rear extensions in England (2026)

Under the Town and Country Planning (General Permitted Development) (England) Order 2015 (as amended), a single-storey rear extension is permitted without planning permission if it meets all of the following:

| Condition | Detached house | Semi-detached or terraced |
|---|---|---|
| Maximum depth (from original rear wall) | 4 metres | 3 metres |
| Maximum height at eaves | 3 metres | 3 metres |
| Maximum overall height | 4 metres | 4 metres |
| Materials | Similar appearance to existing house | Similar appearance to existing house |
| No verandas, balconies, or raised platforms | Required | Required |
| No side elevation facing a highway | Required | Required |

**Larger Home Extension Scheme:** Under a prior approval notification process, you can extend up to 8 metres (detached) or 6 metres (semi/terraced) in depth. This requires a Prior Approval application to your Local Planning Authority (LPA), and neighbouring properties must be notified. The LPA then has 42 days to object.

---

## When you will always need planning permission

You will need a full planning application if any of the following apply:

**Property type exceptions:**
- Flats and maisonettes — no PDR at all
- Listed buildings — require listed building consent in addition to any planning permission
- Properties where PDR has been removed (check via local planning authority or Land Registry)

**Design exceptions:**
- The extension wraps around the side of the house and creates a side extension element
- The extension includes a raised platform, balcony, or veranda
- The extension height exceeds PDR limits
- Materials differ significantly from the existing house

**Location exceptions:**
- Conservation Areas (no rear extensions visible from the highway without permission)
- National Parks, AONBs, and World Heritage Sites
- Areas subject to Article 4 Directions

---

## What about double-storey rear extensions?

A two-storey rear extension is permitted without planning permission only if:

- It does not extend beyond 3 metres of the original rear wall
- The roof pitch matches the main house as far as practicable
- There are no windows in any wall or roof slope within 1 metre of a boundary
- The eaves and ridge height do not exceed the existing house
- It is more than 7 metres from any boundary opposite the rear wall

In practice, very few double-storey rear extensions meet all these conditions. Most require planning permission.

---

## Building Regulations: separate from planning

Planning permission and Building Regulations are two separate systems. Even if your extension does not require planning permission, it will almost certainly require **Building Regulations approval**.

Building Regulations cover:
- Structural integrity (foundations, steelwork, floor and roof structure)
- Thermal performance (insulation standards — Part L)
- Fire safety (escape routes, fire doors)
- Ventilation (Part F)
- Damp proofing (Part C)
- Electrical work (Part P)
- Drainage (Part H)

Building Regulations approval is obtained either via your Local Authority Building Control (LABC) or a private Approved Inspector. Your contractor should assist with this or advise you on how to proceed.

---

## Party Wall Act: a third separate requirement

If your extension involves:
- Excavation within 3 metres of a neighbouring building's foundations
- Building on or near the boundary with an adjoining property
- Any work to a shared (party) wall

...then the Party Wall etc. Act 1996 may apply. This requires you to serve a Party Wall Notice on your neighbours and, if they do not agree in writing, appoint a surveyor to manage the process.

Party Wall matters are separate from both planning and building regulations. They are a civil matter between property owners and are not processed by the council.

---

## How to check if your extension needs planning permission

1. **Check your property's planning history** at your Local Planning Authority's online portal
2. **Identify whether an Article 4 Direction applies** — ask your LPA or check their website
3. **Measure the proposed extension** against the PDR criteria above
4. **If in doubt, submit a Lawful Development Certificate (LDC) application** — this is a formal confirmation from the LPA that your extension is lawful under PDR. Cost: £258 in England (2026). Turnaround: typically 8 weeks.

An LDC is strongly recommended for any extension you plan to sell the property after — it protects against future queries from buyers' solicitors.

---

## Summary

| Extension type | Usually needs planning? |
|---|---|
| Single-storey rear (within PDR limits) | No — PDR applies |
| Larger single-storey rear (Prior Approval) | Prior Approval notice required |
| Single-storey rear in Conservation Area | Yes |
| Double-storey rear | Usually yes |
| Side extension | Depends on size — check PDR rules |
| Extension to a flat | Yes — no PDR for flats |
| Listed building | Yes — plus listed building consent |

When in doubt, apply for a Lawful Development Certificate or consult your LPA's pre-application advice service before committing to a design.
    `,
  },
  'house-refurbishment-cost-uk': {
    slug: 'house-refurbishment-cost-uk',
    category: 'Cost Guides',
    title: 'House Refurbishment Costs UK 2026: Full Guide',
    date: '17 Oct 2026',
    readTime: '9 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&q=80',
    description: 'A full house refurbishment in the UK costs £30,000–£150,000+ depending on size, scope and specification. This 2026 guide breaks down costs room by room, trade by trade, and explains what drives prices up or down.',
    content: `
## What does a full house refurbishment cost in the UK in 2026?

A full house refurbishment — covering structural work, M&E (mechanical and electrical), plastering, decoration, kitchen, bathrooms, and flooring — will typically cost between **£30,000 and £150,000+** for an average UK home in 2026.

That range is wide because the word "refurbishment" covers everything from a basic cosmetic refresh to a whole-house renovation involving structural changes, rewiring, new heating systems, and high-specification finishes.

The most useful way to understand costs is to break them down by scope level and by trade.

---

## Cost by scope level

| Scope level | What it includes | Typical cost range (3-bed terrace) |
|---|---|---|
| Light refurbishment | Decoration, flooring, minor joinery, no structural work | £8,000–£22,000 |
| Medium refurbishment | Kitchen, bathroom(s), decoration, flooring, some M&E upgrade | £25,000–£55,000 |
| Full refurbishment | Strip back to shell, rewire, replumb, replaster, new kitchen, bathrooms, insulation upgrade | £55,000–£120,000 |
| Structural refurbishment | Full refurb plus structural alterations, extensions, or layout reconfigurations | £80,000–£200,000+ |

London and South East projects typically add 20–35% to the figures above.

---

## Cost breakdown by trade (full refurbishment, 3-bed terrace)

### Structural and enabling works: £3,000–£18,000

For most refurbishments, some structural work is involved — removing internal walls, creating openings, inserting lintels, or addressing subsidence or damp. Costs depend heavily on what you find once walls are opened.

Items that can dramatically increase this cost:
- Underpinning (if subsidence is found): £8,000–£25,000
- Structural steel beams: £1,500–£8,000 per beam
- Damp proofing and remediation: £500–£5,000

### Electrics: £4,000–£12,000

A full rewire of a 3-bedroom property in the UK costs £4,000–£8,000 for the electrical work itself. This increases if:
- A new consumer unit is required (typically included)
- Solar PV or EV charging is added
- Smart home systems are specified
- The property is large or has many circuits

### Plumbing and heating: £5,000–£20,000

Replacing all pipework, installing a new boiler, and fitting new radiators throughout typically costs £6,000–£14,000. A heat pump system costs £8,000–£18,000 installed (before any government grants). Underfloor heating adds £80–£120/m² for wet systems.

### Plastering and drylining: £4,000–£10,000

A full replaster of a 3-bedroom house typically costs £4,000–£8,000. If there is significant damp damage, bay window movement, or modern dry-lining as an alternative to lime plaster in older properties, costs can reach £10,000+.

### Kitchen: £8,000–£40,000+

Kitchen costs vary enormously by specification:
- Budget supply-and-fit (basic units, contractor's choice): £5,000–£10,000
- Mid-range kitchen (supplied by client, fitted by contractor): £3,000–£6,000 fit cost
- High-spec bespoke or semi-bespoke: £15,000–£50,000+ including units and worktops

Structural changes to the kitchen area (removing walls, moving drainage) add separate costs.

### Bathrooms: £4,000–£12,000 per bathroom

A fully tiled bathroom or en-suite with new sanitaryware, tiling, and associated plumbing and electrics typically costs:
- Basic: £3,500–£6,000
- Mid-range: £6,000–£10,000
- High spec: £10,000–£20,000+

A 3-bedroom house with a main bathroom and one en-suite might cost £10,000–£22,000 for both.

### Flooring: £3,000–£10,000

For a 3-bed house:
- Engineered hardwood throughout: £4,000–£9,000 supply and fit
- LVT throughout: £2,500–£6,000 supply and fit
- Carpet to bedrooms only: £1,200–£2,800

### Decoration: £3,000–£8,000

A full interior decoration of a 3-bedroom house (walls, ceilings, woodwork) typically costs £3,000–£7,000 for a mid-range finish. High-spec preparation and premium paints add cost.

### Windows and external doors: £4,000–£15,000

Replacing all windows and the front and rear doors on a 3-bedroom terrace:
- PVCu double glazing: £4,000–£7,000
- Aluminium double glazing: £6,000–£12,000
- Timber sash restoration: £800–£1,800 per window

---

## What drives refurbishment costs up

- **Condition of what is already there.** Old properties with lath and plaster, solid walls, Victorian-era plumbing, and outdated electrics cost significantly more to refurbish than 1990s stock.
- **Specification level.** The difference between mid-range and high-spec finishes can double the cost.
- **Programme constraints.** If the property is occupied, or work needs to be phased to maintain habitation, the cost increases.
- **Access and logistics.** London projects with no parking, no storage space, and ULEZ charges on delivery vehicles cost more to run.
- **Condition surprises.** Damp, structural movement, rotted timber, asbestos, and lead paint are all potential additional costs discovered during the strip-out phase.

---

## Budgeting recommendations

1. **Add a contingency of 15–20%** to any refurbishment budget before you start
2. **Commission a building survey** before purchasing a property for refurbishment — it will identify major risks
3. **Get a detailed scope of works** agreed before pricing, not after
4. **Separate the structural phase** from the finishes phase in your contract — unknowns are concentrated in demolition and enabling works
5. **Fix second-fix material allowances** in advance so the contractor knows what budget they are working to

---

## Get a structured refurbishment estimate

Dwellinger connects homeowners and investors with Builder Score-verified contractors across the UK who can provide structured estimates based on your specific property and scope.
    `,
  },
  'principal-contractor-explained': {
    slug: 'principal-contractor-explained',
    category: 'Planning & Compliance',
    title: 'What is a Principal Contractor and Why Do You Need One?',
    date: '18 Oct 2026',
    readTime: '7 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1400&auto=format&q=80',
    description: 'A Principal Contractor is the party legally responsible for managing health and safety during the construction phase of a project under CDM 2015. If your build involves more than one contractor, you almost certainly need one.',
    content: `
## What is a Principal Contractor?

A **Principal Contractor (PC)** is the organisation or individual appointed by the client to plan, manage, monitor, and coordinate health and safety in the construction phase of a project. The role is created and governed by the **Construction (Design and Management) Regulations 2015 (CDM 2015)**.

The Principal Contractor is the party who takes primary responsibility for health and safety on site during the build. They are legally required to:

- Produce a **Construction Phase Plan** before work starts
- Ensure the site is set up safely
- Coordinate the activities of all contractors and subcontractors
- Manage risks identified in the Pre-Construction Information
- Consult workers on health and safety matters
- Ensure everyone working on site has the appropriate skills and training

---

## Who needs a Principal Contractor?

Under CDM 2015, a Principal Contractor must be appointed on any project where there are (or are likely to be) **more than one contractor working at the same time** at any point during the project.

In practice, this means the vast majority of residential construction projects require a Principal Contractor:

- An extension where a structural engineer, bricklayer, carpenter, electrician, and plumber all work at different stages = multiple contractors = Principal Contractor required
- A loft conversion using a specialist loft conversion company who brings their own trades = single contractor, so no PC strictly required (though the company still has contractor CDM duties)
- A full house refurbishment with a main contractor managing subcontractors = the main contractor is the Principal Contractor

**The Client is responsible for making this appointment in writing.** If no appointment is made, the Client (i.e., the homeowner) takes on the PC duties themselves by default — which most homeowners are completely unequipped to do.

---

## What is the difference between a Principal Contractor and a Principal Designer?

These are two separate CDM 2015 roles with different duties:

| Role | When required | Who can hold it | Main duty |
|---|---|---|---|
| Principal Contractor | Multiple contractors on site | A contractor (not an architect or designer) | Manage construction phase health and safety |
| Principal Designer | Multiple contractors on site, during design phase | A designer or design-led organisation | Manage pre-construction design and safety information |

Both roles are required on most projects with more than one contractor. They are appointed by the client and must work together to manage safety across the whole project lifecycle.

---

## The Construction Phase Plan

The Construction Phase Plan (CPP) is one of the Principal Contractor's primary outputs. It must be in place before the construction phase starts.

The CPP must document:
- A description of the project
- Details of the client, designers, and Principal Contractor
- How health and safety risks will be managed on site
- How the site will be set up
- Arrangements for coordination, consultation, and welfare facilities
- Emergency procedures

A CPP does not need to be a lengthy document for a domestic project — but it must be site-specific and meaningful. A generic template with the property address changed is not adequate.

---

## What happens if there is no Principal Contractor?

Failing to appoint a Principal Contractor (when one is required) is a breach of CDM 2015. The consequences can include:

- The client (homeowner) becoming personally liable for PC duties
- Enforcement action by the Health and Safety Executive (HSE)
- Difficulties with insurance claims if an accident occurs on site
- Issues with future property sale if Building Control notices are raised

The HSE does inspect domestic projects, particularly where there has been an accident or complaint. Ignorance of CDM duties is not a defence.

---

## How design-and-build contractors handle this

Many design-and-build contractors operating in the residential sector will take on both the Principal Contractor and (where they have design capability) the Principal Designer role. This is one of the practical advantages of using a design-and-build delivery model — the same organisation manages safety from design through to handover, rather than leaving the client to coordinate between separate parties.

When evaluating a residential contractor for a project involving multiple trades, it is reasonable to ask:

- Will you act as Principal Contractor for this project?
- Can you show me a sample Construction Phase Plan?
- Do you have a competent person for health and safety?
- Who will act as Principal Designer, and are they appointed in writing?

---

## Checklist for homeowners

Before construction starts on any project involving more than one contractor:

- [ ] Appoint a Principal Contractor in writing
- [ ] Appoint a Principal Designer in writing (can be same organisation if they have design capability)
- [ ] Confirm a Construction Phase Plan is in place before work starts
- [ ] Ensure the contractor has public liability insurance
- [ ] Ensure the contractor has employers' liability insurance (if they have direct employees)
- [ ] Ensure welfare facilities are in place on site from day one

---

## Summary

A Principal Contractor is not optional when your project involves more than one contractor. It is a legal requirement under CDM 2015, and the homeowner client is responsible for making the appointment in writing before construction begins. Choosing a structured, principal-contractor-capable delivery partner removes this burden and ensures legal compliance from the start.
    `,
  },
  'hmo-conversion-guide': {
    slug: 'hmo-conversion-guide',
    category: 'Planning & Compliance',
    title: 'HMO Conversion Guide: Planning, Costs and Licensing in 2026',
    date: '19 Oct 2026',
    readTime: '10 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Converting a house into an HMO can significantly increase rental yield — but the planning, licensing, building regulations, and fire safety requirements are substantial. Here is what to expect in 2026.',
    content: `
## What is an HMO?

A **House in Multiple Occupation (HMO)** is a property rented by three or more people who are not from one household (i.e., not a family) and who share facilities such as a kitchen or bathroom. HMOs include shared houses, bedsits, and some types of flat conversions.

From a landlord's perspective, HMOs offer significantly higher rental yields than single-let properties — often 1.5–2x the rent achievable from a single family. But the regulatory, planning, construction, and management requirements are substantially higher too.

---

## Do you need planning permission to convert to an HMO?

This depends on the number of occupants and your local authority's approach.

**Change of Use: C3 to C4**

A standard family house falls within Use Class **C3** (dwellinghouse). An HMO for 3–6 occupants falls within Use Class **C4** (small HMO). In many parts of England, converting from C3 to C4 falls within Permitted Development Rights — meaning no planning permission is required.

**However**, many London boroughs and other high-demand areas have used **Article 4 Directions** to remove this Permitted Development Right. In these areas, you will need a full planning application to convert to an HMO even for 3–6 occupants.

**Large HMOs (7+ occupants): Sui Generis**

Properties for 7 or more occupants fall outside Use Class C4 and become **sui generis** (their own category). These always require a full planning application regardless of location.

**Check with your local planning authority before purchasing a property for HMO conversion.**

---

## HMO licensing

HMO licensing is separate from planning permission and is managed by your local council.

**Mandatory HMO licensing** applies to properties that are:
- Rented to 5 or more people
- From 2 or more separate households
- With shared facilities

For mandatory licensed HMOs, you must apply for an HMO licence from your local council. Licences are typically granted for 5 years.

**Additional and selective licensing** schemes exist in many areas (particularly London) and can apply to smaller HMOs or all private rented properties. Check your specific local authority for active licensing schemes.

---

## HMO licensing conditions: what you will need to comply with

To obtain and maintain an HMO licence, you will typically need to demonstrate compliance with:

### Room size standards

Since October 2018, minimum room sizes for sleeping rooms in licensed HMOs are:
- Single adult: minimum 6.51 m²
- Two adults sharing: minimum 10.22 m²
- Children under 10: minimum 4.64 m²

Rooms below these sizes cannot be let as sleeping rooms.

### Fire safety

HMOs have strict fire safety requirements under the Housing Act 2004 and associated guidance. Typically required:
- Grade D interlinked mains-powered smoke and heat alarms throughout
- Fire doors to all rooms opening onto escape routes (FD30 minimum)
- Self-closing mechanisms on all fire doors
- Emergency lighting (larger HMOs)
- Fire blanket and extinguisher in kitchen
- Fire risk assessment (recommended for all, mandatory for larger HMOs)

### Kitchen and bathroom ratios

Local authorities apply minimum ratios for shared facilities. Common standards:
- One kitchen facility per 5 occupants (some councils require individual cooking facilities per room in larger HMOs)
- One bathroom/shower room per 5 occupants
- Separate WC recommended where bathroom has a bath

### Heating, insulation, and energy efficiency

HMOs are subject to the **Minimum Energy Efficiency Standards (MEES)**. Since April 2023, all new tenancies in the private rented sector in England and Wales require a minimum EPC rating of E. The government has consulted on raising this to C, which would significantly impact older HMO properties.

---

## Conversion costs: what to budget

HMO conversion costs vary enormously by property type, starting condition, number of rooms, and specification. Here is a realistic range for different HMO types:

| HMO type | Typical conversion cost | Key cost drivers |
|---|---|---|
| 3-bed terrace → 3-room HMO | £12,000–£35,000 | Fire doors, alarms, kitchen upgrade |
| 4-bed semi → 5-room HMO | £25,000–£65,000 | Additional bathroom, fire upgrade, room reconfigurations |
| Large house → 7–10 room HMO | £60,000–£150,000+ | Full refurbishment, multiple bathrooms, commercial-grade kitchen |
| Purpose-built bedsit conversion | £120,000–£250,000+ | Full fit-out, en-suites, kitchenettes |

**Major cost items to budget for:**

- **Fire doors:** A standard FD30 fire door supply and fit costs £350–£600 per door. A 6-room HMO might need 8–12 fire doors.
- **Fire alarm system:** A Grade D addressable system for a 6-room HMO costs £1,200–£3,500 installed.
- **Additional bathrooms:** £5,000–£12,000 per bathroom.
- **Room reconfigurations:** If you need to create additional rooms, structural costs can range from £5,000 to £25,000+ depending on what walls are moved.
- **Kitchen upgrade:** A kitchen designed for multiple occupants may need more worktop space, additional sockets, and a larger appliance specification.

---

## Building Regulations

Any material structural alteration, new bathroom, or change to fire safety provisions will require Building Regulations approval. For HMO conversions, relevant Parts include:

- **Part B (Fire Safety):** Escape routes, fire doors, alarm systems
- **Part F (Ventilation):** Adequate ventilation in bathrooms, kitchens, and sleeping rooms
- **Part L (Conservation of Fuel and Power):** Thermal performance of the building fabric
- **Part G (Sanitation):** Bathrooms and water supply
- **Part P (Electrical Safety):** All electrical installation work

Obtain either Local Authority Building Control (LABC) or private Approved Inspector sign-off for all notifiable work.

---

## Timeline

A typical 3–5 bedroom HMO conversion project might take:
- Planning (if required): 8–13 weeks
- Building Regulations approval: 3–6 weeks (can run parallel)
- Construction: 6–16 weeks depending on scope
- HMO licence application processing: 4–12 weeks (varies significantly by local authority)

Start the licence application process early — some councils have significant backlogs.

---

## Key risks

- **Planning refusal:** In Article 4 areas, councils actively limit HMO growth in some streets. Check the local plan before purchasing.
- **Licensing delays:** A property that cannot be legally occupied costs you rent while the clock runs.
- **Build cost overruns:** Discovery of damp, structural movement, or substandard existing electrics during conversion
- **Condition non-compliance:** Local authority inspections can require expensive remediation after licensing
- **EPC C future requirements:** Properties with poor insulation may need significant investment to meet tightening MEES standards

---

## Summary

HMO conversion is a viable strategy for significantly increasing rental yield — but the planning, licensing, fire safety, and build quality requirements are substantial. Budget conservatively, engage a contractor experienced in HMO conversions, and check planning and licensing requirements with your specific local authority before committing to a purchase.
    `,
  },
  'property-development-profit-margins': {
    slug: 'property-development-profit-margins',
    category: 'For Investors',
    title: 'Property Development Profit Margins: What to Expect in 2026',
    date: '20 Oct 2026',
    readTime: '9 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&auto=format&q=80',
    description: 'UK property developers typically target 15–25% profit on GDV — but in practice margins are squeezed from every direction. This guide covers realistic return expectations, what eats into margins, and how to model a project correctly.',
    content: `
## What profit margin do property developers target in the UK?

Most UK property developers target a **profit on cost of 20–25%** or a **profit on GDV (Gross Development Value) of 15–20%** as a minimum viability threshold. These are the figures you will encounter in development appraisals, residual land value calculations, and planning viability assessments.

In practice, actual achieved margins vary significantly from this target — and in a difficult market environment like 2024–2026, many projects are being stress-tested against thinner margins or are not proceeding at all.

---

## Profit on cost vs profit on GDV: which to use?

Both metrics are used in the industry, and it matters which you are quoting.

**Profit on Cost:**
> Profit ÷ Total Development Cost × 100

If a scheme costs £1,500,000 to develop and sells for £1,875,000, the profit is £375,000.
Profit on cost = £375,000 ÷ £1,500,000 = **25%**

**Profit on GDV:**
> Profit ÷ GDV × 100

Same scheme: £375,000 ÷ £1,875,000 = **20%**

When comparing schemes or discussing viability with lenders or planners, always clarify which metric is being used. A "20% return" sounds the same but means very different things depending on which basis it is calculated on.

---

## Typical UK development appraisal: residential scheme

Here is a simplified example for a small residential scheme — 5 houses in the South East (not London):

| Item | Amount |
|---|---|
| Land cost | £600,000 |
| Build cost (5 × £250,000/unit) | £1,250,000 |
| Professional fees (architects, engineers, QS, planning) | £95,000 |
| Finance costs (development finance at ~9%) | £120,000 |
| Sales, marketing, and legal | £55,000 |
| Contingency (7.5%) | £100,000 |
| **Total development cost** | **£2,220,000** |
| GDV (5 × £500,000/unit) | £2,500,000 |
| **Profit** | **£280,000** |
| **Profit on cost** | **12.6%** |
| **Profit on GDV** | **11.2%** |

This is a below-target scheme in the current market — most development finance lenders require 15–20% profit on GDV before they will lend. At 11%, this scheme either needs land at a lower price, higher end values, or lower build costs to be viable.

---

## What squeezes margins in 2026

### Build costs

UK construction costs have risen significantly since 2020. Material cost inflation, labour shortages, and energy costs have pushed build costs up 30–50% in some sectors compared to pre-pandemic levels. Residential build costs across the UK in 2026 range from:

- Basic market housing: £1,600–£2,200/m² (outside London)
- Mid-range London new build: £2,500–£3,500/m²
- High specification: £3,500–£5,000+/m²

These figures are meaningfully higher than appraisals underwritten in 2019–2021.

### Finance costs

Development finance rates in 2026 are substantially higher than the near-zero rates that prevailed in 2020–2022. Rates of 8–12% per annum (rolled up) are common for residential development finance. On an 18-month scheme with peak debt of £1m, finance costs alone can reach £130,000–£180,000.

### Planning delays

Delays at LPA level extend the development programme, which directly increases finance costs and extends the period over which fixed overheads accumulate. Projects originally underwritten at 12–18 months may be running at 24–30+ months.

### End value uncertainty

Residential sales values have been subdued in much of the UK in 2024–2026. Developer exit strategy matters: selling units off-plan before completion locks in price but may leave money on the table in a recovering market; selling post-completion requires holding finance through the sales period.

---

## Return on equity vs return on GDV

Development finance typically requires the developer to contribute equity (the gap between total costs and the loan amount). Understanding return on equity gives a more complete picture of whether a scheme is worth pursuing.

If total development cost is £2,200,000 and development finance covers 70% of costs (£1,540,000), the developer's equity requirement is £660,000. A profit of £280,000 on equity of £660,000 represents a **return on equity of 42%** — which looks much more attractive than the 12% profit on cost figure, particularly if the project completes in 18 months.

This is why leverage is central to development economics — but it is also why cost overruns and delays are so damaging. They hit both the profit and the equity simultaneously.

---

## Stress-testing your appraisal

Any development appraisal should be stress-tested against:

- **Build cost overrun:** What if build costs rise 10–15%?
- **End value reduction:** What if GDV falls 10%?
- **Programme extension:** What if the project takes 6 months longer than planned?
- **Interest rate change:** What if finance costs rise 1–2%?

The question to ask is: at what point does the project become unviable? If a 10% build cost overrun wipes out all profit, the appraisal assumptions are too tight.

---

## Realistic margin expectations by scheme type

| Scheme type | Typical profit on GDV target | Typical achievable (2026 UK market) |
|---|---|---|
| Speculative residential new build | 17–22% | 10–18% (location dependent) |
| Permitted development conversion | 15–20% | 12–18% |
| Commercial to residential | 18–25% | 10–20% (highly variable) |
| HMO conversion | N/A (income) | Yield-based: 8–12% gross yield |
| Refurbishment and flip | 15–25% | 10–20% (below target common) |
| Large residential scheme | 15–18% | 10–16% |

---

## Key takeaways

1. **Target 20% profit on GDV as your minimum viability threshold** — anything below 15% requires exceptional justification
2. **Build cost assumptions are the highest-risk number in any appraisal** — get them from a QS, not a rule of thumb
3. **Finance costs are material** — model them correctly at current market rates, not 2021 rates
4. **Stress-test every appraisal** before committing to a land purchase or option
5. **Residual land value is the correct way to determine what to pay for a site** — the land price is the variable that makes the scheme work or not

---

## Use Dwellinger for project cost intelligence

Dwellinger provides build cost benchmarks, residual land value tools, and access to Builder Score-verified contractors for development projects across the UK.
    `,
  },
  'builder-contract-guide': {
    slug: 'builder-contract-guide',
    category: 'Choosing a Builder',
    title: 'Builder Contracts Explained: JCT, Fixed-Price and What to Look Out For',
    date: '21 Oct 2026',
    readTime: '8 min read',
    author: 'Dwellinger editorial team',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&auto=format&q=80',
    description: 'Signing a building contract without understanding it is one of the most expensive mistakes UK homeowners make. This guide explains JCT contracts, fixed-price agreements, payment terms, and the clauses that protect you.',
    content: `
## Why a written contract matters more than you think

Most disputes between homeowners and building contractors come down to one of two things: what was agreed and what was not. A verbal agreement, an email chain, or a one-page quote provides almost no protection when a dispute arises over scope, price, or quality.

A proper written contract defines:
- Exactly what the contractor is building
- The price, and under what circumstances it can change
- The programme and what happens if it slips
- How variations (changes) are handled
- What the payment schedule looks like
- What happens if either party defaults
- Who is responsible for insurance
- How disputes are resolved

Without this, you are relying on memory, goodwill, and the courts — which is an expensive and uncertain combination.

---

## The main types of building contract in the UK

### JCT Contracts

The **Joint Contracts Tribunal (JCT)** produces a suite of standardised building contracts widely used in the UK. For residential projects, the most relevant is:

**JCT Homeowner Contract (JCT HB 2016)**
- Designed for domestic clients using a building contractor
- Plain English format
- Covers work schedule, price, payment, variations, insurance, and dispute resolution
- Available directly from the JCT (approximately £30–£40)
- Strongly recommended for projects over £25,000

**JCT Minor Works (MW 2016)**
- More formal, used by commercial clients but sometimes used by homeowners
- Requires an Architect or Contract Administrator to administer
- Not typically suitable for straightforward domestic projects without professional oversight

### Fixed-price contracts

A **fixed-price contract** sets a specific sum for the described works. The contractor bears the risk of cost overruns — if materials or labour cost more than anticipated, that is their problem, not yours.

In practice, true fixed-price contracts are only possible when the scope is fully defined. If you do not have complete drawings and a comprehensive specification before signing, the contractor cannot genuinely fix the price — they will protect themselves with exclusions, provisional sums, and variation rights that effectively pass risk back to you.

**A fixed-price quote from a contractor does not mean you will pay that amount.** It means you will pay that amount for the defined scope. Any change to the scope — even minor — is a variation, and variations cost extra.

### Cost-plus contracts

A cost-plus contract pays the contractor their actual costs (labour, materials, subcontractors) plus an agreed management fee (typically 10–20%). The homeowner bears the cost risk.

Cost-plus is appropriate when:
- The scope cannot be defined in advance (e.g., remediation works with unknown extent)
- The client wants maximum transparency on costs
- The project is highly complex or fast-moving

Cost-plus is not appropriate when the client wants price certainty. It requires a high level of trust and active cost management.

---

## Key contract clauses to understand

### Scope and specification

The contract must describe, in detail, what is being built. A reference to "as per drawings" only works if the drawings are comprehensive. Ensure:
- Drawings are named, dated, and attached
- Specifications cover materials, finishes, and standards
- Exclusions are clearly listed

### Variations clause

Almost every project involves changes. The contract should specify:
- How variations must be authorised (in writing)
- How variations are priced (fixed price, daywork rate, or cost-plus)
- Whether the contractor can decline a variation

Without a written variations clause, changes become verbal agreements — and verbal agreements are disputes waiting to happen.

### Payment schedule

Never pay for work in advance of it being done. The standard approach is:
- A deposit (typically 10–15%) before work commences
- Stage payments tied to physical milestones (e.g., foundations complete, structure complete, first fix complete)
- A retention (typically 2.5–5%) held for a defects liability period (typically 12 months after practical completion)

Retention protects you against snags that appear after practical completion. A contractor unwilling to accept retention should be treated with caution.

### Practical completion and defects liability

**Practical completion** is the point at which the works are substantially complete and you can occupy the building. It does not mean perfect — minor snags can remain outstanding at practical completion.

After practical completion, a **defects liability period** (typically 6–24 months) begins. The contractor remains responsible for making good any defects that appear during this period. At the end of the defects period, the retention is released.

### Insurance

The contract should specify:
- That the contractor maintains public liability insurance (minimum £2 million, ideally £5 million+)
- That the contractor maintains employers' liability insurance (legally required if they have employees)
- Who is responsible for insuring the works during construction (the existing structure, the new works, and materials on site)

For major projects, consider **Joint Names Insurance** covering both the contractor and the homeowner for the works in progress.

### Dispute resolution

A good contract includes a mechanism for resolving disputes without going to court. Options include:
- **Adjudication** (statutory right under the Housing Grants, Construction and Regeneration Act 1996 for commercial contracts; optional but recommended for domestic contracts)
- **Mediation**
- **Arbitration**
- **Small claims court** (for smaller sums)

The JCT Homeowner Contract includes a simple dispute resolution procedure.

---

## Red flags in contractor contracts

Be wary of:

- **"Subject to survey" price adjustments** after contract is signed without defined criteria
- **No retention** or refusal to accept any holdback
- **Payment in advance** for significant sums before work is started or completed
- **Unlimited variation rights** allowing the contractor to increase the price without your written approval
- **No defects liability period**
- **Exclusion of indirect losses** (means they cannot be held responsible for consequential costs of defects)
- **Short limitation periods** on defects claims

---

## Practical recommendations for homeowners

1. **Always have a written contract** — no matter how small the job or how trustworthy the contractor seems
2. **Use the JCT Homeowner Contract** for projects over £10,000 — it costs £30–40 and is worth every penny
3. **Attach the drawings and specification to the contract** — reference them by name and revision
4. **Agree a payment schedule tied to milestones** before work starts
5. **Retain 5% until the end of the defects liability period**
6. **Insist all variations are authorised in writing before they are carried out**
7. **Do not sign a contract you have not read** — if you do not understand a clause, ask

---

## Summary

A proper building contract is not bureaucracy — it is the document that protects you when things go wrong, and the framework that makes it less likely that things go wrong at all. Whether you use a JCT Homeowner Contract, a fixed-price agreement, or a bespoke document, the key elements are the same: clear scope, fair payment, defined variations, insurance, and a route to resolution if there is a dispute.

Dwellinger's Builder Score-verified contractors are all contractually aware and can provide properly structured written agreements for your project.
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
  const elements: React.ReactElement[] = []
  const lines = markdown.trim().split('\n')
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
        <ul key={`ul-${i}`} style={{ paddingLeft: 20, marginBottom: 16 }}>
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
        <div key={`table-${i}`} style={{ overflowX: 'auto', marginBottom: 24 }}>
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
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(26,35,64,0.97) 0%, rgba(26,35,64,0.75) 50%, rgba(26,35,64,0.4) 100%)' }} />
        </div>
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

      <section style={{ backgroundColor: '#F5F0E8', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: '1.5rem', fontWeight: 800, marginBottom: 16 }}>
            Ready to start your project?
          </h2>
          <p style={{ color: '#4A5568', marginBottom: 28 }}>
            Get a free ballpark estimate in minutes, then connect with Builder Score-verified contractors.
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
