import "./App.css";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Routes from "./Routes/Routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d1148",
      light: "#616377",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
