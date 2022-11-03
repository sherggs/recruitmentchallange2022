import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsCard from "./NewsCard";

const NewsGrid: React.FC<{}> = () => {
  //using use state 
  const [newsData, setNewsData] = useState<any[]>([]);

  async function LoadNews() {
    const request = await fetch('http://localhost:3002/')
    const response = await request.json()
    setNewsData(response.articles)
    
  }

  useEffect(() => {
    LoadNews()
  }, [])

  return (
    <>
      <Box>
        <Grid container spacing={3} 
        display = "flex"
        margin={1.5}
        gap="30px"
        >
        
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={3}
            display="contents"
            justifyContent={"center"}
            
          >
            {newsData.map(news => (
              
              <NewsCard    
              //mapping the news data into the news card 
              key= {news.title} // title is unique to the news
              heading={news.title} //news heading is the title 
              imageURL={news.image} //the image url from the json with the url
              summary={news.description} //the news description 
              url={news.url} //link to the news content 
              date={news.publishedAt} //publish date of the news
            />

            ))}
            
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewsGrid;
