import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Calendar, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Dwellinger',
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
            <div className="card p-8">
              <h2 className="font-display text-h3 text-white mb-2">Send us a message</h2>
              <p className="text-text-muted text-sm mb-6">We&apos;ll get back to you within 1 working day.</p>
              <form className="space-y-4" action="mailto:info@dwellinger.co.uk" method="post" encType="text/plain">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-text-secondary block mb-1.5">First name</label>
                    <input type="text" name="first_name" placeholder="Sarah" className="input" required />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-text-secondary block mb-1.5">Last name</label>
                    <input type="text" name="last_name" placeholder="Johnson" className="input" required />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">Email address</label>
                  <input type="email" name="email" placeholder="sarah@example.com" className="input" required />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">Phone (optional)</label>
                  <input type="tel" name="phone" placeholder="+44 7..." className="input" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">I am a…</label>
                  <select className="input" name="user_type">
                    <option value="">Select...</option>
                    <option value="homeowner">Homeowner planning a project</option>
                    <option value="contractor">Contractor interested in joining</option>
                    <option value="investor">Property investor / developer</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-text-secondary block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project or question..."
                    className="input resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-3.5">
                  Send message
                </button>
                <p className="text-text-muted text-xs text-center">
                  Or call us directly on{' '}
                  <a href="tel:+447359872594" className="text-amber hover:underline">
                    +44 7359 872594
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
