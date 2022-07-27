import { db } from "./api/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { Fragment } from "react";
import StoryForm from "../components/StoryForm";

function CreateStory() {
  const storiesCollectionRef = collection(db, "stories");

  async function storeStoryHandler(storyData) {
    console.log(storyData, "create-story");
    await addDoc(storiesCollectionRef, storyData);
    // fetch("https://nextjs-dummy-api-default-rtdb.firebaseio.com/stories.json", {
    //   method: "POST",
    //   body: JSON.stringify(storyData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  }

  return (
    <Fragment>
      <StoryForm onAddStory={storeStoryHandler} />
    </Fragment>
  );
}

export default CreateStory;
