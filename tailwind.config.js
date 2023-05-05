/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          100: "#ffdfe1",
          200: "#ffc0c3",
          300: "#ffa0a6",
          400: "#ed1c24",
          500: "#ff616a",
          600: "#cc4e55",
          700: "#993a40",
          800: "#66272a",
          900: "#331315"
        },
        yellow: {
          100: "#fff4d7",
          200: "#ffe9af",
          300: "#ffde87",
          400: "#e8e512",
          500: "#ffc837",
          600: "#cca02c",
          700: "#997821",
          800: "#665016",
          900: "#33280b"
        },
        dark: {
          100: "#F8F8FF",
          200: "#a0a0a1",
          300: "#717172",
          400: "#363838",
          500: "#121214",
          600: "#0e0e10",
          700: "#0b0b0c",
          800: "#070708",
          900: "#040404"
        },
        green: {
          100: "#25D366"
        },
        purple: {
          100: " #833AB4"
        }
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
        'linear-gradient(132deg, rgba(232,229,18,1) 37%, rgba(235,29,36,1) 100%)',
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};