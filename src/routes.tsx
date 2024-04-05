import type { RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import Following from "@/pages/following";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/following",
    element: <Following />,
    children: [],
  },
  {
    path: "*",
    element: <Home />,
    children: [],
  },
];

export default routes;
