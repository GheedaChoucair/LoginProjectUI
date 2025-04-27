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
        path="/"
        element={!token ? <LoginPage /> : <Navigate to="/SecuredPage" />}
      />
      <Route
        path="/SecuredPage"
        element={token ? <SecuredPage /> : <Navigate to="/" />}
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
