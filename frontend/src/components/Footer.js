import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="body2" color="textSecondary">
        © 2025 Matt Burns. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
