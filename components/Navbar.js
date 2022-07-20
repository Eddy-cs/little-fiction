import styles from "./Navbar.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";

function NavbarLayout() {
  return (
    <Fragment>
      <div className={styles.navbar__tittle}>
        <Typography variant="h3">Little Fiction</Typography>
        <Typography variant="h6">
          Create stories with the power of AI
        </Typography>
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
