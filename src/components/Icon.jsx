const PATHS = {
  leaf: (
    <>
      <path d="M5 19C5 9 10 4 19 4c.5 9-4.5 15-14 15Z" />
      <path d="M5 19c4-5 7-9 10-12" />
    </>
  ),
  cloche: (
    <>
      <path d="M12 3.5v1.8" />
      <path d="M6 15.5a6 6 0 1 1 12 0" />
      <path d="M4.5 15.5h15" />
      <path d="M4 19h16" />
    </>
  ),
  lounge: (
    <>
      <path d="M7.5 4h9A2.5 2.5 0 0 1 19 6.5V14H5V6.5A2.5 2.5 0 0 1 7.5 4Z" />
      <path d="M5 14h14" />
      <path d="M7 14v4" />
      <path d="M14.5 14v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2.2" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  message: (
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  ),
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  heart: (
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  ),
  landmark: (
    <>
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  utensils: (
    <>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </>
  ),
  croissant: (
    <>
      <path d="m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z" />
      <path d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83" />
      <path d="M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" />
      <path d="m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2" />
      <path d="M18 16c1.55 0 4 .24 4-2 0-2-2.17-2.5-4-2.5" />
    </>
  ),
  noodles: (
    <>
      <path d="M3.5 12h17a8.5 8.5 0 0 1-17 0Z" />
      <path d="M6.5 9c1.8-1.4 3.2 1.4 5.5 0s3.7 1.4 5.5 0" />
      <path d="M9 6c1.2-.9 2.1.9 3.8 0s2.6.9 3.8 0" />
    </>
  ),
  burger: (
    <>
      <path d="M4 9c0-3 3.6-5 8-5s8 2 8 5H4Z" />
      <path d="M4 13h16" />
      <path d="M4 16c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3H4Z" />
    </>
  ),
  drink: (
    <>
      <path d="M7 3h10l-1.2 17.1a2 2 0 0 1-2 1.9h-3.6a2 2 0 0 1-2-1.9L7 3Z" />
      <path d="M7.6 9.5h8.8" />
      <path d="m13.8 3 2.7-1.6" />
    </>
  ),
  dessert: (
    <>
      <path d="M6.5 12a3.5 3.5 0 0 1 .5-7 5 5 0 0 1 10 0 3.5 3.5 0 0 1 .5 7" />
      <path d="m7 12 1 9.5h8l1-9.5" />
      <path d="M12 3V1.5" />
    </>
  ),
  fries: (
    <>
      <path d="M8.5 3.5 9 9" />
      <path d="M12 2.5V9" />
      <path d="m15.5 3.5-.5 5.5" />
      <path d="M5 9h14l-1 11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 9Z" />
    </>
  ),
  ring: (
    <>
      <circle cx="8.5" cy="14.5" r="5.5" />
      <circle cx="15.5" cy="9.5" r="5.5" />
    </>
  ),
  drumstick: (
    <>
      <circle cx="14.5" cy="9.5" r="6" />
      <path d="m10.3 13.7-4.7 4.7" />
      <circle cx="4.5" cy="19.5" r="1.5" />
    </>
  ),
  toast: (
    <path d="M5 9a3 3 0 0 1 0-6h14a3 3 0 0 1 0 6v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9Z" />
  ),
  tomato: (
    <>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 6V3" />
      <path d="M12 6C10.8 4.2 8.8 3.6 7 4c.9 1.7 2.7 2.4 5 2Z" />
      <path d="M12 6c1.2-1.8 3.2-2.4 5-2-.9 1.7-2.7 2.4-5 2Z" />
    </>
  ),
  cheese: (
    <>
      <path d="M2 17.5h20V14L8.5 6.8A4 4 0 0 0 2 10.2v7.3Z" />
      <circle cx="9" cy="13.5" r="1" />
      <circle cx="15.5" cy="15" r="1.2" />
      <circle cx="12" cy="9.8" r=".9" />
    </>
  ),
  citrus: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
    </>
  ),
  watermelon: (
    <>
      <path d="M3 10a9 9 0 0 0 18 0H3Z" />
      <path d="M6.5 10a5.5 5.5 0 0 0 11 0" />
      <path d="M12 13.2v.01M9.4 12v.01M14.6 12v.01" />
    </>
  ),
  cup: (
    <>
      <path d="M10 2v2" />
      <path d="M14 2v2" />
      <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
      <path d="M6 2v2" />
    </>
  ),
  brownie: (
    <>
      <rect x="5" y="9" width="14" height="11" rx="2" />
      <path d="M5 13.5h14" />
      <path d="M9 6c0-1.2.9-1.8.9-3" />
      <path d="M14.1 6c0-1.2.9-1.8.9-3" />
    </>
  ),
  icecream: (
    <>
      <path d="M7.5 11a4.5 4.5 0 0 1 9 0H7.5Z" />
      <path d="m8.2 11 3.8 10 3.8-10" />
    </>
  ),
  bolt: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  calendar: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
    </>
  ),
  'chevron-left': <path d="m15 18-6-6 6-6" />,
  'chevron-right': <path d="m9 18 6-6-6-6" />,
}

export default function Icon({ name, size = 20, strokeWidth = 1.6 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name] ?? PATHS.cloche}
    </svg>
  )
}
