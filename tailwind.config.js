/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            'subtle-bounce': 'subtle-bounce 2s ease-in-out infinite',
        },
        keyframes: {
            'subtle-bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-2%)' },
            }
        }
    },
  },
  plugins: [],
}

