import { useEffect } from 'react'
import BookingForm from './BookingForm'

export default function ReservationModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label="Reserve a table"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close reservation popup">
          ✕
        </button>
        <div className="reservation-card modal-card">
          <span className="eyebrow">Reserve a Table</span>
          <h2 className="section-title-left">Book Your Visit</h2>
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
