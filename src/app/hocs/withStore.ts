import { inject, observer } from "mobx-react";

import { RootStore } from "../rootStore";

export interface StoreProps {
  store: RootStore;
}

/** Injects the theme into a component. */
const withTheme = <P extends object>(
  component: React.ComponentType<P & StoreProps>,
) => (inject("store")(observer(component)) as any) as React.ComponentType<P>;

export default withTheme;
