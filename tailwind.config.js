/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // הגדרות פונטים
      fontFamily: {
        amatic: ['Secular One', 'cursive'],
        arimo: ['Arimo', 'cursive'],
      },

      // הגדרות צבעים
      colors: {
        // צבעים ראשיים - בהשראת אפל
        primary: {
          DEFAULT: "#8E8E93",    // ערך דיפולטי
          light: "#C7C7CC",      // אפור בהיר
          dark: "#636366",       // אפור כהה
          100: "#F2F2F7",
          200: "#E5E5EA",
          300: "#D1D1D6",
          400: "#C7C7CC",
          500: "#8E8E93",
          600: "#636366",
          700: "#48484A",
          800: "#3A3A3C",
          900: "#2C2C2E"
        },

        // אקסנטים מתכתיים
        accent: {
          silver: "#D6D6D6",     // כסף מט
          space: "#B4B4B4",      // Space Gray
          titanium: "#A8A8A8",   // טיטניום
          frost: "rgba(255, 255, 255, 0.05)", // אפקט פרוסטד
        },

        // רקעים
        background: "#000000",    // שחור טהור
        "background-alt": "#1C1C1E", // רקע משני

        // שכבות זכוכית
        glass: {
          light: "rgba(255, 255, 255, 0.03)",
          medium: "rgba(255, 255, 255, 0.06)",
          dark: "rgba(28, 28, 30, 0.9)",
        },
      },

      // הגדרות תמונת רקע מותאמות
      backgroundImage: {
        'gradient-pro': 'linear-gradient(170deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
        'gradient-glass': 'linear-gradient(120deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.02))',
        'gradient-metal': 'linear-gradient(to right, #8E8E93, #636366)',
        'gradient-dark': 'linear-gradient(to bottom, #000000, #1C1C1E)',
      },

      // הצללות
      boxShadow: {
        frosted: '0 4px 30px rgba(0, 0, 0, 0.3)',
        pro: '0 8px 32px rgba(0, 0, 0, 0.4)',
        subtle: '0 2px 10px rgba(0, 0, 0, 0.2)',
        'inner-light': 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
      },

      // פילטרים לרקע
      backdropFilter: {
        frosted: 'blur(10px) saturate(100%)',
        pro: 'blur(20px) saturate(180%)',
      },

      // אנימציות
      keyframes: {
        'subtle-float': {
          '0%, 100%': { 
            transform: 'translateY(0px)',
            opacity: 0.8
          },
          '50%': { 
            transform: 'translateY(-5px)',
            opacity: 1
          }
        },
        'fade-in': {
          '0%': { 
            opacity: 0,
            backdropFilter: 'blur(0px)'
          },
          '100%': { 
            opacity: 1,
            backdropFilter: 'blur(10px)'
          }
        },
        'highlight-scan': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      },
      animation: {
        'subtle-float': 'subtle-float 4s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'highlight-scan': 'highlight-scan 8s linear infinite',
      },
    },
  },
  plugins: [],
};

