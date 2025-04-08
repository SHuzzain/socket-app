import { RouteObject } from "react-router";

import AuthLayout from "@/layout/auth-layout";

import { loginRoute, registerRoute } from '@/features/auth'

const authRoute: RouteObject = {
  path: "/auth",
  element: <AuthLayout />,
  children: [
    loginRoute,
    registerRoute,
  ],
};

export default authRoute;
