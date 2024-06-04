import { Box, Card, Container, TextField, Typography } from "@mui/material";
import React, { Component } from "react";
import styles from "./styles/Contact.module.css";

export default class Contact extends Component {
  render() {
    return (
      <>
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
            Contact <span className={styles.span}>Me?</span>
          </Typography>
          <Card
            className={styles.contact}
            sx={{
              maxWidth: "100%",
              width: { xs: "100%", sm: 500 },
              margin: "auto",
              marginTop: 10,
              marginBottom: 3,
            }}
            variant="outlined"
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                marginTop: 4,
              }}
            >
              <Container sx={{ marginTop: -2 }}>
                <div>
                  <TextField
                    sx={{ width: "100%" }}
                    id="standard-basic"
                    label="NAME"
                    variant="standard"
                    type="text"
                    required
                    InputLabelProps={{
                      required: false,
                    }}
                  />
                  <br />
                  <TextField
                    sx={{ width: "100%", marginTop: 2 }}
                    id="email-input"
                    label="EMAIL"
                    variant="standard"
                    type="email"
                    required
                    InputLabelProps={{
                      required: false,
                    }}
                  />
                  <br />
                  <TextField
                    sx={{ width: "100%", marginTop: 2 }}
                    id="message-input"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={2}
                    required
                    InputLabelProps={{
                      required: false,
                    }}
                  />
                </div>
                <div style={{ marginTop: 20 }}>
                  <label
                    htmlFor="file-upload"
                    className={styles.customFileUpload}
                  >
                    <span> ATTACH FILE</span>
                    <input
                      id="file-upload"
                      type="file"
                      name="attachment"
                      required
                    />
                  </label>
                </div>
                <button className={styles.btn} type="submit">
                  Submit now
                </button>
              </Container>
            </Box>
          </Card>
        </Container>
      </>
    );
  }
}
