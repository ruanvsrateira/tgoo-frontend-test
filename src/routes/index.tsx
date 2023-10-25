import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { CreatePost } from "../pages/CreatePost/CreatePost";
import { DeletePost } from "../pages/DeletePost/DeletePost";
import { UpdatePost } from "../pages/UpdatePost/UpdatePost";
import { PostDetails } from "../pages/PostDetails/PostDetails";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/delete-post",
    element: <DeletePost />,
  },
  {
    path: "/update-post",
    element: <UpdatePost />,
  },
  {
    path: "/post-details",
    element: <PostDetails />,
  },
]);
