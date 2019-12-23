import ThemeModel from "../models/theme";

export type Theme = typeof ThemeModel.Type;

export { default as buildTheme } from "./buildTheme";

export { default } from "./defaultTheme";
