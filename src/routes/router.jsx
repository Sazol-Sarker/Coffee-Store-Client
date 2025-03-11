import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import AddCoffee from "./../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import HomeLayout from "../components/layout/HomeLayout";
import CoffeDetails from "../components/CoffeDetails";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "",
        loader: () => fetch("https://coffee-store-server-ashy-six.vercel.app/coffee"),
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
    loader:({params})=>fetch(`https://coffee-store-server-ashy-six.vercel.app/coffee/${params.id}`),
    element:<CoffeDetails></CoffeDetails>
  },
  {
    path:'/coffee/edit/:id',
    loader:({params})=>fetch(`https://coffee-store-server-ashy-six.vercel.app/coffee/${params.id}`),
    element:<UpdateCoffee></UpdateCoffee>
  },
  {
    path:'/auth',
    element:<SignUp></SignUp>
  },
  {
    path:'/login',
    element:<SignIn></SignIn>
  },
  {
    path:'/users',
    loader:()=>fetch('https://coffee-store-server-ashy-six.vercel.app/users'),
    element:<Users></Users>
  }
]);

export default router;
