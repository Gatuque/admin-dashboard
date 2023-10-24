
import Topbar from "./pages/global/Topbar";
import { ColorModeContext, useMode} from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [colorMode, theme] = useMode();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <div className="app">
          <main className="content">
            {/* <Topbarr/> */}
            <Topbar/>
          </main>
       </div>
       </ThemeProvider>
    </ColorModeContext.Provider>
   
  );
}

export default App;