const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
    location: String,
    interest: String,
    numberOfTravelers: Number,
    budgetPerPerson: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    versionKey: false,
  });

  const Trip = mongoose.model('Trip', tripSchema);

  module.exports = { Trip };
  