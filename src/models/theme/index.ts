import { types } from "mobx-state-tree";

import ColorsModel from "./colors";
import TypographyModel from "./typography";

const ThemeModel = types.model({
  colors: ColorsModel,
  typography: TypographyModel,
});

export default ThemeModel;
