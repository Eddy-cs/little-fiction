import { Fragment } from "react";
import styles from "../styles/app.module.css";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Nav";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Navbar />
        <div className={styles.layout__grid}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
