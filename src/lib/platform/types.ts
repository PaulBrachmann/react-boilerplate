/** Available platform names. */
export type PlatformType = "ios" | "android" | "web" | "electron";

/** Available React renderer names. */
export type ReactType = "dom" | "native";

export interface IPlatform {
  /** The name of the current platform. */
  OS: PlatformType;

  /** The name of the current react renderer */
  React: ReactType;

  /** Returns the value corresponding to the current platform. */
  select<T, K extends PlatformType | "default">(
    specifics: Partial<Record<K, T>>,
  ): T;

  /** Returns the value corresponding to the current react renderer. */
  selectReact<T, K extends PlatformType | "default">(
    specifics: Partial<Record<K, T>>,
  ): T | undefined;
}
