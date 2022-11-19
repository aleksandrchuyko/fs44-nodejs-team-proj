const { Schema, model } = require("mongoose");

/* const Joi = require("joi"); */

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  token: {
    type: String,
    default: "",
  },
});

const User = model("user", userSchema);

module.exports = User;
