/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#f6f8fc", // page background
        secondary: "#5a607a", // muted text
        tertiary: "#ffffff", // cards, inputs
        "black-100": "#eaeef7", // section panels
        "black-200": "#ffffff", // cards on panels
        ink: "#12132a", // headings
        "ink-soft": "#3a3f5c", // body text
        accent: "#2563eb",
        "accent-dark": "#1d4ed8",
      },
      boxShadow: {
        card: "0px 20px 50px -20px rgba(37, 99, 235, 0.25)",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-28px)" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(60% 50% at 85% 10%, rgba(37,99,235,0.14) 0%, transparent 70%), radial-gradient(50% 45% at 10% 90%, rgba(14,165,233,0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
