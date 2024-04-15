const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  position: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  birthday: Date,
  phoneNumber: String,
  photo: {
    data: Buffer, // Store binary data
    contentType: String // Mime type of the image
  }
});

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

module.exports = User;
