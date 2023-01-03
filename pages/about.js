import { Typography } from "@mui/material";
import styles from "../styles/about.module.css";
import Image from "next/image";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <div className={styles.about}>
        <Typography variant="h4">
          Little fiction is a tool that sparks creativity.
        </Typography>
        <Typography>
          It is easy to use and help you write stories for fun or educational
          purposes. You can use it to jumpstart a story or to simply encourage
          creativity and collaboration.
        </Typography>
      </div>
      <div
        style={{
          opacity: 0.1,
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      ></div>
    </Fragment>
  );
}
