const controllersWrapper = (ctrl) => {
  const wrap = async (res, req, next) => {
    try {
      await ctrl(res, req, next);
    } catch (error) {
      next(error);
    }
  };
  return wrap;
};

module.exports = controllersWrapper;
