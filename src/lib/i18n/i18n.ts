import i18next from "i18next";

import { I18nConfig, II18n } from "./types";

const i18n: II18n = {
  get direction() {
    return i18next.dir().toLowerCase();
  },

  init(config: I18nConfig) {
    return new Promise((resolve, reject) => {
      i18next
        .use(require("i18next-browser-languagedetector"))
        // TODO: Translation loader
        .init(
          {
            defaultNS: config.defaultNamespace,
            fallbackLng: config.fallback,
            ns: config.namespaces,
            resources: config.resources,
          },
          (error: Error) => {
            if (error) return reject(error);
            resolve();
          },
        );
    });
  },

  get locale() {
    return i18next.language;
  },

  translate(key: string) {
    return key ? i18next.t(key) : null;
  },

  translateWithVars(key: string, variables: any) {
    return key ? i18next.t(key, variables) : null;
  },
};

export default i18n;
