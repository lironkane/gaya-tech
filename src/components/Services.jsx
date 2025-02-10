import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { PenTool, Layout, Code, LineChart } from 'lucide-react';
import featuresBackground from '../assets/background/features-background.jpg';

const IconAnimation = ({ children, bgColor, color }) => (
    <motion.div
        className={`w-24 h-24 rounded-lg flex items-center justify-center ${bgColor} shadow-md relative overflow-hidden group`}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
        }}
        whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 }
        }}
    >
        <div className={`absolute inset-0 ${color} opacity-20 group-hover:opacity-30 transition-opacity`} />
        <motion.div
            animate={{
                rotate: [0, 10, -10, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }}
            className="relative z-10"
        >
            {children}
        </motion.div>
    </motion.div>
);

const ServiceCard = ({ icon: Icon, title, description, bgColor, color, index }) => {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start center", "center center"]
    });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="relative py-20 first:pt-8 last:pb-8 group"
        >
            <div className="absolute inset-x-0 -bottom-px h-[2px] bg-gradient-to-r from-transparent via-black/15 to-transparent" />
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-200 to-pink-200"
                initial={{ scaleX: 0 }}
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "left"
                }}
            />

            <div className="flex gap-12 items-start">
                <div className="flex-shrink-0">
                    <IconAnimation bgColor={bgColor} color={color}>
                        <Icon size={32} className="text-black/80" />
                    </IconAnimation>
                </div>
                <div className="flex-grow space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-arimo text-3xl font-black text-black/90 group-hover:text-black transition-colors"
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="font-arimo text-gray-700 text-lg leading-relaxed max-w-2xl"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: PenTool,
            title: "עיצוב וקריאייטיב",
            description: "העיצוב הוא בלב כל מה שאנחנו עושים. צוות המעצבים והאנימטורים המוכשר שלנו מוכן ליצור חוויות ויזואליות יוצאות דופן.",
            bgColor: "bg-sky-50",
            color: "bg-gradient-to-br from-sky-200 to-pink-200",
        },
        {
            icon: Layout,
            title: "ממשק וחווית משתמש",
            description: "פשוט ומענג. פונקציונלי ויוצא דופן. אלו רק כמה מילים שעולות כשחושבים על עבודות ה-UX/UI שלנו.",
            bgColor: "bg-pink-50",
            color: "bg-gradient-to-br from-pink-200 to-sky-200",
        },
        {
            icon: Code,
            title: "פיתוח",
            description: "צוות המפתחים המומחה שלנו מוכן לבנות ולספק מוצרים דיגיטליים אמינים. המוניטין שלנו לאיכות, יציבות ותמיכה מאפשר לנו להשיג את התוצאות הטובות ביותר.",
            bgColor: "bg-sky-50",
            color: "bg-gradient-to-br from-sky-200 to-pink-200",
        },
        {
            icon: LineChart,
            title: "שיווק ביצועים",
            description: "מומחי השיווק הדיגיטלי שלנו יהפכו את המותג שלך לבולט ונוכח ברשת. אנחנו משתמשים בכלים המתקדמים ביותר כדי להשיג תוצאות מדידות.",
            bgColor: "bg-pink-50",
            color: "bg-gradient-to-br from-pink-200 to-sky-200",
        },
    ];

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"], // חשוב להשאיר את זה!
    });


    // שינוי מרכזי: שימוש ב-useTransform
    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.1, 0.9, 1],  // נקודות המפתח לטרנספורמציה
        [20, 0, 0, 20]      // ערכי ה-blur המתאימים
    );
    
      useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // console.log("scrollYProgress:", latest); //  לדיבג, אפשר להשאיר או להסיר
    });


    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const underlineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.3
            }
        }
    };

    return (
        <section ref={sectionRef} className="relative pt-3 pb-1 px-3 bg-[#1a1a1a] transition-filter duration-500">
            <motion.div style={{ filter: `blur(${blurValue}px)` }} className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg flex flex-col">
                <div className="absolute inset-0 z-0">
                    <img src={featuresBackground} alt="Features Background" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0 transition-all duration-300" />

                <div className="relative z-10 p-8 flex-grow">
                    <div className="text-center mb-20 relative">
                        <motion.h2
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="font-arimo text-4xl font-black text-black inline-block"
                        >
                            מה אנחנו עושים
                        </motion.h2>
                        <motion.div
                            variants={underlineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent mt-3"
                        />
                    </div>
                    <div>
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;