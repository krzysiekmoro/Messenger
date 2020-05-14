const router = require("express").Router();
const { signup, signin } = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/signin").post(signin);

module.exports = router;
