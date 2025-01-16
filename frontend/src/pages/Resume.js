import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import ResumeFile from '../resources/Matthew_Burns_Resume.pdf';  // Import the resume PDF

const Resume = () => {
  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center">Resume</Typography>
      <Typography variant="body1" sx={{ marginTop: 3 }}>
        Download my full resume to learn more about my experience and skills.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        href={ResumeFile}  // Set href to the imported file
        target="_blank"    // Open in a new tab
        download="Matthew_Burns_Resume.pdf"  // This will trigger a download action
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default Resume;
