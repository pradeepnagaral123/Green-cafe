import Reveal from './Reveal'
import { SPECIALTIES } from '../data/site'
import Icon from './Icon'

export default function Specialties() {
  return (
    <section id="specialties" className="specialties">
      <div className="container">
        <div className="specialties-grid">
          <Reveal className="specialties-head">
            <span className="specialties-eyebrow">
              <Icon name="leaf" size={14} /> Our Specialties
            </span>
            <h2 className="specialties-title">
              Handcrafted with Love,
              <br />
              <em>Served with Soul</em>
            </h2>
            <p className="specialties-lead">
              A small menu, made with big intentions. Each plate is built from scratch
              in our garden kitchen — and served in the open evening air.
            </p>
            <a href="#menu" className="btn btn-ink">
              View the Full Menu →
            </a>
          </Reveal>

          <div className="specialties-cards">
            {SPECIALTIES.map((s, i) => (
              <Reveal key={s.title} delay={i * 120} className="specialty-card">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="specialty-card-body">
                  <span className="specialty-card-tag">{s.tag}</span>
                  <h3 className="specialty-card-title">{s.title}</h3>
                  <p className="specialty-card-text">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
