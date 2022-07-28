import { Fragment } from "react";
import StoryForm from "../components/StoryForm";

function CreateStory() {
  async function storeStoryHandler(storyData) {
    const response = await fetch("/api/firebase-config", {
      method: "POST",
      body: JSON.stringify(storyData),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
    console.log(storyData, "create-story");
  }

  return (
    <Fragment>
      <StoryForm onAddStory={storeStoryHandler} />
    </Fragment>
  );
}

export default CreateStory;
