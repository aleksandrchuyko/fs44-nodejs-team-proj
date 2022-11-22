const { Category } = require("../../models/category");



const setNewCategory = async (item) => {
  console.log("new category");
  
    await Category.create({...item});
   
};

module.exports = setNewCategory;