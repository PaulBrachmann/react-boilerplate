import ThemeModel from "../models/theme";

export type Theme = typeof ThemeModel.Type;
export interface ThemedProps {
  theme: Theme;
}

export { default as withTheme } from "./with-theme";
