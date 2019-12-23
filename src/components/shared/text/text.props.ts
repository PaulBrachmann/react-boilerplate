import { TextStyle } from "react-native";

import { BasicProps } from "../types";
import { TextPresets } from "./text.presets";

export default interface TextProps extends BasicProps<TextStyle> {
  /** The key that is looked up via i18n. */
  tx?: string;

  /**
   * The text to display if not using `tx` or nested components.
   * It takes precedence over children, but not `tx`.
   */
  text?: string;

  /** The name of one of the text presets. */
  preset?: TextPresets;
}
