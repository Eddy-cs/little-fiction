import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import "../styles/globals.css";
import styles from "../components/app.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <img className={styles.layout__ellipse} src={"/Ellipse1.png"}></img>
      <div className={styles.layout__grid}>
        <NavbarLayout />
        <Component {...pageProps} />
      </div>
    </Fragment>
  );
}

export default MyApp;
