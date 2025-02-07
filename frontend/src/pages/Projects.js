import React from 'react';
import { Typography, Box, Card, CardContent, Grid, Button } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      title: 'Algorithmic Trading',
      description: 'Learning from Python for Algorithmic Trading by O\'reilly',
      link: 'https://github.com/mburns7211/pyalgo'
    },
    {
      title: 'Personal Site',
      description: 'Source Code for This Site',
      link: 'https://github.com/mburns7211/personal-site'
    },
    {
      title: 'Watermark Python Library',
      description: 'A simple python package for adding watermarks to an image.  Available on pypi as multiwatermark',
      link: 'https://github.com/mburns7211/multiwatermark'
    }
  ];

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center">Projects</Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {project.description}
                </Typography>
                <Button href={project.link} variant="outlined" sx={{ marginTop: 2 }}>
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
