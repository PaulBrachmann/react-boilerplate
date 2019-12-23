import RootStoreModel from "../models";

export { RootStoreModel };

/** The RootStore's instance type. */
export type RootStore = typeof RootStoreModel.Type;

/** The RootStore's snapshot. */
export type RootStoreSnapshot = typeof RootStoreModel.SnapshotType;
