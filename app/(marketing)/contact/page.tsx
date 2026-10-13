import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Calendar, MapPin } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Dwellinger team. Call +44 7359 872594, email info@dwellinger.co.uk, or book a discovery call.',
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Contact</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Get in touch
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Whether you&apos;re a homeowner planning a project, a contractor interested in joining,
            or an investor wanting to talk through a deal — we&apos;re here.
          </p>
        </div>
      </section>

      {/* Google Maps — Service Area */}
      <section className="py-12 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="mb-6">
            <p className="section-tag mb-2">Service Area</p>
            <h2 className="font-display text-h2 text-text mb-2">Where we operate</h2>
            <p className="text-text-secondary text-base max-w-2xl">
              Dwellinger is active across Greater London and the Home Counties — from Barnet to Bromley,
              Ealing to Greenwich. Most contractor profiles are concentrated in inner and outer London.
            </p>
          </div>
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--card-shadow)',
              position: 'relative',
            }}
          >
            <iframe
              title="Dwellinger service area — Greater London"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.52146539134!2d-0.38177813432218305!3d51.528308436816484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1728384000000!5m2!1sen!2suk"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-text-muted">
            <span>✓ All 33 London boroughs</span>
            <span>✓ Surrey &amp; Kent commuter belt</span>
            <span>✓ Essex &amp; Hertfordshire</span>
            <span>✓ Berkshire &amp; Buckinghamshire</span>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div className="space-y-5">
              <a
                href="tel:+447359872594"
                className="card p-6 flex items-center gap-4 hover:border-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0 group-hover:bg-amber transition-colors">
                  <Phone className="w-5 h-5 text-amber group-hover:text-text-inverse transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">Call us</div>
                  <div className="text-amber text-base font-bold">+44 7359 872594</div>
                  <div className="text-text-muted text-xs mt-0.5">Mon–Fri 8am–6pm · Sat 9am–1pm</div>
                </div>
              </a>

              <a
                href="mailto:info@dwellinger.co.uk"
                className="card p-6 flex items-center gap-4 hover:border-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0 group-hover:bg-amber transition-colors">
                  <Mail className="w-5 h-5 text-amber group-hover:text-text-inverse transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">Email us</div>
                  <div className="text-amber text-base font-bold">info@dwellinger.co.uk</div>
                  <div className="text-text-muted text-xs mt-0.5">We reply within 1 working day</div>
                </div>
              </a>

              <a
                href="mailto:info@dwellinger.co.uk?subject=Discovery Call Request"
                className="card p-6 flex items-center gap-4 hover:border-amber transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0 group-hover:bg-amber transition-colors">
                  <Calendar className="w-5 h-5 text-amber group-hover:text-text-inverse transition-colors" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">Book a discovery call</div>
                  <div className="text-amber text-sm font-bold">Email to arrange</div>
                  <div className="text-text-muted text-xs mt-0.5">30-minute call to discuss your project, contractor needs, or investment questions.</div>
                </div>
              </a>

              <div className="card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm mb-0.5">Based in</div>
                  <div className="text-text-secondary text-sm">Greater London, UK</div>
                  <div className="text-text-muted text-xs mt-0.5">Active across London and Home Counties</div>
                </div>
              </div>

              <div className="card-raised p-5">
                <div className="text-text-muted text-xs uppercase tracking-widest font-bold mb-2">Platform status</div>
                <p className="text-text-muted text-xs leading-relaxed">
                  Dwellinger is in active launch. New contractor profiles are being verified and onboarded weekly.
                  Register now to secure early access and your founding Builder Score™ profile.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
