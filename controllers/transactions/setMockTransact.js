const { Category } = require("../../models/category");
const setNewMockTransact = require("./setNewMockTransact");

const rndTm = (range) => Math.floor(Math.random() * range);

const setMockTransact = async (req, res) => {
  const categoriesArr = await Category.find({});
  const year = 2021;
  for (let i = 0; i < 100; i++) {
    const index = (rndTm(8) + 1).toString();
    const item = {
      direction: "expense",
      amount: (1000 * Math.random()).toFixed(2),
      date: new Date(
        year,
        rndTm(11),
        rndTm(31),
        rndTm(24),
        rndTm(60),
        rndTm(60)
      ).getTime(),

      // category: (rndTm(8) + 1).toString(),
      category: categoriesArr[index]._id,
      comment: "Mocka income comment...",
      balanceAfter: (100000 * Math.random()).toFixed(2),
      owner: req.user._id,
    };
    setNewMockTransact(item);
  }

  res.status(201).json({
    message: new Date(1587444720000),
  });
};

module.exports = setMockTransact;
