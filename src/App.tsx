import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from '@/pages/Home';
import User from "@/pages/User";

// React Toastify
import { ToastContainer } from 'react-toastify';

// Styles
import '@/assets/scss/app.scss';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:username",
    element: <User />,
  }
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
  )
}

export default App
