/* const { Schema, model } = require("mongoose");

const tokenSchema = new Schema(
  {
    refreshToken: {
      type: String,
      required: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const Token = model("token", tokenSchema);

module.exports = { Token }; */

const { Schema, model } = require("mongoose");

/* const sessionSchema = new Schema({
  uid: Schema.Types.ObjectId,
});
 */
const sessionSchema = new Schema({
  uid: Schema.Types.ObjectId,
});

const Session = model("session", sessionSchema);

module.exports = { Session };
