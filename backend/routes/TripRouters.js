const express = require("express");
const { Trip } = require("../model/tripModel");
const { auth } = require("../middleware/authmiddleware");
const { UserModule } = require("../model/userModel");
// const { access } = require("../middleware/access.middleware");
const tripRouter = express.Router(); 
tripRouter.use(express.json());

tripRouter.post('/trips',auth,async (req, res) => {
       console.log(req.body);
    try {
        // const userId = req.id; 
        const userId = req.id.toString();
        console.log(userId);

      const newTrip = new Trip({
        location: req.body.location,
        interest: req.body.interest,
        numberOfTravelers: req.body.numberOfTravelers,
        budgetPerPerson: req.body.budgetPerPerson,
        createdBy: userId
      });
  console.log(newTrip);
     
      await newTrip.save();
  
      res.status(201).json({ message: 'Trip created successfully' });
    } catch (error) {
      console.error('Error creating trip:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  tripRouter.get("/trips",async (req, res) => {
    try {
      const trips = await Trip.find();
      const tripsWithUsername = await Promise.all(trips.map(async (trip) => {
        const user = await UserModule.findById(trip.createdBy);
        const username = user ? user.username : 'Unknown'; 
        return { ...trip.toObject(), username }; 
      }));
      res.status(200).json({ trips: tripsWithUsername });
    } catch (e) {     
      res.status(400).json({ e });
    }
  });


//   tripRouter.get('/trips',async (req, res) => {
//   try {
  
//     const trips = await Trip.find(); 
    
//     res.status(200).json(trips);
//   } catch (error) {
//     console.error('Error fetching trips:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

module.exports = { tripRouter };


// const express = require("express");
// const { Trip } = require("../model/tripModel");
// const { UserModule } = require("../model/userModel");
// const { auth } = require("../middleware/authmiddleware");
// const tripRouter = express.Router();
// tripRouter.use(express.json());

// tripRouter.get('/trips', async (req, res) => {
//   try {
//     // Retrieve all trips from the database
//     const trips = await Trip.find().populate('createdBy', 'username'); // Populate createdBy field with username
    
//     res.status(200).json(trips);
//   } catch (error) {
//     console.error('Error fetching trips:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// module.exports = { tripRouter };
