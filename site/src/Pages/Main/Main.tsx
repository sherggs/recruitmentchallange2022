import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from '@mui/icons-material/Work';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import HomePage from "./HomePage.tsx/HomePage";
import NavDrawer from "../../components/NavDrawer";
import NewsPage from "./NewsPage/NewsPage";


const drawerWidth = 240;

function ProtectedArea() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          color={"inherit"}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                display: {
                  xs: "none",
                  sm: "contents",
                  md: "contents",
                  lg: "contents",
                  xl: "contents",
                },
              }}
            >
              < WorkIcon />
            </IconButton> */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "contents",
                  md: "contents",
                  lg: "contents",
                  xl: "contents",
                },
              }}
            >
              <img src={require("../../images/logo.png")} height={20} />
            </Box>
            <Typography variant="h6" noWrap component="div" paddingLeft={2}>
              Recruitment Day Challange!
            </Typography>
            <Box flexGrow={1} />

          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <NavDrawer />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <NavDrawer />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default ProtectedArea;
