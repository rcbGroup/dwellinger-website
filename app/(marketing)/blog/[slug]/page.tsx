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
    author: 'Dwellinger Editorial',
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
    author: 'Dwellinger Editorial',
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
    title: 'Loft conversion: do you need planning permission?',
    date: '29 Aug 2026',
    readTime: '5 min read',
    author: 'Dwellinger Editorial',
    description: 'Most loft conversions fall under Permitted Development rights — but not all. Head height, dormer size, conservation areas, and Article 4 directions all matter.',
    content: `
## The short answer

**Most loft conversions in England do not require planning permission.** They fall under Permitted Development (PD) rights, which allow certain types of work without the need for a full planning application.

However, there are important exceptions — and getting this wrong is expensive.

---

## When permitted development applies

Under current PD rules (as of 2025), the following loft conversions are generally permitted without planning permission:

- **Roof extensions that do not exceed 40m³** of additional roof space for terraced houses
- **Roof extensions that do not exceed 50m³** of additional roof space for detached and semi-detached houses
- **Extensions that do not protrude beyond the existing roof slope** on the side facing the highway
- **Materials that are similar in appearance** to the existing house

Crucially, the total volume added must be calculated cumulatively — if you have already added a dormer in the past, that volume counts toward your allowance.

---

## When you DO need planning permission

You will need to apply for planning permission if:

### 1. The property is in a conservation area, AONB, or World Heritage Site

In these designated areas, PD rights are more restricted. Dormer windows on roof slopes visible from the highway are typically not permitted without consent. Check your local authority's website to see if your property is in a designated area.

### 2. Article 4 Direction applies

Some local authorities have issued Article 4 Directions that remove PD rights in specific areas — often in streets of particular architectural interest. This is more common than homeowners realise in inner London boroughs.

### 3. The property is a listed building

Listed buildings require Listed Building Consent for almost any alterations, internal or external. The planning process for listed buildings is entirely separate from standard planning permission.

### 4. The property is a flat

Flats typically do not have PD rights. Any extensions or alterations will require planning permission and, in almost all cases, the agreement of a freeholder or management company.

### 5. You want a hip-to-gable conversion

Hip-to-gable conversions — where one of the sloping sides of the roof is replaced with a vertical gable wall — are often within PD allowances for semi-detached and detached homes, but can require permission in conservation areas.

---

## What about Building Control?

This is separate from planning permission and applies to **all** loft conversions regardless of whether planning permission is needed.

A loft conversion is almost always notifiable under Building Regulations. You must submit either:
- A **Full Plans** application before work starts (recommended — gives certainty before committing)
- Or a **Building Notice** (faster, but no advance sign-off of plans)

Building Control will inspect the work at key stages and issue a Completion Certificate on sign-off. This document is important when you come to sell — buyers' solicitors routinely request it.

---

## Do I need a lawful development certificate?

A Lawful Development Certificate (LDC) is optional but often advisable. It is a formal confirmation from the local authority that your proposed development is lawful under PD rights.

An LDC is useful when:
- You want certainty before spending significant money
- A lender requires confirmation of permitted development
- You want a clean record for future sale

The application fee (around £103 in England as of 2025) is modest relative to the cost of the project.

---

## Common mistakes

- **Not checking for Article 4 Directions**: The local planning authority's website will show if Article 4 applies to your area
- **Ignoring the party wall**: A loft conversion often involves work to a shared party wall or party wall structure. The Party Wall Act may apply
- **Underestimating the Building Control cost**: Factor in inspection fees when budgeting
- **Starting work without checking**: The consequences of unauthorised development can include an enforcement notice requiring you to remove the work

---

## Getting advice

If you are unsure whether planning permission is needed, speak to:
- Your local planning authority (most offer informal pre-application advice)
- An architect or planning consultant
- Your principal contractor — a quality contractor should advise you on your compliance position before work starts

[Get a loft conversion estimate](/estimate)
`,
  },

  'residual-land-value-calculator-explained': {
    slug: 'residual-land-value-calculator-explained',
    category: 'For Investors',
    title: 'Residual land value explained — and how to calculate it in 5 minutes',
    date: '20 Aug 2026',
    readTime: '7 min read',
    author: 'Dwellinger Editorial',
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
    author: 'Dwellinger Editorial',
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
    author: 'Dwellinger Editorial',
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
