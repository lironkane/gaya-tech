/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amatic': ['Amatic SC', 'cursive'],
        'secular': ['Secular One', 'cursive'],
      },
      colors: {
        primary: "#1a654a",
        "primary-dark": "#0E3B2A", // ירוק כהה יותר (נשאר)
        secondary: "#8B0000", // אדום כהה
        "secondary-dark": "#6B0000", // אדום כהה יותר
        accent: "#A50000", // אדום כהה להדגשות
        background: "#1A1A1A", // רקע כהה (נשאר)
        "background-dark": "#0C3222", // ירוק כהה יותר
        surface: "#282828", // רקע כהה יותר
        "surface-dark": "#124A36", // ירוק כהה (נשאר)
        "text-primary": "#FFFFFF", // טקסט לבן (נשאר)
        "text-secondary": "#A0A0A0", // אפור בהיר
        highlight: "#A3C5B8", // ירוק בהיר (נשאר)
        deep: "#0D2A57", // כחול כהה מאוד (אופציונלי)
      },

      keyframes: {
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        'fade-slide-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'card-pop': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        'glow': {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(255, 169, 232, 0.5)' },
          '50%': { 'box-shadow': '0 0 40px rgba(255, 169, 232, 0.8)' }
        },
        'fade-slide-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'gradient-move': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-slide-in': 'fade-slide-in 0.8s ease-out forwards',
        'card-pop': 'card-pop 0.5s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient': 'gradient-move 15s ease infinite',
        'fade-slide-in': 'fade-slide-in 0.8s ease-out forwards',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(to bottom right, #FFA9E8, #E7F6F3, #2C2C54)',
        'gradient-soft': 'linear-gradient(to bottom, #FFFFFF, #F5F5F5)',
        'gradient-accent': 'linear-gradient(to right, #FFA9E8, #E7F6F3, #535353)'
      }
    },
  },
  plugins: [],
}