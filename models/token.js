const { Schema, model } = require("mongoose");

const tokenSchema = new Schema(
  {
    refreshToken: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Token = model("token", tokenSchema);

module.exports = { Token };
