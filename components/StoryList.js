import { Fragment } from "react";
import { Card } from "@mui/material";
import styles from "./StoryList.module.css";

function StoryList(props) {
  const list = props.stories.map((e) => (
    <Card key={e.id}>
      <h1>Title</h1>
      {e.story}
    </Card>
  ));
  // const list = props.stories.map((e) => <h1>{e}</h1>);
  // console.log(list);

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
