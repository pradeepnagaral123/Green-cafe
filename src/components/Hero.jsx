import { SITE, STATS } from '../data/site'

function StatIcon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  if (name === 'leaf') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" {...common} aria-hidden="true">
        <path d="M5 19C5 9 10 4 19 4c.5 9-4.5 15-14 15Z" />
        <path d="M5 19c4-5 7-9 10-12" />
      </svg>
    )
  }
  if (name === 'cloche') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" {...common} aria-hidden="true">
        <path d="M12 3.5v1.8" />
        <path d="M6 15.5a6 6 0 1 1 12 0" />
        <path d="M4.5 15.5h15" />
        <path d="M4 19h16" />
      </svg>
    )
  }
  if (name === 'lounge') {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" {...common} aria-hidden="true">
        <path d="M7.5 4h9A2.5 2.5 0 0 1 19 6.5V14H5V6.5A2.5 2.5 0 0 1 7.5 4Z" />
        <path d="M5 14h14" />
        <path d="M7 14v4" />
        <path d="M14.5 14v4" />
        <path d="M6 21v-1" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" {...common} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2.2" />
    </svg>
  )
}

export default function Hero({ onReserve }) {
  return (
    <header id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-main">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-icon">🌿</span> Belagavi&apos;s Iconic Garden Café
          </span>

          <h1 className="hero-title">
            <span className="hero-title-line">Portuguese Charm,</span>
            <span className="hero-title-line hero-title-accent">Futuristic Taste ✦</span>
          </h1>

          <p className="hero-sub">
            Where old-world charm meets lush garden evenings
            <br />
            <span className="hero-sub-muted">— in the heart of Belagavi.</span>
          </p>

          <div className="hero-actions">
            <a href="#menu" className="btn btn-hero-primary">
              <span aria-hidden="true">🌿</span> Explore the Menu
            </a>
            <button type="button" className="btn btn-hero-ghost" onClick={onReserve}>
              <span className="hero-square" aria-hidden="true" />
              Reserve a Table
            </button>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                📍
              </span>
              {SITE.address}
            </span>
            <span className="hero-meta-sep" aria-hidden="true" />
            <span className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                ◷
              </span>
              {SITE.hours}
            </span>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container hero-stats-inner">
          {STATS.map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-icon">
                <StatIcon name={s.icon} />
              </span>
              <div className="hero-stat-body">
                <strong>
                  {s.value}
                  {s.suffix}
                </strong>
                <span className="hero-stat-label">{s.label}</span>
                <small>{s.sub}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
