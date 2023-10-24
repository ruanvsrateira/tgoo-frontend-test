import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { CreatePost } from "../pages/CreatePost/CreatePost";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
]);
