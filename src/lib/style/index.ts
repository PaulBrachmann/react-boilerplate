import {
  createDynamicStyleSheet,
  createStyleSheet,
  evaluateDynamicStyle,
  hairlineWidth,
} from "./style";
import { IStyleSheet } from "./types";

export * from "./types";

const StyleSheet: IStyleSheet = {
  className: () => undefined,
  create: createStyleSheet,
  createDynamic: createDynamicStyleSheet,
  evaluateStyle: evaluateDynamicStyle,
  hairlineWidth,
  style: (...styles) => styles,
};
export default StyleSheet;
