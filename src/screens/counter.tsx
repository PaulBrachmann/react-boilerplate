import React from "react";
import { TouchableOpacity } from "react-native";

import { StoreProps, ThemeProps, withStore, withTheme } from "../app";
import { Text } from "../components";
import { StyleSheet } from "../lib";

// tslint:disable-next-line no-empty-interface
export interface CounterProps {}

const sheet = StyleSheet.createDynamic({
  container: {
    alignItems: "center",
    backgroundColor: (props: ThemeProps) => props.theme.colors.background,
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "100vh",
  },
});

class Counter extends React.PureComponent<
  CounterProps & StoreProps & ThemeProps
> {
  public render() {
    const { counter } = this.props.store;
    const styles = sheet(this.props);
    console.log(styles);

    return (
      <TouchableOpacity onPress={this.increment} style={styles.container}>
        <Text preset="header">{counter.value}</Text>
      </TouchableOpacity>
    );
  }

  protected increment = () => {
    this.props.store.counter.increment();
  };
}

export default withTheme(withStore(Counter));
