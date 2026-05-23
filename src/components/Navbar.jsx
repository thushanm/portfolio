import { useState, useEffect, useContext } from "react";
import { AppContext } from "../App.jsx";
import { Menu, X, Sun, Moon, Home, Briefcase, Award, GraduationCap, Mail, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import user_info from "../data/user_info.js";

function Navbar() {
  const { theme, switchTheme } = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#hero", icon: Home },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Journey", href: "#education-and-experience", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Sparkles },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${
          scrolled
            ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-lg shadow-lg border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="text-xl font-black tracking-wider text-zinc-900 dark:text-white transition-all duration-300 group-hover:text-cyber-crimson">
              {user_info.main.name.split(" ")[0]}
              <span className="text-cyber-crimson">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-100/50 dark:bg-zinc-900/50 p-1.5 rounded-full border border-zinc-200/30 dark:border-zinc-800/30 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-white dark:hover:bg-zinc-800 transition-all duration-300"
                >
                  <Icon size={15} className="text-cyber-crimson/80" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Switcher & Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={switchTheme}
              className="p-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-300 hover:text-cyber-crimson dark:hover:text-cyber-crimson hover:border-cyber-crimson/30 dark:hover:border-cyber-crimson/30 shadow-sm transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-300 hover:text-cyber-crimson dark:hover:text-cyber-crimson shadow-sm transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 md:hidden px-6 py-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl shadow-xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-300"
                  >
                    <Icon size={18} className="text-cyber-crimson" />
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
