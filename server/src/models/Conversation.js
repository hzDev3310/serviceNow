const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
    sender: String,
    receiver: String, 
    content: String,
    date: Date
});

const ConversationSchema = new Schema({
    user1id: String,
    user2id: String,
    messages: {type: [MessageSchema] , default:[]}
});

const ConversationModel = model("Conversation", ConversationSchema);
module.exports = ConversationModel;
