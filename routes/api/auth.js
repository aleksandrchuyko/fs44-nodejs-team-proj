const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateReqBody, authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validateReqBody(schemas.signupSchema),
  ctrlWrapper(ctrl.signupWithLogin)
);

router.post(
  "/login",
  validateReqBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/current", authenticate, ctrlWrapper(ctrl.currentUser));

router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));

module.exports = router;
