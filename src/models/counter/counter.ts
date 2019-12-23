import { types } from "mobx-state-tree";

/** A simple counter model. */
const Counter = types
  .model("Counter", {
    value: types.optional(types.integer, 0),
  })
  .actions((self) => ({
    increment(delta: number = 1) {
      self.value += delta;
    },
    decrement(delta: number = 1) {
      self.value -= delta;
    },
  }));

export default Counter;
