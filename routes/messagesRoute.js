const router = require('express').Router({ mergeParams: true });
const { createMessage } = require('../controllers/messagesController');

// /users/:id/messages
router.route('/').post(createMessage);

module.exports = router;