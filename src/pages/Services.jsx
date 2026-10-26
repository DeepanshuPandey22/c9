import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, PageHero } from '../components/ui.jsx'
import { services, serviceGroups, partners } from '../data.js'

export default function Services() {
  const [group, setGroup] = useState('All')
  const { hash } = useLocation()
  const shown = group === 'All' ? services : services.filter((s) => s.group === group)

  // Deep links like /services#security scroll to that service.
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 150)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <PageHero
        eyebrow="What We Deliver"
        title="Our Services"
        intro="We offer a comprehensive range of IT and digital services designed to support and transform your business operations — plus license services across Microsoft, AWS, Google Cloud Platform and Trellix."
      />

      <section className="container" style={{ paddingTop: 24 }}>
        <Reveal className="glass panel license-panel">
          <div className="inner">
            <p className="mono-label">License Services</p>
            <div className="license-grid">
              {partners.map((p) => (
                <div key={p.name} className="glass-strong license-item">
                  <div className="partner-logo small">
                    {p.logo ? <img src={p.logo} alt={p.note} /> : <span className="trellix-mark">Trellix</span>}
                  </div>
                  <span className="tag">{p.short}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container section">
        <Reveal className="glass tabs filter-tabs" role="tablist">
          {serviceGroups.map((g) => (
            <button key={g} role="tab" aria-selected={g === group} className={g === group ? 'on' : ''} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </Reveal>

        <div style={{ display: 'grid', gap: 24, marginTop: 32 }}>
          {shown.map((s) => {
            const Icon = s.icon
            const n = services.indexOf(s) + 1
            return (
              <Reveal key={`${group}-${s.slug}`} id={s.slug} className="anchor">
                <div className="glass sheen card" style={{ padding: 32 }}>
                  <div className="inner service-row">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <span className="mono-num">// {String(n).padStart(2, '0')}</span>
                        <span className="tag">{s.group}</span>
                      </div>
                      <h2>{s.title}</h2>
                      <p className="muted" style={{ marginTop: 12, fontSize: 14 }}>{s.lead}.</p>
                      {s.image ? (
                        <div className="media"><img src={s.image} alt={s.title} loading="lazy" /></div>
                      ) : (
                        <div className="media media-art"><Icon size={72} strokeWidth={1} /></div>
                      )}
                    </div>
                    <ul className={`chips ${s.items.length > 5 ? 'two' : ''}`}>
                      {s.items.map((it) => (
                        <li key={it} className="glass-strong"><CheckCircle2 size={16} />{it}</li>
                      ))}
                      <li className="glass-strong" style={{ gridColumn: '1 / -1', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon size={16} /> Interested in {s.tag}?</span>
                        <Link to="/contact" className="link-arrow" style={{ marginTop: 0 }}>Enquire <ArrowRight size={14} /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
