const db = require("../models");
const jwt = require("jsonwebtoken");
const { comparePassword } = require("../middleware/auth");

exports.signup = async function (req, res, next) {
  try {
    let newUser = await db.User.create(req.body);
    let { id, username, profileImageUrl } = newUser;
    let token = jwt.sign(
      {
        id,
        username,
        profileImageUrl,
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      profileImageUrl,
      token,
    });
  } catch (error) {
    return next(error);
  }
};

exports.signin = async function (req, res, next) {
  try {
    let foundUser = await db.User.findOne({
      email: req.body.email,
    });
    let { id, username, password, profileImageUrl } = foundUser;
    let isMatch = comparePassword(req.body.password, password);
    if (isMatch) {
      let token = jwt.sign(
        {
          id,
          username,
          profileImageUrl,
        },
        process.env.SECRET_KEY
      );
      return res.status(200).json({
        id,
        username,
        profileImageUrl,
        token,
      });
    } else {
      return next({
        status: 401,
        message: "Invalid password",
      });
    }
  } catch (error) {
    return next({
      status: 401,
      message: "Invalid email",
    });
  }
};
