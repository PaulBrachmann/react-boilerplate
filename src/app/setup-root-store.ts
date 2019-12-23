import { RootStore, RootStoreModel } from "./root-store";

/** The key we'll be saving our state as within async storage. */
export const ROOT_STATE_STORAGE_KEY = "root";

/** Sets up the root state. */
export async function setupRootStore() {
  let rootStore: RootStore;

  const env = await createEnvironment();
  rootStore = RootStoreModel.create({}, env);

  return rootStore;
}

/**
 * Sets up the environment that all the models will be sharing.
 *
 * The environment includes other functions that will be picked from some
 * of the models that get created later. This is how we loosly couple things
 * like events between models.
 */
export async function createEnvironment() {
  // allow each service to setup
  // ...

  return {};
}
