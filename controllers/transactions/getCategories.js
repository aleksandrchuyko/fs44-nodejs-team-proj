const { Category } = require("../../models/category");

const getCategories = async (req, res) => {
  const result = await Category.find({}, "-_id -createdAt -updatedAt");
  res.status(200).json({ data: result });
};

module.exports = getCategories;
