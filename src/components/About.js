import React, { Component } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import profileImage from "../assets/images/About.png";
import styles from "./styles/About.module.css";

export default class About extends Component {
  render() {
    return (
      <Container sx={{ background: "#121212" }}>
        <Card
          sx={{
            maxWidth: 1000,
            marginTop: 10,
            margin: { xs: 1, md: 10 },
            padding: 2,
          }}
        >
          <Container sx={{ marginTop: 5 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <div className={styles.profilePicContainer}>
                  <CardMedia
                    className={styles.profilePic}
                    component="img"
                    sx={{
                      maxHeight: 400,
                      maxWidth: 400,
                      width: { xs: 200, md: 300 },
                      height: { xs: 200, md: 300 },
                      marginTop: 12,
                      borderRadius: 50,
                      boxShadow: "0 0 30px #F5000C",
                    }}
                    image={profileImage}
                    alt="Profile"
                  />
                </div>
              </Grid>
              <Grid className={styles.about} item xs={12} md={7}>
                <CardContent sx={{ marginTop: { xs: 2, md: 10 } }}>
                  <Typography gutterBottom variant="h3" component="div">
                    About <span className={styles.span}>Me</span>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    UX/UI Designer{" "}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20 }}
                    variant="body2"
                    color="text.secondary"
                  >
                    I am a passionate designer and developer with a knack for
                    creating stunning and user-friendly digital experiences.
                    With a background in both creative design and technical
                    development, I strive to bridge the gap between aesthetics
                    and functionality.
                  </Typography>
                  <CardActions>
                    <a href="#">
                      <button>See more</button>
                    </a>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Container>
        </Card>
      </Container>
    );
  }
}
