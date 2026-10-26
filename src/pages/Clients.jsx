import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal, SectionHead, Marquee, PageHero, LogoTile } from '../components/ui.jsx'
import { clients } from '../data.js'

function ClientGrid({ list }) {
  return (
    <div className="grid grid-md-2 grid-xl-4">
      {list.map((c, i) => (
        <Reveal key={c.name} delay={(i % 4) * 90}>
          <div className="glass sheen glass-hover card client-card">
            <div className="inner" style={{ width: '100%' }}>
              <div className="plate big">
                {c.logo ? <img src={c.logo} alt={c.name} loading="lazy" /> : <span className="wordmark-fallback">{c.name}</span>}
              </div>
              <h3>{c.name}</h3>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

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
          <Marquee items={clients} duration={40} render={(c) => <LogoTile name={c.name} logo={c.logo} tag={c.name} />} />
        </Reveal>
      </section>

      <section className="container section">
        <SectionHead eyebrow="Top Clients" title="Featured client partnerships" />
        <ClientGrid list={clients.filter((c) => c.top)} />
      </section>

      <section className="container section">
        <SectionHead eyebrow="Client Directory" title="More businesses we've supported" />
        <ClientGrid list={clients.filter((c) => !c.top)} />
        <Reveal style={{ marginTop: 40 }}>
          <Link to="/contact" className="btn btn-primary sheen">Become our next success story <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}
