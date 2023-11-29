import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/single/Profile";
import NotFound from "../pages/NotFound";
import SingleUserApi from "../api/SingleUserApi";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: "/profile/:login",
            element: <Profile />,
            loader: SingleUserApi,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
