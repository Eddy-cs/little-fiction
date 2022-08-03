import { Fragment, useEffect, useState } from "react";
import StoryList from "../components/StoryList";

function HomePage() {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getStories() {
      const response = await fetch("/api/firebase-config");
      const data = await response.json();
      setStories(data);
      setIsLoading(true);
    }
    getStories();
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
