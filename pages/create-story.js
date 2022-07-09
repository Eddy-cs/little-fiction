import { Fragment } from "react";
import StoryForm from "../components/StoryForm";

function CreateStory() {
  function storeStoryHandler(storyData) {
    fetch("https://nextjs-dummy-api-default-rtdb.firebaseio.com/stories.json", {
      method: "POST",
      body: JSON.stringify(storyData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <Fragment>
      <StoryForm onAddStory={storeStoryHandler} />
    </Fragment>
  );
}

export default CreateStory;
