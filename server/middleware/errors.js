function errorHandler(err, req, res, next) {
  const { name, message, code } = err;
  console.log('err.name', name);
  console.log('err.message', message);
  console.log('err.code', code);

  const error = {
    message: 'Something went wrong.',
    code: 'INTERNAL_ERROR',
    status: 500,
    data: {}
  };

  res.status(error.status).json({ error });
}

module.exports = {
  errorHandler
};
