import { inject, observer } from "mobx-react";

import { Theme } from "../../theme";

export interface ThemeProps {
  theme: Theme;
}

/** Injects the theme into a component. */
const withTheme = <P extends object>(
  component: React.ComponentType<P & ThemeProps>,
) => (inject("theme")(observer(component)) as any) as React.ComponentType<P>;

export default withTheme;
