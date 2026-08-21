import Reveal from './Reveal'
import { FEATURES } from '../data/site'
import Icon from './Icon'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <div className="about-img about-img-main">
              <img src="/images/entrance1.jpg" alt="Portuguese entrance of Green Gates Café" loading="lazy" />
            </div>
            <div className="about-img about-img-small">
              <img src="/images/ambience1.jpg" alt="Garden walkway" loading="lazy" />
            </div>
            <div className="about-badge">
              <strong>Est. Heritage</strong>
              <span>Portuguese Bungalow</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="about-text">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title-left">Old-World Charm Meets Modern Café Culture</h2>
            <p className="lead">
              Nestled inside a heritage Portuguese bungalow, Green Gates blends old-world
              architecture with modern café culture. Enjoy lush garden seating, handcrafted
              beverages and unforgettable evenings.
            </p>
            <p>
              Every detail — from the arched walkways and courtyard lights to the plates on your
              table — is designed to slow time down. Come for the coffee, stay for the evenings.
            </p>

            <div className="features">
              {FEATURES.map((f) => (
                <div key={f.title} className="feature">
                  <span className="feature-icon">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#gallery" className="btn btn-outline">
              See the Ambience
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
