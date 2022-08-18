import { Fragment } from "react";
import { Button } from "@mui/material";
import { signInWithGoogle, auth } from "../components/Login";
import StoryForm from "../components/StoryForm";
import { useAuthState } from "react-firebase-hooks/auth";

function CreateStory() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <Fragment>
      {user ? (
        <Button onClick={() => auth.signOut()}>Sign out</Button>
      ) : (
        <Button onClick={signInWithGoogle}>Sign in</Button>
      )}
      <StoryForm userData={user || "null"} />
    </Fragment>
  );
}

export default CreateStory;
