/* eslint-disable jsx-a11y/anchor-is-valid */
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { CardMedia, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import profileImage from "../assets/images/profile.jpg";
import All from "./All";
import styles from "./styles/Home.module.css";

export default function Home() {
  const [isLargeScreen, setIsLargeScreen] = React.useState(
    window.innerWidth > 768
  );

  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isLargeScreen ? (
        <div>
          <Container>
            <Card
              sx={{
                maxWidth: 1000,
                height: "auto",
                margin: { xs: 1, md: 10 },
                padding: 2,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <CardContent
                    sx={{ margin: { xs: 2, md: 10 } }}
                    className={styles.intro}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      Hello it’s Me
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      AIMAN UDDIN
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      And I’m <span className={styles.span}>A</span>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      A Creative ✦ Designer Based in{" "}
                      <span className={styles.span}>Chattagram</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      I am passionate about designing and developing
                      user-centric digital solutions. With a keen eye for detail
                      and a love for creativity, I bring ideas to life through
                      innovative designs and intuitive interfaces.
                    </Typography>
                    <div className={styles.icons}>
                      <a href="https://linkedin.com">
                        <LinkedInIcon />
                      </a>
                      <a href="https://facebook.com">
                        <FacebookIcon />
                      </a>
                      <a href="https://instagram.com">
                        <InstagramIcon />
                      </a>
                      <a href="https://twitter.com">
                        <XIcon />
                      </a>
                    </div>
                    <CardActions sx={{ marginLeft: -2 }}>
                      <a href="/portfolio">
                        <button>Portfolio</button>
                      </a>
                      <a href="/contact">
                        <button>Hire me</button>
                      </a>
                    </CardActions>
                  </CardContent>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardMedia
                    className={styles.profilePic}
                    component="img"
                    sx={{
                      width: { xs: 200, md: 300 },
                      height: { xs: 200, md: 300 },
                      margin: 10,
                      borderRadius: 50,
                      boxShadow: "0 0 30px rgba(1, 127, 254, 0.6)",
                    }}
                    image={profileImage}
                    alt="Profile"
                  />
                </Grid>
              </Grid>
            </Card>
          </Container>
        </div>
      ) : (
        <div>
          <Container>
            <Card
              sx={{
                maxWidth: 1000,
                height: "auto",
                margin: { xs: 1, md: 10 },
                padding: 2,
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <CardContent
                    sx={{ margin: { xs: 2, md: 10 } }}
                    className={styles.intro}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      Hello it’s Me
                    </Typography>
                    <Typography gutterBottom variant="h3" component="div">
                      AIMAN UDDIN
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      And I’m <span className={styles.span}>A</span>
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      A Creative ✦ Designer Based in{" "}
                      <span className={styles.span}>Chattagram</span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      I am passionate about designing and developing
                      user-centric digital solutions. With a keen eye for detail
                      and a love for creativity, I bring ideas to life through
                      innovative designs and intuitive interfaces.
                    </Typography>
                    <div className={styles.icons}>
                      <a href="https://linkedin.com">
                        <LinkedInIcon />
                      </a>
                      <a href="https://facebook.com">
                        <FacebookIcon />
                      </a>
                      <a href="https://instagram.com">
                        <InstagramIcon />
                      </a>
                      <a href="https://twitter.com">
                        <XIcon />
                      </a>
                    </div>
                    <CardActions sx={{ marginLeft: -2 }}>
                      <a href="/portfolio">
                        <button>Portfolio</button>
                      </a>
                      <a href="/contact">
                        <button>Hire me</button>
                      </a>
                    </CardActions>
                  </CardContent>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CardMedia
                    className={styles.profilePic}
                    component="img"
                    sx={{
                      width: { xs: 200, md: 300 },
                      height: { xs: 200, md: 300 },
                      margin: 10,
                      borderRadius: 50,
                      boxShadow: "0 0 30px rgba(1, 127, 254, 0.6)",
                    }}
                    image={profileImage}
                    alt="Profile"
                  />
                </Grid>
              </Grid>
            </Card>
          </Container>
          <div>
            <All />
          </div>
        </div>
      )}
    </div>
  );
}
