import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".bg-bg": { backgroundColor: "var(--color-bg)" },
        ".text-text-primary": { color: "var(--color-text-primary)" },
        ".text-text-secondary": { color: "var(--color-text-secondary)" },
        ".bg-primary": { backgroundColor: "var(--color-primary)" },
        ".bg-secondary": { backgroundColor: "var(--color-secondary)" },
        ".bg-accent": { backgroundColor: "var(--color-accent)" },
        ".text-primary": { color: "var(--color-primary)" },
        ".text-secondary": { color: "var(--color-secondary)" },
        ".text-accent": { color: "var(--color-accent)" },
      });
    }),
  ],
};

export default config;
