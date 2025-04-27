import { Box, Container, Typography, Link, Alert } from "@mui/material";
import LoginForm from "../components/auth/LoginForm";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
          gap: 2,
          borderBottom: "1px solid #ccc",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          Need help?
        </Typography>
        <Link
          href="#"
          variant="body2"
          sx={{
            px: 2,
            py: 0.5,
            border: "1px solid #ccc",
            borderRadius: "20px",
            fontWeight: 500,
            textDecoration: "none",
          }}
        >
          Contact Us
        </Link>
      </Box>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            p: 4,
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              mx: "auto",
              mb: 2,
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            <PersonAddAlt1Icon color="action" />
          </Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Login
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            Enter your details to login.
          </Typography>
          <LoginForm />
        </Box>
      </Container>
      <Box sx={{ textAlign: "left", p: 2 }}>
        <Typography variant="caption" color="textSecondary">
          © 2024 Demo login
        </Typography>
      </Box>
    </Box>
  );
}
