import tc from "tinycolor2";

export default tc;

/** Interpolates between 2 values using the given 0 to 1 mix factor. */
export const interpolate = (value1: number, value2: number, factor: number) =>
  value1 * (1 - factor) + value2 * factor;

/** Mixes 2 solid colors. */
export const mixColor = (
  baseColor: tc.ColorInput,
  overlayColor: tc.ColorInput,
  alpha: number = 0.5,
) => {
  const baseRgb = tc(baseColor).toRgb();
  const overlayRgb = tc(overlayColor).toRgb();
  return tc({
    b: interpolate(baseRgb.b, overlayRgb.b, alpha),
    g: interpolate(baseRgb.g, overlayRgb.g, alpha),
    r: interpolate(baseRgb.r, overlayRgb.r, alpha),
  });
};
