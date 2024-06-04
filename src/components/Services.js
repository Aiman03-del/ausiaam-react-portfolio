/* eslint-disable jsx-a11y/anchor-is-valid */
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import styles from "./styles/Services.module.css";

export default class Services extends Component {
  render() {
    return (
      <>
        <Container
          sx={{
            maxWidth: { xs: "100%", md: 1000 },
            marginTop: { xs: 5, md: 10 },
            margin: "auto",
            padding: { xs: 1, md: 2 },
          }}
        >
          <Typography
            className={styles.services}
            sx={{
              margin: "auto",
              textAlign: "center",
            }}
            gutterBottom
            variant="h3"
            component="div"
          >
            <span className={styles.span}>Our</span> Services
          </Typography>
          <div className={styles.designer}>
            <Container
              sx={{
                width: "100%",
                marginTop: { xs: 3, md: 5 },
                marginLeft: "auto",
                marginRight: "auto",
                padding: { xs: 1, md: 2 },
              }}
            >
              <Card
                sx={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: { xs: 5, md: 10 },
                  textAlign: "center",
                  boxShadow: "0 0 30px rgba(1, 127, 254, 0.6)",
                  padding: { xs: 1, md: 2 },
                }}
              >
                <CardContent>
                  <div>
                    <a>
                      <AutoFixHighIcon
                        sx={{
                          color: "#017ffe",
                          fontSize: { xs: 40, md: 60 },
                        }}
                      />
                    </a>
                  </div>
                  <Typography
                    sx={{ textShadow: "0 0 15px #017ffe" }}
                    gutterBottom
                    variant="h3"
                    component="div"
                  >
                    UX/UI Designer
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: 16, md: 25 } }}
                    variant="body2"
                    color="text.secondary"
                  >
                    UI/UX design is the process of designing user interfaces and
                    experiences that enhance the functionality and satisfaction
                    of a product. UI design focuses on the visual elements of an
                    interface, such as buttons, icons, and layouts, ensuring
                    that users can easily interact with the product. UX design
                    emphasizes the overall user experience, making sure that the
                    product is easy to use, efficient, and enjoyable. A
                    well-designed UI/UX connects users more deeply with the
                    product and provides a positive experience during use.
                  </Typography>
                  <CardActions sx={{ margin: "auto" }}>
                    <button className={styles.btn}>See More</button>
                  </CardActions>
                </CardContent>
              </Card>
            </Container>
          </div>
        </Container>
      </>
    );
  }
}
