import React, { useState } from 'react';
import { Monitor, Tablet, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';

// סגנונות גלובליים
const style = document.createElement('style');
style.textContent = `
  @keyframes slowGif {
    0% { transform: scale(1); }
    50% { transform: scale(1.03); }
    100% { transform: scale(1); }
  }

  .tech-border {
    position: relative;
    overflow: hidden;
  }

  .tech-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #4f46e5, #06b6d4, #3b82f6);
    z-index: -1;
    animation: borderRotate 4s linear infinite;
  }

  @keyframes borderRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

    .device-frame {
       position: relative;
       overflow: hidden;
       background-color: #000;
       border-radius: 2rem;
       box-shadow: 0 0 0 5px #000, 0 0 20px 5px rgba(0, 0, 0, 0.5);
       /* מסגרת דמוית מק */
       &:before {
         content: '';
         position: absolute;
         bottom: -25px;
         left: 50%;
         transform: translateX(-50%);
         width: 40%;
         height: 6px;
         background-color: #333;
         border-radius: 6px;
         z-index: 2;
       }

       &:after {
         content: '';
         position: absolute;
         bottom: -35px; /* הזזה נוספת כלפי מטה */
         left: 50%;
         transform: translateX(-50%);
         width: 15%; /* בסיס צר יותר */
         height: 12px; /* גובה מוגדל */
         background-color: #555;
         border-radius: 0 0 12px 12px; /* עיגול רק בפינות התחתונות */
          z-index: 1;
       }
     }

     .device-frame.tablet {
       border-radius: 1rem;

       &:before,
       &:after {
         display: none; /* הסתרת החלק התחתון בטאבלט */
       }
     }
       .device-content {
       position: relative;
       z-index: 3;
       width: 100%;
       height: 100%;
       overflow:hidden;
     }

  .gif-container img {
    animation: slowGif 16s ease-in-out infinite;
    animation-play-state: paused;
  }

  .gif-container:hover img {
    animation-play-state: running;
  }

  .slick-dots li button:before {
    color: #60a5fa;
    font-size: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: #3b82f6;
    opacity: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #3b82f6;
    font-size: 30px;
  }
`;
document.head.appendChild(style);

const ProjectImage = ({ project, onClick }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black gif-container">
      <img
        src={project.gifUrl}
        alt={project.title}
        className="max-w-full max-h-full object-contain"
        style={{
          backgroundColor: 'black',
          zIndex: 50,
          transition: 'all 0.5s ease',
        }}
        onClick={onClick}
      />
    </div>
  );
};

const DeviceFrame = ({ children, type }) => {
    return (
        <div
            className={`device-frame ${type === 'tablet' ? 'tablet' : ''}`}
            style={{
                width: '500px',
                maxWidth: '90vw',
                margin: '0 auto',
                aspectRatio: '16 / 10',
            }}
        >
            <div className="device-content">
                {children}
            </div>
        </div>
    );
};

const PortfolioPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [deviceType, setDeviceType] = useState('laptop');

  const projects = [
    {
      id: 1,
      title: "Dental Website",
      description: "אתר רספונסיבי מתקדם למרפאת שיניים",
      gifUrl: "/gifs/Shinaim.gif",
      technologies: ["React", "Node.js", "MongoDB"],
      features: ["ממשק משתמש אינטואיטיבי", "מערכת ניהול תורים", "תמיכה בכל המכשירים"]
    },
    {
      id: 2,
      title: "Cosmetics Store",
      description: "חנות אונליין לקוסמטיקה",
      gifUrl: "/gifs/Cosmetics.gif",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
      features: ["סל קניות מתקדם", "מערכת תשלומים", "ניהול מלאי"]
    },
    {
      id: 3,
      title: "Garage Doors",
      description: "פלטפורמה להצגת עבודות",
      gifUrl: "/gifs/GarageDoors.gif",
      technologies: ["React", "Next.js", "Tailwind"],
      features: ["אנימציות מתקדמות", "טעינה מהירה", "SEO אופטימלי"]
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900/20 to-black text-white p-8" aria-label="Portfolio - tech-start">
      <Helmet>
        {/* Metadata SEO - Portfolio Page */}
        <title>תיק עבודות | tech-start - פרויקטים נבחרים</title>
        <meta
          name="description"
          content="תיק העבודות של tech-start: הצצה לפרויקטים נבחרים בתחום פיתוח התוכנה, בניית אתרים ואפליקציות, פתרונות ענן ועוד."
        />
        <meta
          name="keywords"
          content="תיק עבודות, tech-start, פיתוח תוכנה, בניית אתרים, אפליקציות, פתרונות ענן, פרויקטים"
        />
        {/* סוף Metadata SEO */}
      </Helmet>
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-1 mb-8 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
          >
            <div className="px-8 py-4 bg-gray-900 rounded-xl">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                תיק עבודות
              </h1>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDeviceType('laptop')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all
                ${deviceType === 'laptop'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <Monitor size={20} />
              <span>מחשב נייד</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDeviceType('tablet')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all
                ${deviceType === 'tablet'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30'
                  : 'bg-gray-800 hover:bg-gray-700'}`}
            >
              <Tablet size={20} />
              <span>טאבלט</span>
            </motion.button>
          </div>
        </motion.div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group px-4"
            >
              <DeviceFrame type={deviceType}>
                <ProjectImage
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </DeviceFrame>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {project.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </Slider>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-8 z-50"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl w-full bg-gray-900/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-blue-500/30"
                onClick={e => e.stopPropagation()}
              >
                <DeviceFrame type={deviceType}>
                  <ProjectImage
                    project={selectedProject}
                  />
                </DeviceFrame>

                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                  <h4 className="text-xl font-semibold mb-3 text-blue-400">תכונות עיקריות</h4>
                  <ul className="grid grid-cols-2 gap-4 mb-6">
                    {selectedProject.features.map(feature => (
                      <li key={feature} className="flex items-center gap-2">
                        <Hexagon size={16} className="text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioPage;