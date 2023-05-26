const sharedConfig = require("tailwind-config/tailwind.config.js");
/**@type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
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
