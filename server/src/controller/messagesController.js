const ConversationModel = require("../models/Conversation");
const UserModel = require("../models/Users");

const createNewConversation = async (req, res) => {
  try {
    const { id1, id2 } = req.body;
    const newConversation = new ConversationModel({  users : [id1 , id2] });
    await newConversation.save();
    res.status(200).json({ message: "Conversation created successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};


const getConv = async (req, res) => {
  try {
    const { id } = req.params;
    const conv = await ConversationModel.find({ users: { $elemMatch: { $eq: id } } });

    if (!conv || conv.length === 0) {
      return res.status(404).json({ message: "Conversation not found" });
    }
    
    res.status(200).json(conv);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

const addNewMessage = async (req, res) => {
  try {
    const { convId, sender, content } = req.body;

    const conv = await ConversationModel.findById(convId);
    if (!conv) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    const newMessage = {
      sender: sender,
      content: content,
    };

    conv.messages.push(newMessage);

    await conv.save();

    res.status(200).json({ message: "Message added successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};




module.exports = { createNewConversation, addNewMessage ,getConv };
