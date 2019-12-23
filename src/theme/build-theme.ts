import { mixColor } from "../lib/color";
import ThemeModel from "../models/theme";
import defaultPalette from "./default-palette";
import defaultTypography from "./default-typography";

/** Returns a new theme instance. */
const buildTheme = (themeConfig: Partial<typeof ThemeModel.Type> = {}) => {
  const { colors = {} as any } = themeConfig;

  const background = colors.background || defaultPalette.offWhite;
  const primary = colors.primary || colors.text || defaultPalette.darkBlue;
  const text = colors.text || defaultPalette.black;

  return ThemeModel.create({
    colors: {
      background,
      dim: colors.dim || defaultPalette.lightGray,
      line: mixColor(background, primary, 0.16).toRgbString(),
      mid: colors.mid || defaultPalette.middleGray,
      primary,
      text,
    },
    typography: themeConfig.typography || defaultTypography,
  });
};

export default buildTheme;
