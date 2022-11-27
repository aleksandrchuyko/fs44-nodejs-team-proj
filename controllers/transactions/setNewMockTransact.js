const { Transaction } = require("../../models/transaction");

const setNewMockTransact = async (item) => {
    await Transaction.create({...item});
   
};

module.exports = setNewMockTransact;