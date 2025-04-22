/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'analog': {
          'cream': '#F5F0E6',
          'orange': '#E6A17C',
          'brown': '#8B7355',
          'dark': '#2C1810',
          'light': '#FDF6E9',
        },
        'tape': {
          'primary': '#D4B996',
          'secondary': '#B8A07E',
          'accent': '#E6A17C',
        }
      },
      fontFamily: {
        'display': ['"Quicksand"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
        'handwriting': ['"Dancing Script"', 'cursive'],
      },
      boxShadow: {
        'cassette': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'tape-wind': 'tapeWind 2s ease-in-out infinite',
        'tape-hiss': 'tapeHiss 0.5s ease-in-out infinite',
      },
      keyframes: {
        tapeWind: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        tapeHiss: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
} 