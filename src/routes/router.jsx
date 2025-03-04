import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import AddCoffee from "./../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import HomeLayout from "../components/layout/HomeLayout";
import CoffeDetails from "../components/CoffeDetails";

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
      // {
      //   path: "/editCoffee",
      //   element: <UpdateCoffee></UpdateCoffee>,
      // },
      
    ],
  },
  {
    path:'/coffee/:id',
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`),
    element:<CoffeDetails></CoffeDetails>
  },
  {
    path:'/coffee/edit/:id',
    loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`),
    element:<UpdateCoffee></UpdateCoffee>
  }
]);

export default router;
