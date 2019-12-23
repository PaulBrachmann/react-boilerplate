import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";

import { Platform } from "../../lib";

const styles: StyleSheet.NamedStyles<any> = {
  root: {
    backgroundColor: "#f0f0f0",
    flex: 1,
  },
};

const behavior = Platform.OS === "ios" ? "padding" : undefined;
const StoryScreen: React.StatelessComponent = (props) => (
  <KeyboardAvoidingView
    style={styles.root}
    behavior={behavior}
    keyboardVerticalOffset={50}
  >
    {props.children}
  </KeyboardAvoidingView>
);

export default StoryScreen;
