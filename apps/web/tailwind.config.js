// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");
/**@type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx,mdx}`, "./node_modules/@aom/ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-sans)", "Segoe UI"],
        heading: ["var(--font-heading)"]
      }
    }
  }
};
