import { Typography } from "@mui/material";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <Typography variant="h4">
        Little fiction is a tool that sparks creativity.
      </Typography>
      <Typography>
        This app uses the GPT-3 AI model to demonstrate a simple but interesting
        use case of this powerful technology. If you are more interested check
        the openAI website for more information.
      </Typography>
      <Typography>
        DALLE-2 pictures are added manually to the favorite stories while openAI
        releases an official API.
      </Typography>
    </div>
  );
}
