import { RouteObject } from "react-router";

import LoginPage from "./templates/login-page";
import RegisterPage from "./templates/register-page";

const loginRoute: RouteObject = {
  index: true,
  element: <LoginPage />,
};

const registerRoute: RouteObject = {
  path: "/register",
  element: <RegisterPage />,
};

export { loginRoute, registerRoute };
