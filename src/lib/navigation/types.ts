import {
  BrowserRouter as Router,
  Link,
  Route,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";

export type RouteProps = RouteComponentProps;

export interface INavigation {
  Link: typeof Link;
  Route: typeof Route;
  Router: typeof Router;
  withRouter: typeof withRouter;
}
