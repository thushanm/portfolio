import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function Project({ title, description, technologies, link, github }) {
  // Dynamic color mapper based on technology name
  const getTechStyles = (tech) => {
    const name = tech.trim().toLowerCase();
    if (name.includes("react")) return "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20";
    if (name.includes("spring")) return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
    if (name.includes("mui") || name.includes("material")) return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
    if (name.includes("node")) return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20";
    if (name.includes("tailwind")) return "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20";
    if (name.includes("typescript") || name.includes("ts")) return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20";
    if (name.includes("javascript") || name.includes("js")) return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-500/20";
    if (name.includes("docker")) return "bg-blue-600/10 text-blue-600 dark:text-blue-400 border-blue-600/20";
    if (name.includes("postgres")) return "bg-blue-800/10 text-blue-800 dark:text-blue-400 border-blue-800/20";
    if (name.includes("mongo")) return "bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border-emerald-600/20";
    return "bg-cyber-crimson/10 text-cyber-crimson border-cyber-crimson/20";
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glassmorphism-card relative group rounded-2xl p-6 flex flex-col justify-between overflow-hidden h-full"
    >
      {/* Decorative top gradient accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyber-crimson to-cyber-violet opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Ambient background card glow on hover */}
      <div className="absolute -inset-10 bg-gradient-to-tr from-cyber-crimson/5 to-cyber-violet/5 opacity-0 group-hover:opacity-100 rounded-2xl blur-lg transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.split(",").map((tech, index) => (
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${getTechStyles(tech)}`}
              key={index}
            >
              {tech.trim()}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="font-extrabold text-xl text-zinc-800 dark:text-zinc-100 tracking-tight transition-colors duration-300 group-hover:text-cyber-crimson">
          {title}
        </h3>

        {/* Project Description */}
        <p className="leading-relaxed text-zinc-500 dark:text-zinc-400 font-light text-sm mt-3">
          {description}
        </p>
      </div>

      {/* External Action Links */}
      <div className="flex gap-4 mt-6 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-4 text-zinc-600 dark:text-zinc-400 font-semibold">
        {/* GitHub link button */}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs hover:text-cyber-crimson dark:hover:text-cyber-crimson transition-colors duration-300 group/link"
          >
            <Github size={15} className="group-hover/link:scale-110 transition-transform duration-300" />
            <span>GitHub Code</span>
          </a>
        )}

        {/* Live link button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-xs hover:text-cyber-crimson dark:hover:text-cyber-crimson transition-colors duration-300 group/link ml-auto"
          >
            <ExternalLink size={15} className="group-hover/link:scale-110 transition-transform duration-300" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default Project;
