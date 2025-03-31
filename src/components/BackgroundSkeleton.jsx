// src/components/BasicSkeleton.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BasicSkeleton = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // בדיקה אם הרפרנס קיים
    console.log("Mount ref:", mountRef.current);
    
    if (!mountRef.current) return;
    
    // הגדרות בסיסיות
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a4b8f);
    
    const camera = new THREE.PerspectiveCamera(
      45, 
      mountRef.current.clientWidth / mountRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // יצירת רנדרר
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    
    // לוגים לדיבאג
    console.log("Canvas size:", mountRef.current.clientWidth, mountRef.current.clientHeight);
    console.log("Renderer created:", renderer);
    
    // הוספת הקנבס לDOM
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);
    
    // תאורה בסיסית
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // יצירת שלד פשוט (קוביה כדוגמא)
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x62a9ff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // אנימציה פשוטה
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      
      renderer.render(scene, camera);
      const animationId = requestAnimationFrame(animate);
      return animationId;
    };
    
    const animationId = animate();
    
    // ניקוי משאבים
    return () => {
      cancelAnimationFrame(animationId);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return (
    <div style={{
      width: '500px',
      height: '500px',
      margin: '50px auto',
      border: '2px solid blue',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div 
        ref={mountRef} 
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        pointerEvents: 'none'
      }}>
        אם אתה רואה את ההודעה הזו, הדיב נטען אבל Three.js לא
      </div>
    </div>
  );
};

export default BasicSkeleton;