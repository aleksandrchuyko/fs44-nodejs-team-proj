const { setNewCategory } = require("../../helpers");
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
    name: "Food",
  },
  {
    category_id: "3",
    name: "Car",
    },
  {
    category_id: "4",
    name: "Hobby",
    },
  {
    category_id: "5",
    name: "Education",
  },
];

const setCategories = (req, res) => {
  categories.forEach((element) => {
    setNewCategory(element);
  });
  res.status(201).json({ message: "Completed" });
};

module.exports = setCategories;
