import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import { Reveal, PageHero } from '../components/ui.jsx'
import { company, services } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // No backend yet: open the visitor's mail client with the message pre-filled.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = `Enquiry: ${f.get('service')} — ${f.get('name')}`
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nService: ${f.get('service')}\n\n${f.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Schedule a consultation"
        intro="Tell us about your network, security, cloud, Office 365, website or application needs and our experts will get back to you."
      />
      <section className="container section" style={{ paddingTop: 40 }}>
        <div className="contact-grid">
          <Reveal>
            <div className="glass card" style={{ padding: 32 }}>
              <div className="inner">
                <p className="mono-label">Office</p>
                <h3 style={{ fontSize: 22 }}>Cloud 9 Consultancy</h3>
                <div style={{ marginTop: 28 }}>
                  <div className="info-row">
                    <div className="glass-strong icon"><MapPin size={16} /></div>
                    <div><p className="k">Address</p><p className="v">{company.address.map((l) => <span key={l} style={{ display: 'block' }}>{l}</span>)}</p></div>
                  </div>
                  <div className="info-row">
                    <div className="glass-strong icon"><Phone size={16} /></div>
                    <div><p className="k">Phone</p><p className="v">{company.phones.map((p) => <a key={p} href={`tel:${p.replace(/[^+\d]/g, '')}`} style={{ display: 'block' }}>{p}</a>)}</p></div>
                  </div>
                  <div className="info-row">
                    <div className="glass-strong icon"><Mail size={16} /></div>
                    <div><p className="k">Email</p><p className="v"><a href={`mailto:${company.email}`}>{company.email}</a></p></div>
                  </div>
                </div>
                <div className="media" style={{ marginTop: 32 }}>
                  <iframe
                    title="Office location map"
                    src="https://www.google.com/maps?q=Sector+44+Noida+201301&output=embed"
                    style={{ border: 0, width: '100%', height: '100%', filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="glass panel form" onSubmit={onSubmit}>
              <div className="row2">
                <label>Full name<input className="field" name="name" required placeholder="Your name" /></label>
                <label>Email<input className="field" name="email" type="email" required placeholder="you@company.com" /></label>
              </div>
              <div className="row2">
                <label>Phone<input className="field" name="phone" placeholder="+91 …" /></label>
                <label>Service
                  <select className="field" name="service" defaultValue={services[0].title}>
                    {services.map((s) => <option key={s.slug}>{s.title}</option>)}
                    <option>Something else</option>
                  </select>
                </label>
              </div>
              <label>Message<textarea className="field" name="message" required placeholder="Tell us about your project…" /></label>
              <button type="submit" className="btn btn-primary sheen" style={{ justifySelf: 'start' }}>
                Send Enquiry <Send size={16} />
              </button>
              {sent && (
                <p className="glass-strong form-ok"><CheckCircle2 size={16} color="var(--emerald)" /> Your email app should open with the message ready to send.</p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
