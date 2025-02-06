import React, { createContext, useState, useContext } from 'react';

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [featuresVisible, setFeaturesVisible] = useState(false);

  const value = {
    featuresVisible,
    setFeaturesVisible,
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};