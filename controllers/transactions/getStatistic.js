const { Category } = require("../../models/category");
const { Transaction } = require("../../models/transaction");

const getStatistic = async (req, res) => {
  const year = +req.params.year;
  const month = +req.params.month - 1;
  const startDate = new Date(year, month).getTime();
  const endDate = new Date(year, month, 32).getTime();
  const sumTotal = await Transaction.aggregate([
    {
      $match: {
        owner: req.user._id,
        date: {
          $gte: startDate,
          $lt: endDate,
        },
      },
    },
    { $group: { _id: "$direction", totalSum: { $sum: "$amount" } } },
    { $project: { _id: 0, direction: "$_id", totalSum: "$totalSum" } },
  ]);
  const sumByCategories = await Transaction.aggregate([
    {
      $match: {
        owner: req.user._id,
        direction: "expense",
        date: {
          $gte: startDate,
          $lt: endDate,
        },
      },
    },
    { $group: { _id: "$category", totalSum: { $sum: "$amount" } } },
    { $project: { _id: 0, category: "$_id", totalSum: "$totalSum" } },
  ]);
  await Category.populate(sumByCategories, {path: "category", select:  {_id: 0, category_id: 1, name: 1}});
  
  const firstTransaction = await Transaction.find({owner: req.user._id}).sort({ date: 1 }).limit(1);

  const firstTransactionDate = firstTransaction[0]? firstTransaction[0].date: 0;
  

  const totalIncome = sumTotal.find((item) => item.direction === "income");
  const totalExpense = sumTotal.find((item) => item.direction === "expense");
  res.status(200).json({
    data: {
      totalIncome: totalIncome ? totalIncome.totalSum : 0,
      totalExpense: totalExpense ? totalExpense.totalSum : 0,
      firstTransactionDate,
      expenses: sumByCategories,
    },
  });
};

module.exports = getStatistic;
