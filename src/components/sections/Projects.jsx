import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyber-violet/10 text-cyber-violet mb-3">
          <FolderGit2 size={13} />
          <span>My Works</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base dark:text-zinc-400 text-zinc-600 max-w-xl font-light">
          A showcase of application environments, POS systems, and software engineering solutions I have designed and developed.
        </p>
      </div>

      {/* Projects Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {user_info.projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              link={project.link}
            />
          );
        })}
      </motion.div>
    </section>
  );
}

export default Projects;
