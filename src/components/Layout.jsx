import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, Linkedin, Instagram, MessageCircle, MapPin } from 'lucide-react'
import FluidBackground from './FluidBackground.jsx'
import { GradualBlur } from './ui.jsx'
import { company, nav } from '../data.js'

function Brand() {
  return (
    <Link to="/" className="brand">
      <img src="/favicon.jpg" alt="Cloud9 Consultancy logo" />
      <span>
        Cloud9 <span className="dim">Consultancy</span>
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <nav className={`nav ${scrolled || open ? 'glass-strong' : 'glass'}`}>
        <Brand />
        <div className="nav-right">
          <Link to="/contact" className="nav-cta">Book a Consultation</Link>
          <button className="burger" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="glass-strong menu">
          <ul>
            {nav.map((n) => (
              <li key={n.to}>
                <NavLink to={n.to} end={n.to === '/'}>{n.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="container footer">
      <div className="glass panel">
        <div className="footer-grid">
          <div>
            <p className="wordmark">Cloud9 <span className="brand-icon">Consultancy</span></p>
            <p className="muted" style={{ marginTop: 16, maxWidth: 384, fontSize: 14 }}>{company.intro}</p>
            <p className="muted" style={{ marginTop: 12, fontSize: 13 }}>Partners with Amazon, Microsoft, Google Cloud and Trellix.</p>
            <div className="socials">
              <a href={company.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={company.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
              <a href={`mailto:${company.email}`} aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div>
            <p className="eyebrow" style={{ fontSize: 12 }}>Navigate</p>
            <ul className="links">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow" style={{ fontSize: 12 }}>Reach Us</p>
            <div className="muted" style={{ marginTop: 20, display: 'grid', gap: 14, fontSize: 13 }}>
              {company.offices.map((o) => (
                <div key={o.label}>
                  <p style={{ color: 'var(--foreground)', fontWeight: 500 }}>{o.label}</p>
                  <p style={{ display: 'flex', gap: 8, marginTop: 4 }}><MapPin size={14} style={{ flexShrink: 0, marginTop: 3 }} />{o.lines.join(', ')}</p>
                  <p style={{ display: 'flex', gap: 8, marginTop: 2 }}><Phone size={14} style={{ flexShrink: 0, marginTop: 3 }} />{o.phone}</p>
                </div>
              ))}
              <p style={{ display: 'flex', gap: 8 }}><Mail size={14} style={{ flexShrink: 0, marginTop: 3 }} />{company.email}</p>
            </div>
            <Link to="/contact" className="btn btn-primary sheen" style={{ marginTop: 24 }}>Start a project</Link>
          </div>
        </div>
        <div className="bottom muted">
          <span>© {new Date().getFullYear()} Cloud9 Consultancy. All rights reserved.</span>
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: 10 }}>Noida · India  /  Jacksonville · USA</span>
        </div>
      </div>
    </footer>
  )
}

function FloatingButton() {
  return (
    <a className="fab" href={`mailto:${company.email}`} aria-label="Email Cloud9 Consultancy">
      <span className="dot-wrap">
        <MessageCircle size={18} />
        <span className="dot-ping" />
        <span className="dot" />
      </span>
      <span className="label">Talk to an expert</span>
    </a>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <FluidBackground />
      <Header />
      <main key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <FloatingButton />
      <GradualBlur />
    </>
  )
}
