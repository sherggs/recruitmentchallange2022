import Typography from "@mui/material/Typography";
import NewsGrid from "../../../components/NewsGrid";

const NewsPage: React.FC<{}> = () => {
  return (
    <>
      <Typography variant="h3" component={"h1"} paddingBottom={2}>
        Legionella News
      </Typography>
      <NewsGrid />
    </>
  );
};

export default NewsPage;
