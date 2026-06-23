import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF5742",
        dark: "#313131",
        surface: "#F5F5F5",
        muted: "#6B7280",
        border: "#E5E5E5",
      },
      fontFamily: {
        display: ['var(--font-barlow)', '"Barlow Condensed"', "sans-serif"],
        body: ['var(--font-inter)', "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
