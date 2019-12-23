import { StyleSheet as RNStyleSheet } from "react-native";

import {
  DynamicInputStyle,
  DynamicInputStyles,
  DynamicStyle,
  InputStyle,
  InputStyles,
  OutputStyles,
} from "./types";

export const hairlineWidth = RNStyleSheet.hairlineWidth;

/** Extracts dynamic/static styles and returns them separately. */
export const splitDynamicStyles = <T extends string, P>(
  styles: DynamicInputStyles<T, P>,
): { dynamic: DynamicInputStyles<T, P>; static: InputStyles<T> } => {
  const dynamicStyles: DynamicInputStyles<T, P> = {};
  const staticStyles: InputStyles<T> = {};

  (Object.keys(styles) as T[]).forEach((key) => {
    const style = styles[key];
    if (typeof style === "function") {
      dynamicStyles[key] = style;
    } else {
      if (
        typeof style === "object" &&
        style !== null &&
        !Array.isArray(style)
      ) {
        const extracted = splitDynamicStyles(style as any);
        if (Object.keys(extracted.dynamic).length !== 0) {
          dynamicStyles[key] = extracted.dynamic as DynamicStyle<InputStyle, P>;
        }
        staticStyles[key] = extracted.static as InputStyle;
      } else {
        staticStyles[key] = style as InputStyle;
      }
    }
  });

  return { dynamic: dynamicStyles, static: staticStyles };
};

export const evaluateDynamicStyle = <P>(
  style: DynamicInputStyle<P>,
  props: P,
): InputStyle => {
  let evaluatedStyle = style;

  if (typeof evaluatedStyle === "function") {
    evaluatedStyle = evaluatedStyle(props);
  }

  Object.keys(evaluatedStyle).forEach((key) => {
    // We have to type `evaluatedStyle` as `any` here because TS is not (yet)
    // capable of correctly handling the key type
    if (typeof (evaluatedStyle as any)[key] === "function") {
      (evaluatedStyle as any)[key] = (evaluatedStyle as any)[key](props);
    }
  });

  return evaluatedStyle as InputStyle;
};

export const createStyleSheet = <T extends string>(styles: InputStyles<T>) =>
  // We have to type `styles` as `any` here as react-native's typings of
  // `StyleSheet.create` will not accept undefined styles
  RNStyleSheet.create(
    (styles as any) as RNStyleSheet.NamedStyles<T>,
  ) as OutputStyles<T>;

export const createDynamicStyleSheet = <
  T extends string,
  P = { [key: string]: any }
>(
  styles: DynamicInputStyles<T, P>,
) => {
  const extracted = splitDynamicStyles(styles);
  const staticStyleSheet = createStyleSheet(extracted.static);

  return (props: P) => {
    const outputStyles: OutputStyles<T> = { ...staticStyleSheet };
    (Object.keys(extracted.dynamic) as T[]).forEach((key) => {
      // We have to type as `any` here because TS does not (yet) handle the
      // `undefined` case here
      (outputStyles as any)[key] = outputStyles[key]
        ? [
            outputStyles[key],
            evaluateDynamicStyle(extracted.dynamic[key] as any, props),
          ]
        : evaluateDynamicStyle(extracted.dynamic[key] as any, props);
    });
    return outputStyles;
  };
};
