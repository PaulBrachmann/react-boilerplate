import { ComponentClass } from "react";

import { InputStyle, OutputStyle } from "../../lib";

export interface BasicProps<Style = InputStyle> {
  /**
   * Additional styles.
   * Object styles will be used as an optional override, useful for e.g. padding & margin.
   */
  style?: Style | OutputStyle<Style> | (Style | OutputStyle<Style>)[];
}

/** Adds the className property to a react-native(-web) component. */
export type NativeComponentWithClassName<NativeComponent> =
  | NativeComponent
  | ComponentClass<{ className?: string }>;
