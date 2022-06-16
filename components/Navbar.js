import styles from "./Navbar.module.css";
import { Fragment } from "react";
import Link from "next/link";

function NavbarLayout() {
  return (
    <Fragment>
      <div className={styles.test}>
        <img></img>
        <Link href="/">
          <span className={styles.nav__buttons}>All stories</span>
        </Link>
        <Link href="/create-story">
          <span className={styles.nav__buttons}>Create story</span>
        </Link>
        <Link href="/create-story">
          <span className={styles.nav__buttons}>About</span>
        </Link>
      </div>
    </Fragment>
  );
}

export default NavbarLayout;
