import { Fragment, useState } from "react";
import { useRef } from "react";
import { TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    props.onAddStory(data.result);
  }

  return (
    <Fragment>
      <form autoComplete="off" onSubmit={submitHandler}>
        <h1>Create a story!!</h1>
        <TextField required inputRef={topicRef} label="Topic" />
        <TextField required inputRef={themeRef} label="Theme" />
        <Button
          variant="contained"
          type="submit"
          endIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
      </form>
      {/* Temporary display for API result */}
      <div>{result}</div>
    </Fragment>
  );
}

export default StoryForm;
