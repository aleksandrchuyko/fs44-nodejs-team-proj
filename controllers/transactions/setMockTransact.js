const setNewMockTransact = require("./setNewMockTransact");

const rndTm = (range) => Math.floor(Math.random() * range);

const setMockTransact = (req, res) => {
  
  const year = 2022;
  for (let i = 0; i < 1; i++) {
    const item = {
      direction: "income",
      amount: (10000 * Math.random()).toFixed(2),
      date: new Date(
        year,
        rndTm(10),
        rndTm(31),
        rndTm(24),
        rndTm(60),
        rndTm(60)
      ).getTime(),

      // category: (rndTm(8) + 1).toString(),
      category: "0",
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
