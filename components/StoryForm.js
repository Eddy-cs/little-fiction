//Create a new story
//Add new story to main page

import { Fragment, useState } from "react";
import { useRef } from "react";

function StoryForm(props) {
  const topicRef = useRef();
  const themeRef = useRef();
  //Sets state for GPT-3 API result
  const [result, setResult] = useState();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredTopic = topicRef.current.value;
    const enteredTheme = themeRef.current.value;

    const storyData = {
      topic: enteredTopic,
      theme: enteredTheme,
    };

    console.log(storyData);

    //GPT-3 Code (async function added)
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });
    const data = await response.json();
    setResult(data.result);
    console.log(data.result);
    //

    // props.onAddStory(storyData);
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
      {/* Temporary display for API result */}
      <div>{result}</div>
    </Fragment>
  );
}

export default StoryForm;
