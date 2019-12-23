module.exports = ({ config }) => {
  config.resolve.alias = {
    "react-native": "react-native-web",
    "@storybook/react-native": "@storybook/react",
  };

  config.externals = ["fs"];

  return config;
};
