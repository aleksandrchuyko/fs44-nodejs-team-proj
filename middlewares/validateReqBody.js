const { RequestError } = require("../utils");

const validateReqBody = (schema) => {
  const wrap = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };
  return wrap;
};

module.exports = validateReqBody;
