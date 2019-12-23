import { Provider } from "mobx-react";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { init } from "../../i18n";
import defaultTheme from "../../theme/default-theme";

const styles: StyleSheet.NamedStyles<any> = {
  root: {
    flex: 1,
  },
};

export default class Story extends React.Component<{}, { ready: boolean }> {
  protected isCurrentlyMounted = false;

  public async componentDidMount() {
    this.isCurrentlyMounted = true;

    await init();
    if (this.isCurrentlyMounted) this.setState({ ready: true });
  }

  public componentWillUnmount() {
    this.isCurrentlyMounted = false;
  }

  public render() {
    if (!this.state || !this.state.ready) return null;

    return (
      <Provider theme={defaultTheme}>
        <View style={styles.root}>
          <ScrollView>{this.props.children}</ScrollView>
        </View>
      </Provider>
    );
  }
}
