import { Resource } from "i18next";

export interface I18nConfig {
  defaultNamespace: string;
  fallback: string | string[];
  namespaces: string[];
  resources?: Resource;
}

export interface II18n {
  /** The current direction (ltr/rtl). */
  direction: string;
  /** The current language. */
  locale: string;

  /** Initializes i18n. */
  init(config: I18nConfig): Promise<void>;
  /** Translates the key. */
  translate(key: string): string | null;
  /** Translates the key given additional variables. */
  translateWithVars(key: string, variables: any): string | null;
}
