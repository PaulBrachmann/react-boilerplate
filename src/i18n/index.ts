import i18n from "../lib/i18n";

import config from "./config";

/** Initializes i18n using the pre-defined local config. */
export const init = () => i18n.init(config);
export default i18n;
