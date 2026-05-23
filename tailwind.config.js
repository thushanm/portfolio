/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          ruby: "#c084fc", // Let's use rose/crimson/violet colors
          crimson: "#e11d48",
          violet: "#7c3aed",
          indigo: "#4f46e5",
          accent: "#f43f5e",
        }
      },
      boxShadow: {
        "glow-ruby": "0 0 25px rgba(225, 29, 72, 0.15)",
        "glow-violet": "0 0 25px rgba(124, 58, 237, 0.15)",
        "glow-accent": "0 0 25px rgba(244, 63, 94, 0.2)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("preline/plugin")],
};
