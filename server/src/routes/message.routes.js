const {
  addNewMessage,
  createNewConversation,
  getConv,
} = require("../controller/messagesController");

const router = require("express").Router();
router.put("/", createNewConversation);
router.get("/:id", getConv);
router.put("/add", addNewMessage);

module.exports = router;
