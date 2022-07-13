import styles from "./Navbar.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function NavbarLayout() {
  return (
    <Fragment>
      <div className={styles.navbar__tittle}>
        <h1>Little Fiction</h1>
        <p>Create stories with the power of AI</p>
      </div>
      <div className={styles.navbar__buttons}>
        <Link href="/">
          <Button size="large" variant="text">
            All stories
          </Button>
        </Link>
        <Link href="/create-story">
          <Button size="large" variant="text">
            Create a story
          </Button>
        </Link>
        <Link href="/create-story">
          <Button size="large" variant="text">
            About
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default NavbarLayout;
