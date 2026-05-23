import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NotFound from './pages/404'
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { motion } from "framer-motion";
import "preline/preline";

export const AppContext = createContext();

function App() {
	const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<div className="relative overflow-hidden min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
				{/* Background Glow Orbs */}
				<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
					<motion.div
						animate={{
							x: [0, 100, -80, 0],
							y: [0, 80, -100, 0],
							scale: [1, 1.15, 0.9, 1],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="glow-orb w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-cyber-crimson/10 dark:bg-cyber-crimson/5 top-[10%] left-[5%]"
					/>
					<motion.div
						animate={{
							x: [0, -120, 80, 0],
							y: [0, 100, -60, 0],
							scale: [1, 0.85, 1.1, 1],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="glow-orb w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyber-violet/10 dark:bg-cyber-violet/5 top-[40%] right-[10%]"
					/>
					<motion.div
						animate={{
							x: [0, 70, -100, 0],
							y: [0, -90, 80, 0],
							scale: [1, 1.1, 0.95, 1],
						}}
						transition={{
							duration: 22,
							repeat: Infinity,
							ease: "easeInOut",
						}}
						className="glow-orb w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-cyber-indigo/10 dark:bg-cyber-indigo/5 bottom-[10%] left-[15%]"
					/>
				</div>

				{/* App Content Wrapper */}
				<div className="relative z-10">
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Homepage />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</div>
			</div>
		</AppContext.Provider>
	)
}

export default App
