const { Schema, model } = require("mongoose");

const MessageSchema = new Schema({
    sender: String,
    receiver: String, 
    content: String,
    date: Date
});

const ConversationSchema = new Schema({
    users: [String],
    messages: [MessageSchema] 
});

const ConversationModel = model("Conversation", ConversationSchema);
module.exports = ConversationModel;
