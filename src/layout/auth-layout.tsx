import { Navigate, Outlet } from "react-router";

import Container from "@/components/atoms/container";
import { useAuthStore } from "@/features/auth";

const AuthLayout = () => {
  const { user } = useAuthStore();
  if (user) {
    return <Navigate to={"/"} />;
  }

  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
