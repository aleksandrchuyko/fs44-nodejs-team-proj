const express = require("express");
const transactionsController = require("../../controllers/transactions");

const router = express.Router();

const { validateReqBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/transaction");

const { ctrlWrapper } = require("../../helpers");

router.post(
  "/",
  authenticate,
  validateReqBody(schemas.addSchema),
  ctrlWrapper(transactionsController.addNew)
);

router.post(
  "/categories/",
  authenticate,
  ctrlWrapper(transactionsController.setCategories)
);

router.get(
  "/categories/",
  authenticate,
  ctrlWrapper(transactionsController.getCategories)
);

module.exports = router;
