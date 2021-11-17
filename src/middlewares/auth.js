const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuariosModels');

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'marketlaptops', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/api/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/api/login');
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'marketlaptops', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await Usuario.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = { requireAuth, checkUser };