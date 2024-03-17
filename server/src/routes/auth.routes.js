const { signup, login } = require("../controller/authController");
const isProvider = require("../middlewares/isProvider");



const router = require("express").Router();

router.post("/signup", signup);
router.post("/login",isProvider, login);

module.exports = router