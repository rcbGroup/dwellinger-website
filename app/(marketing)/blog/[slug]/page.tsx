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
    author: 'James Hargrove',
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

## What’s included (and what isn’t)

**Typically included**: structural works (new floor, steels, propping), roof alterations (dormer construction or rooflight openings), Velux or equivalent roof windows, staircase supply and fit, insulation to current Part L standards, plasterboard and skim, electrics (lighting, sockets, fuse spur), heating (extension of existing system), basic decoration.

**Not typically included**: en-suite unless specified, joinery and fitted storage, flooring, high-specification bathroom, structural engineer fees (£1,500–£4,000), architect or designer fees if used, Building Control fees (£2,000–£4,000), Party Wall Surveyor fees (£1,200–£2,500 per adjoining neighbour).

---

## Getting an accurate quote

Any quote generated without a site visit and survey of the existing loft is indicative only. A properly prepared quote requires the contractor or their representative to: measure the loft, assess the existing roof structure, check head height at different points, identify the best staircase position, and assess the feasibility of the en-suite plumbing route.

Get at least 3 written quotes on the same specification. Check each contractor’s Builder Score™ on Dwellinger before inviting them to site.

[Get a free loft conversion estimate](/estimate)
`,
  },

  'house-extension-planning-permission-uk': {
    slug: 'house-extension-planning-permission-uk',
    category: 'Planning & Compliance',
    title: 'House Extension Planning Permission UK: Complete 2026 Guide',
    date: '12 Oct 2026',
    readTime: '8 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'Many house extensions in England do not need planning permission. But the rules are specific and the exceptions matter. This 2026 guide covers exactly when you do and don’t need to apply.',
    content: `
## Do you need planning permission for a house extension?

In England, many house extensions can be built under **Permitted Development (PD) rights** — meaning you don’t need to apply for planning permission. But the rules are more specific than most homeowners realise, and the exceptions are significant.

The key factors that determine whether your extension needs planning permission: the size and height of the extension, where it sits relative to the original house, whether you have a detached, semi-detached, or terraced property, whether you’re in a restricted area, and whether your PD rights have been removed.

---

## Permitted development rules for rear extensions

### Single-storey rear extensions

**Detached houses**: up to **6 metres** from the original rear wall, or up to **8 metres** under the Larger Home Extension scheme (with prior approval).
**Semi-detached and terraced houses**: up to **3 metres** from the original rear wall, or up to **6 metres** under the Larger Home Extension scheme (with prior approval).

Additional conditions: maximum height at the eaves of 3m (4m at the ridge); maximum height of 4m overall; doesn't cover more than half the garden; materials must match the existing house.

### Double-storey rear extensions

Double-storey extensions are more restricted: up to **3 metres** from the original rear wall. The roof pitch must match the existing house. There must be no windows or doors on the upper floor side elevation within 1 metre of the side boundary. A minimum 7 metres must remain between the rear of the extension and the rear boundary.

---

## Side extensions

Single-storey side extensions are permitted development if they don’t exceed half the width of the original house. Extensions on the principal elevation (front of the house) always need planning permission.

---

## The Larger Home Extension scheme

For single-storey rear extensions that exceed the basic 3m or 6m thresholds, homeowners in England can apply under the Larger Home Extension scheme (formerly the Neighbour Consultation Scheme). This allows extensions up to 6m (semi/terraced) or 8m (detached) provided:

- Prior approval is obtained from the local authority
- Neighbours are notified and given the opportunity to object
- The authority assesses impact on amenity

Prior approval applications take 42 days. This is different from planning permission — the authority can only consider specific impacts, not general planning policy.

---

## When you always need planning permission

Planning permission is always required for:

- Extensions that exceed the PD volume or dimension thresholds
- Extensions on listed buildings (which also need Listed Building Consent)
- Extensions in National Parks, AONBs, World Heritage Sites, or Conservation Areas that alter the external appearance from the road
- Properties where permitted development rights have been removed by an Article 4 Direction — common in many London boroughs and some other local authority areas
- Flats and maisonettes (PD rights apply to houses only)

---

## How to check whether PD applies to your property

The most reliable method: apply for a **Lawful Development Certificate (LDC)** from your local planning authority. This is a formal confirmation that your proposed works are permitted development and don’t need planning permission. An LDC costs £103 (England, 2026) and provides legal certainty — important if you ever sell the property.

An alternative is a Pre-Application Enquiry, which gives informal guidance without legal certainty.

---

## Scotland, Wales, and Northern Ireland

PD rights in Scotland, Wales, and Northern Ireland differ from England and from each other. In Wales, PD rules were updated in 2023. In Scotland, different GPDO provisions apply. Always check with the relevant local planning authority before assuming English PD rules apply.

---

## Building Regulations — always required regardless of planning

Even if your extension doesn’t need planning permission, **Building Regulations approval is always required** for: structural work, thermal insulation to Part L standards, fire safety, electrical work, plumbing and drainage connections, and means of escape from upper floors if the work affects fire safety.

Your principal contractor should manage the Building Regulations application unless you’re managing the project yourself.

