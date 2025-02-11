import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Users, Sparkles } from 'lucide-react';

// First, the AnimatedBackground component
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0">
    {/* Base gradient background */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-black" />
    
    {/* Main grid */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)',
      backgroundSize: '25px 25px',
      animation: 'grid-flow 20s linear infinite'
    }} />
    
    {/* Larger grid */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(56,189,248,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(56,189,248,0.05) 2px, transparent 1px)',
      backgroundSize: '100px 100px'
    }} />
    
    {/* Diagonal lines */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(45deg, transparent 0%, rgba(56,189,248,0.07) 50%, transparent 100%)',
        backgroundSize: '200px 200px'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(-45deg, transparent 0%, rgba(56,189,248,0.07) 50%, transparent 100%)',
        backgroundSize: '200px 200px'
      }} />
    </div>
    
    {/* Moving light */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-scan" />
    </div>

    {/* Glowing orbs */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] animate-pulse delay-700" />
    </div>

    {/* Dots overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(rgba(56,189,248,0.05) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }} />
  </div>
);

// Next, the ProjectImage component
const ProjectImage = ({ project, onHover }) => (
  <div 
    className="relative w-full h-full group cursor-pointer"
    onMouseEnter={() => onHover(true)}
    onMouseLeave={() => onHover(false)}
  >
    <a 
      href={project.websiteUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <img
        src={project.gifUrl}
        alt={project.title}
        className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
      />
      {/* Hover effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.2),transparent_70%)]" />
        
        {/* Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/50 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400" />
      </div>
    </a>
  </div>
);

// The DeviceFrame component
const DeviceFrame = ({ children }) => (
  <div className="relative mx-auto" style={{ maxWidth: '1000px' }}>
    {/* Ambient glow */}
    <div className="absolute -inset-10 opacity-50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-300" />
    </div>
    
    <div className="relative bg-gradient-to-b from-gray-900 to-black rounded-2xl p-4 shadow-[0_0_50px_rgba(0,0,0,0.7)] backdrop-blur-xl border border-white/5">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 rounded-t-2xl flex items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500/80 rounded-full animate-glow" />
          <div className="w-2 h-2 bg-purple-500/80 rounded-full animate-glow delay-75" />
          <div className="w-2 h-2 bg-cyan-500/80 rounded-full animate-glow delay-150" />
        </div>
        <div className="text-xs text-blue-400/80 font-mono group">
          <span className="group-hover:animate-pulse">&lt;/&gt;</span>
        </div>
      </div>
      
      {/* Screen */}
      <div className="relative mt-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 animate-gradient opacity-80" />
        <div className="relative bg-black m-[2px] rounded-xl aspect-video">
          {children}
        </div>
      </div>
      
      {/* Stand */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-56 h-8">
        <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl border-t border-blue-500/20" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
      </div>
    </div>
  </div>
);

// The ProjectDetails component
const ProjectDetails = ({ project, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed left-0 right-0 bottom-0 mx-auto w-full bg-gradient-to-t from-black via-black/95 to-transparent pb-4 pt-12 z-20"
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl relative overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm md:text-base">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Globe className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                  <h4 className="font-medium">אודות</h4>
                </div>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Code className="w-4 h-4 md:w-5 md:h-5" />
                  <h4 className="font-medium">טכנולוגיות</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs md:text-sm text-blue-400"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-purple-400">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                  <h4 className="font-medium">חדשנות</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.innovations.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs md:text-sm text-purple-400"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Users className="w-4 h-4 md:w-5 md:h-5" />
                  <h4 className="font-medium">יתרונות</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.features.map((feature, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs md:text-sm text-cyan-400"
                    >
                      {feature}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Finally, the main PortfolioPage component
const PortfolioPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dental Website",
      description: "פלטפורמה חדשנית המשלבת טכנולוגיות מתקדמות לניהול וצפייה בטיפולי שיניים",
      gifUrl: "/gifs/Shinaim.gif",
      websiteUrl: "https://dental-website.com",
      technologies: ["React", "Node.js", "MongoDB", "WebGL"],
      features: ["ממשק משתמש אינטואיטיבי", "מערכת ניהול תורים חכמה", "תצוגת תלת-מימד"],
      innovations: ["AI לאבחון", "מציאות רבודה", "צ'אט רפואי חכם"]
    },
    {
      id: 2,
      title: "Cosmetics Store",
      description: "חנות אונליין חדשנית עם חוויית קנייה מתקדמת ופרסונליזציה מלאה",
      gifUrl: "/gifs/Cosmetics.gif",
      websiteUrl: "https://cosmetics-store.com",
      technologies: ["React", "Redux", "Node.js", "AI"],
      features: ["המלצות אישיות", "מציאות רבודה", "ניתוח עור AI"],
      innovations: ["Virtual Try-On", "Smart Mirror", "פרסונליזציה מתקדמת"]
    },
    {
      id: 3,
      title: "Garage Doors",
      description: "פלטפורמה חדשנית להצגת ועיצוב דלתות גראז' עם סימולציה בזמן אמת",
      gifUrl: "/gifs/GarageDoors.gif",
      websiteUrl: "https://garage-doors.com",
      technologies: ["React", "Three.js", "WebGL", "Firebase"],
      features: ["תצוגת תלת-מימד", "סימולציה בזמן אמת", "התאמה אישית"],
      innovations: ["3D Rendering", "מדידות AR", "עיצוב אוטומטי AI"]
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 space-y-8"
          >
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute -inset-10 opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-300" />
              </div>

              {/* Main Title */}
              <div className="relative">
                <motion.h1 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 pb-2"
                >
                  Portfolio
                </motion.h1>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-blue-200/80 max-w-3xl mx-auto font-light"
            >
              יצירת חוויות דיגיטליות חדשניות המשלבות טכנולוגיות מתקדמות ועיצוב פורץ דרך
            </motion.p>

            {/* Tech Tags */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-blue-500/5 backdrop-blur rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <span className="text-blue-400 text-sm font-medium">Full Stack Development</span>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-purple-500/10 to-purple-500/5 backdrop-blur rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <span className="text-purple-400 text-sm font-medium">Modern Design</span>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-cyan-500/5 backdrop-blur rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <span className="text-cyan-400 text-sm font-medium">Creative Solutions</span>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Projects */}
          <div className="space-y-96 mb-48">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative mb-48"
              >
                <DeviceFrame>
                  <ProjectImage 
                    project={project}
                    onHover={(isHovered) => setHoveredProject(isHovered ? project.id : null)}
                  />
                </DeviceFrame>
                
                <ProjectDetails 
                  project={project} 
                  isVisible={hoveredProject === project.id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;