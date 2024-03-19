const { Schema, model } = require("mongoose");

const MessageSchema = new Schema(
  {
    sender: String,
    content: String,
  },
  { timestamps: true }
);

const ConversationSchema = new Schema({
  users :Array,
  messages: { type: [MessageSchema], default: [] },
});

const ConversationModel = model("Conversation", ConversationSchema);
module.exports = ConversationModel;
