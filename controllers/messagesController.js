const db = require("../models");

// POST /api/users/:id/messages
exports.createMessage = async function (req, res, next) {
  try {
    let newMessage = await db.Message.create({
      text: req.body.text,
      user: req.params.id,
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.messages.push(newMessage);
    await foundUser.save();
    let completeMessage = await db.Message.findById(newMessage.id).populate(
      "user",
      {
        username: true,
        profileImageUrl: true,
      }
    );
    return res.status(200).json(completeMessage);
  } catch (error) {
    return next(error);
  }
};
