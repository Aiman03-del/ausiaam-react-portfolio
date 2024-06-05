import emailjs from "@emailjs/browser";
import { Box, Card, Container, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import styles from "./styles/Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [fileSizeError, setFileSizeError] = useState("");
  const [message, setMessage] = useState(""); // Message state to show success/failure message

  const sendEmail = (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];

    if (file && file.size > 50000) {
      setFileSizeError("The file size exceeds the 50KB limit.");
      return;
    }

    const serviceID = "service_f6sp9ta";
    const templateID = "template_o90z4br";
    const publicKey = "XZTT3FqzY8xg6Wz90";

    const formData = new FormData(form.current);
    formData.append("attachment", file);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setFileSizeError("");
        setMessage("Email sent successfully!"); // Set success message
      },
      (error) => {
        console.log("FAILED...", error.text);
        setMessage("Failed to send email. Please try again."); // Set failure message
      }
    );
  };

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
            onSubmit={sendEmail}
            ref={form}
            encType="multipart/form-data"
          >
            <Container sx={{ marginTop: -2 }}>
              <div>
                <TextField
                  sx={{ width: "100%" }}
                  id="name-input"
                  name="from_name"
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
                  name="email"
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
                  name="message"
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
                {fileSizeError && (
                  <Typography sx={{ color: "red", marginTop: 1, fontSize: 12 }}>
                    {fileSizeError}
                  </Typography>
                )}{" "}
                {message && (
                  <Typography
                    sx={{
                      color: message.includes("successfully") ? "green" : "red",
                      marginTop: 2,
                      fontSize: 16,
                    }}
                  >
                    {message}
                  </Typography>
                )}
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
