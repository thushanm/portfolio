import user_info from "../../data/user_info.js";
import { FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Mail, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const socialLinks = [
    { name: "LinkedIn", href: user_info.socials.linkedin, icon: FaLinkedin, color: "hover:text-blue-500 hover:border-blue-500/30 hover:bg-blue-500/5" },
    { name: "GitHub", href: user_info.socials.github, icon: FaGithub, color: "hover:text-zinc-900 dark:hover:text-white hover:border-zinc-500/30 hover:bg-zinc-500/5" },
    { name: "WhatsApp", href: user_info.socials.whatsapp, icon: FaWhatsapp, color: "hover:text-emerald-500 hover:border-emerald-500/30 hover:bg-emerald-500/5" },
    { name: "Facebook", href: user_info.socials.facebook, icon: FaFacebook, color: "hover:text-blue-600 hover:border-blue-600/30 hover:bg-blue-600/5" },
  ];

  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12"
      >
        {/* Left Side: Contact Info & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyber-crimson/10 text-cyber-crimson mb-2">
              <Mail size={13} />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Let&apos;s Connect & Collaborate
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-light text-base leading-relaxed">
              Have a project in mind, want to discuss software engineering, or just want to connect? Drop a message! I usually reply within 24 hours.
            </p>
          </motion.div>

          {/* Social Links Cards */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Quick Connections
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 p-3.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/20 dark:bg-zinc-900/10 backdrop-blur-md text-zinc-600 dark:text-zinc-300 font-medium transition-all duration-300 ${social.color}`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Email Quick-Bar */}
          <motion.div
            variants={itemVariants}
            className="p-4 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/20 dark:bg-zinc-900/10 backdrop-blur-md"
          >
            <span className="text-xs text-zinc-400 dark:text-zinc-500 font-bold uppercase">Direct Email</span>
            <a
              href={`mailto:${user_info.main.email}`}
              className="flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200 hover:text-cyber-crimson dark:hover:text-cyber-crimson transition-colors duration-300 font-bold mt-2 group"
            >
              <MdEmail size={18} className="text-cyber-crimson group-hover:scale-110 transition-transform" />
              <span>{user_info.main.email}</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Message Form */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 glassmorphism-card rounded-3xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-2.5 mb-6">
            <MessageSquare size={18} className="text-cyber-crimson" />
            <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
              Send a Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyber-crimson dark:focus:border-cyber-crimson focus:ring-1 focus:ring-cyber-crimson transition-all duration-300"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyber-crimson dark:focus:border-cyber-crimson focus:ring-1 focus:ring-cyber-crimson transition-all duration-300"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Project Consultation"
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyber-crimson dark:focus:border-cyber-crimson focus:ring-1 focus:ring-cyber-crimson transition-all duration-300"
              />
            </div>

            {/* Message Body */}
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Message Description
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your idea or message details..."
                className="w-full px-4 py-3 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/20 backdrop-blur-md text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-cyber-crimson dark:focus:border-cyber-crimson focus:ring-1 focus:ring-cyber-crimson transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3.5 px-6 font-semibold rounded-xl text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 ${
                sent
                  ? "bg-emerald-500 shadow-emerald-500/20"
                  : "bg-gradient-to-r from-cyber-crimson to-cyber-rose hover:from-cyber-rose hover:to-cyber-crimson shadow-cyber-crimson/20 hover:shadow-cyber-crimson/40 hover:-translate-y-0.5"
              }`}
            >
              {sent ? (
                <>
                  <span>Message Sent Successfully!</span>
                </>
              ) : (
                <>
                  <Send size={15} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;
