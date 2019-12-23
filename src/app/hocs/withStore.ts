import { inject } from "mobx-react";

import { RootStore } from "../rootStore";

export interface StoreProps {
  store: RootStore;
}

/** Injects the theme into a component. */
const withTheme = <P extends object>(
  component: React.ComponentType<P & StoreProps>,
) => (inject("store")(component) as any) as React.ComponentType<P>;

export default withTheme;
