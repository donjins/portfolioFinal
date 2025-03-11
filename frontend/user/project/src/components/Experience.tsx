import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "MERN Stack Developer",
    company: "MashupStack",
    description: "Currently learning and developing web applications using MERN stack.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: "2024",
    title: "BCA Graduate",
    company: "MG University (Mar Augusthinose College)",
    description: "Graduated with a Bachelor of Computer Applications, specializing in web development and programming.",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "Freelancer",
    company: "Self-Initiated Projects",
    description: "Freelancing by working on various web development projects, including an e-commerce platform and a weather app, to build a diverse portfolio.",
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    year: "2025",
    title: "Full Stack Developer (Job-Seeking)",
    company: "Self-Initiated",
    description: "Currently seeking full-time job opportunities in top tech companies by working on diverse projects like e-commerce and portfolio websites to enhance my skills and profile.",
    icon: <Briefcase className="w-6 h-6" />,
  },
];

export const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Experience & Education
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900" />

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Experience or Education side */}
                <div className="flex-1">
                  <div
                    className={`bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg relative ${
                      index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white left-[-44px] md:left-auto md:right-[-44px]">
                      {item.icon}
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{item.company}</p>
                    <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                {/* Empty div to push the content */}
                <div className="flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
