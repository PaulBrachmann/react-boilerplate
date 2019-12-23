import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import React from "react";

export default {
  title: "Welcome",
};

export const toStorybook = () => <Welcome showApp={linkTo("Button")} />;

toStorybook.story = {
  name: "to Storybook",
};
