"use client";

import { useActionState } from "react";
import NextLink from "next/link";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Link as MuiLink,
} from "@mui/material";
import {register} from '@/actions/auth';

export const Register = () => {
  const [state, formAction, isPending] = useActionState(register, null);

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
          p: 4,
          borderRadius: 2,
          width: "100%",
          maxWidth: 630,
          bgcolor: "white",
        }}
      >
        <Box sx={{ maxWidth: 512, p: 4, mx: "auto" }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: "bold", mb: 1, padding: 1, textAlign: "center" }}
          >
            Create an Account
          </Typography>
          <Typography variant="h6" component="h6" sx={{ mb: 4, padding: 1, textAlign: "center", color: 'text.secondary' }}>
            Sign up to get started
          </Typography>
          
          <Box component="form" action={formAction}>
            <Stack spacing={3}>
              
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <label style={{ fontWeight: 500, fontSize: "15px", color: "#333" }}>
                  Full Name
                </label>
                <TextField
                  type="text"
                  name="name"
                  required
                  fullWidth
                  variant="outlined"
                />
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <label style={{ fontWeight: 500, fontSize: "15px", color: "#333" }}>
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
                <label style={{ fontWeight: 500, fontSize: "15px", color: "#333" }}>
                  Password
                </label>
                <TextField
                  type="password"
                  name="password"
                  required
                  fullWidth
                  variant="outlined"
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
                sx={{ mt: 2, maxWidth: 300, alignSelf: "center" }}
              >
                {isPending ? "Creating..." : "Sign Up"}
              </Button>
              
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "15px" }}>
                  Already have an account?{" "}
                  <MuiLink
                    component={NextLink}
                    href="/dashboard"
                    underline="hover"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    Login
                  </MuiLink>
                </Typography>
              </Box>

            </Stack>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
