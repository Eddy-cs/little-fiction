//Main page displaying all stories
import { Fragment, useEffect, useState } from "react";
import StoryList from "../components/StoryList";
import { db } from "./api/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function HomePage() {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const storiesCollectionRef = collection(db, "stories");

  useEffect(() => {
    async function getStories() {
      const data = await getDocs(storiesCollectionRef);
      const dataObject = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStories(dataObject);
      setIsLoading(true);
    }
    console.log([stories, "stories"]);
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
