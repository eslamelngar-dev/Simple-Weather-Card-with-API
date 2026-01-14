import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloudApp from "./Components/CloudApp";
import { store } from "./store";
import { Provider } from "react-redux";

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
        <Provider store={store}>
          <CloudApp />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
