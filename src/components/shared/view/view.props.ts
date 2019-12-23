import { ViewProps as RNViewProps, ViewStyle } from "react-native";

import { BasicProps } from "../types";

// tslint:disable-next-line no-empty-interface
export default interface ViewProps extends BasicProps<ViewStyle>, RNViewProps {}
