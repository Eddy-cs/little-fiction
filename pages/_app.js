import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import styles from "../components/app.module.css";
import "../styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <img className={styles.layout__ellipse} src={"/Ellipse1.png"}></img>
        <div className={styles.layout__grid}>
          <NavbarLayout />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
