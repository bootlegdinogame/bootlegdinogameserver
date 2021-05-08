const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  }
})

// create the model for the routine and expose it to the application
module.exports = mongoose.model('User', UserSchema)