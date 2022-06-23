//Main page displaying all stories
import { Fragment, useEffect } from "react";
import { useState } from "react";
import NavbarLayout from "../components/Navbar";
import StoryList from "../components/StoryList";

function HomePage() {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getStories() {
      const response = await fetch(
        "https://nextjs-dummy-api-default-rtdb.firebaseio.com/stories.json"
      );
      const responseJSON = await response.json();

      const storiesArray = [];
      for (const key in responseJSON) {
        const story = {
          id: key,
          story: responseJSON[key],
        };
        storiesArray.push(story);
      }

      setStories(storiesArray);
      setIsLoading(true);
      console.log(responseJSON);
      console.log(isLoading);
      console.log(storiesArray);
    }
    getStories();
  }, []);
  return (
    <Fragment>
      <NavbarLayout />
      {isLoading === true ? (
        <StoryList stories={stories} />
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
}

export default HomePage;
