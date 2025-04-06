import { Navigate, Outlet } from "react-router";

import { useAuthStore } from "@/features/auth";

const AuthLayout = () => {
  const { user } = useAuthStore();

  return <>{user === null ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default AuthLayout;
