export const tailwindConfig = `import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@aomdev/ui/**/*.{js,ts,jsx,tsx}"
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
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "content-show": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" }
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
    colors: {
      neutral: {
        50: "#e8eefe",
        100: "#cbd2e8",
        200: "#acb7d3",
        300: "#8b9bc0",
        400: "#6b81ae",
        500: "#516994",
        600: "#3f5474",
        700: "#2c3d53",
        800: "#182334",
        900: "#040a17"
      },
      primary: {
        50: "#e7f0ff",
        100: "#c1d3f0",
        200: "#9ab6e4",
        300: "#7399d9",
        400: "#4c7cce",
        500: "#3462b5",
        600: "#284c8e",
        700: "#1b3765",
        800: "#0f213e",
        900: "#020b19"
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
        50: "#e9efff",
        100: "#c5cef0",
        200: "#9fade0",
        300: "#7a8cd2",
        400: "#556bc4",
        500: "#3b51aa",
        600: "#2d3f85",
        700: "#1f2d60",
        800: "#111b3c",
        900: "#03091a"
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
};
export default config;
`;
