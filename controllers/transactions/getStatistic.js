// const { Transaction } = require("../../models/transaction");

const getStatistic = async (req, res) => {
  const year = +req.params.year;
    const month = +req.params.month - 1;
    const startDate = (new Date(year, month)).getTime();
    const endDate = (new Date(year, month, 32)).getTime();

    console.log(startDate, endDate, endDate - startDate);
   
  res.status(200).json({ message: "Completed!" });
};

module.exports = getStatistic;
