import type { StorybookConfig } from "@storybook/nextjs";
//import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  /* webpackFinal: async(config:any) => {
    config.resolve.alias["@"] = path.resolve(__dirname,"../src");
     config.resolve.alias["@/components"] = path.resolve(__dirname, "../src/components");
    
  } ,*/
  staticDirs: ["..\\public"],
};
export default config;
