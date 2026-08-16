import { useEffect, useState } from 'react'
import { SITE } from '../data/site'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8Zm0 27.7c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.3-2-2-4.4-2-6.8 0-6.9 5.6-12.5 12.5-12.5s12.5 5.6 12.5 12.5-5.6 12.7-12.5 12.7Zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.8 1.2-1 1.4-.2.2-.4.3-.7.1-.4-.2-1.5-.6-2.9-1.8-1.1-1-1.8-2.2-2-2.5-.2-.4 0-.6.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1.2-2.8c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.4Z"
          />
        </svg>
      </a>

      <button
        className={`back-top ${showTop ? 'show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  )
}
