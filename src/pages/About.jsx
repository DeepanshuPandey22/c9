import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye } from 'lucide-react'
import { Reveal, SectionHead, GlassCard, PageHero } from '../components/ui.jsx'
import { about, values, team, partners } from '../data.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Making businesses better through technology"
        intro="End-to-end IT infrastructure, design and application development — delivered with integrity, reliability and quality from India and the USA."
      />

      <section className="container section">
        <div className="grid grid-lg-2" style={{ gap: 24 }}>
          <Reveal>
            <GlassCard>
              <p className="mono-label">Company Profile</p>
              {about.paragraphs.map((p) => (
                <p key={p} className="muted" style={{ marginTop: 16 }}>{p}</p>
              ))}
            </GlassCard>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass card media-card">
              <img src="/img/whoweare-1.jpg" alt="Cloud9 Consultancy team at work" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container section">
        <SectionHead eyebrow="Our Direction" title="Mission & Vision" />
        <div className="grid grid-lg-2" style={{ gap: 24 }}>
          {[
            { icon: Target, label: 'Mission', text: about.mission },
            { icon: Eye, label: 'Vision', text: about.vision },
          ].map(({ icon: Icon, label, text }, i) => (
            <Reveal key={label} delay={i * 120}>
              <GlassCard>
                <div className="glass-strong icon-box"><Icon size={18} /></div>
                <h3 style={{ fontSize: 22 }}>Our {label}</h3>
                <p className="muted" style={{ marginTop: 12 }}>{text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHead eyebrow="Management Team" title="The people behind Cloud9" />
        <div className="grid grid-md-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div className="glass sheen glass-hover card team-card">
                <div className="inner">
                  <div className="team-photo"><img src={m.photo} alt={m.name} loading="lazy" /></div>
                  <h3>{m.name}</h3>
                  <p className="mono-label" style={{ marginTop: 8 }}>{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section">
        <SectionHead eyebrow="Core Values" title="What guides every engagement" />
        <div className="grid grid-md-2 grid-xl-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <GlassCard>
                <span className="mono-num">// 0{i + 1}</span>
                <h3>{v.title}</h3>
                <p className="desc muted">{v.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section" style={{ paddingTop: 0 }}>
        <Reveal className="glass panel partners-strip">
          <div className="inner">
            <p className="eyebrow" style={{ textAlign: 'center' }}>We are partners with</p>
            <div className="partner-row">
              {partners.map((p) => (
                <div key={p.name} className="partner-logo" title={p.note}>
                  {p.logo ? <img src={p.logo} alt={p.note} /> : <span className="trellix-mark">Trellix</span>}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal style={{ marginTop: 40 }}>
          <Link to="/services" className="btn btn-primary sheen">See What We Do <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}
