import { inject } from "mobx-react";

import { ThemedProps } from "./";

/** Injects the theme into a component. */
const withTheme = <P extends object>(
  component: React.ComponentType<P & ThemedProps>,
) => (inject("theme")(component) as any) as React.ComponentType<P>;

export default withTheme;
