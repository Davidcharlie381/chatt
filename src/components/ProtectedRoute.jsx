import { Navigate } from "react-router-dom";
import Chat from "../pages/Chat";

export default function ProtectedRoute({ name, children }) {
  if (!name) {
    return <Navigate to="/" />;
  }

  return (
  <>
    {children}
  </>
  );
}
