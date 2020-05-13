const router = require('express').Router();
const { signup } = require('../controllers/authController')

router.route('/signup').post(signup)

module.exports = router;