import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import axios from "axios";
import { motion, useAnimation, useInView } from "framer-motion";
import { keyframes } from "@emotion/react";

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MotionBox = motion(Box);
const MotionTextField = motion(TextField);
const MotionButton = motion(Button);

// Animation for elements that appear on scroll
const scrollVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Staggered animation for form fields
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const inputAnimation = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
};

const buttonAnimation = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
    },
  },
  tap: {
    scale: 0.98,
  },
};

const textFieldSx = {
  mb: 4,
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    transition: "all 0.4s ease",
    position: "relative",
    backdropFilter: "blur(10px)",
    backgroundColor: "transparent",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "2px",
      borderRadius: "4px",
      background: "rgba(255, 255, 255, 0.06)",
    },
    "& fieldset": {
      borderColor: "#64b5f6",
      borderWidth: "1px",
      transition: "all 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "#64b5f6",
    },
    "&.Mui-focused": {
      "& fieldset": {
        borderColor: "#64b5f6",
        borderWidth: "1px",
        boxShadow: "0 4px 20px rgba(100, 181, 246, 0.08)",
      },
    },
    "& input, & textarea": {
      color: "#ffffff",
      fontWeight: 500,
      fontSize: "1rem",
      padding: "16px",
      zIndex: 1,
    },
  },
  "& .MuiInputLabel-root": {
    color: "#ffffff",
    fontWeight: 500,
    transition: "all 0.3s ease",
    fontSize: "1rem",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#64b5f6",
    fontWeight: 600,
  },
};

// ScrollReveal component to handle scroll animations
const ScrollReveal = ({ children }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false, threshold: 0.2 });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={scrollVariants}
    >
      {children}
    </motion.div>
  );
};

function SendUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(true);

  const content = {
    title: "Send Us",
    subtitle: "We're Here to Help",
    name: "Name",
    phone: "Phone Number",
    message: "Message",
    submit: "Send",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;

    if (name && phone && message) {
      const data = {
        Name: name,
        Phone: phone,
        Date: new Date().toLocaleString("en-US"),
      };

      axios.post("https://sheetdb.io/api/v1/r8fxi8hlllcta", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const templateParams = {
        from_name: name,
        message: `
          Name: ${name}
          Phone: ${phone}
          Message: ${message}
          Request Date: ${new Date().toLocaleString("en-US")}
        `,
      };

      emailjs
        .send(
          "service_ohi49va",
          "template_unnyzap",
          templateParams,
          "OW5cLPqmyZR4ZC-Cb"
        )
        .then(() => {
          setAlertSuccess(true);
          setAlertMessage("Your information has been sent successfully!");
          setOpenAlert(true);
          setFormData({ name: "", phone: "", message: "" });
        })
        .catch((error) => {
          console.error("Error:", error);
          setAlertSuccess(false);
          setAlertMessage("Error submitting data");
          setOpenAlert(true);
        });
    } else {
      setAlertSuccess(false);
      setAlertMessage("Please enter all information.");
      setOpenAlert(true);
    }
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "tween", ease: "anticipate", duration: 0.5 }}
      sx={{
        py: 8,
        px: { xs: 2, sm: 4 },
        overflowX: "hidden",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4 } }}>
        <ScrollReveal>
          <Box
            sx={{
              textAlign: "center",
              mb: 6,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Cairo, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "36px", sm: "36px" },
                lineHeight: "110%",
                letterSpacing: "0%",
                background: "linear-gradient(180deg, #1DBFFE 0%, #0B60B0 100%)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                color: "transparent",
                mb: 2,
                textTransform: "uppercase",
                animation: `${gradientShift} 3s ease infinite`,
                textShadow: "0 10px 20px rgba(11, 96, 176, 0.1)",
              }}
            >
              {content.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#455a64",
                mb: 3,
                fontSize: "1.2rem",
                fontWeight: 500,
                lineHeight: 1.5,
                opacity: 0.9,
              }}
            >
              {content.subtitle}
            </Typography>
          </Box>
        </ScrollReveal>

        <ScrollReveal>
          <Box
            sx={{
              maxWidth: "600px",
              mx: "auto",
              p: { xs: 3, sm: 6 },
              borderRadius: "24px",
              backdropFilter: "blur(8px)",
              background: "rgba(255, 255, 255, 0.01)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ position: "relative", zIndex: 2 }}
              >
                <MotionTextField
                  fullWidth
                  label={content.name}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldSx}
                  variants={inputAnimation}
                />

                <MotionTextField
                  fullWidth
                  label={content.phone}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  sx={textFieldSx}
                  variants={inputAnimation}
                />

                <MotionTextField
                  fullWidth
                  label={content.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  sx={textFieldSx}
                  variants={inputAnimation}
                />

                <MotionButton
                  type="submit"
                  variant="contained"
                  fullWidth
                  variants={buttonAnimation}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  sx={{
                    py: 2,
                    background: "linear-gradient(45deg, #1a237e, #0277bd)",
                    borderRadius: "16px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    transition: "all 0.3s ease-in-out",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 10px 15px rgba(11, 96, 176, 0.15)",
                    overflow: "hidden",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "all 0.4s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 15px 25px rgba(26,35,126,0.25)",
                      background: "linear-gradient(45deg, #283593, #0288d1)",
                      "&::before": {
                        left: "100%",
                      },
                    },
                  }}
                >
                  {content.submit}
                </MotionButton>
              </Box>
            </motion.div>
          </Box>
        </ScrollReveal>
      </Container>

      <Dialog
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            minWidth: "320px",
            maxWidth: "90%",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            border: `2px solid ${alertSuccess ? "#4CAF50" : "#f44336"}`,
            backdropFilter: "blur(10px)",
            background: "rgba(255, 255, 255, 0.95)",
            overflow: "hidden",
          },
        }}
      >
        <DialogTitle
          sx={{
            color: alertSuccess ? "#4CAF50" : "#f44336",
            textAlign: "center",
            pt: 3,
            pb: 1,
            fontSize: "1.5rem",
            fontWeight: 600,
          }}
        >
          {alertSuccess ? "Success!" : "Alert!"}
          <IconButton
            onClick={() => setOpenAlert(false)}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: alertSuccess ? "#4CAF50" : "#f44336",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "rotate(90deg)",
                background: "rgba(0,0,0,0.05)",
              },
            }}
          >
            <FaTimes />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pb: 4, pt: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            sx={{
              textAlign: "center",
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "#455a64",
                lineHeight: 1.5,
              }}
            >
              {alertMessage}
            </Typography>
          </MotionBox>

          {alertSuccess && (
            <MotionBox
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              sx={{
                               width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "#4CAF50",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mt: 2,
              }}
            >
              <Box component="svg" viewBox="0 0 24 24" width="40" height="40">
                <motion.path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  fill="#fff"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
                />
              </Box>
            </MotionBox>
          )}
        </DialogContent>
      </Dialog>
    </MotionBox>
  );
}

export default SendUs;

