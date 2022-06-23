import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
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
      <NavbarLayout />
      <StoryForm onAddStory={storeStoryHandler} />
    </Fragment>
  );
}

export default CreateStory;
