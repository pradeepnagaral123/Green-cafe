import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const pad = (n) => String(n).padStart(2, '0')
const ymd = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

function formatValue(value) {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function DatePicker({ id, value, onChange, placeholder = 'Pick a date' }) {
  const [open, setOpen] = useState(false)
  const today = useMemo(() => ymd(new Date()), [])
  const [view, setView] = useState(() => {
    const base = value ? value.split('-').map(Number) : null
    const now = new Date()
    return { year: base ? base[0] : now.getFullYear(), month: base ? base[1] - 1 : now.getMonth() }
  })
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const toggle = () => {
    if (!open && value) {
      const [y, m] = value.split('-').map(Number)
      setView({ year: y, month: m - 1 })
    }
    setOpen((o) => !o)
  }

  const moveMonth = (delta) => {
    setView((v) => {
      const next = new Date(v.year, v.month + delta, 1)
      return { year: next.getFullYear(), month: next.getMonth() }
    })
  }

  const cells = useMemo(() => {
    const firstDay = new Date(view.year, view.month, 1).getDay()
    const daysInMonth = new Date(view.year, view.month + 1, 0).getDate()
    const blanks = Array.from({ length: firstDay }, (_, i) => i)
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
    return [...blanks.map((b) => ({ blank: true, key: `b${b}` })), ...days.map((d) => ({ day: d, key: d }))]
  }, [view])

  const pick = (day) => {
    onChange(`${view.year}-${pad(view.month + 1)}-${pad(day)}`)
    setOpen(false)
  }

  return (
    <div className="dp" ref={ref}>
      <button
        type="button"
        id={id}
        className={`dp-trigger ${value ? '' : 'is-placeholder'}`}
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <span>{value ? formatValue(value) : placeholder}</span>
        <Icon name="calendar" size={17} />
      </button>

      {open && (
        <div className="dp-pop" role="dialog" aria-label="Choose date">
          <div className="dp-head">
            <button type="button" className="dp-nav" onClick={() => moveMonth(-1)} aria-label="Previous month">
              <Icon name="chevron-left" size={16} />
            </button>
            <span className="dp-month">
              {MONTHS[view.month]} {view.year}
            </span>
            <button type="button" className="dp-nav" onClick={() => moveMonth(1)} aria-label="Next month">
              <Icon name="chevron-right" size={16} />
            </button>
          </div>

          <div className="dp-weekdays">
            {WEEKDAYS.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>

          <div className="dp-grid">
            {cells.map((c) =>
              c.blank ? (
                <span key={c.key} />
              ) : (
                <button
                  key={c.key}
                  type="button"
                  disabled={ymd(new Date(view.year, view.month, c.day)) < today}
                  className={`dp-day ${value === `${view.year}-${pad(view.month + 1)}-${pad(c.day)}` ? 'is-selected' : ''} ${
                    ymd(new Date(view.year, view.month, c.day)) === today ? 'is-today' : ''
                  }`}
                  onClick={() => pick(c.day)}
                >
                  {c.day}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}
