import { useState } from 'react'
import { GALLERY } from '../data/site'
import Reveal from './Reveal'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Ambience & Garden</span>
          <h2 className="section-title">A Café You Will Want to Keep Visiting</h2>
          <p className="section-sub">
            Tap any photo to take a closer look at the Green Gates experience.
          </p>
        </Reveal>

        <div className="gallery-grid">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src + i} delay={i * 60} className={`gallery-item ${g.span ? 'gallery-span' : ''}`}>
              <button className="gallery-btn" onClick={() => setLightbox(g)}>
                <img src={g.src} alt={g.caption} loading="lazy" />
                <span className="gallery-overlay">
                  <strong>{g.caption}</strong>
                  <small>View full screen →</small>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox-close" aria-label="Close">✕</button>
          <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <figcaption>{lightbox.caption}</figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
