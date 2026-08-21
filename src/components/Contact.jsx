import { SITE } from '../data/site'
import Reveal from './Reveal'
import Icon from './Icon'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Find Us</span>
          <h2 className="section-title">Plan Your Visit</h2>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-cards">
            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="map-pin" size={22} />
              </span>
              <div>
                <h4>Visit Us</h4>
                <p>{SITE.address}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="phone" size={22} />
              </span>
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href={`tel:${SITE.phone.replace(' ', '')}`}>{SITE.phone}</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="clock" size={22} />
              </span>
              <div>
                <h4>Opening Hours</h4>
                <p>{SITE.hours}</p>
              </div>
            </div>
            <div className="contact-card">
              <span className="contact-icon">
                <Icon name="message" size={22} />
              </span>
              <div>
                <h4>WhatsApp</h4>
                <p>
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer">
                    Chat with us instantly
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact-map">
            <iframe
              src={SITE.mapEmbed}
              title="Green Gates Café location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
