import { AppContext } from "../App.jsx";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";

import Hero from "../components/sections/Hero.jsx";
import Projects from "../components/sections/Projects.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/sections/Footer.jsx";
import EducationAndExperience from "../components/sections/EducationAndExperience.jsx";
import Skills from "../components/sections/Skills.jsx";

function Homepage() {
  const { theme } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <div className="min-h-screen text-zinc-900 dark:text-zinc-100">
      {/* Premium Floating Header */}
      <Navbar />

      {/* Modern structural sections grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 sm:space-y-24 md:space-y-32">
        <Hero />
        <Projects />
        <EducationAndExperience />
        <Skills />
        <Contact />
      </main>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-zinc-200 dark:border-zinc-800" />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Homepage;