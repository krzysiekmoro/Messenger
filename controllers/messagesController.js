const db = require('../models')

// POST /api/messages
exports.createMessage = async function (req, res, next){
    try {
        let newMessage = await db.Message.create({
            text: req.body.text
        })
        return res.status(200).json(newMessage);
    } catch (error) {
        return next(error);
    }
}