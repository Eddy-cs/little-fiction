//Main page displaying all stories
import { Fragment } from "react";
import Link from "next/link";

function HomePage() {
  return (
    <Fragment>
      <h1>Here are some stories</h1>
      <Link href="/create-story">Create new story</Link>
    </Fragment>
  );
}

export default HomePage;
