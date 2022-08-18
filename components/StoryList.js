import { Fragment } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "./StoryList.module.css";

function StoryList(props) {
  function lineBrake(storyBlock) {
    let text = [];
    let paragraphs = storyBlock.split("\n");
    for (let i = 0; i < paragraphs.length; i++) {
      text.push(
        <Typography key={i} variant="p">
          {paragraphs[i]}
        </Typography>
      );
    }
    return text;
  }

  const list = props.stories.map((e) => (
    <Card key={e.id}>
      <CardContent>
        <Typography variant="h5">{e.title}</Typography>
      </CardContent>
      {e.img != undefined ? (
        <img className={styles.list__img} src={e.img} alt={e.alt}></img>
      ) : null}
      <CardContent>
        <Typography className={styles.list__lines} variant="body1">
          {lineBrake(e.story)}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Fragment>
      <div className={styles.list__container}>
        <Typography pl={2} variant="h4">
          {props.pageTitle}
        </Typography>
        <div className={styles.list__stories}>{list}</div>
      </div>
    </Fragment>
  );
}

export default StoryList;
