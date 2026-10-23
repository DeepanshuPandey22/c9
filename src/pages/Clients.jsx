import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHead, GlassCard, Marquee, PageHero } from '../components/ui.jsx'
import { clients } from '../data.js'

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="Our Clients"
        title="Companies we've worked closely with"
        intro="We have worked closely and successfully with many companies, and pride ourselves on meeting and exceeding our clients' high expectations."
      />

      <section className="container section" style={{ paddingTop: 40 }}>
        <Reveal>
          <Marquee
            items={clients}
            duration={36}
            render={(c) => (
              <div className="glass-strong logo-tile">
                <img src={c.logo} alt={c.name} />
                <span className="tag">{c.name}</span>
              </div>
            )}
          />
        </Reveal>
      </section>

      <section className="container section">
        <SectionHead eyebrow="Client Directory" title="Some of our clients" />
        <div className="grid grid-md-2 grid-xl-4">
          {clients.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 90}>
              <GlassCard className="client-card">
                <div className="logo-box"><img src={c.logo} alt={c.name} loading="lazy" /></div>
                <h3>{c.name}</h3>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ marginTop: 40 }}>
          <Link to="/contact" className="btn btn-primary sheen">Become our next success story <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}
