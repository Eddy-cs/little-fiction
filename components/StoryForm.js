import { Fragment, useState } from "react";
import { useRef } from "react";
import { TextField, Button, Card, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./StoryForm.module.css";

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
      <form className={styles.form__container} onSubmit={submitHandler}>
        <Typography variant="h6">
          Type a topic and a theme in the bellow inputs to generate a story.
        </Typography>
        <TextField required inputRef={topicRef} label="Topic" />
        <TextField required inputRef={themeRef} label="Theme" />
        {/* <input type="text" ref={topicRef}></input>
        <input type="text" ref={themeRef}></input> */}
        <Button
          className={styles.form__button}
          size="large"
          variant="contained"
          type="submit"
          endIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
      </form>
      {/* Temporary display for API result */}
      <Card className={styles.form__story} variant="outlined">
        <Typography variant="h5">{result}</Typography>
      </Card>
    </Fragment>
  );
}

export default StoryForm;
