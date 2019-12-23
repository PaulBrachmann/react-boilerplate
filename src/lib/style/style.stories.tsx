import { color } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";

import StyleSheet from ".";

const staticSheet = StyleSheet.create({
  base: {
    backgroundColor: "#000",
  },
  box: {
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
  },
  text: {
    color: "#fff",
  },
});

const dynamicSheet = StyleSheet.createDynamic({
  text: (props) => ({
    color: props.color,
  }),
});

const DynamicComponent = (props: { color: string }) => {
  const dynamicStyles = dynamicSheet({ color: props.color });

  return (
    <View style={StyleSheet.style(staticSheet.base, staticSheet.box)}>
      <Text style={StyleSheet.style(dynamicStyles.text)}>Test</Text>
    </View>
  );
};

storiesOf("Internal|Style Library", module)
  .add("Style statically", () => (
    <View style={StyleSheet.style(staticSheet.base, staticSheet.box)}>
      <Text style={StyleSheet.style(staticSheet.text)}>Test</Text>
    </View>
  ))
  .add("Style dynamically", () => (
    <DynamicComponent color={color("Color", "#00e2d0")} />
  ));
