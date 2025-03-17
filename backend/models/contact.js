const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  senderName: { type: String, required: true },
  senderEmail: { type: String, required: true },
  message: { type: String, required: true },
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Use the correct database and collection
const Contact = mongoose.model("Contact", contactSchema, "contacts");

module.exports = Contact;

 // ✅ Capitalized model name
