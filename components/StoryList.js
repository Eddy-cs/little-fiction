import { Fragment } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "./StoryList.module.css";

function StoryList(props) {
  function lineBrake(storyBr) {
    let text = [];
    storyBr.split("\n").forEach((element) => {
      text.push(<div>{element}</div>);
    });
    console.log(text);
    return text;
  }

  // console.log(props.stories[0].img);
  const list = props.stories.map((e) => (
    <Card key={e.id}>
      <CardContent>
        <Typography variant="h4">{e.title}</Typography>
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
