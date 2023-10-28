
import { Routes, Route } from "react-router-dom";
import AppTopbar from "./pages/global/AppTopbar";
import { ColorModeContext, useMode} from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
import Form from "./pages/form";
// import Pie from "./pages/pie";
// import Line from "./pages/line";
import FAQ from "./pages/faq";
// import Calender from "./pages/calender";
// import Geography from "./pages/geography"; 
 import AppSidebar from "./pages/global/AppSidebar";

 
function App() {
  const [colorMode, theme] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <div className="app">
          <AppSidebar/>
          {/* <Side/> */}
          <main className="content">
            <AppTopbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/form" element={<Form/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/line" element={<Line/>} /> */}
              <Route path="/faq" element={<FAQ/>} />
              {/* <Route path="/geography" element={<Geography/>} /> */}
              {/* <Route path="/calendar" element={<Calender/>} /> */}
            
            </Routes>
          </main>
       </div>
       </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;
