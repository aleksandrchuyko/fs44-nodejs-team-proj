const { Transaction } = require("../../models/transaction");

const getTransactions = async (req, res) => {
    const owner = req.user._id;

  const { page = 1, limit = 100 } = req.query;
  const skip = (page - 1) * limit;

  const queryParams = { owner };
    const result = await Transaction.find(queryParams, "-createdAt -updatedAt", {
    skip,
    limit,
  });
  res.status(200).json({ data: result });
};

module.exports = getTransactions;