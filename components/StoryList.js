import { Fragment } from "react";

function StoryList(props) {
  const list = props.stories.map((e) => <h1 key={e}>{e}</h1>);
  console.log(list);

  return (
    <Fragment>
      <h1>Here are all the stories:</h1>
      <div>{list}</div>
    </Fragment>
  );
}

export default StoryList;
