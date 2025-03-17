import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
const backendURL = process.env.REACT_APP_BACKEND_URL;


interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (project: {
    name: string;
    description: string;
    status: string;
    image: File | null;
    gitLink: string;
    siteLink: string;
  }) => void;
}

export function ProjectModal({ isOpen, onClose, onSubmit }: ProjectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active",
    image: null as File | null, // Corrected type
    gitLink: "",
    siteLink: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("gitLink", formData.gitLink);
    formDataToSend.append("siteLink", formData.siteLink);

    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      const response = await axios.post( `${backendURL}/api/projects`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        alert("Project added successfully!");
        setFormData({
          name: "",
          description: "",
          status: "active",
          image: null,
          gitLink: "",
          siteLink: "",
        });
        onClose();
      } else {
        alert("Failed to add project.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub Link
              </label>
              <input
                type="url"
                value={formData.gitLink}
                onChange={(e) => setFormData({ ...formData, gitLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/your-repo"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Site Link
              </label>
              <input
                type="url"
                value={formData.siteLink}
                onChange={(e) => setFormData({ ...formData, siteLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://yourproject.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="on-hold">On Hold</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData((prev) => ({ ...prev, image: file }));
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              {formData.image && (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Uploaded Preview"
                  className="mt-2 w-32 h-32 object-cover rounded-md"
                />
              )}
            </div>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
