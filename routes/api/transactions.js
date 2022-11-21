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

module.exports = router;
