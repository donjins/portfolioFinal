const Contact = require('../models/contact'); // Adjust path as needed

const contactHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const db = req.app.locals.db;
    const collection = db.collection("contacts");

    const result = await collection.insertOne({
      senderName: name,
      senderEmail: email,
      message,
      isRead: false, // ✅ Add this to match the Contact model
      createdAt: new Date(),
    });

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact saving failed:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};


const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find();  // ✅ Fetch messages using Mongoose
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

const getTotalMessageCount = async (req, res) => {
  try {
    const count = await Contact.countDocuments(); // Ensure Contact model is used
    res.json({ total: count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch message count' });
  }
};


module.exports = { contactHandler, getMessages, getTotalMessageCount };
