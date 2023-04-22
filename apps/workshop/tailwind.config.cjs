const sharedConfig = require("tailwind-config/tailwind.config.js");
/** @type {import('tailwindcss').Config} */

module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  presets: [sharedConfig],
  content: [`src/**/*.{js,ts,jsx,tsx,mdx}`],
  darkMode: ["class", '[data-mode="dark"]']
};
