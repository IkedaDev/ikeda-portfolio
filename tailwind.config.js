/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'ike-yellow': '#F9EF05',
      },
      fontFamily: {
        base: 'var(--font-base)',
      },
      fontSize:{
        '2.4rem':'2.4rem',
        '2rem':'2rem',
      },
      padding:{
        
      },
    },
  },
  plugins: [],
}

