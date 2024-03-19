const {
  addNewMessage,
  createNewConversation,
  getConv,
} = require("../controller/messagesController");

const router = require("express").Router();
router.post("/", createNewConversation);
router.get("/:id", getConv);
router.put("/", addNewMessage);

module.exports = router;
