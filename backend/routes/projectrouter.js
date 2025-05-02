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
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary.js");

const router = express.Router();

// Multer setup for file uploads
const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Cloudinary instance
  params: {
    folder: "portfolio", // Folder where images will be stored in Cloudinary
    allowed_formats: ["jpg", "png", "jpeg", "webp"], // Allowed formats
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
