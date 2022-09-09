import { Fragment } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import styles from "../styles/app.module.css";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

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
        <Head>
          <title>Little Fiction</title>
        </Head>
        <Navbar />
        <div className={styles.layout__grid}>
          <Component {...pageProps} />
        </div>
        <Footer></Footer>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
