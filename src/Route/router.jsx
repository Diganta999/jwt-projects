import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Register from "../Pages/Auth/Register/Register";
import SignIn from "../Pages/Auth/SignIn/SignIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { 
          path:"/",
          element:<Home />,
        }
      ]
    },
    {
      path:"/register",
      element: <Register />,

    },
    {
      path:"/signin",
      element: <SignIn />,
    }
  ]);
  export default router;