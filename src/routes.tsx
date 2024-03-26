import type { RouteObject } from "react-router-dom";
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "*",
    element: <Home />,
    children: [],
  },
];

export default routes;
