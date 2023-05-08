const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      neutral: {
        50: "#f0eefa",
        100: "#d2d0e2",
        200: "#b4b0cc",
        300: "#9591b8",
        400: "#7772a3",
        500: "#5f598a",
        600: "#49446b",
        700: "#34314d",
        800: "#1f1d2f",
        900: "#090914"
      },
      primary: {
        50: "#f1ecff",
        100: "#d4c7ec",
        200: "#b6a4dc",
        300: "#997fcd",
        400: "#7c5abd",
        500: "#6341a4",
        600: "#4d3280",
        700: "#37245c",
        800: "#211539",
        900: "#0d0518"
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
        50: "#ffe9dd",
        100: "#ffc3af",
        200: "#ff9d7e",
        300: "#ff774c",
        400: "#ff511a",
        500: "#e63700",
        600: "#b42a00",
        700: "#811d00",
        800: "#4f0f00",
        900: "#210200"
      },
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white
    }
  },
  plugins: []
};
