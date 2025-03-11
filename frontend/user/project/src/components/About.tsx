import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Server, Globe, Brain, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const skillsList = [
    { icon: <Code2 className="w-6 h-6" />, name: 'Frontend Development', level: 95 },
    { icon: <Server className="w-6 h-6" />, name: 'Backend Development', level: 90 },
    { icon: <Database className="w-6 h-6" />, name: 'Database Management', level: 85 },
    { icon: <Globe className="w-6 h-6" />, name: 'RESTful APIs', level: 92 },
    { icon: <Brain className="w-6 h-6" />, name: 'Problem Solving', level: 88 },
    { icon: <Coffee className="w-6 h-6" />, name: 'Clean Code', level: 94 },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          <motion.div variants={containerVariants}>
  <h2 className="text-3xl font-bold mb-6">About Me</h2>
  <div className="space-y-4 text-gray-600 dark:text-gray-300">
    <p>
      I am a passionate and driven full-stack developer, constantly seeking to build scalable, efficient, and user-friendly web applications. With a strong foundation in modern JavaScript and web technologies, I specialize in both front-end and back-end development, leveraging frameworks like React.js, Node.js, and Express to create seamless digital experiences. My expertise also extends to database design, API development, and cloud deployment, ensuring that the applications I build are not only functional but also highly maintainable and performant.
    </p>
    <p>
      In addition to my core skills, I have a deep interest in solving complex problems, which has led me to focus on Data Structures and Algorithms (DSA) to sharpen my problem-solving abilities. I regularly practice on platforms like LeetCode, where I tackle a wide range of algorithmic challenges to improve my coding skills and deepen my understanding of optimal solutions. This commitment to mastering DSA helps me write more efficient code and develop applications that scale well, even under pressure. I am also familiar with the principles of AI and machine learning and look forward to integrating these technologies into future projects to create intelligent, data-driven solutions.
    </p>
    <p>
      Outside of coding, I am deeply involved in the developer community, contributing to open-source projects, writing technical blogs, and mentoring junior developers to help them grow in their careers. I believe in continuous learning and actively keep up with emerging technologies, always looking for ways to enhance my skill set. My ultimate goal is to work on impactful projects where I can leverage my skills to solve real-world problems and contribute to innovative solutions while also growing as a developer and team member.
    </p>
  </div>
</motion.div>


          <motion.div variants={containerVariants}>
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="space-y-6">
              {skillsList.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="relative"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default About; 