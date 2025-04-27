import { TextField, Button, Box, InputAdornment, Alert } from "@mui/material";
import { Person, Lock } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { loginApi } from "../../services/authService";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    try {
      const response = await loginApi(data);
      login(response.token);
      navigate("/SecuredPage");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && (
        <Alert severity="error" sx={{ margin: 3 }}>
          {error}
        </Alert>
      )}{" "}
      <Box
        component="form"
        onSubmit={handleSubmit(handleLogin)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          "*": {
            borderRadius: 3,
          },
        }}
      >
        <TextField
          label="Username"
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={errors.username?.message}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password?.message}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            },
          }}
        />
        <CustomButton type="submit" title="Login" />
      </Box>
    </>
  );
};

export default LoginForm;
