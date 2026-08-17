import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { NAV_LINKS, SITE } from '../data/site'

function LeafLogo() {
  return (
    <svg className="brand-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 26C6 12.5 13 6 26 5.5c.6 12.8-6 20.5-20 20.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6 26C12 18 17 12.5 23 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 26c5.5-2.5 9-5 12.5-9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Navbar({ onReserve }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const ids = NAV_LINKS.map((l) => l.href.slice(1))
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 200) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <LeafLogo />
          <span className="brand-text">
            <span className="brand-name">Green Gates</span>
            <span className="brand-sub">Café • Belagavi</span>
          </span>
        </a>

        <button type="button" className="btn nav-reserve nav-cta" onClick={onReserve}>
          Reserve a Table
        </button>

        <button
          className={`hamburger-circle ${open ? 'hamburger-open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {createPortal(
        <div className={`nav-overlay ${open ? 'nav-open' : ''}`}>
          <button
            className="nav-overlay-close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          <ul className="nav-overlay-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href.slice(1) ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-cta-wrap">
              <button
                type="button"
                className="btn nav-reserve"
                onClick={() => {
                  setOpen(false)
                  onReserve()
                }}
              >
                Reserve a Table
              </button>
            </li>
          </ul>
        </div>,
        document.body
      )}
    </nav>
  )
}
