import { useState } from "react";
import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt, FaGitlab, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiAntdesign, SiExpress, SiFlask, SiJest, SiNuxtdotjs, SiPassport, SiPostman, SiPythonanywhere, SiSequelize, SiTailwindcss, SiTensorflow } from "react-icons/si";
import { Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend Development" },
    { id: "backend", name: "Backend & Databases" },
    { id: "tools", name: "DevOps & Tools" },
  ];

  const skillsData = [
    { name: "HTML", category: "frontend", icon: FaHtml5, color: "hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10" },
    { name: "CSS", category: "frontend", icon: FaCss3Alt, color: "hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 dark:hover:bg-blue-500/10" },
    { name: "JavaScript", category: "frontend", icon: IoLogoJavascript, color: "hover:border-yellow-500 hover:text-yellow-500 hover:bg-yellow-500/5 dark:hover:bg-yellow-500/10" },
    { name: "TypeScript", category: "frontend", icon: BiLogoTypescript, color: "hover:border-blue-600 hover:text-blue-600 hover:bg-blue-600/5 dark:hover:bg-blue-600/10" },
    { name: "React", category: "frontend", icon: FaReact, color: "hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 dark:hover:bg-cyan-400/10" },
    { name: "VueJS", category: "frontend", icon: FaVuejs, color: "hover:border-emerald-500 hover:text-emerald-500 hover:bg-emerald-500/5 dark:hover:bg-emerald-500/10" },
    { name: "NuxtJS", category: "frontend", icon: SiNuxtdotjs, color: "hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/10" },
    { name: "Tailwind", category: "frontend", icon: SiTailwindcss, color: "hover:border-sky-400 hover:text-sky-400 hover:bg-sky-400/5 dark:hover:bg-sky-400/10" },
    
    { name: "NodeJS", category: "backend", icon: FaNodeJs, color: "hover:border-green-500 hover:text-green-500 hover:bg-green-500/5 dark:hover:bg-green-500/10" },
    { name: "Express", category: "backend", icon: SiExpress, color: "hover:border-zinc-500 hover:text-zinc-500 dark:hover:text-zinc-300 hover:bg-zinc-500/5 dark:hover:bg-zinc-500/10" },
    { name: "Flask", category: "backend", icon: SiFlask, color: "hover:border-zinc-400 hover:text-zinc-400 dark:hover:text-zinc-300 hover:bg-zinc-400/5 dark:hover:bg-zinc-400/10" },
    { name: "Python", category: "backend", icon: FaPython, color: "hover:border-yellow-500 hover:text-blue-400 hover:bg-yellow-500/5 dark:hover:bg-yellow-500/10" },
    { name: "MongoDB", category: "backend", icon: DiMongodb, color: "hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-600/5 dark:hover:bg-emerald-600/10" },
    
    { name: "Git", category: "tools", icon: FaGitAlt, color: "hover:border-orange-600 hover:text-orange-600 hover:bg-orange-600/5 dark:hover:bg-orange-600/10" },
    { name: "Github", category: "tools", icon: DiGithubAlt, color: "hover:border-zinc-800 hover:text-zinc-800 dark:hover:border-white dark:hover:text-white hover:bg-zinc-800/5 dark:hover:bg-white/10" },
    { name: "Gitlab", category: "tools", icon: FaGitlab, color: "hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10" },
    { name: "Postman", category: "tools", icon: SiPostman, color: "hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/5 dark:hover:bg-orange-500/10" },
    { name: "Docker", category: "tools", icon: FaDocker, color: "hover:border-blue-500 hover:text-blue-500 hover:bg-blue-500/5 dark:hover:bg-blue-500/10" },
  ];

  const filteredSkills = skillsData.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyber-rose/10 text-cyber-rose mb-3">
          <Cpu size={13} />
          <span>My Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Technologies I Use
        </h2>
        <p className="mt-3 text-sm sm:text-base dark:text-zinc-400 text-zinc-600 max-w-xl font-light">
          A granular view of systems, languages, and modern utilities that power my build processes.
        </p>
      </div>

      {/* Category Selection Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-zinc-100/50 dark:bg-zinc-900/50 p-1.5 rounded-2xl w-fit mx-auto border border-zinc-200/50 dark:border-zinc-800/50 backdrop-blur-md">
        {categories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-white dark:bg-zinc-800 text-cyber-crimson shadow-md border-b border-cyber-crimson/20"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Skill Badges List */}
      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.2 } }}
                className={`inline-flex items-center gap-3 py-3.5 px-4 rounded-xl font-semibold border border-zinc-200/30 dark:border-zinc-800/30 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-700 dark:text-zinc-300 transition-all duration-500 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1 ${skill.color}`}
              >
                <Icon className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm tracking-tight">{skill.name}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Skills;
