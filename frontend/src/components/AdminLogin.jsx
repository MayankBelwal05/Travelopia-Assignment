import { useState } from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import signup from '../assets/bg2.jpg';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (formData.email === 'admin@gmail.com' && formData.password === 'admin123') {
   
      navigate('/admindashboard');
    } else {
      
      console.log('Invalid credentials');
    }
  };

  return (
    <div style={{ backgroundImage: `url(${signup})`, backgroundSize: 'cover', minHeight: '673px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container component="main" maxWidth="sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '10px' }}>
        <Typography variant="h5" align="center" gutterBottom>
        </Typography>
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
          <Button type="submit" variant="contained" color="secondary" fullWidth style={{ marginTop: '2rem', textAlign: 'center', backgroundColor: 'red' }}>
            Log In
          </Button>

        </form>
      </Container>
    </div>
  );
};

export default AdminLogin;
