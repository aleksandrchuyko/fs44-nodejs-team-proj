const express = require("express");
const ctrl = require("../../controllers/auth");
const { validateBody /* authenticate  */ } = require("../../middlewares");
const { ctlrWrapper } = require("../../helpers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  ctlrWrapper(ctrl.register)
);

router.post(
  "/login",
  validateBody(schemas.loginSchema),
  ctlrWrapper(ctrl.login)
);

/* router.get("/current", authenticate, ctlrWrapper(ctrl.getCurrent));

router.get("/logout", authenticate, ctlrWrapper(ctrl.logout)); */

module.exports = router;
