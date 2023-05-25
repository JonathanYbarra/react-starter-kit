import { Navigate, createBrowserRouter } from "react-router-dom";

import { RoutesParse } from './utils/routesParse';
import type { RouteDef } from "./routes.types";
import { AuthGuard } from "./guards";

import { ROUTE_PARAM_WILDCARD } from "../app/utils";
import * as PATH from "./utils/_path";
import * as URL from "./utils/_url";

export const ROUTES_DEF: RouteDef[] = [
  // Private Routes
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard />,
    children: [
      { path: URL.ROUTE_URL_ROOT, element: <Navigate to={URL.ROUTE_URL_HOME} /> },
      { element: PATH.ROUTE_PATH_HOME, path: URL.ROUTE_URL_HOME },
    ],
  },
  // Public routes
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard isPublic />,
    children: [
      { element: PATH.ROUTE_PATH_LOGIN, path: URL.ROUTE_URL_LOGIN }
    ],
  },
  { element: PATH.ROUTE_PATH_404, path: ROUTE_PARAM_WILDCARD },
];

export const ROUTES = RoutesParse({
  // TODO: Make a Loading page.
  loading: <div>loading...</div>,
  defs: ROUTES_DEF,
});

export const router = createBrowserRouter(ROUTES);
