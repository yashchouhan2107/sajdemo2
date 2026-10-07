/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saj: {
          bg: '#FAF6F0',          // Primary soft cream background
          'card-bg': '#F5EFE6',     // Card inner soft tan
          espresso: '#2C1A11',     // Dark warm brown primary text & CTA buttons
          'espresso-light': '#3D2517', // Hover state
          'brown-muted': '#6E5C52', // Secondary muted body text
          sage: '#E2ECE3',         // Soft sage green for cards
          'sage-dark': '#49634C',
          tan: '#EFE5D8',          // Soft tan for cards
          'tan-dark': '#7A6248',
          border: '#E8DEC8',       // Subtle border color
          badge: '#EFE7DA',        // Unselected badge background
          accent: '#C88D53',       // Subtle warm gold / amber
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arch': '120px 120px 24px 24px',
        'arch-sm': '60px 60px 16px 16px',
        'arch-lg': '200px 200px 32px 32px',
      }
    },
  },
  plugins: [],
}
