const { Transaction } = require("../../models/transaction");

const getTransactions = async (req, res) => {
  const owner = req.user._id;

  const { page = 1, limit = 100 } = req.query;
  const skip = (page - 1) * limit;

  const queryParams = { owner };
  let result = await Transaction.find(queryParams, "-createdAt -updatedAt", {
    skip,
    limit,
  }).sort({ date: -1 });
  result = result.map((item) => {
    return {
      direction: item.direction,
      amount: item.amount,
      date: item.date,
      formatedDate: new Date(item.date),
      comment: item.comment,
      category: item.category,
      balanceAfter: item.balanceAfter,
    };
  });
  res.status(200).json({ data: result });
};

module.exports = getTransactions;
