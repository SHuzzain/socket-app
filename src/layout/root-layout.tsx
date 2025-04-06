import { Navigate, Outlet } from "react-router";

import { useAuthStore } from "@/features/auth";

const RootLayout = () => {
  const { user } = useAuthStore();

  return user === null ? <Navigate to={"/auth"} /> : <Outlet />;
};

export default RootLayout;
