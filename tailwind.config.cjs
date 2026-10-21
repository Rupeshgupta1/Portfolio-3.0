/** @type {import('tailwindcss').Config} */

// Colours are CSS variables (see index.css) so the whole site can switch theme.
// "<alpha-value>" keeps opacity utilities such as bg-accent/20 working.
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: token("primary"), // page background
        secondary: token("secondary"), // muted text
        tertiary: token("tertiary"), // cards, inputs
        line: token("line"), // borders, dividers
        ink: token("ink"), // headings
        "ink-soft": token("ink-soft"), // body text
        accent: token("accent"),
        "accent-dark": token("accent-dark"),
      },
      boxShadow: {
        card: "0px 20px 50px -20px rgb(var(--accent) / 0.25)",
        "card-hover": "0px 30px 60px -20px rgb(var(--accent) / 0.45)",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-28px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 9s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        "gradient-shift": "gradient-shift 6s linear infinite",
        "scroll-dot": "scroll-dot 1.8s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(60% 50% at 85% 10%, rgb(var(--accent) / 0.14) 0%, transparent 70%), radial-gradient(50% 45% at 10% 90%, rgb(var(--g3) / 0.12) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
