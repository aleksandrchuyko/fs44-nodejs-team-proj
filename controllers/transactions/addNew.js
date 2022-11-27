const { Transaction } = require("../../models/transaction");
const { User } = require("../../models/user");

const addNew = async (req, res) => {
  console.log("new transaction");
  const owner = req.user._id;
  const balance = req.user.balance;
  const balanceAfter =
    req.body.direction === "income"
      ? balance + req.body.amount
      : balance - req.body.amount;
  const result = await Transaction.create({ ...req.body, balanceAfter, owner });
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
