import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Here you can implement form submission to backend or email service.
  };

  return (
    <Box sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center">Contact Me</Typography>
      <Typography variant="body1" sx={{ marginTop: 3 }}>
        Email: mburns7211@gmail.com
      </Typography>
    </Box>

    // <Box sx={{ marginTop: 5 }}>
    //   <Typography variant="h4" align="center">Contact Me</Typography>
    //   <Paper sx={{ padding: 3, marginTop: 3 }}>
    //   <Typography variant="h6" sx={{ marginTop: 2 }}>
    //     Feel free to contact me at mburns7211(at)gmail.com
    //   </Typography>

    //     {/* <form onSubmit={handleSubmit}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <TextField
    //             label="Name"
    //             variant="outlined"
    //             fullWidth
    //             name="name"
    //             value={formData.name}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             label="Email"
    //             variant="outlined"
    //             fullWidth
    //             name="email"
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <TextField
    //             label="Message"
    //             variant="outlined"
    //             fullWidth
    //             name="message"
    //             value={formData.message}
    //             onChange={handleInputChange}
    //             multiline
    //             rows={4}
    //             required
    //           />
    //         </Grid>
    //         <Grid item xs={12}>
    //           <Button type="submit" variant="contained" color="primary" fullWidth>
    //             Send Message
    //           </Button>
    //         </Grid>
    //       </Grid>
    //     </form> */}
    //   </Paper>
    // </Box>
  );
};

export default Contact;
