import { Fragment } from "react";
import { Card } from "@mui/material";
import styles from "./StoryList.module.css";

function StoryList(props) {
  console.log(props);
  const list = props.stories.map((e) => (
    <Card variant="outlined" key={e.id}>
      <h1>{e.title}</h1>
      {e.story}
    </Card>
  ));
  // Add max height class to cards ---->sx={{maxHeight: 200}}

  return (
    <Fragment>
      <div className={styles.list__container}>
        <h1>Here are all the stories:</h1>
        <div className={styles.list__stories}>{list}</div>
      </div>
    </Fragment>
  );
}

export default StoryList;
