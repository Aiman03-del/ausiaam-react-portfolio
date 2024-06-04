import { Container, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpg";
import Project3 from "../assets/images/project-3.jpg";
import Project4 from "../assets/images/project-4.jpg";
import styles from "./styles/Projects.module.css";

export default class Projects extends Component {
  render() {
    return (
      <>
        <div className={styles.projects}>
          <Container
            sx={{
              maxWidth: 1000,
              height: "auto",
              margin: { xs: 1, md: 10 },
              padding: 2,
            }}
          >
            <Typography
              sx={{ textAlign: "center", marginTop: 5 }}
              gutterBottom
              variant="h3"
              component="div"
            >
              Our <span className={styles.span}>Projects</span>
            </Typography>
            <Container sx={{ marginTop: 5, marginBottom: 5 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div className={styles.projectContainer}>
                        <img src={Project1} alt="" />
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={styles.projectContainer}>
                        <img src={Project2} alt="" />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <div className={styles.projectContainer}>
                        <img src={Project3} alt="" />
                        <div className={styles.firstDescription}>
                          <h3>WEB DESIGN</h3>
                          <p>
                            This project showcases our expertise in modern web
                            design and development.
                          </p>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className={styles.projectContainer}>
                        <img src={Project4} alt="" />
                        <div className={styles.secondContainer}>
                          <h3>WEB DESIGN</h3>
                          <p>
                            Our latest project incorporates cutting-edge web
                            design techniques to deliver a seamless user
                            experience.
                          </p>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </div>
      </>
    );
  }
}
