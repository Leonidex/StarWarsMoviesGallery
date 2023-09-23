import { createTheme } from "@mui/material/styles";

const Yellow = "#FFE81F";
const DarkYellow = "#CFB100";
const LightYellow = "#fff263";
const Orange = "#FFA500";
const DarkOrange = "#E89400";
const LightOrange = "#FFB833";
const Red = "#D32F2F";
const Black = "#000000";
const DarkGray = "#1F1F1F";

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
      paper: DarkGray,
    },
    text: {
      primary: LightYellow,
      secondary: DarkYellow,
    },
  },
  typography: {
    fontFamily: "StarWarsLC, Droid Sans, Roboto, StarJedi, Arial, sans-serif",
    allVariants: {
      textShadow: `${Black} 0px 0 5px`,
      userSelect: "none",
    },
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
          backgroundColor: LightYellow,
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

export { starWarsTheme };
