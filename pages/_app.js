import { Fragment } from "react";
import Head from "next/head";
import NavbarLayout from "../components/Navbar";
import "../styles/globals.css";
import styles from "../components/app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <img className={styles.layout__ellipse} src={"/Ellipse1.png"}></img>
      <div className={styles.layout__grid}>
        <NavbarLayout />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
