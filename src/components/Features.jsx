import React, { useRef, useEffect } from 'react';
import { Code, Globe, Users, LineChart } from 'lucide-react';
import { motion, useScroll, useTransform, useAnimation, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import featuresBackground from '../assets/background/features-background.jpg';

const FeatureIcon = ({ Icon }) => (
    <motion.div
        className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#000000] to-[#000000]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: 0.1,
        }}
    >
        <Icon className="w-7 h-7 text-white" />
    </motion.div>
);

const FeatureList = ({ items }) => (
    <ul className="list-none p-0 mt-auto">
        {items.map((item, i) => (
            <motion.li
                key={i}
                className="flex items-center py-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.3,
                    delay: i * 0.1,
                    ease: "easeOut",
                }}
            >
                <span className="text-gray-700 text-base font-medium">{item}</span>
            </motion.li>
        ))}
    </ul>
);

const Features = () => {
    const features = [
        {
            icon: Code,
            title: 'פיתוח אתרים',
            description: 'אתרים מהירים, מאובטחים ומותאמים לכל מכשיר',
            features: ['חווית משתמש מתקדמת', 'תכנות Full-Stack', 'עיצוב UI/UX'],
        },
        {
            icon: Globe,
            title: 'קידום אורגני',
            description: 'אסטרטגיות SEO מתקדמות להגדלת החשיפה',
            features: ['מחקר מילות מפתח', 'אופטימיזציית תוכן', 'בניית קישורים'],
        },
        {
            icon: LineChart,
            title: 'קידום ממומן',
            description: 'ניהול קמפיינים ממומנים בגוגל',
            features: ['אופטימיזציה מתמדת', 'Google Ads', 'ניתוח נתונים'],
        },
        {
            icon: Users,
            title: 'ליווי אישי',
            description: 'תמיכה וייעוץ מקצועי לאורך כל הדרך',
            features: ['זמינות גבוהה', 'דוחות ביצועים', 'עדכונים שוטפים'],
        },
    ];

    const featuresRef = useRef(null);
    const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    const minHeight = 50;
    
    // הוספת סף לעצירת האנימציה
    const ANIMATION_THRESHOLD = 0.8;

    const { scrollYProgress } = useScroll({
        target: featuresRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 300,  // הגדלת הקשיחות
        damping: 40,     // הגדלת הבלימה
        restDelta: 0.01  // הגדלת טווח העצירה
    });

    // עדכון הטרנספורמציות עם נקודת עצירה
    const height = useTransform(smoothProgress, 
        [0, ANIMATION_THRESHOLD, 1], 
        [maxHeight, minHeight, minHeight]
    );
    
    const scale = useTransform(smoothProgress, 
        [0, ANIMATION_THRESHOLD, 1], 
        [1, 0.8, 0.8]
    );
    
    const innerDivTranslateY = useTransform(smoothProgress, 
        [0, ANIMATION_THRESHOLD, 1], 
        [0, maxHeight * 0.8, maxHeight * 0.8]
    );
    
    const blurValue = useTransform(smoothProgress,
        [0, ANIMATION_THRESHOLD, 1],
        ['blur(0px)', 'blur(16px)', 'blur(16px)']
    );

    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const featureVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: index * 0.15,
            },
        }),
    };

    return (
        <motion.section
            ref={featuresRef}
            initial={{ opacity: 1 }}
            className="relative p-3 min-h-screen bg-black"
            style={{
                height,
                scale,
            }}
        >
            <motion.div
                className="w-full h-full rounded-3xl relative shadow-lg p-8 flex flex-col overflow-hidden"
                style={{
                    translateY: innerDivTranslateY,
                    filter: blurValue,
                    background: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                    backgroundImage: `url(${featuresBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                }}
                transition={{
                    duration: 0.15,
                    ease: "easeOut"
                }}
            >
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0 transition-all duration-300" />

                {/* Content */}
                <div className="relative z-10 flex-grow flex flex-col justify-center">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 font-arimo text-black"
                    >
                        השירותים שלנו - בונים עתיד דיגיטלי
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-center text-lg sm:text-xl md:text-2xl lg:text-4xl font-amatic mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-black"
                    >
                        עכשיו בואו נראה איך כל שירות שלנו יכול לתרום להצלחה שלכם:
                    </motion.p>

                    <div
                        ref={ref}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-6 px-2 sm:px-4 max-w-7xl mx-auto w-full"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md flex flex-col items-start p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-lg"
                                variants={featureVariants}
                                initial="hidden"
                                animate={controls}
                                custom={index}
                                whileHover={{
                                    y: -3,
                                    scale: 1.02,
                                    transition: { duration: 0.3, ease: "easeOut" }
                                }}
                            >
                                <FeatureIcon Icon={feature.icon} />
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-[#2D2D2D]">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                                    {feature.description}
                                </p>
                                <FeatureList items={feature.features} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Features;