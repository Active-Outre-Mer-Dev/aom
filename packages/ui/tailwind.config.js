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
        },
        "overlay-show": {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        "content-show": {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
        }
      },
      animation: {
        "progress-indeterminate": "progress-indeterminate 2s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite",
        "overlay-show": "overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "content-show": "content-show 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        "overlay-hide": "overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1) reverse",
        "content-hide": "content-show 150ms cubic-bezier(0.16, 1, 0.3, 1) reverse"
      }
    }
  }
};
