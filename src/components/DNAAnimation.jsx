// src/components/DNAAnimation.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './DNAAnimation.css';

const DNAAnimation = ({ 
  scrollProgress = 0, // 0-1 אחוז הגלילה בעמוד
  interactive = true,  // האם מגיב לעכבר
  scale = 1,           // גודל הסליל
  connectorColor = '#4a7aef', // צבע המחברים
  backboneColor = '#2a3b9f', // צבע השדרה
  glowColor = '#7aadff',     // צבע הזוהר
  backgroundColor = '#f5f8ff' // רקע בהיר
}) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    let animationFrameId;
    
    // ------------------------------------------
    // הגדרות בסיסיות
    // ------------------------------------------
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);
    
    const camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    camera.position.z = 15;
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // ------------------------------------------
    // תאורה משופרת
    // ------------------------------------------
    
    // תאורת סביבה מוגברת
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // אור סביבה חזק יותר
    scene.add(ambientLight);
    
    // תאורה כיוונית עיקרית חזקה יותר
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0); // עוצמה מוגברת
    mainLight.position.set(10, 10, 10);
    scene.add(mainLight);
    
    // תאורה נקודתית שתזוז עם העכבר - חזקה יותר ועם טווח גדול יותר
    const mouseLight = new THREE.PointLight(new THREE.Color(glowColor), 1.5, 25);
    mouseLight.position.set(0, 0, 5);
    scene.add(mouseLight);
    
    // הוספת תאורה נוספת מהצד הנגדי
    const secondaryLight = new THREE.DirectionalLight(0x6b8cff, 0.5);
    secondaryLight.position.set(-10, -5, -10);
    scene.add(secondaryLight);
    
    // ------------------------------------------
    // יצירת סליל DNA משודרג
    // ------------------------------------------
    
    // קבוצת הסליל
    const dnaGroup = new THREE.Group();
    
    // הזזה לצד ימין
    dnaGroup.position.x = 5;
    
    scene.add(dnaGroup);
    dnaGroup.scale.set(scale, scale, scale);
    
    // פרמטרים של הסליל
    const dnaParams = {
      numSteps: 80,         // מספר גדול של צעדים בסליל
      radius: 3,            // רדיוס הסליל
      height: 80,           // גובה הסליל מוגדל משמעותית
      verticalSpacing: 1,   // מרווח אנכי בין צעדים
      twistRate: 0.3,       // קצב הסיבוב
      backboneRadius: 0.25, // רדיוס השדרה
      connectorWidth: 3,    // רוחב המחברים
      connectorHeight: 0.15,// גובה המחברים
      connectorDepth: 0.15, // עומק המחברים
      rotationSpeed: 0.08   // מהירות סיבוב איטית
    };
    
    // חומרים משופרים עם יותר ברק ואפקטים
    const backboneMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(backboneColor),
      shininess: 100, // יותר ברק
      specular: 0x666666, // ספקולר חזק יותר
      emissive: new THREE.Color(backboneColor).multiplyScalar(0.1), // הוספת אפקט זוהר קל
    });
    
    // חומר למחברים עם זוהר חזק יותר
    const connectorMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color(connectorColor),
      shininess: 110,
      specular: 0x888888,
      emissive: new THREE.Color(connectorColor).multiplyScalar(0.3),
      emissiveIntensity: 0.5 // זוהר חזק יותר
    });
    
    // מאגר של כל האלמנטים בסליל
    const dnaElements = {
      backbones: [],
      connectors: [],
      steps: []
    };
    
    // בניית הסליל
    for (let i = 0; i < dnaParams.numSteps; i++) {
      // המיקום האנכי בסליל
      const y = i * dnaParams.verticalSpacing - dnaParams.height / 2;
      const angle = i * dnaParams.twistRate;
      
      // יצירת קבוצה לצעד הנוכחי
      const stepGroup = new THREE.Group();
      stepGroup.position.y = y;
      
      // שמירת מידע על הצעד
      const stepData = {
        group: stepGroup,
        backbones: [],
        connector: null,
        y: y,
        angle: angle,
        index: i
      };
      
      // יצירת שתי נקודות השדרה (ימין ושמאל של הסליל)
      for (let strand = 0; strand < 2; strand++) {
        const strandAngle = angle + Math.PI * strand;
        
        // גאומטריה עגולה עבור השדרה
        const backboneGeometry = new THREE.SphereGeometry(
          dnaParams.backboneRadius,
          12, 12
        );
        
        const backbone = new THREE.Mesh(
          backboneGeometry,
          backboneMaterial
        );
        
        // מיקום על המעגל
        backbone.position.set(
          Math.cos(strandAngle) * dnaParams.radius,
          0,
          Math.sin(strandAngle) * dnaParams.radius
        );
        
        stepGroup.add(backbone);
        stepData.backbones.push(backbone);
        dnaElements.backbones.push(backbone);
      }
      
      // שיפור: שימוש ב-CurveGeometry עבור המחבר - מחבר חלק ומושלם בין הנקודות
      const startPoint = stepData.backbones[0].position.clone();
      const endPoint = stepData.backbones[1].position.clone();
      
      // שיטה חדשה: יצירת מסלול מעוגל בין שתי נקודות השדרה
      const curvePoints = [];
      
      // מספר נקודות ביניים לעקומה חלקה יותר
      const numIntermediatePoints = 8;
      
      for (let j = 0; j <= numIntermediatePoints; j++) {
        const t = j / numIntermediatePoints;
        
        // שימוש באינטרפולציה מעוגלת יותר
        const point = new THREE.Vector3().lerpVectors(startPoint, endPoint, t);
        
        // הוספת עקמומיות קלה למסלול
        if (j > 0 && j < numIntermediatePoints) {
          const middleOffset = Math.sin(Math.PI * t) * 0.2;
          point.y += middleOffset;
        }
        
        curvePoints.push(point);
      }
      
      // יצירת עקומה מהנקודות
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      
      // יצירת צינור לאורך המסלול
      const tubeGeometry = new THREE.TubeGeometry(
        curve,
        10,       // segmentsRadial
        0.08,     // radius
        8,        // radialSegments
        false     // closed
      );
      
      const connector = new THREE.Mesh(tubeGeometry, connectorMaterial.clone());
      stepGroup.add(connector);
      
      // שמירת המחבר
      stepData.connector = connector;
      dnaElements.connectors.push(connector);
      
      // הוספה לקבוצת ה-DNA
      dnaGroup.add(stepGroup);
      dnaElements.steps.push(stepData);
    }
    
    // ------------------------------------------
    // מעקב אחרי העכבר
    // ------------------------------------------
    
    const mouse = { 
      x: 0, 
      y: 0,
      worldX: 0, // מיקום עולמי
      worldY: 0,
      worldZ: 10
    };
    
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // המרה ממיקום מסך למיקום עולמי
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      
      // מיקום עולמי של העכבר
      mouse.worldX = camera.position.x + dir.x * distance;
      mouse.worldY = camera.position.y + dir.y * distance;
      
      // עדכון מיקום האור ההולך אחרי העכבר
      mouseLight.position.set(mouse.worldX * 5, mouse.worldY * 5, 5);
    };
    
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // ------------------------------------------
    // התאמה לשינויי גודל חלון
    // ------------------------------------------
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    
    window.addEventListener('resize', handleResize);
    
    // ------------------------------------------
    // אנימציה עם יותר אינטראקטיביות
    // ------------------------------------------
    
    const clock = new THREE.Clock();
    let initialRotation = dnaGroup.rotation.y;
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // סיבוב הסליל ישירות לפי הגלילה - בצורה בולטת יותר
      // כל 10% גלילה = 36 מעלות סיבוב
      dnaGroup.rotation.y = initialRotation + scrollProgress * Math.PI * 4;
      
      // גלילה אנכית של הסליל בהתאם לגלילה עם פקטור גדול יותר
      dnaGroup.position.y = scrollProgress * 30 - 15;
      
      // סיבוב קל של הסליל גם ללא אינטראקציה
      if (!interactive) {
        dnaGroup.rotation.y += 0.005; // סיבוב איטי ומתמשך
      }
      
      // אינטראקציה עם העכבר - אם מופעלת
      if (interactive) {
        // הטיית הסליל לפי העכבר - תנועה עדינה
        const targetRotationX = mouse.y * 0.3;
        const targetRotationZ = mouse.x * 0.2;
        
        // החלקה של התנועה
        dnaGroup.rotation.x += (targetRotationX - dnaGroup.rotation.x) * 0.05;
        dnaGroup.rotation.z += (targetRotationZ - dnaGroup.rotation.z) * 0.05;
        
        // אפקט זוהר מוגבר על מחברים קרובים לעכבר
        dnaElements.steps.forEach(step => {
          // המרת מיקום הצעד למיקום עולמי
          const worldPosition = new THREE.Vector3();
          step.group.getWorldPosition(worldPosition);
          
          // חישוב המרחק בין העכבר לצעד
          const distanceToMouse = Math.sqrt(
            Math.pow(worldPosition.x - mouse.worldX, 2) + 
            Math.pow(worldPosition.y - mouse.worldY, 2)
          );
          
          // זוהר למחברים קרובים - הגדלת הטווח והעוצמה
          if (distanceToMouse < 12) { // טווח גדול יותר
            // עוצמת הזוהר הפוכה למרחק
            const glowIntensity = 1.2 - (distanceToMouse / 12); // עוצמה חזקה יותר
            step.connector.material.emissive = new THREE.Color(glowColor);
            step.connector.material.emissiveIntensity = glowIntensity;
          } else {
            // חזרה למצב הרגיל עם זוהר בסיסי
            step.connector.material.emissive = new THREE.Color(connectorColor).multiplyScalar(0.3);
            step.connector.material.emissiveIntensity = 0.4; // זוהר בסיסי חזק יותר
          }
        });
      }
      
      // רנדור
      renderer.render(scene, camera);
      
      // המשך אנימציה
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // התחלת האנימציה
    animate();
    
    // ------------------------------------------
    // ניקוי משאבים
    // ------------------------------------------
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      
      // שחרור הגיאומטריות והחומרים
      dnaElements.backbones.forEach(backbone => {
        backbone.geometry.dispose();
        backbone.material.dispose();
      });
      
      dnaElements.connectors.forEach(connector => {
        connector.geometry.dispose();
        connector.material.dispose();
      });
      
      renderer.dispose();
    };
  }, [scrollProgress, interactive, scale, connectorColor, backboneColor, glowColor, backgroundColor]);
  
  return (
    <div className="dna-animation-container">
      <canvas ref={canvasRef} className="dna-animation-canvas" />
    </div>
  );
};

export default DNAAnimation;