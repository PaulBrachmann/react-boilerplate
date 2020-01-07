# React Setup

## Base Setup

First, install [node.js](https://nodejs.org/en/) and the [yarn](https://yarnpkg.com/en/docs/install) package manager.

Next, we can create a new React project using `create-react-app`.

```sh
npx create-react-app my-app --template typescript
# or
yarn create react-app my-app --template typescript
```

This creates a complete build setup for us and populates the project with some boilerplate code.
The `--template` parameter specifies that we are using TypeScript.

Now we can do some clean up and move packages not included in the build to the `devDependencies`:

```sh
cd my-app
yarn remove typescript @types/node @types/react @types/react-dom @types/jest
yarn add --dev typescript @types/node @types/react @types/react-dom @types/jest
```

Finally, we can add [Prettier](https://prettier.io/) for automatic code formatting and [TSLint](https://palantir.github.io/tslint/) (including some basic configuration):

```sh
yarn add --dev prettier tslint tslint-config-airbnb tslint-config-prettier tslint-react
```

### Scripting, Commit Hooks

First, install some additional dependencies:

```sh
yarn add --dev npm-run-all lint-staged husky
```

Then update your config in `package.json`:

```json
{
  // ...
  "scripts": {
    // ...
    "format": "npm-run-all format:*",
    "format:js": "prettier --write {.,**}/*.{js,jsx}",
    "format:json": "prettier --write {.,**}/*.json",
    "format:ts": "tslint --fix -p . && prettier --write {.,**}/*.{ts,tsx}",
    "lint": "npm-run-all lint:*",
    "lint:ts": "tslint -p .",
    "compile": "tsc --noEmit -p . --pretty"
    // ...
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx}": ["tslint --fix -p .", "prettier --write", "git add"],
    "src/**/*.{js,jsx,json}": ["prettier --write", "git add"]
  }
  // ...
}
```

### [React Native Web](https://github.com/necolas/react-native-web) (optional)

[React Native](https://facebook.github.io/react-native/) allows us to build native applications using React components.
To achieve compatibility to the native workflow even while building a web app and because React Native provides some really useful building blocks for application design, we are using its web wrapper React Native Web.

To use it, you need to install both `react-native-web` and the `react-native` types so TypeScript doesn't get tripped up:

```sh
yarn add react-native-web
yarn add --dev @types/react-native
```

To make your app compatible with the native stack, you will now want to change the way your main component is regsitered.
In `index.tsx`, replace:

```tsx
import ReactDOM from "react-dom";

// ...

ReactDOM.render(<App />, document.getElementById("root"));
```

with:

```tsx
import { AppRegistry } from "react-native";

// ...

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
```

_Note: You may notice that we import `react-native` although we did not install that package (just its type definitions) and are not referencing `react-native-web` at all. This is because the build config created for us by `create-react-app` automatically replaces all references to `react-native` with `react-native-web` at build time. If we were to build for a native platform, the original `react-native` package would be used and we would not have to change any of our code._

### [Storybook](https://storybook.js.org/) (optional)

Storybook is a tool that helps to develop reusable components in separation from their in-app context.
Writing "stories" for components showcases them in a specific use case and helps to document their API.

```sh
npx -p @storybook/cli sb init
```

```sh
yarn add -D @storybook/addon-a11y @storybook/addon-info @storybook/addon-knobs @storybook/addon-storyshots @storybook/addon-viewport @types/storybook__addon-storyshots
yarn add -D react-test-renderer babel-plugin-macros require-context.macro
```

## Add Ons

### State Management

#### MobX State Tree

```sh
yarn add mobx mobx-react mobx-state-tree
```

### React Router

```sh
yarn add react-router-dom
yarn add -D @types/react-router-dom
```

### i18n

```sh
yarn add i18next i18next-browser-languagedetector
```
