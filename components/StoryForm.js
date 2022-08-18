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
      uid: props.userData.uid || props.userData,
    };

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });

    const data = await response.json();

    setResult(data.result);
    setTitle(`The ${enteredTopic} and The ${enteredTheme}`);
    setButtonLoad("contained");
  }

  return (
    <Fragment>
      <form className={styles.form__container} onSubmit={submitHandler}>
        <Typography variant="h5">
          Ignite your imagination by using two words to create a little story.
        </Typography>
        <Typography variant="h6">
          Please use two nouns to begin. Example: "Turtle" and "Equipment".
        </Typography>
        <TextField
          inputProps={{ maxLength: 12 }}
          required
          inputRef={topicRef}
          label="Word 1"
        />
        <TextField
          inputProps={{ maxLength: 12 }}
          required
          inputRef={themeRef}
          label="Word 2"
        />
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
        <Typography variant="h3">
          {result ===
          "Sorry, the maximum number of requests for today has been reached. Please sign in or try again tomorrow."
            ? ""
            : title}
        </Typography>
        <Typography variant="h5">{result}</Typography>
      </Card>
    </Fragment>
  );
}

export default StoryForm;
