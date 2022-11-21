const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

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
    date: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
    },
    // category: {
    //   type: String,
    //   required: true,
    // },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true, versionKey: false }
);

transactionSchema.post("save", handleSaveErrors);

const Transaction = model("transaction", transactionSchema);

const addSchema = Joi.object({
  direction: Joi.string().required(),
  amount: Joi.number().required(),
  date: Joi.number().required(),
  comment: Joi.string(),
  // category: Joi.string(),
});

const schemas = {
  addSchema,
};

module.exports = {
  Transaction,
  schemas,
};
