import { types } from "mobx-state-tree";

/** The RootStore model. */
export const RootStoreModel = types.model("RootStore", {});

/** The RootStore's instance type. */
export type RootStore = typeof RootStoreModel.Type;

/** The RootStore's snapshot. */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;
