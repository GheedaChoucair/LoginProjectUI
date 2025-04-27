import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import SecuredPage from "./pages/SecuredPage";

function AppRoutes() {
  const { token } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={!token ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/"
        element={token ? <SecuredPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
