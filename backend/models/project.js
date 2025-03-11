const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
  image: String,
  gitLink: String,
  siteLink: String,
});

module.exports = mongoose.model("Project", projectSchema);
