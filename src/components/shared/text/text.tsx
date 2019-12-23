import React from "react";
import { Text as RNText } from "react-native";

import i18n from "../../../i18n";
import { StyleSheet } from "../../../lib";
import { ThemedProps, withTheme } from "../../../theme";
import presets from "./text.presets";
import TextProps from "./text.props";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const Text: React.StatelessComponent<TextProps & ThemedProps> = (props) => {
  const {
    preset = "default",
    theme,
    tx,
    text,
    children,
    style: styleOverride,
    ...rest
  } = props;

  // Figure out which content to use
  const i18nText = tx && i18n.translate(tx);
  const content = i18nText || text || children;

  // Assemble the style
  const presetsSheet = presets(props);
  const styles = [presetsSheet[preset] || presetsSheet.default, styleOverride];

  return (
    <RNText {...rest} style={StyleSheet.style(styles)}>
      {content}
    </RNText>
  );
};

export default withTheme(Text);
