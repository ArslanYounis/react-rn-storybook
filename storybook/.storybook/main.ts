import type { StorybookConfig } from '@storybook/react-native-web-vite';
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: ["@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@repo/web": path.resolve(__dirname, "../../packages/web/dist"),
      "@repo/mobile": path.resolve(__dirname, "../../packages/mobile/dist"),
    };

    return config;
  },
};
export default config;