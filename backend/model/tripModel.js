const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    location: String,
    interest: String,
    numberOfTravelers: Number,
    budgetPerPerson: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
  },
  {
    versionKey: false,
  });

  const Trip = mongoose.model('Trip', tripSchema);

  module.exports = { Trip };
  