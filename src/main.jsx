
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import Aboutus from "./Aboutus.jsx";
import Courses from "./Courses.jsx";
import CategoryProducts from "./Categories.jsx";
import Login from "./features/user/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/courses",
        element:<Courses></Courses>,
      },
      {
        path: "/category/:cslug",
        element: <CategoryProducts></CategoryProducts>,
      },
    ],
  },
  {
    path:"/login",
    element:<Login></Login>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
