const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/messenger", {
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true
});

module.exports.Message = require("./message");
module.exports.User = require('./user')
