import RootPage from "@/root";
import ErrorPage from "@/root/error";
import { createBrowserRouter, RouterProvider } from "react-router";
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
