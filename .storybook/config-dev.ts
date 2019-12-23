import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { addDecorator, configure } from "@storybook/react";

addDecorator(withA11y);
addDecorator(withKnobs);

configure(require.context("../src", true, /\.stories\.(j|t)sx?$/), module);
