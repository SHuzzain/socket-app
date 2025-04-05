import { RouterProvider, createBrowserRouter } from "react-router";

import RootPage from "@/root";
import ErrorPage from "@/root/error";

import authRoute from "./auth-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  authRoute,
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
