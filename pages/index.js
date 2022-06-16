//Main page displaying all stories
import { Fragment } from "react";
import { useState } from "react";
import NavbarLayout from "../components/Navbar";
import StoryList from "../components/StoryList";

function HomePage() {
  const [stories, setStories] = useState({
    id: 1,
    story: "This is a dummy story 1",
  });

  return (
    <Fragment>
      <NavbarLayout />
      <StoryList stories={stories} />
    </Fragment>
  );
}

export default HomePage;
