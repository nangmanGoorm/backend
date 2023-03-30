const { logger, getErrorObject } = require('../utils/winston');

const commonErrorHandler = (err, req, res, next) => {
  const errorObject = getErrorObject(req, err);
  logger.error(``, errorObject);

  // if (req.file) {
  //   fs.unlink(req.file.path, (err) => {});
  // }
  next(err);
};

module.exports = {
  commonErrorHandler,
};
