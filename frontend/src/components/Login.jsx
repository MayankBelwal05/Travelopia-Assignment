import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, Link, CircularProgress } from '@mui/material';
import signup from '../assets/b2.webp';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//comment
const Login = () => {
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
      // const response = await fetch('http://localhost:5000/users/login', {
      const response = await fetch('https://travelopia-assignment.onrender.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
      
        const userData = await response.json();
        console.log(userData); 
        localStorage.setItem('token', userData.token);
        localStorage.setItem('user', JSON.stringify({ name: userData.user }));
        
        if (userData) {
          toast("Login Successful");
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          toast("Failed login")
        }
      }else{
        toast("Invalid login credentials")
        return
      }

    } catch (error) {
      console.error('Error logging in:', error);
      toast('Error logging in: Please Try Again');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', minHeight: '673px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container component="main" maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: 'black', fontSize: '2em', fontWeight: 'bold' }}>
          🚀 Login 🌟
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
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '2rem' }} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Log In'}
          </Button>
        </form>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
          <Grid item>
            <Link component={RouterLink} to="#" variant="body2" style={{ color: 'black' }}>
              Forgot password?
            </Link>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
          <Grid item>
            <Link component={RouterLink} to="/signup" variant="body2" style={{ color: 'black' }}>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
