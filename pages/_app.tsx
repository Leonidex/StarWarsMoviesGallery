import "../styles/global.css";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { starWarsTheme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={starWarsTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
