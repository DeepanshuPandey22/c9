import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

// Blur-up scroll reveal: opacity 0 / blur 8px / +24px -> clear, once.
export function Reveal({ children, delay = 0, className = '', as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ eyebrow, title, sub, link }) {
  return (
    <Reveal className="section-head">
      <div className="text">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {sub && <p className="sub muted">{sub}</p>}
      </div>
      {link && (
        <Link to={link.to} className="glass glass-hover pill-link">
          <span className="inner">{link.label} →</span>
        </Link>
      )}
    </Reveal>
  )
}

export function PageHero({ eyebrow, title, intro }) {
  return (
    <section className="container page-hero">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-aurora">{title}</h1>
        {intro && <p className="muted">{intro}</p>}
      </Reveal>
    </section>
  )
}

export function GlassCard({ children, className = '' }) {
  return (
    <div className={`glass sheen glass-hover card ${className}`}>
      <div className="inner">{children}</div>
    </div>
  )
}

// Infinite horizontal strip; the list is rendered twice and shifted -50%.
export function Marquee({ items, render, duration = 48 }) {
  const doubled = [...items, ...items]
  return (
    <div className="glass marquee-wrap">
      <div className="marquee" style={{ animationDuration: `${duration}s` }}>
        {doubled.map((item, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            {render(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

// Fixed strip at the viewport bottom: stacked layers of increasing blur,
// each masked to its own band, so content softens as it leaves the screen.
export function GradualBlur({ layers = 5, strength = 2 }) {
  const step = 100 / layers
  return (
    <div className="gradual-blur" aria-hidden="true">
      {Array.from({ length: layers }, (_, i) => {
        const a = +(step * i).toFixed(1)
        const b = +(step * (i + 1)).toFixed(1)
        const c = +(step * (i + 2)).toFixed(1)
        const d = +(step * (i + 3)).toFixed(1)
        let mask = `transparent ${a}%, black ${b}%`
        if (c <= 100) mask += `, black ${c}%`
        if (d <= 100) mask += `, transparent ${d}%`
        const blur = (0.0625 * (i + 2) * strength).toFixed(3)
        return (
          <div
            key={i}
            style={{
              maskImage: `linear-gradient(to bottom, ${mask})`,
              WebkitMaskImage: `linear-gradient(to bottom, ${mask})`,
              backdropFilter: `blur(${blur}rem)`,
              WebkitBackdropFilter: `blur(${blur}rem)`,
              opacity: 0.6,
            }}
          />
        )
      })}
    </div>
  )
}
