import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/features/auth";

const AuthLayout = () => {
  const { user } = useAuth();

  return <>{user === null ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default AuthLayout;
