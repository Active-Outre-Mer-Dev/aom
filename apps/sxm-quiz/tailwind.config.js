const sharedConfig = require("tailwind-config/tailwind.config.js");
/**@type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx,mdx}`, "./node_modules/@aomdev/ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-sans)", "Segoe UI"],
        heading: ["var(--font-heading)"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
