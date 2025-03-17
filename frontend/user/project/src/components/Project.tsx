import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { ProjectTable } from "./ProjectTable";
import { ProjectModal } from "./ProjectModal";
const backendURL = process.env.REACT_APP_BACKEND_URL;


const Project: React.FC = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch( `${backendURL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Function to add a new project
  const handleAddProject = async (project) => {
    try {
      const response = await fetch( `${backendURL}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });

      const newProject = await response.json();
      setProjects([...projects, newProject]); // Update state with new project
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">Project Dashboard</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            <Plus size={20} />
            Add New Project
          </button>
        </div>

        {/* Project Table */}
        <div className="bg-white rounded-lg shadow">
          <ProjectTable projects={projects} />
        </div>

        {/* Project Modal */}
        <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleAddProject} />
      </div>
    </div>
  );
};

export default Project;

