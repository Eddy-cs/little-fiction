import { Fragment, useState, useRef } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./StoryForm.module.css";

export default function StoryForm(props) {
  const [genre, setGenre] = useState("");
  const topicRef = useRef();
  const themeRef = useRef();
  const [result, setResult] = useState();
  const [title, setTitle] = useState();
  const [buttonLoad, setButtonLoad] = useState("contained");

  const handleChange = (event) => {
    setGenre(event.target.value);
    console.log(genre);
  };

  async function submitHandler(event) {
    event.preventDefault();
    setButtonLoad("disabled");

    const enteredTopic = topicRef.current.value;
    const enteredTheme = themeRef.current.value;

    const storyData = {
      uid: props.userData.uid || props.userData,
      user: {
        displayName: props.userData.displayName,
        email: props.userData.email,
        photoURL: props.userData.photoURL,
      },
      topic: enteredTopic,
      theme: enteredTheme,
      genre: genre,
    };

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });

    const data = await response.json();

    console.log(data.result);
    setResult(data.result);
    setTitle(`The ${enteredTopic} and The ${enteredTheme}`);
    setButtonLoad("contained");
  }

  return (
    <Fragment>
      <form className={styles.form__container} onSubmit={submitHandler}>
        <Typography variant="h5">
          Ignite your imagination by using two words and a genre to create an
          story.
        </Typography>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            gap: 30,
          }}
        >
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
        </div>
        <FormControl>
          <InputLabel id="demo">Genre</InputLabel>
          <Select
            value={genre}
            labelId="demo"
            id="sdfs"
            label="Genre"
            required
            onChange={handleChange}
          >
            <MenuItem value={"children story"}>Children story</MenuItem>
            <MenuItem value={"science fiction"}>Sci-fi</MenuItem>
            <MenuItem value={"mystery"}>Mystery</MenuItem>
            <MenuItem value={"romance"}>Romance</MenuItem>
            <MenuItem value={"horror"}>Horror</MenuItem>
          </Select>
        </FormControl>
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
        <Typography variant="h4">
          {result ===
          "Sorry, the maximum number of requests for today has been reached. Please sign in or try again tomorrow."
            ? ""
            : title}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line" }} variant="body">
          {result}
        </Typography>
      </Card>
    </Fragment>
  );
}
