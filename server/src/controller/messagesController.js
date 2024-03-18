const ConversationModel = require("../models/Conversation");
const UserModel = require("../models/Users");

const createNewConversation = async (req, res) => {
    try {
        const { id1, id2 } = req.body;
        const users = [id1,id2];

      
        // Create a new conversation
        const newConversation = new ConversationModel({users: users});
        await newConversation.save();

        // Find user1 and user2
        const user1 = await UserModel.findById(id1);
        const user2 = await UserModel.findById(id2);

        
        

      

        user1.converations.push(newConversation._id);
        user2.converations.push(newConversation._id);
        

        // Save changes to user1 and user2
        await user1.save();
        await user2.save();

        // Send success response
        res.status(200).json({ message: 'Conversation created successfully' });
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
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
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

module.exports = {createNewConversation, addNewMessage};
