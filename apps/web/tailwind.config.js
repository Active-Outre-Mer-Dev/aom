// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");
/**@type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          sans: ["--font-sans", "Segoe UI"],
          heading: ["--font-heading"]
        }
      }
    }
  }
};
