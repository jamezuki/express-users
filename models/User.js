const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', UserSchema)
