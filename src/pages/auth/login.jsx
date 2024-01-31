import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useFormik } from "formik";
import { tokens } from "../../theme";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginIcon from "@mui/icons-material/Login";
import InputAdornment from "@mui/material/InputAdornment";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import KeyIcon from "@mui/icons-material/Key";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Home from "../home/index"

import {
  TextField,
  Paper,
  Avatar,
  Typography,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import Dashboard from "../dashboard";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validationSchema = Yup.object({
  password: Yup.string()
    //.matches(passwordRegex, "Password not valid")
    .required("Password is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      //alert(JSON.stringify(values, null, 2));
      <Home/>; 
    },
  });

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "80px"
      }}
    >
      <Paper
        // elevation={30}
        sx={{
          width: "400px",
          height: "55vh",
          padding: "20px",
          borderRadius: "16px",
          backgroundColor: colors.grey[300],
        }}
      >
        <Box
          align="center"
          justifyContent="space-between"
          alignItems="center"
          mb="20px"
        >
          <Avatar
            sx={{
              background: colors.blueAccent[700],
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            variant="h5"
            sx={{
              m: "10px 0 0 0",
              fontWeight: "bold",
              color: colors.grey[800],
              fontSize: "25px",
            }}
          >
            Login
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              InputLabelProps={{
                style: { fontSize: 16, color: colors.blueAccent[600] },
              }}
              inputProps={{
                style: {
                  fontSize: 22,
                  //   fontWeight: "bold",
                  color: colors.grey[800],
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ContactMailIcon
                      sx={{
                        // backgroundColor: colors.grey[200],
                        fontSize: "30px",
                        fontWeight: "bold",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              margin="normal"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{
                style: { fontSize: 16, color: colors.blueAccent[600] },
              }}
              inputProps={{
                style: {
                  fontSize: 22,
                  fontWeight: "bold",
                  color: colors.grey[700],
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KeyIcon
                      sx={{
                        fontSize: "30px",
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              startIcon={<LoginIcon />}
              sx={{
                mt: 2,
                backgroundColor: colors.blueAccent[700],
              }}
            >
              Submit
            </Button>
            <Typography
              sx={{
                mt: 2,
                color: colors.blueAccent[700],
              }}
            >
              <Link href="#">Forgot password?</Link>
            </Typography>
          </form>

          {/* Todo */}
          {/* ADD Account Logo */}
        </Box>
      </Paper>
    </Box>
  );
};

export default Login;
