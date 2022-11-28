const { Schema, model } = require("mongoose");

const sessionSchema = new Schema({
  uid: Schema.Types.ObjectId,
});

const Session = model("session", sessionSchema);

module.exports = { Session };
