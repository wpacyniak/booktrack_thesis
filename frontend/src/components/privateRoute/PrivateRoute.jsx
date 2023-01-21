import { Navigate } from "react-router-dom";
import { useStore } from "../../Store";

export const PrivateRoute = ({ children }) => {
  const { state } = useStore();

  const isLoggedIn = !!state.user;

  return isLoggedIn ? children : <Navigate to="/" />;
};
