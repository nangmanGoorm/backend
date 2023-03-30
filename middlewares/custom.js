const { CustomError } = require('../utils/errors/custom');

const customErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    if (err.code > 200) {
      return res.status(err.status).send(err.message);
    }

    const status = err.status;
    delete err.status;
    return res.status(status).json(err);
  }
  return next(err);
};

module.exports = {
  customErrorHandler,
};
