import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { Link } from "react-scroll";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import styles from "./styles/Nav.module.css";
export default function Nav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return null; // মোবাইল ডিভাইসে অ্যাপবার হাইড করে দেবে
  }

  return (
    <>
      <div>
        <AppBar sx={{ background: "#121212" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 25 }}>
              AU
            </Typography>
            <Box sx={{ marginRight: 23 }}>
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                    textShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                  },
                }}
              >
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </Button>
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                    textShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                  },
                }}
              >
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </Button>
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                    textShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                  },
                }}
              >
                <Link to="services" smooth={true} duration={500}>
                  Services
                </Link>
              </Button>
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                    textShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                  },
                }}
              >
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </Button>
              <Button
                color="inherit"
                sx={{
                  "&:hover": {
                    boxShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                    textShadow: "0 0 10px rgba(1, 127, 254, 0.6)",
                  },
                }}
              >
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
      <div className={styles.routes}>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}
