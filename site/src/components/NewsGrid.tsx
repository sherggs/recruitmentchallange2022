import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsCard from "./NewsCard";

const NewsGrid: React.FC<{}> = () => {

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            display="flex"
            justifyContent={"center"}
          >
            <NewsCard
              heading={"Example News Heading"}
              imageURL={require("../images/placeholder.jpg")}
              summary={"Nant are water safety experts!"}
              url={"https://nantltd.co.uk"}
              date={new Date()}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewsGrid;
