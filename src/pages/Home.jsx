import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2, LayoutGrid } from 'lucide-react'
import { Reveal, SectionHead, GlassCard, Marquee } from '../components/ui.jsx'
import { company, services, values, about, clients } from '../data.js'

function Hero() {
  return (
    <section className="container hero" style={{ position: 'relative' }}>
      <div className="orb" style={{ width: 360, height: 360, top: 80, right: -60, background: 'oklch(98% 0 0 / 0.06)' }} />
      <Reveal as="p" className="glass chip">
        <Sparkles size={14} />
        <span>IT · Cloud · Design Consultancy</span>
      </Reveal>
      <Reveal as="h1" className="text-aurora" delay={100}>
        Expertly providing IT &amp; Design services you can trust
      </Reveal>
      <Reveal as="p" className="lead muted" delay={200}>{company.intro}</Reveal>
      <Reveal className="actions" delay={300}>
        <Link to="/services" className="btn btn-primary sheen">
          Explore Our Services <ArrowRight size={16} />
        </Link>
        <Link to="/contact" className="btn glass glass-hover">
          <span className="inner" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <LayoutGrid size={16} /> Book a Consultation
          </span>
        </Link>
      </Reveal>
      <div className="grid grid-md-2 grid-xl-4 cards">
        {services.slice(0, 4).map((s, i) => (
          <Reveal key={s.slug} delay={400 + i * 90}>
            <GlassCard>
              <p className="mono-label">{s.tag}</p>
              <h3>{s.title}</h3>
              <p className="desc muted">{s.short}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ServiceTabs() {
  const [active, setActive] = useState(0)
  const s = services[active]
  const Icon = s.icon
  return (
    <section className="container section">
      <SectionHead
        eyebrow="Core Capabilities"
        title="End-to-End IT Services"
        sub="Select a domain below to see exactly what our experts deliver — from first configuration to documentation and knowledge transfer."
        link={{ to: '/services', label: 'All Services' }}
      />
      <Reveal className="glass tabs" role="tablist">
        {services.map((sv, i) => {
          const I = sv.icon
          return (
            <button key={sv.slug} role="tab" aria-selected={i === active} className={i === active ? 'on' : ''} onClick={() => setActive(i)}>
              <I size={15} /> {sv.tag}
            </button>
          )
        })}
      </Reveal>
      <Reveal className="glass panel" style={{ marginTop: 24 }}>
        <div className="inner tab-body tab-fade" key={s.slug}>
          <div>
            <div className="glass-strong card icon" style={{ padding: 0, width: 48, height: 48, boxShadow: 'none' }}>
              <Icon size={20} />
            </div>
            <h3 style={{ marginTop: 20 }}>{s.title}</h3>
            <p className="mono-label" style={{ marginTop: 12, fontSize: 11 }}>{s.lead}</p>
            <div className="media"><img src={s.image} alt={s.title} loading="lazy" /></div>
          </div>
          <ul className="chips">
            {s.items.map((it) => (
              <li key={it} className="glass-strong"><CheckCircle2 size={16} />{it}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function Values() {
  return (
    <section className="container section">
      <SectionHead eyebrow="Why Clients Choose Us" title="Relationships Built to Last" />
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
  )
}

function Clients() {
  return (
    <section className="container section">
      <SectionHead
        eyebrow="Our Clients"
        title="Trusted by Growing Businesses"
        sub="We have worked closely and successfully with many companies, and pride ourselves on meeting and exceeding our clients' high expectations."
        link={{ to: '/clients', label: 'Explore More' }}
      />
      <Reveal>
        <Marquee
          items={clients}
          render={(c) => (
            <div className="glass-strong logo-tile">
              <img src={c.logo} alt={c.name} />
              <span className="tag">{c.name}</span>
            </div>
          )}
        />
      </Reveal>
    </section>
  )
}

function AboutSplit() {
  return (
    <section className="container section">
      <SectionHead eyebrow="About Cloud9" title="Built on Integrity, Reliability & Quality" />
      <div className="grid grid-lg-2" style={{ gap: 24 }}>
        <Reveal>
          <GlassCard className="pad-lg">
            <p className="muted">{about.paragraphs[0]}</p>
            <ul style={{ marginTop: 28, display: 'grid', gap: 12 }}>
              {['End-to-end infrastructure, design & development', 'Remote managed support & AMC', 'Documentation and knowledge transfer on every project'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                  <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--accent)' }} />{t}
                </li>
              ))}
            </ul>
            <Link to="/about" className="link-arrow" style={{ marginTop: 32 }}>Read Who We Are <ArrowRight size={16} /></Link>
          </GlassCard>
        </Reveal>
        <Reveal delay={120}>
          <GlassCard>
            <p className="mono-num" style={{ letterSpacing: '0.28em', textTransform: 'uppercase', fontSize: 11 }}>Our_Direction</p>
            <h3 style={{ fontSize: 20 }}>Mission &amp; Vision</h3>
            <div style={{ marginTop: 24, display: 'grid', gap: 16 }}>
              <div className="glass-strong principle">
                <p className="t"><span>1.</span>Mission</p>
                <p className="d muted">{about.mission}</p>
              </div>
              <div className="glass-strong principle">
                <p className="t"><span>2.</span>Vision</p>
                <p className="d muted">{about.vision}</p>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="container section">
      <Reveal className="glass panel sheen" style={{ textAlign: 'center', padding: '64px 32px' }}>
        <div className="inner">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="text-aurora" style={{ marginTop: 16, fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.025em', textWrap: 'balance' }}>
            Let's optimise your IT operations
          </h2>
          <p className="muted" style={{ margin: '16px auto 0', maxWidth: 560 }}>
            Talk to our experts about network, security, cloud, Office 365, website or application projects.
          </p>
          <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary sheen">Contact Us <ArrowRight size={16} /></Link>
            <a href={`mailto:${company.email}`} className="btn glass glass-hover"><span className="inner">{company.email}</span></a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTabs />
      <Values />
      <Clients />
      <AboutSplit />
      <Cta />
    </>
  )
}
