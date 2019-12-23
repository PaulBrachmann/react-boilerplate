import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

const styles: StyleSheet.NamedStyles<any> = {
  component: { backgroundColor: "#fff" },
  header: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  root: {
    backgroundColor: "#eee",
  },
  title: { fontWeight: "600", color: "#3d3d3d" },
  titleWrapper: {},
  usage: { color: "#666", fontSize: 10, paddingTop: 0 },
  useCase: {
    color: "#666",
    fontSize: 10,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
  },
  useCaseWrapper: {
    borderTopColor: "#e6e6e6",
    borderTopWidth: 1,
    flexDirection: "row",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
};

export interface UseCaseProps {
  /** The title. */
  text: string;
  /** When should we be using this? */
  usage?: string;
  /** The component use case. */
  children: React.ReactNode;
  /** A style override. Rarely used. */
  style?: ViewStyle;
  /** Don't use any padding because it's important to see the spacing. */
  noPad?: boolean;
  /** Don't use background color because it's important to see the color. */
  noBackground?: boolean;
}

const UseCase: React.StatelessComponent<UseCaseProps> = (props) => {
  const style = {
    ...styles.component,
    ...{ padding: props.noPad ? 0 : 10 },
    ...{
      backgroundColor: props.noBackground
        ? "rgba(0,0,0,0)"
        : styles.component.backgroundColor,
    },
    ...props.style,
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.useCaseWrapper}>
          <Text style={styles.useCase}>Use Case</Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{props.text}</Text>
        </View>
        {props.usage && <Text style={styles.usage}>{props.usage}</Text>}
      </View>
      <View style={style}>{props.children}</View>
    </View>
  );
};

export default UseCase;
