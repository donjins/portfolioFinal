import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const backendURL = import.meta.env.VITE_BACKEND_URL; // VITE_ prefix for Vite apps

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  demoLink: string;
  techStack: string[];
}

export const FeaturedProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    axios
      .get(`${backendURL}/api/projects`)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const formattedProjects = response.data.map((project) => ({
            _id: project._id,
            title: project.name,
            description: project.description,
            image: project.image,
            githubLink: project.gitLink,
            demoLink: project.siteLink,
            techStack: project.techStack || [],
          }));
          setProjects(formattedProjects);
        } else {
          setProjects([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load projects');
        setLoading(false);
        console.error(err);
      });
  }, []);

  const featuredProjects = projects.slice(0, 3);

 if (loading) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold text-center mb-12">Featured Projects</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg animate-pulse"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700" />
              <div className="p-6">
                <div className="h-6 bg-gray-300 dark:bg-gray-600 mb-4 rounded w-3/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-4 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded w-5/6"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                  <div className="h-8 w-20 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

  if (error) return <div>{error}</div>;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                   <img
                    className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-300"
                    src={project.image} // Cloudinary URL
                    alt={project.name}
                    onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")} // Fallback in case of error
                  />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    <a
                      href={project.demoLink}
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
            <div>No featured projects available.</div>
          )}
        </motion.div>

        {/* View All Projects Button */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <Link
              to="/projects"
              className="group flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

