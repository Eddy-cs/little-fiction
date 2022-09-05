import { Fragment } from "react";
import Image from "next/image";
import { Card, CardContent, Typography } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import styles from "./StoryList.module.css";

function StoryList(props) {
  const list = props.stories.map((e) => (
    <Card key={e.id}>
      <CardContent>
        <Typography variant="h5">{e.title}</Typography>
      </CardContent>
      {e.img != undefined ? (
        <Image
          width={500}
          height={500}
          className={styles.list__img}
          src={e.img}
          alt={e.alt}
        ></Image>
      ) : null}
      <CardContent>
        <Typography sx={{ whiteSpace: "pre-line" }} variant="body1">
          {e.story}
        </Typography>
      </CardContent>
    </Card>
  ));

  return (
    <Fragment>
      <Typography p={2} variant="h4">
        {props.pageTitle}
      </Typography>
      <Masonry
        defaultHeight={41000}
        defaultColumns={2}
        defaultSpacing={2}
        columns={{ xs: 1, sm: 2, md: 3 }}
        spacing={2}
      >
        {list.map((list, index) => (
          <div key={index} sx={{ list }}>
            {list}
          </div>
        ))}
      </Masonry>
    </Fragment>
  );
}

export default StoryList;
