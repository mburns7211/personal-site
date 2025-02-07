import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';

const Skills = () => {
  const languages = [
    'Python', 'Java', 'JavaScript', 'SQL'
  ];

  const platforms = [
    'AWS', 'Snowflake', 'Matillion'
  ];

  const packages = [
    'Spark', 'Kafka', 'Pandas', 'Pytorch', 'Tensorflow'
  ];

  const concepts = [
    'Data Engineering', 'AI/ML', 'CI/CD', 'TDD'
  ];

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center">Languages</Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        {languages.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" align="center">Platforms</Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        {platforms.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h4" align="center">Packages and Products</Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        {packages.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" align="center">Concepts</Typography>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        {concepts.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ padding: 2, textAlign: 'center' }}>
              <Typography variant="h6">{skill}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
