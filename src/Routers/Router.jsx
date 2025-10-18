import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../../../../boi-poka/src/Root/Root";

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
    ],
  },
]);

export { route };
