import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import FeedIcon from "@mui/icons-material/Feed";
import HomeIcon from "@mui/icons-material/Home";
import LinkIcon from '@mui/icons-material/Link';
import { Link } from "react-router-dom";

const NavDrawer: React.FC<{}> = () => {

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding button component={Link} to={"/home"}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Instructions"} />
          </ListItemButton>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding button component={Link} to={"/news"}>
          <ListItemButton>
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary={"News"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton
        href="https://nantltd.co.uk/about-us/"
        target={"blank"}
        >
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary={"More about Nant"} />
        </ListItemButton>
      </ListItem>
    </div>
  );
};

export default NavDrawer;
