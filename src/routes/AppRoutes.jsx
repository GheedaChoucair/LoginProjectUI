import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/SecuredPage";
import { useAuth } from "../contexts/AuthContext";

// PrivateRoute component ensures that only authenticated users can access certain pages
const PrivateRoute = ({ element, authenticated, redirectTo }) => {
  return authenticated ? element : <Navigate to={redirectTo} replace />;
};

const AppRoutes = () => {
  const { token } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PrivateRoute
            element={<LoginPage />}
            authenticated={token}
            redirectTo="/"
          />
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute
            element={<HomePage />}
            authenticated={token}
            redirectTo="/login"
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
