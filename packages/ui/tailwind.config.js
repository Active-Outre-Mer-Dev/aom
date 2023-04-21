const sharedConfig = require("tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [sharedConfig],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      keyframes: {
        "progress-indeterminate": {
          "0%": {
            transform: "translateX(-100%) scaleX(100%)"
          },
          "50%": {
            transform: "translateX(0%) scaleX(25%)"
          },
          "100%": {
            transform: "translateX(100%) scaleX(100%)"
          }
        }
      },
      animation: {
        "progress-indeterminate": "progress-indeterminate 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite"
      }
    }
  }
};
