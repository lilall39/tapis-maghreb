import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,tsx,mdx}",
    "./src/components/**/*.{js,ts,tsx,mdx}",
    "./src/app/**/*.{js,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#FCFAF7", // off-white for light sections
          100: "#F2F0ED", // warm stone gray background
        },
        charcoal: "#1A1A1A", // charcoal black text
        olive: "#3D4035", // dark olive accent
        "brand-mint": "#A7D7C5",
      },
    },
  },
  plugins: [],
} satisfies Config;
