const sharedConfig = require("tailwind-config/tailwind.config.js");
/** @type {import('tailwindcss').Config} */

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx,mdx}`, "./node_modules/@aomdev/ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class", '[data-mode="dark"]'],

  theme: {
    extend: {
      fontFamily: { heading: ["Familjen Grotesk", "Segoe UI"], sans: ["Inter", "Segoe UI"] }
    }
  }
};
