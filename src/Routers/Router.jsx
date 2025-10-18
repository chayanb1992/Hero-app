import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
// import Root from "../../../../boi-poka/src/Root/Root";

const route = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/apps.json"),
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("/apps.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/apps.json"),
        Component: Apps,
      },
      {
        path: "/installation",
        loader: () => fetch("/apps.json"),
        Component: Installation,
      },
    ],
  },
]);

export { route };
