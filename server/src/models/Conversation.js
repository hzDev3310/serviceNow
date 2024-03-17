const { Schema } = require("mongoose");

const Message = new Schema({
    sender : String,
    reciver : String,
    content : String,
    date : Date,
})

const Coversation = new Schema({
    messages: [Message]
})
const ConversationModel = model("Conversation", Coversation);
module.exports = ConversationModel;
