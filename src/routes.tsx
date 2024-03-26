import type { RouteObject } from "react-router-dom";
import Home from "@/pages/home";
import Following from "@/pages/following";
import About from "@/pages/about";

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
    path: "/about",
    element: <About />,
    children: [],
  },
  {
    path: "*",
    element: <Home />,
    children: [],
  },
];

export default routes;
