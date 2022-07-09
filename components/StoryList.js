import { Fragment } from "react";
import { Card } from "@mui/material";

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
      <h1>Here are all the stories:</h1>
      <div>{list}</div>
    </Fragment>
  );
}

export default StoryList;
