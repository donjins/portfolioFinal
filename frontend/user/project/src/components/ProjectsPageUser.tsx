import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const backendURL = process.env.REACT_APP_BACKEND_URL;


interface Project {
  _id: string;
  name: string;
  description: string;
  image: string;
  gitLink: string;
  siteLink: string;
  techStack: string[]; // Ensure techStack is an array
}

export const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Fetch data from the API
    axios
      .get( `${backendURL}/projects`)
      .then((response) => {
        setProjects(response.data || []); // Fallback to empty array if data is undefined
        setLoading(false);
        console.log('Fetched projects:', response.data); // Log the fetched data
      })
      .catch((err) => {
        setError('Failed to load projects');
        setLoading(false);
      });
  }, []);

  // Log the projects state on every render
  useEffect(() => {
    console.log('Projects state:', projects); // Log the state whenever it changes
  }, [projects]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          All Projects
        </motion.h1>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.length > 0 ? (
            projects.map((project: Project, index: number) => (
              <motion.div
                key={project._id} // Using _id as key to ensure uniqueness
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                <img
                   src={`http://localhost:5000${project.image}`}
                  alt={project.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {Array.isArray(project.techStack) && project.techStack.length > 0 ? (
                      project.techStack.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-600 dark:text-gray-300">
                        No tech stack available
                      </span>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.siteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div>No projects available.</div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
