import { Provider } from "mobx-react";
import React from "react";

import { Navigation } from "../lib";
import Counter from "../screens/counter";
import defaultTheme from "../theme/defaultTheme";
import { RootStore } from "./rootStore";
import { setupRootStore } from "./setupRootStore";

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
      <Provider store={rootStore} {...otherStores}>
        <Navigation.Router>
          <Counter />
        </Navigation.Router>
      </Provider>
    );
  }
}
