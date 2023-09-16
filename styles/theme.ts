import { createTheme } from "@mui/material/styles";

const Yellow = "#FFE81F";
const DarkYellow = "#BFB100";
const LightYellow = "#FFF8BC";
const Orange = "#FFA500";
const DarkOrange = "#E89400";
const LightOrange = "#FFB833";
const Red = "#D32F2F";
const Black = "#000000";
const Gray = "#1A1A1A";

const starWarsTheme = createTheme({
  palette: {
    primary: {
      main: Yellow,
      dark: DarkYellow,
      light: LightYellow,
    },
    secondary: {
      main: Orange,
      dark: DarkOrange,
      light: LightOrange,
    },
    error: {
      main: Red,
    },
    background: {
      default: Black,
      paper: Gray,
    },
    text: {
      primary: LightYellow,
      secondary: DarkYellow,
    },
  },
  typography: {
    fontFamily: '"Droid Sans", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          color: Yellow,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: DarkOrange,
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: Yellow,
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: Yellow,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: Yellow,
        },
      },
    },
  },
});

const openingCrawlTextStyle = {
  color: Yellow,
  fontWeight: "bold",
};

export { starWarsTheme, openingCrawlTextStyle };
