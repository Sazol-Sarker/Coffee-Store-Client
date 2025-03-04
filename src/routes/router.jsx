import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import AddCoffee from "./../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import HomeLayout from "../components/layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        loader: () => fetch("http://localhost:5000/coffee"),
        element: <HomeLayout></HomeLayout>,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/editCoffee",
        element: <UpdateCoffee></UpdateCoffee>,
      },
    ],
  },
]);

export default router;
