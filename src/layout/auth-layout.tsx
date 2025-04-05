import { useAuth } from "@/features/auth";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { user } = useAuth();

  return <>{user === null ? <Outlet /> : <Navigate to={"/"} />}</>;
};

export default AuthLayout;
