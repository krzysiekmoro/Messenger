const mongoose = require("mongoose");

// mongoose.set("debug", true);

mongoose.connect("mongodb://localhost/messenger", {
  useNewUrlParser: true,
  keepAlive: true,
  useUnifiedTopology: true
});

module.exports.Message = require("./message");
