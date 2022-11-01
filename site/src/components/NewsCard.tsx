import {
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardHeader,
} from "@mui/material";

import LinkIcon from '@mui/icons-material/Link';

interface NewsCardProps {
  heading: string;
  imageURL: string;
  summary: string;
  url: string;
  date: Date;
}

const NewsCard: React.FC<NewsCardProps> = ({ heading, imageURL, summary, url, date }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader subheader={`Published: ${date.toString().substring(0,10)}`} />
      <CardMedia component="img" height="140" image={imageURL} alt={heading} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<LinkIcon/>} size="small" href={url}>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
