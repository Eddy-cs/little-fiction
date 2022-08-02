//Main page displaying all stories
import { Fragment, useEffect, useState } from "react";
import StoryList from "../components/StoryList";

function HomePage() {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getStories() {
      console.log("1");
      const response = await fetch("/api/firebase-config");
      console.log(response, "pre");
      const data = await response.json();
      setStories(data);
      console.log(data, "post");
      setIsLoading(true);
      console.log("2");
    }
    getStories();
    console.log("rendered");
  }, []);

  return (
    <Fragment>
      {isLoading === true ? (
        <StoryList stories={stories} />
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
}

export default HomePage;
