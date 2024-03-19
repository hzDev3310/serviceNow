const { signup, login } = require("../controller/authController");
const isProviderMiddleware = require("../middlewares/isProvider");



const router = require("express").Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router