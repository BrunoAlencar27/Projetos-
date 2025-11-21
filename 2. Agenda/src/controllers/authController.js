const Auith = require('../models/authModel.js')

exports.index = (req, res) => {
  res.render('auth');
};

exports.register = function(req, res) {
  const auth = new Auth(req.body);
  auth.register();
  res.send(auth.errors);
}
