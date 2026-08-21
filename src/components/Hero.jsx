import { SITE, STATS } from '../data/site'
import Icon from './Icon'

export default function Hero({ onReserve }) {
  return (
    <header id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-main">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-icon">
              <Icon name="leaf" size={14} />
            </span>{' '}
            Belagavi&apos;s Iconic Garden Café
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
              <Icon name="utensils" size={17} /> Explore the Menu
            </a>
            <button type="button" className="btn btn-hero-ghost" onClick={onReserve}>
              <span className="hero-square" aria-hidden="true" />
              Reserve a Table
            </button>
          </div>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                <Icon name="map-pin" size={14} />
              </span>
              {SITE.address}
            </span>
            <span className="hero-meta-sep" aria-hidden="true" />
            <span className="hero-meta-item">
              <span className="hero-meta-icon" aria-hidden="true">
                <Icon name="clock" size={14} />
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
                <Icon name={s.icon} size={22} />
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
