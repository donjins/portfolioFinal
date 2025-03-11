const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  createProject,
  fetchProjects,
  fetchProjectById,
  editProject,
  removeProject,
} = require("../controllers/projectcontroller.js");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/", // Save files in 'uploads' folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Correct API Routes
router.post("/", upload.single("image"), createProject);
  // Add new project
router.get("/", fetchProjects);  // Fetch all projects
router.get("/:id", fetchProjectById);  // Fetch single project by ID
router.put("/:id", upload.single("image"), editProject);  // Edit project
router.delete("/:id", removeProject);  // Delete project

module.exports = router;
