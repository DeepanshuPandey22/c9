import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye } from 'lucide-react'
import { Reveal, SectionHead, GlassCard, PageHero } from '../components/ui.jsx'
import { about, values } from '../data.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="IT consultancy built for lasting relationships"
        intro="End-to-end IT infrastructure, design and application development — delivered with integrity, reliability and quality."
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
            <div className="glass card" style={{ padding: 0, overflow: 'hidden', minHeight: 320 }}>
              <img src="/img/whoweare-1.jpg" alt="Cloud9 Consultancy team at work" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.75)' }} />
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
                <div className="glass-strong icon"><Icon size={18} /></div>
                <h3 style={{ fontSize: 22 }}>Our {label}</h3>
                <p className="muted" style={{ marginTop: 12 }}>{text}</p>
              </GlassCard>
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
        <Reveal style={{ marginTop: 40 }}>
          <Link to="/services" className="btn btn-primary sheen">See What We Do <ArrowRight size={16} /></Link>
        </Reveal>
      </section>
    </>
  )
}
