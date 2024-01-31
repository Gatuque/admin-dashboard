
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import { ColorModeContext, useMode} from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import Login from "./pages/auth/login";
import Dashboard from './pages/dashboard';
import Home from './pages/home';

 
function App() {
  const [colorMode, theme] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const handleLogin = () => {
    // Perform authentication logic here (e.g., check credentials, API call)
    // For simplicity, let's assume a successful login after clicking a "Login" button.
    setIsLoggedIn(true);
  };
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <div className="app">
         <main className="content">
           
            <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/" element={<Login />} />
            </Routes>
          </main>  

       </div>
       </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;
