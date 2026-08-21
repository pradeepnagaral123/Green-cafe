import { useState } from 'react'
import { SITE } from '../data/site'
import Icon from './Icon'

const initialForm = { name: '', phone: '', date: '', time: '', guests: '2 People' }

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[0-9+\s-]{10,15}$/.test(form.phone.trim()))
      next.phone = 'Enter a valid phone number'
    if (!form.date) next.date = 'Pick a date'
    if (!form.time) next.time = 'Pick a time'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const msg =
      `Table Reservation%0A%0A` +
      `Name: ${form.name}%0A` +
      `Phone: ${form.phone}%0A` +
      `Date: ${form.date}%0A` +
      `Time: ${form.time}%0A` +
      `Guests: ${form.guests}`
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, '_blank')
    setForm(initialForm)
    setErrors({})
  }

  return (
    <form className="booking-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="r-name">Your Name</label>
        <input
          id="r-name"
          type="text"
          placeholder="e.g. Aakash"
          value={form.name}
          onChange={set('name')}
        />
        {errors.name && <small className="field-error">{errors.name}</small>}
      </div>

      <div className="field">
        <label htmlFor="r-phone">Phone Number</label>
        <input
          id="r-phone"
          type="tel"
          placeholder="e.g. 98765 43210"
          value={form.phone}
          onChange={set('phone')}
        />
        {errors.phone && <small className="field-error">{errors.phone}</small>}
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="r-date">Date</label>
          <input id="r-date" type="date" value={form.date} onChange={set('date')} />
          {errors.date && <small className="field-error">{errors.date}</small>}
        </div>
        <div className="field">
          <label htmlFor="r-time">Time</label>
          <input id="r-time" type="time" value={form.time} onChange={set('time')} />
          {errors.time && <small className="field-error">{errors.time}</small>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="r-guests">Guests</label>
        <select id="r-guests" value={form.guests} onChange={set('guests')}>
          <option>1 Person</option>
          <option>2 People</option>
          <option>3 People</option>
          <option>4 People</option>
          <option>5+ People</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        <Icon name="message" size={16} /> Book via WhatsApp
      </button>
      <small className="form-note">
        You&apos;ll be redirected to WhatsApp with your details pre-filled.
      </small>
    </form>
  )
}
