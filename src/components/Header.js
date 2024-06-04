import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (!isMobile) {
    return null; // ডেক্সটপে হাইড হয়ে যাবে
  }

  return (
    <>
      <div>
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                AU
              </Typography>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleNav}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer anchor="right" open={isNavOpen} onClose={toggleNav}>
            <List>
              <ListItem button component={Link} to="/" onClick={toggleNav}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/about" onClick={toggleNav}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/projects"
                onClick={toggleNav}
              >
                <ListItemText primary="Projects" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/services"
                onClick={toggleNav}
              >
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem
                button
                component={Link}
                to="/contact"
                onClick={toggleNav}
              >
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Drawer>
        </div>
      </div>
    </>
  );
}

export default Header;
