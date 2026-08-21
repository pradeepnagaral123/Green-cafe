import { SITE } from '../data/site'
import Reveal from './Reveal'
import BookingForm from './BookingForm'
import Icon from './Icon'

export default function Reservation() {
  return (
    <section id="reservation" className="reservation">
      <div className="container">
        <div className="reservation-grid">
          <Reveal className="reservation-info">
            <span className="eyebrow">Reserve a Table</span>
            <h2 className="section-title-left">Your Table in the Garden Awaits</h2>
            <p>
              Skip the wait. Book ahead and we&apos;ll have your favourite corner under the
              fairy lights ready when you arrive.
            </p>
            <ul className="reservation-points">
              <li>
                <Icon name="check" size={16} /> Instant confirmation on WhatsApp
              </li>
              <li>
                <Icon name="check" size={16} /> Ideal for dates, families &amp; groups
              </li>
              <li>
                <Icon name="check" size={16} /> Walk-ins welcome, subject to availability
              </li>
            </ul>
            <div className="reservation-call">
              <span>Prefer to call?</span>
              <a href={`tel:${SITE.phone.replace(' ', '')}`} className="btn btn-outline">
                <Icon name="phone" size={16} /> {SITE.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="reservation-card">
            <BookingForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
