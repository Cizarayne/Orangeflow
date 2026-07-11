import { Navigate } from "react-router-dom";
import { AuthContext } from "../store/Auth";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = AuthContext();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}