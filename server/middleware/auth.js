require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.comparePassword = function(candidatePassword, password) {
  return candidatePassword === password ? true : false;
}

exports.loginRequired = function(req, res, next){
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded) {
        next();
      } else {
        return next({ status: 401, message: "Please Log In First" });
      }
    });
  } catch (error) {
    return next({ status: 401, message: "Please Log In First" });
  }
}

exports.ensureCorrectUser = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next();
      } else {
        return next({ status: 401, message: "Unauthorized" });
      }
    });
  } catch (e) {
    return next({ status: 401, message: "Unauthorized" });
  }
};
