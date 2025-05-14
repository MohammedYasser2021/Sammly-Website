import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Container, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { FaTimes } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import axios from "axios";
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MotionBox = motion(Box);

function SendUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
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
    submit: "Send"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    
    if (name && phone && message) {
      const data = {
        Name: name,
        Phone: phone,
        Date: new Date().toLocaleString('en-US')
      };

      axios.post(
        "https://sheetdb.io/api/v1/r8fxi8hlllcta",
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const templateParams = {
        from_name: name,
        message: `
          Name: ${name}
          Phone: ${phone}
          Message: ${message}
          Request Date: ${new Date().toLocaleString('en-US')}
        `
      };

      emailjs.send(
        'service_ohi49va',
        'template_unnyzap',
        templateParams,
        'OW5cLPqmyZR4ZC-Cb'
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
    <Box sx={{
      py: 8,
      px: { xs: 2, sm: 4 },
      overflowX: 'hidden',
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          maxWidth: '500px',
          mx: 'auto'
        }}>
          <Typography variant="h2" sx={{
            fontFamily: 'Cairo, sans-serif',
            fontWeight: 700,
            fontSize: { xs: '38px', sm: '48px' },
            lineHeight: '100%',
            letterSpacing: '0%',
            background: 'linear-gradient(180deg, #1DBFFE 0%, #0B60B0 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
            textTransform: 'uppercase',
            animation: `${gradientShift} 3s ease infinite`,
            textShadow: '0 10px 20px rgba(11, 96, 176, 0.1)'
          }}>
            {content.title}
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#455a64',
            mb: 3,
            fontSize: '1.2rem',
            fontWeight: 500,
            lineHeight: 1.4,
            opacity: 0.9
          }}>
            {content.subtitle}
          </Typography>
        </Box>

        <Box sx={{ 
          maxWidth: '600px', 
          mx: 'auto',
          p: { xs: 3, sm: 6 }
        }}>
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ position: 'relative', zIndex: 2 }}
          >
            <TextField
              fullWidth
              label={content.name}
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '4px'
                  },
                  '&::before': {
                    background: 'rgba(0, 0, 0, 0.08)'
                  },
                  '&::after': {
                    background: 'linear-gradient(90deg, #1DBFFE, #0B60B0)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                  },
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: '1px',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(11, 96, 176, 0.3)',
                  },
                  '&.Mui-focused': {
                    '& fieldset': {
                      borderColor: '#1a237e',
                      borderWidth: '1px'
                    },
                    '&::after': {
                      transform: 'scaleX(1)'
                    }
                  },
                  '& input': {
                    color: '#1a237e',
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '16px',
                    zIndex: 1
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1a237e',
                  fontWeight: 600
                }
              }}
            />
            
            <TextField
              fullWidth
              label={content.phone}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '4px'
                  },
                  '&::before': {
                    background: 'rgba(0, 0, 0, 0.08)'
                  },
                  '&::after': {
                    background: 'linear-gradient(90deg, #1DBFFE, #0B60B0)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                  },
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: '1px',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(11, 96, 176, 0.3)',
                  },
                  '&.Mui-focused': {
                    '& fieldset': {
                      borderColor: '#1a237e',
                      borderWidth: '1px'
                    },
                    '&::after': {
                      transform: 'scaleX(1)'
                    }
                  },
                  '& input': {
                    color: '#1a237e',
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '16px',
                    zIndex: 1
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1a237e',
                  fontWeight: 600
                }
              }}
            />
            
            <TextField
              fullWidth
              label={content.message}
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&::before, &::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '4px'
                  },
                  '&::before': {
                    background: 'rgba(0, 0, 0, 0.08)'
                  },
                  '&::after': {
                    background: 'linear-gradient(90deg, #1DBFFE, #0B60B0)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)'
                  },
                  '& fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: '1px',
                    transition: 'all 0.3s ease'
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(11, 96, 176, 0.3)',
                  },
                  '&.Mui-focused': {
                    '& fieldset': {
                      borderColor: '#1a237e',
                      borderWidth: '1px'
                    },
                    '&::after': {
                      transform: 'scaleX(1)'
                    }
                  },
                  '& textarea': {
                    color: '#1a237e',
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '16px',
                    zIndex: 1
                  }
                },
                '& .MuiInputLabel-root': {
                  color: 'rgba(0, 0, 0, 0.6)',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#1a237e',
                  fontWeight: 600
                }
              }}
            />
            
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                py: 2,
                background: 'linear-gradient(45deg, #1a237e, #0277bd)',
                borderRadius: '12px',
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                transition: 'all 0.3s ease-in-out',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 10px 15px rgba(11, 96, 176, 0.15)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 15px 25px rgba(26,35,126,0.25)',
                  background: 'linear-gradient(45deg, #283593, #0288d1)'
                }
              }}
            >
              {content.submit}
            </Button>
          </Box>
        </Box>
      </Container>

      <Dialog
        open={openAlert}
        onClose={() => setOpenAlert(false)}
        PaperProps={{
          sx: {
            borderRadius: '20px',
            minWidth: '300px',
            maxWidth: '90%',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            border: `2px solid ${alertSuccess ? '#4CAF50' : '#f44336'}`,
            backdropFilter: 'blur(10px)',
            background: 'rgba(255, 255, 255, 0.95)',
            overflow: 'hidden'
          }
        }}
      >
        <DialogTitle sx={{ 
          color: alertSuccess ? '#4CAF50' : '#f44336', 
          textAlign: 'center',
          pt: 3,
          pb: 1,
          fontSize: '1.5rem',
          fontWeight: 600
        }}>
          {alertSuccess ? "Success!" : "Alert!"}
          <IconButton
            onClick={() => setOpenAlert(false)}
            aria-label="close"
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: alertSuccess ? '#4CAF50' : '#f44336',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'rotate(90deg)',
                background: 'rgba(0,0,0,0.05)'
              }
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
              textAlign: 'center',
              px: 2
            }}
          >
            <Typography sx={{ 
              fontSize: '1.1rem',
              color: '#455a64',
              lineHeight: 1.5
            }}>
              {alertMessage}
            </Typography>
          </MotionBox>
          
          {alertSuccess && (
            <MotionBox
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              sx={{ 
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#4CAF50',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mt: 2
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
    </Box>
  );
}

export default SendUs;