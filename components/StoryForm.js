//Create a new story
//Add new story to main page

import { Fragment } from "react";
import { useRef } from "react";

function StoryForm(props) {
  const topicRef = useRef();
  const themeRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTopic = topicRef.current.value;
    const enteredTheme = themeRef.current.value;

    const storyData = {
      topic: enteredTopic,
      theme: enteredTheme,
    };

    console.log(storyData);

    props.onAddStory(storyData);
  }

  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <h1>Create a story!!</h1>
        <label>Topic</label>
        <input required id="topic" ref={topicRef} type="text" />
        <label>Theme</label>
        <input required id="theme" ref={themeRef} type="text" />
        <button>Send</button>
      </form>
    </Fragment>
  );
}

export default StoryForm;
