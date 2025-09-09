import type { Preview } from "@storybook/react-native-web-vite";
import "@repo/web/src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    platform: {
      name: "Platform",
      description: "Switch between mobile and web components",
      defaultValue: "web",
      toolbar: {
        icon: "browser",
        items: [
          { value: "web", title: "Web" },
          { value: "mobile", title: "Mobile" },
        ],
      },
    },
  },
};

export default preview;
