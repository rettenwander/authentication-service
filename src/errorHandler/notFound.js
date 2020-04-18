module.exports = (req, res) => {
  res.status(404);
  res.json({
    error: `Route '${req.path}' not found`,
    message: '',
  });
};
