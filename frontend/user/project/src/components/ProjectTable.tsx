import React from 'react';
import { Pencil, Trash2, Github, Link as LinkIcon } from 'lucide-react';
const backendURL = process.env.REACT_APP_BACKEND_URL;


interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  dateAdded: string;
  image: string;
  gitLink: string;   // ✅ Added GitHub link
  siteLink: string;  // ✅ Added Live Site link
}

interface ProjectTableProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

export function ProjectTable({ projects, onEdit, onDelete }: ProjectTableProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'on-hold':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Project
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date Added
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              GitHub
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Live Site
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-12 w-12 flex-shrink-0">
                  <img
                      className="h-12 w-12 rounded-lg object-cover"
                      src={`${backendURL}${project.image}`} // Use full backend URL if needed
                      alt={project.name}
                      onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Fallback image
                    />


                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-500 line-clamp-2">{project.description}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{project.dateAdded}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 flex items-center">
                  <Github size={18} className="mr-1" /> GitHub
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-900 flex items-center">
                  <LinkIcon size={18} className="mr-1" /> Live
                </a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(project)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  <Pencil size={18} />
                </button>
                <button
                  onClick={() => onDelete(project.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
