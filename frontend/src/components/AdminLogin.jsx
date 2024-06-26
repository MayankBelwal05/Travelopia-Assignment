import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, CircularProgress } from '@mui/material';
import signup from '../assets/b3.webp';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
        const userData = {
          user: "Admin",
          token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjNiZGQ3NmVhZmI5Nzk5ZmQ2OWRkOGMiLCJhdXRob3JzIjoiTWF5YW5rIiwiaWF0IjoxNzE1MTk5MzcxfQ.wNT117Jge_-IxeI0HaBIj4z0I42CG5MGThS12RYyhdA"
        }
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify({ name: userData.user }));

        navigate('/admindashboard');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', minHeight: '673px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container component="main" maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'white', fontSize: '2em', fontWeight: 'bold' }}>
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
          <Button type="submit" variant="contained" color="secondary" fullWidth style={{ marginTop: '2rem', textAlign: 'center', backgroundColor: 'red' }} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;
