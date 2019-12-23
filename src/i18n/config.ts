import { I18nConfig } from "../lib/i18n";

const config: I18nConfig = {
  defaultNamespace: "common",
  fallback: "en",
  namespaces: ["common", "date", "errors", "storybook"],
  resources: {
    en: require("./lang/en.json"),
  },
};

export default config;
