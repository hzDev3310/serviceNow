const {addNewMessage,createNewConversation} = require('../controller/messagesController')

const router = require("express").Router();
router.put("/", createNewConversation);
router.put("/add", addNewMessage);

module.exports = router;
