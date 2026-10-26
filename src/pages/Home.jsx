import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, CheckCircle2, LayoutGrid } from 'lucide-react'
import { Reveal, SectionHead, GlassCard, Marquee, LogoTile } from '../components/ui.jsx'
import { company, services, generalServices, values, about, clients, partners, stats } from '../data.js'

const featured = services.filter((s) => s.featured)

function Hero() {
  const heroCards = ['microsoft', 'security', 'ai', 'data'].map((slug) => services.find((s) => s.slug === slug))
  return (
    <section className="container hero" style={{ position: 'relative' }}>
      <div className="orb" style={{ width: 380, height: 380, top: 60, right: -80, background: 'var(--brand-indigo-glow)' }} />
      <div className="orb" style={{ width: 260, height: 260, top: 320, left: -120, background: 'var(--brand-sky-glow)', animationDelay: '-6s' }} />
      <Reveal as="p" className="glass chip">
        <Sparkles size={14} />
        <span>IT · Cloud · Security · AI</span>
      </Reveal>
      <Reveal as="h1" className="text-aurora" delay={100}>
        {company.headline}
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
        {heroCards.map((s, i) => {
          const Icon = s.icon
          return (
            <Reveal key={s.slug} delay={400 + i * 90}>
              <Link to={`/services#${s.slug}`} style={{ display: 'block', height: '100%' }}>
                <GlassCard>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p className="mono-label">{s.tag}</p>
                    <Icon size={18} className="brand-icon" />
                  </div>
                  <h3>{s.title}</h3>
                  <p className="desc muted">{s.short}</p>
                </GlassCard>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="container section" style={{ paddingBottom: 40 }}>
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
    </section>
  )
}

function ServiceTabs() {
  const [active, setActive] = useState(0)
  const s = featured[active]
  const Icon = s.icon
  return (
    <section className="container section">
      <SectionHead
        eyebrow="Core Capabilities"
        title="Comprehensive IT & Digital Services"
        sub="A comprehensive range of IT and digital services designed to support and transform your business operations. Select a domain to see what our experts deliver."
        link={{ to: '/services', label: 'All 13 Services' }}
      />
      <Reveal className="glass tabs" role="tablist">
        {featured.map((sv, i) => {
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
            <div className="glass-strong icon-box"><Icon size={20} /></div>
            <h3 style={{ marginTop: 20 }}>{s.title}</h3>
            <p className="mono-label" style={{ marginTop: 12, fontSize: 11, lineHeight: 1.7 }}>{s.lead}</p>
            {s.image ? (
              <div className="media"><img src={s.image} alt={s.title} loading="lazy" /></div>
            ) : (
              <div className="media media-art"><Icon size={72} strokeWidth={1} /></div>
            )}
          </div>
          <ul className="chips">
            {s.items.map((it) => (
              <li key={it} className="glass-strong"><CheckCircle2 size={16} />{it}</li>
            ))}
            <li className="chips-more">
              <Link to={`/services#${s.slug}`} className="link-arrow" style={{ marginTop: 8 }}>View service details <ArrowRight size={14} /></Link>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

function GeneralServices() {
  return (
    <section className="container section">
      <SectionHead
        eyebrow="General Services"
        title="Everyday IT, fully managed"
        sub="From server and desktop support to digital transformation, we take care of the IT your business depends on."
      />
      <div className="grid grid-md-2 grid-lg-3">
        {generalServices.map((g, i) => (
          <Reveal key={g} delay={(i % 3) * 80}>
            <div className="glass sheen glass-hover gs-item">
              <span className="mono-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="inner">{g}</span>
            </div>
          </Reveal>
        ))}
        <Reveal delay={160}>
          <Link to="/contact" className="gs-item gs-cta">
            Need something else? <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="container section" style={{ paddingTop: 0 }}>
      <Reveal className="glass panel">
        <div className="inner grid grid-md-2 grid-xl-4" style={{ gap: 32 }}>
          {stats.map((s) => (
            <div key={s.l} className="stat">
              <p className="n text-aurora">{s.n}</p>
              <p className="l">{s.l}</p>
            </div>
          ))}
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
        eyebrow="Top Clients"
        title="Trusted by Growing Businesses"
        sub="We have worked closely and successfully with many companies, and pride ourselves on meeting and exceeding our clients' high expectations."
        link={{ to: '/clients', label: 'Explore More' }}
      />
      <Reveal>
        <Marquee items={clients} render={(c) => <LogoTile name={c.name} logo={c.logo} tag={c.name} />} />
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
          <GlassCard>
            <p className="muted">{about.paragraphs[0]}</p>
            <ul style={{ marginTop: 28, display: 'grid', gap: 12 }}>
              {['Partners with Amazon, Microsoft, Google Cloud and Trellix', 'Head office in Noida, India · branch office in Florida, USA', 'Managed services, remote support & AMC'].map((t) => (
                <li key={t} style={{ display: 'flex', gap: 12, fontSize: 14 }}>
                  <CheckCircle2 size={16} className="brand-icon" style={{ flexShrink: 0, marginTop: 2 }} />{t}
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
      <Reveal className="glass panel sheen cta-panel">
        <div className="inner">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="text-aurora" style={{ marginTop: 16, fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 600, letterSpacing: '-0.025em', textWrap: 'balance' }}>
            Let's make your business better through technology
          </h2>
          <p className="muted" style={{ margin: '16px auto 0', maxWidth: 560 }}>
            Talk to our experts in India or the USA about cloud, security, network, data, AI or software projects.
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
      <Partners />
      <ServiceTabs />
      <GeneralServices />
      <Stats />
      <Clients />
      <Values />
      <AboutSplit />
      <Cta />
    </>
  )
}
