import { RouterProvider, createBrowserRouter } from "react-router";

import RootLayout from "@/layout/root-layout";
import RootPage from "@/root";
import ErrorPage from "@/root/error";

import authRoute from "./auth-route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
    ],
  },
  authRoute,
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
