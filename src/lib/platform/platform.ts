import { IPlatform, PlatformType, ReactType } from "./types";

export const OS = (process.versions as any).electron ? "electron" : "web";

export const React = "dom";

export const select = <T, K extends PlatformType | "default">(
  specifics: Partial<Record<K, T>>,
) =>
  specifics.hasOwnProperty(OS)
    ? (specifics as any)[OS]
    : (specifics as any).default;

export const selectReact = <T, K extends ReactType | "default">(
  specifics: Partial<Record<K, T>>,
) =>
  specifics.hasOwnProperty("dom")
    ? (specifics as any).dom
    : (specifics as any).default;

const Platform: IPlatform = {
  OS,
  React,
  select,
  selectReact,
};
export default Platform;
