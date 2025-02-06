import React, { useRef, useEffect } from 'react';

import { Code, Globe, Users, LineChart } from 'lucide-react';

import {

motion,

useScroll,

useSpring,

useTransform,

useAnimation

} from 'framer-motion';

import { useInView } from 'react-intersection-observer';

import featuresBackground from '../assets/background/features-background.jpg';



const FeatureIcon = ({ Icon }) => (

<motion.div

className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-[#000000] to-[#000000]"

initial={{ scale: 0, opacity: 0 }}

whileInView={{ scale: 1, opacity: 1 }}

viewport={{ once: true }}

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



const Features = () => {

const features = [

{

icon: Code,

title: 'פיתוח אתרים',

description: 'אתרים מהירים, מאובטחים ומותאמים לכל מכשיר',

},

{

icon: Globe,

title: 'קידום אורגני',

description: 'אסטרטגיות SEO מתקדמות להגדלת החשיפה',

},

{

icon: LineChart,

title: 'קידום ממומן',

description: 'ניהול קמפיינים ממומנים בגוגל',

},

{

icon: Users,

title: 'ליווי אישי',

description: 'תמיכה וייעוץ מקצועי לאורך כל הדרך',

},

];



// הפניה לאלמנט הראשי של הסקשן

const featuresRef = useRef(null);



// קובע ערכי גובה התחלתי וסופי

const maxHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

const minHeight = 500; // גובה מינימלי - אפשר לשנות/להתאים



// שימוש ב-useScroll עם offset "start start", "end start"

const { scrollYProgress } = useScroll({

target: featuresRef,

offset: ["start start", "end start"],

});



// מגדירים טרנספורמציות כמו ב-Hero

const heightValue = useTransform(scrollYProgress, [0, 1], [maxHeight, minHeight]);

const scaleValue = useTransform(scrollYProgress, [0, 1], [1, 0.8]);


// בלור מתקדם מ-0px עד 16px בארבע נקודות

const blurValueNumeric = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 0, 8, 16]);


// עוטפים כל טרנספורמציה ב-useSpring לקבלת אנימציה "רכה"

const heightSpring = useSpring(heightValue, { stiffness: 80, damping: 30 });

const scaleSpring = useSpring(scaleValue, { stiffness: 80, damping: 30 });

const blurSpring = useSpring(blurValueNumeric, { stiffness: 80, damping: 30 });


// הופכים את הבלור למחרוזת "blur(Xpx)"

const blurFilter = useTransform(blurSpring, (v) => `blur(${v}px)`);



// תרגום אנכי (TranslateY) פנימה

const innerDivTranslateY = useTransform(scrollYProgress, [0, 1], [0, maxHeight * 0.8]);

const innerDivTranslateYSpring = useSpring(innerDivTranslateY, { stiffness: 80, damping: 30 });



// אנימציות כניסה של הכרטיסים

const controls = useAnimation();

const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });



useEffect(() => {

if (inView) controls.start("visible");

}, [inView, controls]);



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

className="relative p-3 bg-black"

style={{

height: heightSpring, // שולט על הגובה באופן מונפש

scale: scaleSpring, // סקייל מונפש

willChange: 'height, transform',

}}

>

<motion.div

className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg flex flex-col"

style={{

translateY: innerDivTranslateYSpring, // הזזה פנימית מונפשת

filter: blurFilter, // בלור

willChange: 'transform, filter',

}}

>

{/* תמונת רקע */}

<div className="absolute inset-0 z-0">

<img

src={featuresBackground}

alt="Features Background"

className="w-full h-full object-cover"

/>

</div>



{/* שכבת Overlay */}

<div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0 transition-all duration-300" />



{/* תוכן פנימי */}

<div className="relative z-10 p-14 flex-grow flex flex-col justify-center">

<motion.h2

initial={{ opacity: 0, y: -20 }}

whileInView={{ opacity: 1, y: 0 }}

viewport={{ once: true }}

transition={{ duration: 0.8, ease: "easeOut" }}

className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-arimo text-black"

>

בונים עתיד דיגיטלי ביחד

</motion.h2>



<motion.p

initial={{ opacity: 0 }}

whileInView={{ opacity: 1 }}

viewport={{ once: true }}

transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}

className="text-center text-lg sm:text-xl md:text-2xl font-amatic mb-8 sm:mb-12 text-black"

>

בואו נראה איך כל שירות תורם להצלחה שלכם

</motion.p>



<div

ref={ref}

className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 px-2 sm:px-4 max-w-7xl mx-auto w-full"

>

{features.map((feature, index) => (

<motion.div

key={index}

className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md flex flex-col items-start p-3 sm:p-3 transition-all duration-300 hover:shadow-lg"

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

<p className="text-sm sm:text-base text-gray-600 mb-4">

{feature.description}

</p>

</motion.div>

))}

</div>

</div>

</motion.div>

</motion.section>

);

};



export default Features;