[Check your planning situation with our free guide](/tools/planning)
`,
  },

  'quantity-surveyor-cost-uk': {
    slug: 'quantity-surveyor-cost-uk',
    category: 'Cost Guides',
    title: 'How Much Does a Quantity Surveyor Cost in the UK? (2026 Guide)',
    date: '11 Oct 2026',
    readTime: '6 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Quantity surveyor fees in the UK range from 1% to 3% of project value for residential work, or £800–£6,000+ as a fixed fee. Here’s what you get for your money and when a QS is worth it.',
    content: `
## What does a quantity surveyor cost in the UK?

Quantity surveyor fees for domestic projects in the UK typically fall into two models:

**Percentage-based**: 1–3% of the total project construction cost. On a £150,000 extension and loft project, this means £1,500–£4,500 in QS fees.

**Fixed fee**: £800–£6,000+ for domestic residential projects, depending on complexity, scope, and what services are included.

For larger or more complex projects (new builds, multi-unit developments, commercial), QS fees are typically 1–2% of contract value, with complex schemes negotiated separately.

---

## What a QS actually does for domestic projects

A quantity surveyor on a domestic project can provide some or all of:

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

Many homeowners on extension or refurbishment projects don’t need a full QS appointment. Instead, they use fixed-fee services:

| Service | Typical cost |
|---|---|
| Ballpark estimate (phone/online) | £150–£400 |
| Detailed cost estimate from drawings | £500–£1,500 |
| Tender documents and bills of quantities | £1,500–£3,500 |
| Full pre-contract QS service | £2,000–£6,000 |
| Interim valuations (per visit) | £350–£700 per visit |

---

## When is a QS worth it for a domestic project?

A QS provides clearest value when:

- The project is above £80,000–£100,000
- You are using a traditional (not design-and-build) procurement route and need to evaluate competitive tenders properly
- You need objective, professionally prepared figures before approaching contractors
- The project involves significant complexity, unknowns, or structural elements
- You are managing the project yourself without a main contractor

For smaller projects (under £50,000), a detailed cost plan from a design-and-build contractor with transparent pricing may deliver similar value without the separate professional fee.

---

## The difference between an estimate and a QS

A contractor’s estimate is prepared by someone with a financial interest in winning the work. A QS estimate is prepared by an independent professional with no stake in who is appointed. This independence matters most when evaluating multiple tenders, when the project is large enough that errors are costly, and when client-contractor disputes are more likely.

---

## Dwellinger’s free estimating tool

Dwellinger provides a free ballpark estimate for domestic projects based on project type, location, size, and specification. This is not a QS service — but it’s a useful starting point before you decide whether to appoint a QS.

[Get a free estimate](/estimate)
`,
  },

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

## What build cost includes — and what it doesn’t

A build contract typically covers: groundworks and foundations; superstructure (walls, floors, roof); roof covering and rainwater goods; external doors, windows, and glazing; first-fix plumbing, heating, and electrical; insulation; plasterboard, skim, and decoration; second-fix plumbing and electrical; kitchen and bathroom fittings (if specified).

What a build contract typically **does not** include: land cost; architect fees (typically 8–12% of build cost); structural engineer fees; planning application fees; Building Control fees (£2,000–£6,000); infrastructure connections (£15,000–£50,000 depending on location); VAT.

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

A typical 4m × 5m (20m²) single-storey rear extension in London: **£48,000–£84,000** depending on specification.

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

Most garage conversions are **permitted development** — no planning application required — provided you’re converting the internal space without extending the external footprint.

Exceptions: the property is in a Conservation Area and the works affect the external appearance; PD rights have been removed; the garage is on the front elevation in a restricted area; the property is listed.

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
    category: 'Builder Score™',
    title: 'Why Star Ratings Are Not Enough: Introducing Builder Score™',
    date: '5 Oct 2026',
    readTime: '7 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&auto=format&q=80',
    description: 'Star ratings can be bought, faked or manipulated. Builder Score™ is a 0–1000 trust rating calculated from verified compliance data.',
    content: `
## The problem with stars

Walk into any contractor’s office in London and you’ll find the same thing on the wall: some five-star reviews, a certificate. The display is the same whether the contractor is exceptional or barely functional.

The review economy has been gamed. Not universally, not by most contractors — but enough that the signal has degraded. The home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

---

## What star ratings miss

### Payment behaviour
Does the contractor pay their subcontractors on time? A review from a satisfied homeowner says nothing about what happened to the plasterer and the plumber after the job was complete.

### CDM compliance
The Construction (Design and Management) Regulations 2015 place legal duties on contractors. Most homeowners have no idea whether their contractor has ever read the regulations, let alone followed them.

### Insurance currency
A contractor can show you a certificate of public liability insurance dated 18 months ago. Is it still current? A review system cannot answer this.

---

## How Builder Score™ works

Builder Score™ is Dwellinger’s proprietary 0–1000 trust rating, calculated across five weighted dimensions: verified reviews (0–200), CDM and health & safety compliance (0–200), payment behaviour (0–200), dispute history and outcomes (0–200), and insurance and accreditation (0–200).

