import user_info from "../../data/user_info.js";
import { GraduationCap, Briefcase, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

function EducationAndExperience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="education-and-experience" className="scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* ============ EDUCATION COLUMN ============ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
            <div className="p-2 bg-cyber-crimson/10 text-cyber-crimson rounded-lg">
              <GraduationCap size={22} />
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              Education
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6 space-y-8">
            {user_info.education.map((edu, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariantsLeft}
                  className="relative group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[33px] top-1.5 size-4 rounded-full bg-cyber-crimson border-4 border-zinc-50 dark:border-zinc-950 group-hover:scale-125 transition-transform duration-300 shadow-glow-ruby" />

                  {/* Card Container */}
                  <div className="glassmorphism-card rounded-2xl p-5 hover:border-cyber-crimson/30 transition-all duration-300">
                    <span className="text-xs font-semibold text-cyber-crimson bg-cyber-crimson/10 px-2.5 py-1 rounded-full">
                      {edu.duration}
                    </span>

                    <div className="flex items-start gap-4 mt-4">
                      {/* Avatar/Logo */}
                      <img
                        className="w-12 h-12 rounded-xl object-cover border border-zinc-200/50 dark:border-zinc-800/50 bg-white"
                        src={edu.image}
                        alt={edu.school}
                      />
                      <div>
                        <h4 className="font-extrabold text-zinc-800 dark:text-zinc-100 leading-snug">
                          {edu.school}
                        </h4>
                        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ============ CERTIFICATES SUBSECTION ============ */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center gap-3 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
              <div className="p-2 bg-cyber-violet/10 text-cyber-violet rounded-lg">
                <Award size={20} />
              </div>
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
                Professional Credentials
              </h3>
            </div>

            {/* Certificate List (Grid layout) */}
            <div className="grid grid-cols-1 gap-4">
              {user_info.certificates.map((cert, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glassmorphism-card rounded-xl p-5 hover:border-cyber-violet/30 transition-all duration-300 flex items-center justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold text-cyber-violet bg-cyber-violet/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {cert.description}
                      </span>
                      <h4 className="font-bold text-zinc-800 dark:text-zinc-100 mt-2 tracking-tight">
                        {cert.title}
                      </h4>
                    </div>

                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-full bg-zinc-100 hover:bg-cyber-violet dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center border border-zinc-200/50 dark:border-zinc-800/50 hover:border-cyber-violet"
                      aria-label="Verify Certificate"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ============ EXPERIENCE COLUMN ============ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Column Header */}
          <div className="flex items-center gap-3 pb-2 border-b border-zinc-200/50 dark:border-zinc-800/50">
            <div className="p-2 bg-cyber-crimson/10 text-cyber-crimson rounded-lg">
              <Briefcase size={22} />
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              Work Experience
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 pl-6 space-y-8">
            {user_info.experience.map((exp, index) => {
              return (
                <motion.div
                  key={index}
                  variants={itemVariantsRight}
                  className="relative group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[33px] top-1.5 size-4 rounded-full bg-cyber-crimson border-4 border-zinc-50 dark:border-zinc-950 group-hover:scale-125 transition-transform duration-300 shadow-glow-ruby" />

                  {/* Card Container */}
                  <div className="glassmorphism-card rounded-2xl p-5 hover:border-cyber-crimson/30 transition-all duration-300">
                    <span className="text-xs font-semibold text-cyber-crimson bg-cyber-crimson/10 px-2.5 py-1 rounded-full">
                      {exp.duration}
                    </span>

                    <div className="flex items-start gap-4 mt-4">
                      {/* Avatar/Logo */}
                      <img
                        className="w-12 h-12 rounded-xl object-cover border border-zinc-200/50 dark:border-zinc-800/50 bg-white"
                        src={exp.image}
                        alt={exp.company}
                      />
                      <div>
                        <h4 className="font-extrabold text-zinc-800 dark:text-zinc-100 leading-snug">
                          {exp.company}
                        </h4>
                        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                          {exp.position}
                        </p>
                      </div>
                    </div>

                    {/* Role Description List */}
                    <ul className="mt-4 space-y-2 border-t border-zinc-200/20 dark:border-zinc-800/20 pt-4">
                      {exp.descriptions.map((desc, idx) => {
                        return (
                          <li className="flex items-start gap-2.5" key={idx}>
                            <svg
                              className="w-4 h-4 text-cyber-crimson mt-0.5 flex-shrink-0"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default EducationAndExperience;
