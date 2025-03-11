import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import joseph from '../joseph.jpg';
import { Github, Linkedin, Twitter, Download, MessageCircle, Code2, Server, Database, Cloud } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export const Hero: React.FC = () => {
  const [showAllSkills, setShowAllSkills] = useState(false); // State to toggle skills visibility

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skills = [
    { icon: <Code2 className="w-5 h-5" />, name: 'React.js' },
    { icon: <Server className="w-5 h-5" />, name: 'Node.js' },
    { icon: <Database className="w-5 h-5" />, name: 'MongoDB' },
    { icon: <Code2 className="w-5 h-5" />, name: 'JavaScript' },
    { icon: <Code2 className="w-5 h-5" />, name: 'Python' },
    { icon: <Code2 className="w-5 h-5" />, name: 'Java' },
    { icon: <Cloud className="w-5 h-5" />, name: 'AWS' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'Git & GitHub' },
    { icon: <Code2 className="w-5 h-5" />, name: 'TypeScript' },
    { icon: <Server className="w-5 h-5" />, name: 'Express.js' },
    { icon: <Database className="w-5 h-5" />, name: 'SQL' },
    { icon: <Code2 className="w-5 h-5" />, name: 'GraphQL' },
    { icon: <Server className="w-5 h-5" />, name: 'Docker' },
    { icon: <Database className="w-5 h-5" />, name: 'PostgreSQL' },
    { icon: <Server className="w-5 h-5" />, name: 'Kubernetes' },
    { icon: <Server className="w-5 h-5" />, name: 'CI/CD (Continuous Integration/Continuous Deployment)' },
    { icon: <Database className="w-5 h-5" />, name: 'Redis (Caching)' },
    { icon: <Cloud className="w-5 h-5" />, name: 'Azure' },
    { icon: <Code2 className="w-5 h-5" />, name: 'Terraform (Infrastructure as Code)' },
    { icon: <Server className="w-5 h-5" />, name: 'Serverless Architecture (AWS Lambda)' },
    { icon: <Server className="w-5 h-5" />, name: 'ElasticSearch' },
    { icon: <FaGithub className="w-5 h-5" />, name: 'GitLab CI/CD' },
    { icon: <Server className="w-5 h-5" />, name: 'Nginx' },
    { icon: <Database className="w-5 h-5" />, name: 'Cassandra (NoSQL)' },
    { icon: <Server className="w-5 h-5" />, name: 'Apache Kafka' },
  ];

  const skillsToShow = showAllSkills ? skills : skills.slice(0, 5); // Show 5 skills initially, or all skills if showAllSkills is true

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div {...fadeIn} className="space-y-4">
              <h2 className="text-sm font-semibold text-blue-500 dark:text-blue-400 tracking-wider uppercase">
                Welcome to my portfolio
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  Joseph Don Jins
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-blue-500 dark:text-blue-400">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'Full Stack Engineer',
                    2000,
                    'React Specialist',
                    2000,
                    'Node.js Expert',
                    2000,
                  ]}
                  repeat={Infinity}
                />
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Passionate about crafting scalable web applications and turning complex problems into elegant solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeIn} className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href=".JOSEPH DON JINS RESUME.pdf"  // Ensure this is the correct path to your file
              download // This attribute triggers a download when the link is clicked
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = "/bot"}
                className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Let's Connect
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div {...fadeIn} className="space-y-4">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Connect with me
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <Github className="w-5 h-5" />, link: 'https://github.com/donjins', label: 'GitHub' },
                  { icon: <Linkedin className="w-5 h-5" />, link: 'https://www.linkedin.com/in/joseph-don-jins/', label: 'LinkedIn' },
                  {
                    icon: (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBLC3A3wtm5EUso9FukJ2xwTFXH36Ly2x86A&s"
                        alt="LeetCode"
                        className="w-5 h-5 object-contain"
                      />
                    ),
                    link: 'https://leetcode.com/u/Josephdon/',
                    label: 'LeetCode',
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div {...fadeIn} className="space-y-4">
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Best Skills On
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skillsToShow.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-xs"
                  >
                    {skill.icon}
                    <span className="text-xs font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowAllSkills(!showAllSkills)}
                className="text-blue-500 dark:text-blue-400 mt-4 text-xs py-1 px-3 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                {showAllSkills ? 'Show Less Skills' : 'Show More Skills'}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              <img
                src={joseph}
                alt="Joseph Don Jins"
                className="rounded-2xl w-full h-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 " />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
