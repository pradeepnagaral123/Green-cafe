import { useState } from 'react'
import { categories } from '../data/menu'
import Reveal from './Reveal'

function formatPrice(price) {
  return `₹${price}`
}

export default function Menu() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active)

  return (
    <section id="menu" className="menu">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Our Menu</span>
          <h2 className="section-title">Crafted With Love, Served With Pride</h2>
          <p className="section-sub">
            {categories.length} categories · {categories.reduce((s, c) => s + c.items.length, 0)}+
            dishes · made fresh every single day
          </p>
        </Reveal>

        <Reveal className="menu-tabs" delay={80}>
          {categories.map((c) => (
            <button
              key={c.id}
              className={`menu-tab ${active === c.id ? 'active' : ''}`}
              onClick={() => setActive(c.id)}
            >
              <span className="menu-tab-icon">{c.icon}</span>
              {c.label}
            </button>
          ))}
        </Reveal>

        <div className="menu-panel" key={current.id}>
          <Reveal className="menu-tagline">
            <span>{current.icon}</span> {current.tagline}
          </Reveal>
          <div className="menu-grid">
            {current.items.map((item) => (
              <article key={item.name} className="menu-card">
                <div className="menu-card-media">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="menu-card-emoji" aria-hidden="true">{item.emoji}</span>
                </div>
                <div className="menu-card-body">
                  <div className="menu-card-top">
                    <h3>{item.name}</h3>
                    <span className="menu-price">{formatPrice(item.price)}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Reveal className="menu-foot">
          <p>Prices inclusive of taxes · Ask our team for today&apos;s specials</p>
        </Reveal>
      </div>
    </section>
  )
}
