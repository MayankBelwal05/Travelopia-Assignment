import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FaMountain, FaUmbrellaBeach, FaLandmark, FaTree, FaHippo, FaWineBottle } from 'react-icons/fa';
import background from '../assets/main.webp';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TripForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    interest: '',
    numberOfTravelers: '',
    budgetPerPerson: ''
    // createdBy: '' 
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if(!token){
      toast("Please Login first!");
        return
      }
      try {
      const response = await axios.post(`https://travelopia-assignment.onrender.com/api/trips`, formData, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
      
      console.log(response.data);
      console.log("trip created sucessfully");
    } catch (error) {
      console.error('Error creating trip:', error.message);
    }
  };

  return (
    <div className="background-image" style={{ position: 'relative', width: '100%', height: '673px', overflow: 'hidden' }}>
      <img
        src={background}
        alt="background"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div className="content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: '80%' }}>

        <h1 style={{ color: 'white', textAlign: 'center' }}>We Care, So You Can Travel Carefree</h1>
        <h2 style={{ color: 'white', textAlign: 'center' }}>Let Our Experts Plan Your Private, Tailor-Made and Secure Tour in 70+ Inspiring Destinations.</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '100%', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', }}>
          <FormControl fullWidth style={{ marginRight: '10px' }}>
            <InputLabel id="location-label">Where do you want to go?</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="South Africa">South Africa</MenuItem>
              <MenuItem value="Egypt">Egypt</MenuItem>
              <MenuItem value="Mexico">Mexico</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              <MenuItem value="Iceland">Iceland</MenuItem>
              <MenuItem value="Brazil">Brazil</MenuItem>
              <MenuItem value="China">China</MenuItem>
              <MenuItem value="Germany">Germany</MenuItem>
              <MenuItem value="New Zealand">New Zealand</MenuItem>
              <MenuItem value="Switzerland">Switzerland</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginRight: '10px' }}>
            <InputLabel id="interest-label">Your interests</InputLabel>
            <Select
              labelId="interest-label"
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
            >
              <MenuItem value="Adventures & Outdoors">
                <FaMountain style={{ marginRight: '5px' }} />
                Adventures & Outdoors
              </MenuItem>
              <MenuItem value="Beaches">
                <FaUmbrellaBeach style={{ marginRight: '5px' }} />
                Beaches
              </MenuItem>
              <MenuItem value="Heritage & Culture">
                <FaLandmark style={{ marginRight: '5px' }} />
                Heritage & Culture
              </MenuItem>
              <MenuItem value="Nature & Landscape">
                <FaTree style={{ marginRight: '5px' }} />
                Nature & Landscape
              </MenuItem>
              <MenuItem value="Wildlife & Safaries">
                <FaHippo style={{ marginRight: '5px' }} />
                Wildlife & Safaries
              </MenuItem>
              <MenuItem value="Wine & Food">
                <FaWineBottle style={{ marginRight: '5px' }} />
                Wine & Food
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginRight: '10px' }}>
            <InputLabel id="travelers-label">Number of Travelers</InputLabel>
            <Select
              labelId="travelers-label"
              id="travelers"
              name="numberOfTravelers"
              value={formData.numberOfTravelers}
              onChange={handleChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="5+">5+</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginRight: '10px' }}>
            <InputLabel id="budget-label">Budget per Person</InputLabel>
            <Select
              labelId="budget-label"
              id="budget"
              name="budgetPerPerson"
              value={formData.budgetPerPerson}
              onChange={handleChange}
            >
              <MenuItem value="$3000-$4000">$3000-$4000</MenuItem>
              <MenuItem value="$4000-$5000">$4000-$5000</MenuItem>
              <MenuItem value="$5000-$6000">$5000-$6000</MenuItem>
              <MenuItem value="$6000-$7000">$6000-$7000</MenuItem>
              <MenuItem value="$7000-$8000">$7000-$8000</MenuItem>
              <MenuItem value="$8000-$9000">$8000-$9000</MenuItem>
              <MenuItem value="$9000-$10000">$9000-$10000</MenuItem>
              <MenuItem value="$10000+">$10000+</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="secondary" style={{ width: '100%', padding: '10px 0', backgroundColor: 'red' }}>
            Create My Trip Now
          </Button>

        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TripForm;
