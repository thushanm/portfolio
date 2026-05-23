import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Sparkles, Terminal, Code, Award } from "lucide-react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const stats = [
    { label: "Years Experience", value: "2+", icon: Award },
    { label: "Completed Projects", value: "10+", icon: Code },
    { label: "Technologies Used", value: "15+", icon: Terminal },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-12 sm:pb-20 overflow-hidden"
    >
      <div className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-cyber-crimson/10 text-cyber-crimson w-fit mb-4 backdrop-blur-sm border border-cyber-crimson/20"
            >
              <Sparkles size={12} className="animate-pulse" />
              <span>Available for Hire</span>
            </motion.div>

            {/* Role Title */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-xl font-bold text-zinc-600 dark:text-zinc-300"
            >
              <Typewriter
                options={{
                  strings: user_info.main.role,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 45,
                  wrapperClassName: "text-gradient-rose-violet",
                }}
              />
            </motion.div>

            {/* Name Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl font-black mt-3 tracking-tight text-zinc-950 dark:text-white leading-none"
            >
              Hi, I&apos;m{" "}
              <span className="text-zinc-900 dark:text-white relative inline-block">
                {user_info.main.name}
                <span className="absolute left-0 bottom-0 w-full h-[6px] bg-cyber-crimson/30 rounded-full" />
              </span>
            </motion.h1>

            {/* Bio Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 dark:text-zinc-400 text-zinc-600 text-base sm:text-lg font-light leading-relaxed max-w-xl"
            >
              {user_info.main.description}
            </motion.p>

            {/* Socials & CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-cyber-crimson to-cyber-rose hover:from-cyber-rose hover:to-cyber-crimson text-white font-semibold rounded-full shadow-lg shadow-cyber-crimson/20 hover:shadow-cyber-crimson/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>View Projects</span>
                <IoIosArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="px-8 py-3.5 border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-800 font-semibold rounded-full text-zinc-800 dark:text-white transition-all duration-300"
              >
                Let&apos;s Talk
              </a>

              {/* Social Quick-Links */}
              <div className="flex items-center gap-3 ml-2">
                <a
                  href={user_info.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-cyber-crimson hover:text-cyber-crimson dark:hover:border-cyber-crimson text-zinc-500 dark:text-zinc-400 transition-all duration-300"
                  aria-label="GitHub Link"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={user_info.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-cyber-crimson hover:text-cyber-crimson dark:hover:border-cyber-crimson text-zinc-500 dark:text-zinc-400 transition-all duration-300"
                  aria-label="LinkedIn Link"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 mt-12 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-8"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-black text-gradient-rose-violet flex items-center gap-1.5">
                      <Icon size={16} className="text-cyber-crimson hidden sm:inline" />
                      {stat.value}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Profile Photo */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 70,
                delay: 0.2,
                duration: 0.8,
              }}
              className="relative w-64 sm:w-80 h-64 sm:h-80"
            >
              {/* Outer Decorative Rotating Ring */}
              <div className="absolute inset-0 border-2 border-dashed border-cyber-crimson/30 dark:border-cyber-crimson/20 rounded-full animate-[spin_40s_linear_infinite]" />

              {/* Inner Decorative Pulsing Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyber-crimson to-cyber-violet rounded-full opacity-10 blur-xl animate-pulse" />

              {/* Image Frame Wrapper */}
              <div className="absolute inset-2 bg-gradient-to-tr from-cyber-crimson to-cyber-violet rounded-full p-[3px] shadow-glow-ruby overflow-hidden group hover:scale-[1.03] transition-transform duration-500">
                <img
                  src={user_info.main.photo}
                  className="w-full h-full object-cover rounded-full bg-zinc-100 dark:bg-zinc-900 group-hover:scale-105 transition-transform duration-500"
                  alt={user_info.main.name}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
