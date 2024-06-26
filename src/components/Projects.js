import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Project1 from "../assets/images/project-1.jpg";
import Project2 from "../assets/images/project-2.jpg";
import Project3 from "../assets/images/project-3.jpg";
import Project4 from "../assets/images/project-4.jpg";
import styles from "./styles/Projects.module.css";

export default function Projects() {
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
    <>
      <div>
        {isLargeScreen ? (
          <div className={styles.projects}>
            <Container
              sx={{
                maxWidth: { xs: "100%", md: 1000 },
                marginTop: { xs: 5, md: 10 },
                margin: "auto",
                padding: { xs: 1, md: 2 },
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
              <Container>
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
        ) : (
          <div className={styles.projects}>
            <Container
              sx={{
                maxWidth: { xs: "100%", md: 1000 },
                marginTop: 5,
                padding: { xs: 1, md: 2 },
              }}
            >
              <Typography
                sx={{ textAlign: "center", marginTop: 5 }}
                gutterBottom
                variant="h4"
                component="div"
              >
                Our <span className={styles.span}>Projects</span>
              </Typography>
              <Container>
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
        )}
      </div>
    </>
  );
}
