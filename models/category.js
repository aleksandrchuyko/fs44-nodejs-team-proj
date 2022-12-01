const { Schema, model } = require("mongoose");
const { handleSaveErrors } = require("../helpers/");

const categorySchema = new Schema(
  {
    category_id: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

categorySchema.post("save", handleSaveErrors);

const Category = model("category", categorySchema);

module.exports = {
  Category,
};
