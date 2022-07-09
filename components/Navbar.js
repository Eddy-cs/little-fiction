import styles from "./Navbar.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { Button } from "@mui/material";

function NavbarLayout() {
  return (
    <Fragment>
      <div>
        <img></img>
        <Link href="/">
          <Button variant="text">All stories</Button>
        </Link>
        <Link href="/create-story">
          <Button variant="text">Create a story</Button>
        </Link>
        <Link href="/create-story">
          <Button variant="text">About</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default NavbarLayout;
