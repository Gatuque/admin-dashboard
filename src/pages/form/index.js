import React from 'react'
import { Box, Button, TextField, InputAdornment, useTheme } from "@mui/material"
import { Formik } from "formik"
import { tokens } from '../../theme'
import * as Yup from "yup"
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
}

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
  email: Yup.string().email("invalid email").required("Email is required"),
  address: Yup.string().required("Address is required"),
})

const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme()
    const colors =  tokens(theme.palette.mode)
 
    const handleFormSubmit = (values) => {
      console.log(values)
    }

  return (
    <Box m="20px">
      <Header tittle="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        >

          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
              <Box 
                display="grid" 
                gap="30px" 
                gridTemplateColumns="repeat(4, minmax(0, 1fr)"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              
                >
                  <TextField 
                    fullwidth
                    variant="filled"
                    type="text"
                    label="First Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    name="firstName"
                    error={!!touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    sx={{ gridColumn: "span 2" }}
                    />

                    <TextField 
                    fullwidth
                    variant="filled"
                    type="text"
                    label="Last Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.lastName}
                    name="lastName"
                    error={!!touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                    sx={{ gridColumn: "span 2" }}
                    />

                    <TextField 
                    fullwidth
                    variant="filled"
                    type="text"
                    label="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                    error={!!touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                    sx={{ gridColumn: "span 4" }}
                    />

                    <TextField 
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MenuOutlinedIcon sx={{
                            color: `${colors.greenAccent[400]}`
                          }}/>
                        </InputAdornment>
                      ),
                    }}
                    fullwidth
                    variant="filled"
                    type="text"
                    label="Phone Number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    name="phone"
                    error={!!touched.phone && !!errors.phone}
                    helperText={touched.phone && errors.phone}
                    sx={{ gridColumn: "span 4" }}
                    />

                    <TextField 
                    fullwidth
                    variant="filled"
                    type="text"
                    label="Address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    name="address"
                    error={!!touched.address && !!errors.address}
                    helperText={touched.address && errors.address}
                    sx={{ gridColumn: "span 4" }}
                    />
                </Box> 
                <Box 
                  display="flex"
                  justifyContent="end"
                  mt="20px"
                  >
                  <Button 
                    type="submit" 
                    color="secondary"
                    variant="contained"
                    >
                    Create New User
                  </Button>
                </Box>

            </form>
          )}

      </Formik>

    </Box>
  )
}

export default Form