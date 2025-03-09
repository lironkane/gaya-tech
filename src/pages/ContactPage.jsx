import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import * as THREE from 'three';

/**
 * עמוד צור קשר עם רקע אינטראקטיבי (Three.js):
 * - משטח גלים שמגיב לתנועת העכבר
 * - בלי אייקוני רשתות חברתיות
 * - הוספת לינק לוואטסאפ
 */
const ContactPage = () => {
  const canvasRef = useRef(null);

  // נשמור את מיקום העכבר כדי להשפיע על הוורטיסים
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // עוקבים אחר תנועת העכבר
  useEffect(() => {
    const handleMouseMove = (e) => {
      // נקזז לערך [-1..1] לנוחות 
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Three.js רקע אינטראקטיבי
  useEffect(() => {
    let renderer, scene, camera;
    let planeMesh;
    let animationId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true // נרצה רקע שקוף כדי שנוכל לשים גרדיאנט מאחורי
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // סצנה ומצלמה
    scene = new THREE.Scene();
    // רקע הסצנה – אפשר לשים צבע אחיד/שקוף:
    scene.background = new THREE.Color(0xffffff);
    // אבל אנחנו נאפשר שקיפות ע"י alpha:true

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // תאורה סביבתית + נקודתית צבעונית
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff77aa, 0.7);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x77aaff, 0.7);
    pointLight2.position.set(10, -10, 10);
    scene.add(pointLight2);

    // יצירת PlaneGeometry עם רזולוציה גבוהה קצת
    const planeGeo = new THREE.PlaneGeometry(20, 20, 40, 40);
    const planeMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.6,
      side: THREE.DoubleSide
    });
    planeMesh = new THREE.Mesh(planeGeo, planeMat);
    planeMesh.rotation.x = -Math.PI / 2.4;
    scene.add(planeMesh);

    // פונקציית האנימציה
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getElapsedTime();

      // ניגש ל-vertices של ה-geometry 
      // ונוסיף להם רעד קל המבוסס על mouse/time
      planeGeo.verticesNeedUpdate = true; // דרוש ל-Three.js < r125
      const positionAttr = planeGeo.attributes.position; 
      // (בגרסאות חדשות יותר, planeGeo.vertices[] לא נתמך)  

      for (let i = 0; i < positionAttr.count; i++) {
        const x = positionAttr.getX(i);
        const y = positionAttr.getY(i);
        const z = positionAttr.getZ(i);

        // נוסיף עיוות "גלי" לפי time + קרבה למיקום העכבר
        const distMouse = Math.hypot(x - mouse.x * 10, y - mouse.y * 10);
        const wave = 0.6 * Math.sin(distMouse * 1.2 - delta * 2) 
                   + 0.2 * Math.cos(delta * 2);
        positionAttr.setZ(i, wave);
      }
      positionAttr.needsUpdate = true;

      // רוטציית קלה לכל המשטח
      planeMesh.rotation.z += 0.0005;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      scene.remove(planeMesh);
      planeGeo.dispose();
      planeMat.dispose();
    };
  }, [mouse]);

  // מעקב המרות בכניסה לדף
  useEffect(() => {
    if (window?.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'
      });
      console.log('Contact page view conversion tracked');
    }
  }, []);

  // אנימציות Framer Motion עבור תיבות המידע
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 60 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden text-white flex flex-col">
      <Helmet>
        <title>צור קשר | גאיה-טק</title>
        <meta
          name="description"
          content="צרו קשר עם גאיה-טק לקבלת ייעוץ ראשוני. רקע אינטראקטיבי ותמיכה בוואטסאפ!"
        />
      </Helmet>

      {/* קנבס רקע אינטראקטיבי */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none"
      />

      <div className="flex-grow flex flex-col items-center justify-center px-4">
        {/* כותרת */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 font-arimo">צור קשר</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
            נשמח לעזור לכם למצוא פתרון טכנולוגי מותאם אישית. בואו נדבר!
          </p>
        </motion.div>

        {/* כרטיסים: טלפון / אימייל / כתובת */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10"
        >
          {/* כרטיס טלפון */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6 
                       rounded-lg shadow-xl hover:shadow-2xl transition"
          >
            <Phone className="w-10 h-10 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">טלפון</h3>
            <a
              href="tel:054-6997625"
              className="text-gray-200 hover:text-primary-100"
            >
              054-6997625
            </a>
          </motion.div>

          {/* כרטיס אימייל */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6
                       rounded-lg shadow-xl hover:shadow-2xl transition"
          >
            <Mail className="w-10 h-10 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">אימייל</h3>
            <a
              href="mailto:lironkane1@gmail.com"
              className="text-gray-200 hover:text-primary-100"
            >
              lironkane1@gmail.com
            </a>
          </motion.div>

          {/* כרטיס כתובת */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-6
                       rounded-lg shadow-xl hover:shadow-2xl transition"
          >
            <MapPin className="w-10 h-10 mb-4 text-primary-300" />
            <h3 className="text-xl font-semibold mb-2">כתובת</h3>
            <p className="text-gray-200">ישראל</p>
          </motion.div>
        </motion.div>

        {/* כפתור וואטסאפ במקום הרשתות החברתיות */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">מעדיפים לכתוב לנו?</p>
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER&text=היי%20גאיה-טק%20אני%20מתעניין%20ב..."
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 
                       text-white font-bold text-lg rounded-full transition 
                       transform hover:scale-105"
            onClick={() => {
              // מעקב המרה בלחיצה על כפתור וואטסאפ
              if (window?.gtag) {
                window.gtag('event', 'conversion', {
                  send_to: 'AW-16893794531/gRzRCNmU66IaEOOxy_c-'
                });
                console.log('WhatsApp button conversion tracked');
              }
            }}
          >
            שלחו הודעה בוואטסאפ
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;