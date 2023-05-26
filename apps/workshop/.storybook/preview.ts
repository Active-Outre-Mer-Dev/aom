import type { Preview } from "@storybook/react";
import "../src/styles.css";
import { withThemeByDataAttribute } from "@storybook/addon-styling";
// import "ui/styles.css";

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark"
    },
    defaultTheme: "dark",
    attributeName: "data-mode"
  })
];
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#090914"
        },
        {
          name: "light",
          value: "#fff"
        }
      ]
    },
    docs: {
      canvas: {
        className: "bg-neutral-50 dark:bg-neutral-900",
        withToolbar: true
      }
    }
  }
};

export default preview;
