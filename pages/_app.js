import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavbarLayout />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
