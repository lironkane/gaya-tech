// src/pages/SkeletonTestPage.jsx
import React from 'react';
import BackgroundSkeleton from '../components/BackgroundSkeleton';

const TestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>בדיקת שלד פשוט</h1>
      <BackgroundSkeleton />
    </div>
  );
};

export default TestPage;