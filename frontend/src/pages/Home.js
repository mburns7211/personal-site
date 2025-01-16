import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', marginTop: 5 }}>
      <Typography variant="h2">Hello, I'm Matt Burns!</Typography>
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        I am passionate about solving hard problems with code. 
      </Typography>
      <Typography>
        Explore my personal work and see what I'm interested in!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
        component={Link}
        to="/projects"
      >
        See My Projects
      </Button>
    </Box>
  );
};

export default Home;
