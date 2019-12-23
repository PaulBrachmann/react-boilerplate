import { Provider } from "mobx-react";
import React from "react";
import { Text } from "react-native";

import defaultTheme from "../theme/default-theme";
import { RootStore } from "./root-store";
import { setupRootStore } from "./setup-root-store";

interface RootComponentState {
  rootStore?: RootStore;
}

/** The root component. */
export default class RootComponent extends React.Component<
  {},
  RootComponentState
> {
  protected isCurrentlyMounted = false;

  public componentDidMount() {
    this.isCurrentlyMounted = true;

    // Basically, we want to cancel the promise if the component has unmounted before it resolves
    setupRootStore().then((rootStore) => {
      if (this.isCurrentlyMounted) {
        this.setState({
          rootStore,
        });
      }
    });
  }

  public componentWillUnmount() {
    this.isCurrentlyMounted = false;
  }

  public render() {
    const rootStore = this.state && this.state.rootStore;

    if (!rootStore) {
      // TODO: Show splash screen
      return null;
    }

    /** All other stores. */
    const otherStores = {
      theme: defaultTheme,
    };

    return (
      <Provider rootStore={rootStore} {...otherStores}>
        <Text>Test.</Text>
      </Provider>
    );
  }
}
