import { createTheme } from '@mui/material';

export const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: "#64057a",
      dark: "#19021e",
      light: "#e0c4e6",
      contrastText: "#eeb8fa",
    },
    background: {
      default: "#f7f6f3",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: `'Josefin Sans', 'Roboto', sans-serif`,
    fontSize: 16,
  },
});