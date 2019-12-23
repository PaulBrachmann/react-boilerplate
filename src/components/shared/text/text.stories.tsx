import { storiesOf } from "@storybook/react";
import * as React from "react";
import { View, ViewStyle } from "react-native";

import { Story, StoryScreen, UseCase } from "../../storybook";
import Text from "./text";

const viewStyle = {
  flex: 1,
};
const viewStyleArray: ViewStyle[] = [viewStyle, { backgroundColor: "#7fff00" }];

storiesOf("Components|Text", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="default" usage="Used for normal body text.">
        <View style={viewStyle}>
          <Text>Hello!</Text>
          <Text style={{ paddingTop: 10 }}>
            Check out{"\n"}
            my{"\n"}
            line height
          </Text>
          <Text style={{ paddingTop: 10 }}>
            The quick brown fox jumped over the slow lazy dog.
          </Text>
          <Text>$123,456,789.00</Text>
        </View>
      </UseCase>
      <UseCase text="bold" usage="Used for bolded body text.">
        <View style={viewStyle}>
          <Text preset="bold">Osnap! I'm puffy.</Text>
        </View>
      </UseCase>
      <UseCase text="header" usage="Used for major section headers.">
        <View style={viewStyle}>
          <Text preset="header">Behold!</Text>
        </View>
      </UseCase>
    </Story>
  ))
  .add("Passing Content", () => (
    <Story>
      <UseCase
        text="text"
        usage="Used when you want to pass a value but don't want to open a child."
      >
        <View style={viewStyle}>
          <Text text="Heyo!" />
        </View>
      </UseCase>
      <UseCase text="tx" usage="Used for looking up i18n keys.">
        <View style={viewStyle}>
          <Text tx="__tests__:key" />
        </View>
      </UseCase>
      <UseCase
        text="children"
        usage="Used like you would normally use a React Native <Text> component."
      >
        <View style={viewStyle}>
          <Text>Passing strings as children.</Text>
        </View>
      </UseCase>
      <UseCase
        text="nested children"
        usage="You can embed them and change styles too."
      >
        <View style={viewStyle}>
          <Text>
            {" "}
            Hello <Text preset="bold">bolded</Text> World.
          </Text>
        </View>
      </UseCase>
    </Story>
  ))
  .add("Styling", () => (
    <Story>
      <UseCase text="Style array" usage="Text with style array">
        <View style={viewStyleArray}>
          <Text>
            {" "}
            Hello <Text preset="bold">bolded</Text> World.
          </Text>
        </View>
      </UseCase>
    </Story>
  ));
