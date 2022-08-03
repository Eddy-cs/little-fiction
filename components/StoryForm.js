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
  const [title, setTitle] = useState();
  const [buttonLoad, setButtonLoad] = useState("contained");

  async function submitHandler(event) {
    event.preventDefault();
    setButtonLoad("disabled");

    const enteredTopic = topicRef.current.value;
    const enteredTheme = themeRef.current.value;

    const storyData = {
      topic: enteredTopic,
      theme: enteredTheme,
    };

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });

    const data = await response.json();

    setTitle(`The ${enteredTopic} and The ${enteredTheme}`);
    setResult(data.result);
    setButtonLoad("contained");
  }

  return (
    <Fragment>
      <form className={styles.form__container} onSubmit={submitHandler}>
        <Typography variant="h6">
          Type a topic and a theme in the bellow inputs to generate a story.
        </Typography>
        <TextField required inputRef={topicRef} label="Topic" />
        <TextField required inputRef={themeRef} label="Theme" />
        <Button
          className={styles.form__button}
          size="large"
          variant={buttonLoad}
          type="submit"
          endIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
      </form>
      <Card className={styles.form__story} variant="outlined">
        <Typography variant="h3">{title}</Typography>
        <Typography variant="h5">{result}</Typography>
      </Card>
    </Fragment>
  );
}

export default StoryForm;
