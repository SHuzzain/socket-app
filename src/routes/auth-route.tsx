import { RouteObject } from "react-router";

import LoginPage from "@/features/auth/templates/login-page";
import RegisterPage from "@/features/auth/templates/register-page";
import AuthLayout from "@/layout/auth-layout";

const authRoute: RouteObject = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
  ],
};

export default authRoute;
