import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Reveal, PageHero } from '../components/ui.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Deliver"
        title="Our Services"
        intro="At Cloud9 Consultancy we are always keen on providing IT support to customers with added value that fulfils their needs and ensures our distinction in the market."
      />
      <section className="container section">
        <div style={{ display: 'grid', gap: 24 }}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.slug} id={s.slug}>
                <div className="glass sheen card" style={{ padding: 32 }}>
                  <div className="inner service-row">
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span className="mono-num">// 0{i + 1}</span>
                        <span className="tag">{s.tag}</span>
                      </div>
                      <h2>{s.title}</h2>
                      <p className="muted" style={{ marginTop: 12, fontSize: 14 }}>{s.lead}.</p>
                      <div className="media"><img src={s.image} alt={s.title} loading="lazy" /></div>
                    </div>
                    <ul className="chips two">
                      {s.items.map((it) => (
                        <li key={it} className="glass-strong"><CheckCircle2 size={16} />{it}</li>
                      ))}
                      <li className="glass-strong" style={{ gridColumn: '1 / -1', justifyContent: 'space-between' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Icon size={16} /> Need {s.title.toLowerCase()}?</span>
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
