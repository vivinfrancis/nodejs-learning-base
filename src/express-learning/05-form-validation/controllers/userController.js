exports.createUser = (req, res) => {

  res.json({
    message: 'User Created',
    data: req.body
  });

};