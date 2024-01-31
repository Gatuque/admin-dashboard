import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "../dashboard/index";
import AppTopbar from "../global/AppTopbar";
import Team from "../team/index";
import Contacts from "../contacts/index";
import Bar from "../bar/index";
import Form from "../form/index";
import Pie from "../pie/index";
import Line from "../line/index";
import FAQ from "../faq/index";
import Geography from "../geography/index";
import AppSidebar from "../global/AppSidebar";

function Home() {
    const [colorMode, theme] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AppSidebar />
          <main className="content">
            <AppTopbar />
            <Dashboard/>

            {/* <Routes>
              <Route path="/home" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              {/* <Route path="/calendar" element={<Calender/>} />  */}
            {/* </Routes> */} 


          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Home