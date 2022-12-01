const { Category } = require("../../models/category");

const getCategories = async (req, res) => {
  let result = await Category.find({}, "-_id -createdAt -updatedAt");
  result = result.sort((a, b) => +a.category_id - +b.category_id);
  result.shift();

  res.status(200).json({ data: result });
};

module.exports = getCategories;
