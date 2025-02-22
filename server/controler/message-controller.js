import Message from "../model/Message.js";
import Conversation from "../model/Convesation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("message has been saved");
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).json(messages);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
