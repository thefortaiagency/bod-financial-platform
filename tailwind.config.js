/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',     // Navy Blue for text
        secondary: '#00B5A3',   // BOD Teal (Pantone 299 equivalent)
        accent: '#F39C12',      // Gold accent
        'bod-teal': '#00B5A3',  // BOD Brand Teal
        'bod-navy': '#002147',  // Deep Navy
        'bod-gold': '#F39C12',  // Professional Gold
        'bod-gray': '#2C3E50',  // Professional Gray (higher contrast)
        'bod-light': '#F8F9FA', // Light background
        'bod-dark': '#1A252F', // Dark backgrounds
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}