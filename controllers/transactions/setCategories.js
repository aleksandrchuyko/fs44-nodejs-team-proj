const setNewCategory  = require("./setNewCategory");
const categories = [
  {
    category_id: "0",
    name: "Other income",
  },
  {
    category_id: "1",
    name: "Other expense",
  },
  {
    category_id: "2",
    name: "Basic expenses",
  },
  {
    category_id: "3",
    name: "Products",
    },
  {
    category_id: "4",
    name: "Car",
    },
  {
    category_id: "5",
    name: "Self care",
  },
  {
    category_id: "6",
    name: "Child care",
  },
  {
    category_id: "7",
    name: "Household products",
  },
  {
    category_id: "8",
    name: "Education",
  },
  {
    category_id: "9",
    name: "Leisure",
  },
];

const setCategories = (req, res) => {
  categories.forEach((element) => {
    setNewCategory(element);
  });

  res.status(201).json({ message: "Completed!" });
};

module.exports = setCategories;
