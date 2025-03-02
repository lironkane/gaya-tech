import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { 
  Globe, Code, Layout, Target, 
  Award, PenTool, Search, Zap, 
  Layers, Shield, Share2, MousePointer, 
  TrendingUp, Users, Clock, BarChart3, 
  LineChart 
} from 'lucide-react';
import featuresBackground from '../assets/background/features-background.jpg';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

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

const ServiceCard = ({ icon: Icon, title, description, bgColor, color, index, link }) => {
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
                    {link && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Link 
                                to={link} 
                                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full font-semibold hover:from-sky-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
                            >
                                למידע נוסף
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// Component for the detailed services tabs
const DetailedServices = () => {
    const [activeTab, setActiveTab] = useState(0);
    
    const services = [
        {
            id: "websites",
            title: "בניית אתרים מקצועיים",
            icon: Globe,
            features: [
                {
                    icon: <Code className="w-8 h-8 text-[#124A36]" />,
                    title: "פיתוח מותאם אישית",
                    description: "בניית אתרים בהתאמה מלאה לצרכים העסקיים שלך"
                },
                {
                    icon: <Globe className="w-8 h-8 text-[#124A36]" />,
                    title: "עיצוב חווית משתמש",
                    description: "ממשק משתמש אינטואיטיבי המותאם לכל מכשיר וגודל מסך"
                },
                {
                    icon: <Search className="w-8 h-8 text-[#124A36]" />,
                    title: "אופטימיזציה לגוגל",
                    description: "אתר מותאם SEO לדירוג גבוה במנועי החיפוש"
                },
                {
                    icon: <Zap className="w-8 h-8 text-[#124A36]" />,
                    title: "ביצועים מהירים",
                    description: "אתר מהיר ויעיל שנטען במהירות בכל פלטפורמה"
                }
            ],
            description: "אתרים חדשניים, מעוצבים בקפידה ומותאמים במיוחד לצרכים העסקיים שלך. האתרים שלנו בנויים בסטנדרטים הגבוהים ביותר, מותאמים לכל מכשיר ומביאים תוצאות מוכחות.",
            link: "/services/website-development-page"
        },
        {
            id: "brand-websites",
            title: "אתרי תדמית",
            icon: Award,
            features: [
                {
                    icon: <Award className="w-8 h-8 text-[#124A36]" />,
                    title: "עיצוב פרימיום",
                    description: "עיצוב מרהיב ויוקרתי המדגיש את הערכים של המותג שלך"
                },
                {
                    icon: <Layout className="w-8 h-8 text-[#124A36]" />,
                    title: "חווית משתמש מושלמת",
                    description: "ממשק אינטואיטיבי שמוביל את הגולש בדיוק לאן שצריך"
                },
                {
                    icon: <MousePointer className="w-8 h-8 text-[#124A36]" />,
                    title: "קריאות לפעולה",
                    description: "הכוונה אפקטיבית של המבקרים להשגת המטרות העסקיות שלך"
                },
                {
                    icon: <Layers className="w-8 h-8 text-[#124A36]" />,
                    title: "התאמה לכל מכשיר",
                    description: "עיצוב רספונסיבי מושלם למחשב, טאבלט וסמארטפון"
                }
            ],
            description: "אתרי תדמית מעוצבים בקפידה שמשקפים את המקצועיות, האמינות והערכים של המותג שלך. אתרים יוקרתיים שמשאירים רושם בלתי נשכח ומחזקים את הנוכחות הדיגיטלית שלך.",
            link: "/services/brand-website-page"
        },
        {
            id: "landing-pages",
            title: "עמודי נחיתה",
            icon: Target,
            features: [
                {
                    icon: <Target className="w-8 h-8 text-[#124A36]" />,
                    title: "ממוקדי המרות",
                    description: "עמודי נחיתה ממוקדים בדיוק במטרה העסקית שלך"
                },
                {
                    icon: <TrendingUp className="w-8 h-8 text-[#124A36]" />,
                    title: "אופטימיזציה לקמפיינים",
                    description: "עמודים מותאמים לקמפיינים פרסומיים עם אחוזי המרה גבוהים"
                },
                {
                    icon: <Users className="w-8 h-8 text-[#124A36]" />,
                    title: "התאמה לקהל יעד",
                    description: "עיצוב ומסרים המותאמים במדויק לקהל היעד שלך"
                },
                {
                    icon: <BarChart3 className="w-8 h-8 text-[#124A36]" />,
                    title: "מעקב ומדידה",
                    description: "מערכות אנליטיקה מובנות למדידת ביצועים והמרות"
                }
            ],
            description: "עמודי נחיתה אפקטיביים המתוכננים להשיג המרות גבוהות ותוצאות עסקיות מדידות. מושלמים לקמפיינים פרסומיים, איסוף לידים, מכירות ואירועים מיוחדים.",
            link: "/services/landing-page-service"
        }
    ];

    const tabVariants = {
        inactive: { opacity: 0.7, y: 0 },
        active: { opacity: 1, y: -5, transition: { duration: 0.3 } }
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="mt-12 mb-16">
            <div className="flex justify-center gap-4 mb-12">
                {services.map((service, index) => (
                    <motion.button
                        key={service.id}
                        onClick={() => setActiveTab(index)}
                        initial="inactive"
                        animate={activeTab === index ? "active" : "inactive"}
                        variants={tabVariants}
                        whileHover={{ scale: 1.05 }}
                        className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 ${
                            activeTab === index 
                                ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-md" 
                                : "bg-white/80 text-gray-700 hover:bg-white hover:text-black"
                        }`}
                    >
                        <service.icon size={18} />
                        <span>{service.title}</span>
                    </motion.button>
                ))}
            </div>

            <motion.div
                key={activeTab}
                initial="hidden"
                animate="visible"
                variants={contentVariants}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
                <div className="mb-6 pb-6 border-b border-gray-200">
                    <h3 className="text-3xl font-bold text-[#124A36] mb-4 flex items-center gap-3">
                        {React.createElement(services[activeTab].icon, { size: 28 })}
                        {services[activeTab].title}
                    </h3>
                    <p className="text-lg text-gray-700">{services[activeTab].description}</p>
                    <Link 
                        to={services[activeTab].link} 
                        className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-full font-semibold hover:from-sky-600 hover:to-indigo-600 transition-all shadow-md hover:shadow-lg"
                    >
                        למידע נוסף
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services[activeTab].features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/70 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-bold text-[#124A36] text-center mb-2">
                                {feature.title}
                            </h4>
                            <p className="text-gray-600 text-center">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

const Services = () => {
    // Main services cards
    const mainServices = [
        {
            icon: Globe,
            title: "בניית אתרים איכותיים",
            description: "אנו מתמחים בבניית אתרים מקצועיים, אתרי תדמית, עמודי נחיתה ופתרונות דיגיטליים מתקדמים. האתרים שלנו מעוצבים בקפידה ופותחו בטכנולוגיות המתקדמות ביותר, עם דגש על חווית משתמש, מהירות טעינה ואופטימיזציה למנועי חיפוש.",
            bgColor: "bg-sky-50",
            color: "bg-gradient-to-br from-sky-200 to-pink-200",
            link: "/services/website-development-page"
        },
        {
            icon: PenTool,
            title: "עיצוב וקריאייטיב",
            description: "העיצוב הוא בלב כל מה שאנחנו עושים. צוות המעצבים והאנימטורים המוכשר שלנו מוכן ליצור חוויות ויזואליות יוצאות דופן שמשקפות את הערכים והייחודיות של המותג שלך.",
            bgColor: "bg-pink-50",
            color: "bg-gradient-to-br from-pink-200 to-sky-200",
        },
        {
            icon: Layout,
            title: "ממשק וחווית משתמש",
            description: "פשוט ומענג. פונקציונלי ויוצא דופן. האתרים שלנו בנויים בתפיסת UX/UI מתקדמת המבטיחה חווית משתמש אופטימלית בכל מכשיר - ממחשב נייח ועד לטלפון נייד.",
            bgColor: "bg-sky-50",
            color: "bg-gradient-to-br from-sky-200 to-pink-200",
        },
        {
            icon: LineChart,
            title: "שיווק ביצועים",
            description: "מומחי השיווק הדיגיטלי שלנו יהפכו את המותג שלך לבולט ונוכח ברשת. אנחנו משתמשים בכלים המתקדמים ביותר כדי להשיג תוצאות מדידות ואחוזי המרה גבוהים לקמפיינים שלך.",
            bgColor: "bg-pink-50",
            color: "bg-gradient-to-br from-pink-200 to-sky-200",
        },
    ];

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const blurValue = useTransform(
        scrollYProgress,
        [0, 0.1, 0.9, 1],
        [20, 0, 0, 20]
    );

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
        <section ref={sectionRef} className="relative pt-3 pb-1 px-3 bg-[#1a1a1a] transition-filter duration-500" aria-label="Services Section - Tech Start: שירותי פיתוח אתרים ושיווק דיגיטלי">
            <Helmet>
                {/* Metadata SEO - שירותים */}
                <title>שירותי פיתוח אתרים, אתרי תדמית ועמודי נחיתה | Tech-Start</title>
                <meta name="description" content="Tech-Start: מציעה שירותי בניית אתרים מקצועיים, אתרי תדמית איכותיים ועמודי נחיתה ממירים. אתרים מותאמים אישית, מעוצבים להפליא ועם ביצועים מעולים." />
                <meta name="keywords" content="בניית אתרים, פיתוח אתרים, אתרי תדמית, עמודי נחיתה, דפי נחיתה, עיצוב אתרים, אתר מותאם סלולר, קידום אתרים, SEO, עיצוב UI/UX, חווית משתמש, שיווק דיגיטלי" />
                {/* סוף Metadata SEO */}
            </Helmet>
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
                            השירותים שלנו
                        </motion.h2>
                        <motion.div
                            variants={underlineVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent mt-3"
                        />
                    </div>
                    
                    {/* Main services */}
                    <div>
                        {mainServices.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                    
                    {/* Detailed services with tabs */}
                    <div className="mt-24 mb-16">
                        <div className="text-center mb-12">
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="font-arimo text-3xl font-black text-black inline-block"
                            >
                                שירותי בניית אתרים מובילים
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg text-gray-700 max-w-3xl mx-auto mt-4"
                            >
                                אנו מתמחים במגוון שירותי פיתוח אתרים מותאמים לצרכים השונים של העסק שלך. בחר את השירות המתאים לך:
                            </motion.p>
                        </div>
                        
                        <DetailedServices />
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl p-12 text-center text-white shadow-xl"
                        >
                            <h3 className="text-3xl font-bold mb-4">מוכנים להתחיל?</h3>
                            <p className="text-xl mb-8 max-w-2xl mx-auto">
                                צוות המומחים שלנו כאן כדי ללוות אתכם בתהליך הדיגיטלי - מהרעיון ועד לביצוע.
                            </p>
                            <Link 
                                to="/contact" 
                                className="inline-block px-10 py-4 bg-white text-sky-600 rounded-full font-bold text-lg shadow-md hover:shadow-lg hover:bg-sky-50 transition-all transform hover:-translate-y-1"
                            >
                                דברו איתנו עכשיו
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Services;