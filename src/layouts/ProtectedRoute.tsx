import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/contexts/AuthProvider";
import RootLayout from "./Rootlayout";

const ProtectedRoute = () => {
  const auth = useAuth();
  if (!auth.accessToken) return <Navigate to="/sign-in" />;
  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default ProtectedRoute;