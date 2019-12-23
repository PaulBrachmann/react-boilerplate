import { DynamicStyleSheetKeys, StyleSheet } from "../../../lib";
import { ThemedProps } from "../../../theme";

/** All text will start off looking like this. */
const BASE = {
  color: (props: ThemedProps) => props.theme.colors.text,
  fontFamily: (props: ThemedProps) => props.theme.typography.primary,
  fontSize: 15,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
const presets = StyleSheet.createDynamic({
  /** The default text styles. */
  default: BASE,

  /** A bold version of the default text. */
  bold: { ...BASE, fontWeight: "bold" },

  /** Large headers. */
  header: { ...BASE, fontSize: 24, fontWeight: "bold" },

  /** Field labels that appear on forms above the inputs. */
  fieldLabel: {
    ...BASE,
    color: (props: ThemedProps) => props.theme.colors.dim,
    fontSize: 13,
  },

  /** A smaller piece of secondard information. */
  secondary: {
    ...BASE,
    color: (props: ThemedProps) => props.theme.colors.dim,
    fontSize: 9,
  },
});

export default presets;

/** A list of preset names. */
export type TextPresets = DynamicStyleSheetKeys<typeof presets>;
