const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  senderName: String,
  senderEmail: String,
  message: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema); // ✅ Corrected


