import React from 'react'
import { tokens } from "../../theme"
import { Formik } from "formik"
import * as Yup from "yup"
import { TextField , Paper, Avatar, Typography, Box, useTheme, Button, IconButton } from '@mui/material'
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginIcon from '@mui/icons-material/Login';
import InputAdornment from '@mui/material/InputAdornment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PasswordIcon from '@mui/icons-material/Password';
import KeyIcon from '@mui/icons-material/Key';

const initialValues = {
  email: "",
  password: "", 
}

const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("Email is required"),
  password: Yup.string().matches(passwordRegex, "Password not valid").required("Password is required"),
})

const Login = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [showPassword, setShowPassword] = React.useState(false);
  

    const handleFormSubmit = (values) => {
      console.log(values)
    }

  return (
    <Box sx={{
            margin: "auto",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Paper 
        elevation={30}
        sx={{
            width: '250px',
            height: '50vh',
            padding: '20px',
            borderRadius: '16px',
            backgroundColor: colors.grey[300],
        }}>
           <Box 
           align="center"
           justifyContent="space-between" 
           alignItems="center" 
           mb="20px">
             <Avatar 
                sx={{
                    background: colors.blueAccent[700],
                }} >
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

           <Formik 
             onSubmit={handleFormSubmit}
             initialValues={initialValues}
             validationSchema={userSchema}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                    <TextField 
                        fullwidth
                        required
                        variant="outlined"
                        type="text"
                        label="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ mt: 2 }}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment 
                                  position="start">
                                <ContactMailIcon 
                                    sx={{
                                      backgroundColor: colors.blueAccent[700],
                                      fontSize: "small"
                                    }}/>
                              </InputAdornment>
                            ),
                          }}
                    />

                    <TextField 
                        fullwidth
                        required
                        variant="outlined"
                        type={showPassword ? 'text' : 'password'}
                        label="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="password"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ mt: 2 }}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <KeyIcon 
                                 sx={{
                                      backgroundColor: colors.blueAccent[700],
                                      fontSize: "small"
                                    }} />
                              </InputAdornment>
                            ),
                          }}

                    />
                </form>
            ) }

        </Formik>

        <Button 
            type="submit" 
            variant="contained"
            startIcon={<LoginIcon />}
            sx={{
                mt: 2,
                backgroundColor: colors.blueAccent[700],
            }}
        >
            Login
        </Button>
           </Box>
        </Paper>
    </Box>
  )
}

export default Login;