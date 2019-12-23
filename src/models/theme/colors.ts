import { types } from "mobx-state-tree";

const ColorsModel = types.model({
  /** The screen background. */
  background: types.string,
  /** Secondary information. */
  dim: types.string,
  /** A subtle color for borders and lines. */
  line: types.string,
  /** A middle gray. */
  mid: types.string,
  /** The main tinting color. */
  primary: types.string,
  /** The default color of text. */
  text: types.string,
});

export default ColorsModel;
