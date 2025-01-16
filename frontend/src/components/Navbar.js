import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Matt Burns
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/skills">Skills</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/resume">Resume</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
