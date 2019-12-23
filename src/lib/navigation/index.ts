import { Link, Route, Router, withRouter } from "./navigation";
import { INavigation } from "./types";

export * from "./types";

const Navigation: INavigation = {
  Link,
  Route,
  Router,
  withRouter,
};

export default Navigation;
