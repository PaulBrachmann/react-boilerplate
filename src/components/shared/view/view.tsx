import React from "react";
import { View as RNView } from "react-native";

import { StyleSheet } from "../../../lib";
import ViewProps from "./view.props";

/**
 * A general purpose container.
 *
 * This component is a HOC over the built-in React (Native) one.
 */
const View: React.StatelessComponent<ViewProps> = (props) => {
  const { children, style, ...rest } = props;

  return (
    <RNView {...rest} style={StyleSheet.style(style)}>
      {children}
    </RNView>
  );
};

export default View;
