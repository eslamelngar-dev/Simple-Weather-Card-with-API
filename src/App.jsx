import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloudApp from "./Components/CloudApp";

const theme = createTheme({
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CloudApp />
      </ThemeProvider>
    </>
  );
}

export default App;
