import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#183F62",
        secondary: "#FFA500",
        tertiary: "#F2B203",
        light: "#606060",
        light1: "#6D6D6D",
        dark: "#363636",
        normal: "#393939",
        bg2: "#F5F6F4",
      },
    },
  },
  plugins: [],
} satisfies Config;
