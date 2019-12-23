import { types } from "mobx-state-tree";

const TypographyModel = types.model({
  primary: types.string,
  secondary: types.string,
});

export default TypographyModel;
