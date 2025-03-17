const Project = require("../models/project.js");

// ✅ Create a new project with image upload
exports.createProject = async (req, res) => {
  try {
    const { name, description, status, gitLink, siteLink } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : ""; // Save uploaded image path

    const newProject = new Project({ name, description, status, image, gitLink, siteLink });
    await newProject.save();

    res.status(201).json({ message: "Project saved successfully!", project: newProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Fetch all projects
exports.fetchProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log("Fetched projects:", projects); // ✅ Log data in the backend console

    res.status(200).json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Fetch project by ID
exports.fetchProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.status(200).json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Edit project (with optional new image)
exports.editProject = async (req, res) => {
  try {
    const { name, description, status, gitLink, siteLink } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Keep old image if none is uploaded

    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      { name, description, status, image, gitLink, siteLink },
      { new: true }
    );

    if (!updatedProject) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Project updated successfully!", project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete project
exports.removeProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Project not found" });

    res.status(200).json({ message: "Project deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
