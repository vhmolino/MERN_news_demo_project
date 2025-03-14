import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeightRegular: 400,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          margin: 0,
          padding: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  },
});

export default theme;
