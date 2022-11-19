const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongoSaveError } = require("../../utils");

const directions = ["income", "expense"];

const transactionSchema = new Schema(
  {
    direction: {
      type: String,
      enum: directions,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);