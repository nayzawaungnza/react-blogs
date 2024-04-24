import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blogdetail from "../pages/Blogdetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
          path : '',
          element : <Home/>,
        },
        {
          path : '/about',
          element : <About/>,
        },
        {
          path : '/contact',
          element : <Contact/>,
        },
        {
          path : '/blogs/:id',
          element : <Blogdetail/>,
        }
      ]
    },
  ]);

  export default router;