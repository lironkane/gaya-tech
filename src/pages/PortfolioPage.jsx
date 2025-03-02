import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Users, Sparkles } from 'lucide-react';

// AnimatedBackground component remains the same...
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900/10 to-black" />
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(56,189,248,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.07) 1px, transparent 1px)',
      backgroundSize: '25px 25px'
    }} />
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(56,189,248,0.05) 2px, transparent 2px), linear-gradient(90deg, rgba(56,189,248,0.05) 2px, transparent 1px)',
      backgroundSize: '100px 100px'
    }} />
  </div>
);

// ProjectImage component
const ProjectImage = ({ project }) => (
  <div className="relative w-full h-full">
    <a 
      href={project.websiteUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full h-full"
    >
      <img
        src={project.gifUrl}
        alt={project.title}
        className="w-full h-full object-contain transition-all duration-700"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.2),transparent_70%)]" />
        
        {/* Corners */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/50" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-400/50" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-400/50" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-400/50" />
      </div>
    </a>
  </div>
);

// Updated DeviceFrame component with better monitor styling
const DeviceFrame = ({ children }) => (
  <div className="relative mx-auto max-w-4xl">
    {/* Monitor frame */}
    <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-3 shadow-2xl border border-gray-700">
      {/* Monitor top bar with buttons */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-t-2xl flex items-center px-4">
        <div className="flex space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Screen content */}
      <div className="relative mt-6 rounded-lg overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-50" />
        <div className="relative aspect-video">
          {children}
        </div>
      </div>
    </div>


  </div>
);

// Updated ProjectDetails component with tighter integration
const ProjectDetails = ({ project, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="mt-4"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm md:text-base">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400">
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
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

// Updated Project component
const Project = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.3);
      },
      {
        threshold: 0.3,
        rootMargin: "-5% 0px"
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={projectRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative mb-24"
    >
      <DeviceFrame>
        <ProjectImage project={project} />
      </DeviceFrame>
      
      <ProjectDetails 
        project={project} 
        isVisible={isVisible}
      />
    </motion.div>
  );
};

// PortfolioPage component
const PortfolioPage = () => {
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
                <Project 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PortfolioPage;