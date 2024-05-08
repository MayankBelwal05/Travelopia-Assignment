import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Link } from '@mui/material';
import signup from '../assets/bg.jpg';
import { Link as RouterLink } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <div style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', minHeight: '673px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container component="main" maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px', backdropFilter: 'blur(10px)' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>
          🚀 Signup 🌟
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '2rem' }}>
            Sign Up
          </Button>
        </form>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
          <Grid item>
            <Link component={RouterLink} to="/login" variant="body2" style={{ color: 'black' }}>
              Already registered? Log in
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SignUp;
