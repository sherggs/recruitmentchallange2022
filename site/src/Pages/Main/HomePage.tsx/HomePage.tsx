import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const HomePage: React.FC<{}> = () => {
  return (
    <>
      <Typography variant="h3" component={"h1"} paddingBottom={2}>
        Welcome
      </Typography>
      <Typography variant="body1">
        As part of your role at Nant Ltd, you will get to work with both the
        front-end and back-end. The technology stack you will be using will be
        Typescript with React as our front-end, node express for microservices
        and MySQL as the database.
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        For those familiar with Typescript and React, a challange to
        take away and try has been set up for you. Download the code from the
        Github repository at <a>https://github.com/nantdev1/recruitmentchallange2022</a> (QR code below)
      </Typography>
      <Box display={"flex"} justifyContent={"center"} paddingTop={5} paddingBottom={5}>
        <img src={require("../../../images/qrcode.jpg")} height={250} />
      </Box>
      <Typography variant="body1">
        You will need to replicate the news page shown on this site. The page
        and API have been set up for you but you will need to fetch data from
        the API and display it in news card components.
      </Typography>
      <Typography variant="h4" paddingTop={2}>
        Hints:
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        - You only need to modify the NewsGrid.tsx file.
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        - Use fetch to get data from the API and store the data via the React
        useState Hook
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        - Use the React useEffect Hook so that data is requested from the API and stored on
        initial render of the news grid component
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        - Map the stored data to the news card component
      </Typography>
      <Typography variant="body1" paddingTop={2}>
        - Look in the interfaces folder for information about the structure of
        the data requested from the API
      </Typography>
    </>
  );
};

export default HomePage;
