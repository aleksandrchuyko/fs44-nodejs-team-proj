const { Transaction } = require("../../models/transaction");


const addNew = async (req, res) => {
  console.log("new transaction");
  const owner = req.user._id;
    const result = await Transaction.create({...req.body, owner});
    res.status(201).json(result);
};

module.exports = addNew;
