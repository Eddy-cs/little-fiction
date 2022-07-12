import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import "../styles/globals.css";
import styles from "../components/app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className={styles.grid}>
        <NavbarLayout />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
