import { TESTIMONIALS } from '../data/site'
import Reveal from './Reveal'

const CARDS = [...TESTIMONIALS, ...TESTIMONIALS]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Guest Love</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </Reveal>
      </div>

      <div className="t-marquee">
        <div className="t-marquee-track">
          {CARDS.map((t, i) => (
            <article key={`${t.name}-${i}`} className="t-card">
              <div className="t-person">
                <span className="t-avatar">{t.initials}</span>
                <div>
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
              <span className="t-stars" aria-label={`${t.stars ?? 5} star rating`}>
                {'★'.repeat(t.stars ?? 5)}
                {'☆'.repeat(5 - (t.stars ?? 5))}
              </span>
              <p className="t-quote">{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
