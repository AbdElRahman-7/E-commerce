"use client";

import { useActionState } from "react";
import { login as loginAction } from "@/actions/auth";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Link,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import NextLink from "next/link";

export const Login = () => {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  const rememberLabel = "Remember Password";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#568AFF",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          width: "100%",
          maxWidth: 500,
          bgcolor: "white",
        }}
      >
        <Box sx={{ p: { xs: 1, sm: 2 }, mx: "auto" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: "bold", mb: 1, padding: 1, textAlign: "center" }}
          >
            Login to Account
          </Typography>
          <Typography sx={{ mb: 4, padding: 1, textAlign: "center" }}>
            Please enter your email and password to continue
          </Typography>

          <Box component="form" action={formAction}>
            <Stack spacing={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <label
                  style={{ fontWeight: 500, fontSize: "15px", color: "#333" }}
                >
                  Email
                </label>
                <TextField
                  type="email"
                  name="email"
                  required
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{ fontWeight: 500, fontSize: "15px", color: "#333" }}
                  >
                    Password
                  </label>

                  <Link
                    component={NextLink}
                    href="/forgot-password"
                    underline="hover"
                    sx={{ fontSize: "14px", fontWeight: 500 }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                <TextField
                  type="password"
                  name="password"
                  required
                  fullWidth
                  variant="outlined"
                />

                <FormControlLabel
                  control={<Checkbox color="primary" name="remember" />}
                  label={rememberLabel}
                  sx={{ mt: 0.5 }}
                />
              </Box>

              {state?.error && <Alert severity="error">{state.error}</Alert>}

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={isPending}
                fullWidth
                sx={{
                  mt: 2,
                  maxWidth: { xs: "100%", sm: 350 },
                  alignSelf: "center",
                  borderRadius: 1,
                }}
              >
                {isPending ? "Loading..." : "Login"}
              </Button>
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", fontSize: "15px" }}
                >
                  Don't have an Account?
                  <Link
                    component={NextLink}
                    href="/register"
                    underline="hover"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Create an account
                  </Link>
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
