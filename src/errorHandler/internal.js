// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err && err.status) res.status(err.status);
  else res.status(500);

  if (err && err.name && err.message) {
    res.json({
      error: err.name,
      message: err.message,
    });
  } else {
    res.json({
      error: 'Internal server error',
      message: 'Ups something goes wrong',
    });
  }
};
