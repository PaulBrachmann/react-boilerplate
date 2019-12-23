import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

/** Maps an object type to one that may contain dynamically computed properties. */
export type DynamicStyle<T, P> = {
  [K in keyof T]: T[K] | ((props: P) => T[K]);
};

/** A style defining multiple styling rules. */
export type InputStyle = ImageStyle | TextStyle | ViewStyle;
/** A dynamic style. */
export type DynamicInputStyle<P> =
  | DynamicStyle<InputStyle, P>
  | ((props: P) => InputStyle);
/** A static style sheet. */
export type InputStyles<T extends string> = Partial<Record<T, InputStyle>>;
/** A dynamic style sheet. */
export type DynamicInputStyles<T extends string, P> = Partial<
  Record<T, DynamicInputStyle<P>>
>;

/** A processed style ready to be applied. */
export type OutputStyle<T = InputStyle> = StyleProp<T>;
/** A processed static style sheet. */
export type OutputStyles<T extends string> = Record<T, OutputStyle>;
/** A function returning a processed static style sheet. */
export type DynamicOutputStyles<T extends string, P> = (
  props: P,
) => OutputStyles<T>;

export interface IStyleSheet {
  /** The (minimum) width of a hairline stroke. */
  hairlineWidth: number;

  /** Evaluates a dynamic style, resulting in a static style. */
  evaluateStyle<P>(style: DynamicInputStyle<P>, props: P): InputStyle;

  /** Creates a static style sheet. */
  create<T extends string>(styles: InputStyles<T>): OutputStyles<T>;
  /** Creates a dynamic style sheet. */
  createDynamic<T extends string, P = { [key: string]: any }>(
    styles: DynamicInputStyles<T, P>,
  ): DynamicOutputStyles<T, P>;

  /** Transforms the given styles to be used by the className attribute. */
  className(...styles: OutputStyle[]): string | undefined;
  /** Transforms the given styles to be used by the style attribute. */
  style(...styles: OutputStyle[]): any;
}

/** Infers the key type of a DynamicOutputStyles sheet before it is evaluated. */
export type DynamicStyleSheetKeys<
  DynamicStyleSheet extends DynamicOutputStyles<any, any>
> = DynamicStyleSheet extends (...x: any[]) => infer returnType
  ? keyof returnType
  : never;
