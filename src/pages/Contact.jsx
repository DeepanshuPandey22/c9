import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle2, Instagram } from 'lucide-react'
import { Reveal, PageHero } from '../components/ui.jsx'
import { company, services } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [office, setOffice] = useState(0)

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
        intro="Tell us about your cloud, security, network, data, AI, software or website needs and our experts in India or the USA will get back to you."
      />
      <section className="container section" style={{ paddingTop: 40 }}>
        <div className="contact-grid">
          <Reveal>
            <div className="glass card card-pad">
              <div className="inner">
                <div className="glass tabs" role="tablist" style={{ boxShadow: 'none' }}>
                  {company.offices.map((o, i) => (
                    <button key={o.label} role="tab" aria-selected={i === office} className={i === office ? 'on' : ''} onClick={() => setOffice(i)}>
                      {i === 0 ? 'India · Head Office' : 'USA · Branch'}
                    </button>
                  ))}
                </div>
                <div className="tab-fade" key={office} style={{ marginTop: 28 }}>
                  <p className="mono-label">{company.offices[office].label}</p>
                  <h3 style={{ fontSize: 22, marginTop: 10 }}>Cloud9 Consultancy</h3>
                  <div style={{ marginTop: 24 }}>
                    <div className="info-row">
                      <div className="glass-strong icon"><MapPin size={16} /></div>
                      <div><p className="k">Address</p><p className="v">{company.offices[office].lines.map((l) => <span key={l} style={{ display: 'block' }}>{l}</span>)}</p></div>
                    </div>
                    <div className="info-row">
                      <div className="glass-strong icon"><Phone size={16} /></div>
                      <div><p className="k">Phone</p><p className="v"><a href={`tel:${company.offices[office].phone.replace(/[^+\d]/g, '')}`}>{company.offices[office].phone}</a></p></div>
                    </div>
                    <div className="info-row">
                      <div className="glass-strong icon"><Mail size={16} /></div>
                      <div><p className="k">Email</p><p className="v"><a href={`mailto:${company.email}`}>{company.email}</a></p></div>
                    </div>
                    <div className="info-row">
                      <div className="glass-strong icon"><Instagram size={16} /></div>
                      <div><p className="k">Social</p><p className="v"><a href={company.instagram} target="_blank" rel="noopener noreferrer">{company.social}</a></p></div>
                    </div>
                  </div>
                  <div className="media" style={{ marginTop: 28 }}>
                    <iframe
                      title={`${company.offices[office].label} map`}
                      src={`https://www.google.com/maps?q=${company.offices[office].map}&output=embed`}
                      style={{ border: 0, width: '100%', height: '100%', filter: 'grayscale(0.6) invert(0.9) hue-rotate(180deg) contrast(0.9)' }}
                      loading="lazy"
                    />
                  </div>
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
                <label>Phone<input className="field" name="phone" placeholder="+91 / +1 …" /></label>
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
                <p className="glass-strong form-ok"><CheckCircle2 size={16} className="brand-icon" /> Your email app should open with the message ready to send.</p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
