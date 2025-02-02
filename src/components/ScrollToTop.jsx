import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnimation } from 'framer-motion';

function ScrollToTop({ children }) {
  const location = useLocation();
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Start exit animation
      await controls.start({ opacity: 0, y: -20, transition: { duration: 0.15 } });
      // Scroll to top after exit animation
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    sequence();
  }, [location, controls]);

  return <>{children}</>;
}

export default ScrollToTop;