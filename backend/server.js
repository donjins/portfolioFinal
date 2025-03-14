const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://josephdondev:CudR7KOYLa72D4HI@cluster0.mongodb.net/JosephPortfolioDB?retryWrites=true&w=majority";

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-final-git-main-josephdonjins-projects.vercel.app",
    ],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // ✅ Ensures correct connection options
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Import Routes
const contactRoutes = require("./routes/contactrouter");
const projectRoutes = require("./routes/projectrouter");

app.use("/api", contactRoutes);
app.use("/api/projects", projectRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

