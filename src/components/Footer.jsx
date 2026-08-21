import { NAV_LINKS, SITE } from '../data/site'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="brand-icon">
            <Icon name="leaf" size={26} />
          </span>
          <h3>Green Gates Café</h3>
          <p>
            Belagavi&apos;s iconic garden café — a heritage Portuguese bungalow serving
            handcrafted food, brews and unforgettable evenings.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>{SITE.address}</p>
          <p className="footer-line">
            <a href={`tel:${SITE.phone.replace(' ', '')}`}>
              <Icon name="phone" size={14} /> {SITE.phone}
            </a>
          </p>
          <p className="footer-line">
            <Icon name="clock" size={14} /> {SITE.hours}
          </p>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          <div className="footer-socials">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Icon name="instagram" size={20} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Icon name="message" size={20} />
            </a>
            <a href="https://maps.google.com/?q=Green%20Gates%20Cafe%20Belagavi" target="_blank" rel="noreferrer" aria-label="Google Maps">
              <Icon name="map-pin" size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="footer-made">
            Made with <Icon name="heart" size={13} /> in Belagavi
          </p>
        </div>
      </div>
    </footer>
  )
}
