import styles from "./Navbar.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { Button, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function NavbarLayout() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <div className={styles.navbar__tittle}>
        <Typography variant="h3">Little Fiction</Typography>
        <Typography variant="h6">
          Create little stories with the power of AI
        </Typography>
      </div>
      <div className={styles.navbar__buttons}>
        <Link href="/">
          <Button size={matches ? "small" : "large"} variant="text">
            Favorites
          </Button>
        </Link>
        <Link href="/all-stories">
          <Button size={matches ? "small" : "large"} variant="text">
            All stories
          </Button>
        </Link>
        <Link href="/create-story">
          <Button size={matches ? "small" : "large"} variant="text">
            Create a story
          </Button>
        </Link>
        <Link href="/create-story">
          <Button size={matches ? "small" : "large"} variant="text">
            About
          </Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default NavbarLayout;
