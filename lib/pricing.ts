export const PLANS = [
  { slug: 'member',       name: 'Member',       monthly: 49,  annual: 470,  audience: 'Get listed. Build your score.' },
  { slug: 'professional', name: 'Professional', monthly: 99,  annual: 950,  audience: 'For growing contractors.' },
  { slug: 'premium',      name: 'Premium',      monthly: 199, annual: 1910, audience: 'Full platform for serious businesses.' },
  { slug: 'franchise',    name: 'Franchise',    monthly: 499, annual: 4790, audience: 'For networks, franchises and agencies.' },
] as const

export const ANNUAL_DISCOUNT = 0.2
export const PRICING_URL = '/platform/pricing'
export const FROM_PRICE = 49
