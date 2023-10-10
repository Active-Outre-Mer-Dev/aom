import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@aomdev/ui/dist/**/*.{js,ts,jsx,tsx,mjs,mts}",
    "./slices/**/*.{js,ts,jsx,tsx,}"
  ],
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
          //@ts-expect-error
          from: { opacity: 0 },
          //@ts-expect-error
          to: { opacity: 1 }
        },
        "content-show": {
          //@ts-expect-error
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          //@ts-expect-error
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
    },
    fontFamily: {
      sans: "var(--font-sans)"
    },
    colors: {
      neutral: {
        50: "#e9f3fd",
        100: "#d0d8e2",
        200: "#b5bec9",
        300: "#99a4b2",
        400: "#7d8a9b",
        500: "#647082",
        600: "#4d5766",
        700: "#363e4a",
        800: "#1f252f",
        900: "#070c17"
      },
      primary: {
        50: "#e3eeff",
        100: "#b6cdfe",
        200: "#88abf7",
        300: "#5b8af1",
        400: "#2d69ec",
        500: "#134fd2",
        600: "#0b3da4",
        700: "#052c77",
        800: "#001a4a",
        900: "#00091e"
      },
      secondary: {
        50: "#fff8da",
        100: "#ffebad",
        200: "#ffde7d",
        300: "#ffd04b",
        400: "#ffc31a",
        500: "#e6aa00",
        600: "#b38400",
        700: "#805e00",
        800: "#4e3900",
        900: "#1d1300"
      },
      tertiary: {
        50: "#dcfffd",
        100: "#b3faf4",
        200: "#87f5eb",
        300: "#5bf1e3",
        400: "#33ecdb",
        500: "#1fd3c2",
        600: "#0ea497",
        700: "#00756c",
        800: "#004741",
        900: "#001917"
      },
      success: {
        50: "#dbfdff",
        100: "#affffd",
        200: "#80fff6",
        300: "#51ffec",
        400: "#2cfedf",
        500: "#1de5bd",
        600: "#0db38e",
        700: "#008061",
        800: "#004d3f",
        900: "#001c16"
      },
      error: {
        50: "#ffe5e8",
        100: "#fbb8bf",
        200: "#f38b96",
        300: "#ed5f6d",
        400: "#e73344",
        500: "#cd1a2a",
        600: "#a01220",
        700: "#740b17",
        800: "#47050c",
        900: "#1e0002"
      },
      warn: {
        50: "#fff4dd",
        100: "#ffdbb0",
        200: "#ffc07f",
        300: "#ffa14d",
        400: "#fe7f1c",
        500: "#e55d02",
        600: "#b34200",
        700: "#813700",
        800: "#4f2500",
        900: "#200c00"
      },
      gray: {
        50: "#e4f3f6",
        100: "#d0d9e0",
        200: "#b8c1c6",
        300: "#9da8ad",
        400: "#849095",
        500: "#6a777b",
        600: "#525c61",
        700: "#384145",
        800: "#1d262b",
        900: "#020917"
      },
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white
    }
  },
  plugins: [typography()],
  darkMode: "class"
} satisfies Config;
export default config;
