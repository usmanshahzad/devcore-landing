export default function Icon({ name, ...props }) {
  const paths = {
    code: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20z" />
      </>
    ),
    smartphone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <line x1="11" y1="18" x2="13" y2="18" />
      </>
    ),
    bag: (
      <>
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </>
    ),
    pen: (
      <>
        <path d="m12 19 7-7 3 3-7 7-3-3z" />
        <path d="m18 13-1.5-7.5L9 4 2 11l7 7 2.5-1.5" />
        <circle cx="11" cy="11" r="2" />
      </>
    ),
    cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h.79a4.5 4.5 0 1 1 0 9Z" />,
    cpu: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="10" y="10" width="4" height="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
        <line x1="10" y1="20" x2="10" y2="23" />
        <line x1="14" y1="20" x2="14" y2="23" />
        <line x1="20" y1="10" x2="23" y2="10" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="10" x2="4" y2="10" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14a8 3 0 0 0 16 0V5" />
        <path d="M4 12a8 3 0 0 0 16 0" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.4-3.4a6 6 0 0 1-7.7 7.7l-6.6 6.6a2 2 0 0 1-2.9-2.9l6.6-6.6a6 6 0 0 1 7.7-7.7Z" />
    ),
    arrowRight: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3 0 6-2 6-5.5A4.3 4.3 0 0 0 20 6a4 4 0 0 0-.1-3s-1 0-3 1.5a13 13 0 0 0-6 0C9 3 8 3 8 3a4 4 0 0 0-.1 3 4.3 4.3 0 0 0-1.2 3c0 3.5 3 5.5 6 5.5a3.4 3.4 0 0 0-1 2.6V22" />
    ),
    facebook: (
      <path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1Z" />
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
