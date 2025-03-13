const Contact = require("../models/contact"); // ✅ Ensure correct import

// ✅ Handler to save contact messages using Mongoose
const contactHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Use Mongoose model to save the message
    const newMessage = new Contact({
      senderName: name,
      senderEmail: email,
      message,
      isRead: false, // Default value
      createdAt: new Date(),
    });

    await newMessage.save(); // Save to MongoDB

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Contact saving failed:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

// ✅ Fetch all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find(); // Using Mongoose model
    res.json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// ✅ Get total message count
const getTotalMessageCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments(); // Ensure Contact model is used
    res.json({ total: count });
  } catch (error) {
    console.error("❌ Error fetching message count:", error);
    res.status(500).json({ error: "Failed to fetch message count" });
  }
};

module.exports = { contactHandler, getMessages, getTotalMessageCount };
