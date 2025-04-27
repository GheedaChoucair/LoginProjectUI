import { Container, Typography, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import CustomButton from "../components/auth/CustomButton";

const SecuredPage = () => {
  const { logout } = useAuth();

  return (
    <Container maxWidth="sm" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h3" sx={{ marginBottom: 4 }}>
        Welcome!
      </Typography>
      <CustomButton type="submit" title="Logout" onClick={logout} />
    </Container>
  );
};

export default SecuredPage;
