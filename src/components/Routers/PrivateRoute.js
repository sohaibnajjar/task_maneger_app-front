import { Navigate } from "react-router-dom";

export const useAuth = () => {
  const user = { loggedIn: true };
  return user && user.loggedIn;
};

const PrivateRoute = ({ children }) => {
  const isAuth = useAuth();

  return isAuth ? children : <Navigate to="login" />;
};

export default PrivateRoute;
