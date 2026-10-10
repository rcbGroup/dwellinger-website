export const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', eventName, parameters)
}

// Core funnel events
export const analytics = {
  // Acquisition
  heroCtaClicked: (cta: string) => trackEvent('hero_cta_clicked', { cta }),
  // Engagement
  calculatorStarted: (type: string) => trackEvent('calculator_started', { type }),
  calculatorCompleted: (type: string) => trackEvent('calculator_completed', { type }),
  // Conversion
  registrationStarted: () => trackEvent('registration_started'),
  registrationCompleted: (role: string) => trackEvent('registration_completed', { role }),
  projectCreated: () => trackEvent('project_created'),
  // Contractor
  contractorViewed: (id: string) => trackEvent('contractor_profile_viewed', { contractor_id: id }),
  contractorSaved: (id: string) => trackEvent('contractor_saved', { contractor_id: id }),
  // Marketplace
  searchPerformed: (query: string, results: number) => trackEvent('search_performed', { query, results }),
  // Language
  languageChanged: (lang: string) => trackEvent('language_changed', { language: lang }),
  // Pricing
  pricingPageViewed: () => trackEvent('pricing_page_viewed'),
  planSelected: (plan: string) => trackEvent('plan_selected', { plan }),
}
