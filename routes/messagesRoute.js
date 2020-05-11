const express = require('express');
const router = express.Router();
const { createMessage } = require('../controllers/messagesController');

// /api/messages
router.route('/').post(createMessage);

module.exports = router;