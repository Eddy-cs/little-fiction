import { Fragment } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "./StoryList.module.css";

function StoryList(props) {
  const list = props.stories.map((e) => (
    <Card key={e.id}>
      <CardContent>
        <Typography variant="h4">{e.title}</Typography>
        <Typography variant="body1">{e.story}</Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Fragment>
      <div className={styles.list__container}>
        <Typography pl={2} variant="h4">
          Latest stories:
        </Typography>
        <div className={styles.list__stories}>{list}</div>
      </div>
    </Fragment>
  );
}

export default StoryList;
