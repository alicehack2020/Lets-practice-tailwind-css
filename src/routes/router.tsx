import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Root from "./root";
import Testimonial from "../pages/Testimonial";

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
       path:"/testimonial",
        element: <Testimonial />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
