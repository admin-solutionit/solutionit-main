/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary actions / nav */
        navy: "#0073D6",
        "navy-hover": "#006bbf",

        /* Headings + dark text primary */
        "deep-blue": "#041E42",

        /* Background neutrals (previously beige/white) */
        beige: "#F2F2F2",

        /* Spark accent */
        "spark-yellow": "#FFC220",
        "spark-yellow-light": "#FCEAB3",

        /* Oracle red accent (keep as spec) */
        red: "#C62828",

        /* Neutral text + borders */
        "grey-1": "#74767C",
        "grey-2": "#D6D6D6",
      },
      fontFamily: {
        sans: ["var(--font-nunito-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1366px",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
