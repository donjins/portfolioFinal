const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/portfolioDB";

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Adjust frontend URL
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const contactRoutes = require("./routes/contactrouter");
const projectRoutes = require("./routes/projectrouter");

app.use("/api", contactRoutes);
app.use("/api/projects", projectRoutes);


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