A Builder Score™ above **800** indicates a contractor with a strong, multi-dimensional trust profile. Above **900** (Platinum tier) indicates outstanding performance across all dimensions.

[Find Builder Score™-verified contractors](/search)
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

## 3. Check their Builder Score™

Dwellinger’s Builder Score™ checks CDM compliance records, payment behaviour to suppliers, and dispute outcomes — data that no review platform provides.

## 4. Read verified project reviews

Look for reviews tied to specific completed projects — with photos, dates, and client names.

## 5. Get at least 3 written quotes on the same scope

Never compare quotes that are not based on identical scopes of work. A quote that comes back significantly lower than the others usually means something has been omitted.

## 6. Insist on a written contract

Do not start work without a written contract covering: full scope of works, payment schedule, start date and estimated completion, and what happens if there are variations.

## 7. Check their Builder Score™ on Dwellinger

Builder Score™ is a 0–1000 trust rating calculated from six independently verified components. A Gold or Platinum contractor has demonstrated verified compliance, payment integrity and a strong review track record.

## Red flags to avoid

Cash-only payment; pressure to start immediately; no fixed business address; unwillingness to provide references; requesting more than 25% upfront.
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

Planning permission is required when: you exceed the volume limits; you want to alter the ridge height; the property is in a Conservation Area, National Park, or AONB; the property is listed. In Conservation Areas, any roof alteration visible from a public road needs planning consent, even if within volume limits.

---

## Types of loft conversion

- **Rooflight**: no change to roofline, just add roof windows. Usually permitted development.
- **Dormer**: extends out from the slope, adding headroom. Rear dormers usually PD; front dormers typically need planning.
- **Mansard**: flat roof with steeply sloped sides. Almost always requires planning.
- **Hip-to-gable**: changes a hipped roof to a gable end. Usually PD for detached and semi-detached.

---

## Building Regulations — always required

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
    author: 'James Hargrove',
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
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=1400&auto=format&q=80',
    description: 'UK rear extension costs range from £1,800–£3,500/m². This guide covers typical costs, what affects price, planning requirements and how to verify your contractor.',
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
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&auto=format&q=80',
    description: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees.',
    content: `
## The honest answer: it depends — but here are real numbers

A 4m × 4m single-storey rear extension in London will typically cost between **£60,000 and £95,000** in 2025, including VAT. The range is wide because extensions are bespoke construction projects.

## The main cost drivers

### 1. Size and footprint

Rule of thumb for London in 2025:
- **£2,500–£3,500/m²** for a standard single-storey extension
- **£3,000–£4,000/m²** for a double-storey
- **£4,000–£6,000/m²+** for high-specification finishes and bespoke glazing

### 2. Specification and finishes

Nothing moves the price like specification: bi-fold or sliding doors (£5,000–£15,000+), underfloor heating (add £80–£150/m²), structural glazing or roof lanterns (£3,000–£10,000+ per unit).

### 3. Structural complexity

If you have clay soils (common in London), deep strip or mini-pile foundations can add £8,000–£20,000 to groundworks costs.

### 4. Party wall matters

If your extension is within 3m of a neighbour’s foundation, the Party Wall Act applies. Budget **£1,000–£3,000** per adjoining neighbour for Party Wall Awards.

## London vs rest of UK

London and the South East command a price premium of **20–40%** over equivalent work in the Midlands or North.

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

Walk into any contractor’s office in London and you’ll find the same thing on the wall: some five-star reviews, a certificate. The display is the same whether the contractor is exceptional or barely functional.

The review economy has been gamed. The home improvement market handles over **£28 billion in spending per year** in the UK. Most homeowners spend their largest discretionary budget on a contractor they know almost nothing substantive about.

## What star ratings miss

- Does the contractor pay their subcontractors on time?
- Do they hold current public liability insurance?
- Do they have a CDM compliance record?
- What is their dispute history?

Builder Score™ answers all of these. It’s a 0–1000 trust rating calculated across five independently verified dimensions.

[Find Builder Score™-verified contractors](/search)
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
    description: 'The single most important number in property investment is the maximum you should pay for a site. Here’s how to calculate it.',
    content: `
## What is residual land value?

Residual land value (RLV) is the maximum price you should pay for a development site, given the costs involved and the profit you need to make the scheme viable.

**RLV = Gross Development Value − Total Development Costs − Developer’s Profit**

If the answer is positive, the site has value. If it’s negative — or lower than the asking price — the scheme does not work at that price.

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
    title: 'Dwell Agents — how AI is changing the day-to-day for construction businesses',
    date: '8 Aug 2026',
    readTime: '5 min read',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&auto=format&q=80',
    description: 'Four AI agents designed specifically for construction: Dwell Coord, Dwell Create, Dwell Clarity, and Dwell Coach.',
    content: `
## The paperwork problem in construction

The average small construction business spends between 20% and 35% of its working hours on administration. Dwell Agents are built specifically on UK construction — the terminology, the document types, the compliance requirements, and the commercial realities of running a building business.

## The four Dwell Agents

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
