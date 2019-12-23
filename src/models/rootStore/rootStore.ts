import { types } from "mobx-state-tree";
import Counter from "../counter";

/** The RootStore model. */
const RootStore = types.model("RootStore", {
  counter: types.optional(Counter, () => Counter.create()),
});

export default RootStore;
