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
        <Typography variant="h5">
          There once was a world that was full of cats. Every corner had a cat,
          every street had a cat, and every house had at least one cat. The cats
          were friendly and loved to play with each other. They would chase each
          other around and nap in the sun. Everyone in the world loved the cats.
          One day, a new family moved into the neighborhood and they had a dog.
          The dog was not used to living with cats and would bark at them and
          try to chase them. The cats didn't know what to do and were scared of
          the dog. The family tried to keep the dog away from the cats, but it
          was difficult. The dog would always find a way to get to the cats and
          would chase them. The cats started to avoid the neighborhood and
          stopped playing together. The world was not the same without the cats
          and everyone missed them. One day, the family decided to move away and
          the cats came back. They were {result}
        </Typography>
      </Card>
    </Fragment>
  );
}

export default StoryForm;
