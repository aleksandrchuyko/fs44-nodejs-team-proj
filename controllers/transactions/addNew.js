const { RequestError } = require("../../helpers");
const { Category } = require("../../models/category");
const { Transaction } = require("../../models/transaction");
const { User } = require("../../models/user");

const addNew = async (req, res) => {
  let categoryId = req.body.category;
  if (!categoryId && req.body.direction !== "income") {
    throw RequestError(400);
  }
  if (req.body.direction === "income") {
    categoryId = "0";
  }

  const category = await Category.findOne({ category_id: categoryId });
  if (!category) {
    throw RequestError(400, "Transaction category not found");
  }
  console.log(category);

  const owner = req.user._id;
  const balance = req.user.balance;
  const balanceAfter =
    req.body.direction === "income"
      ? balance + req.body.amount
      : balance - req.body.amount;
  const result = await Transaction.create({
    ...req.body,
    category: category._id,
    balanceAfter,
    owner,
  });
  await User.findByIdAndUpdate(
    req.user._id,
    { balance: balanceAfter },
    {
      new: true,
    }
  );
  res.status(201).json(result);
};

module.exports = addNew;
