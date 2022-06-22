import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import StoryForm from "../components/StoryForm";

function CreateStory() {
  // function storeStoryHandler(storyData) {
  //   fetch("https://nextjs-dummy-api-default-rtdb.firebaseio.com/stories.json", {
  //     method: "POST",
  //     body: JSON.stringify(storyData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
  //Add to COMPONENT --> onAddStory={storeStoryHandler}

  return (
    <Fragment>
      <NavbarLayout />
      <StoryForm />
    </Fragment>
  );
}

export default CreateStory;
