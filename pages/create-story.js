//Create a new story
//Add new story to main page

import { Fragment } from "react";
import NavbarLayout from "../components/Navbar";
import { useRef } from "react";

function CreateStory() {
  const topicRef = useRef();

  return (
    <Fragment>
      <NavbarLayout />
      <h1>Create a story!!</h1>
      <h1>Topic</h1>
      <input ref={topicRef} type="text" />
      <h1>Theme</h1>
      <input type="text" />
    </Fragment>
  );
}

export default CreateStory;
