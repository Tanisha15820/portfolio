// // src/pages/HomePage.jsx

// import heroImg from "../assets/hero-banner.png";
// import AboutPage from "../components/AboutPage.jsx";
// import ProjectsPage from "../components/ProjectsPage.jsx";
// import ContactPage from "../components/ContactPage.jsx";

// import { motion } from "framer-motion";

// function HomePage() {
//   return (
//     <div>
//       <section id="home" className="w-full overflow-hidden">

//         <div className="relative overflow-hidden min-h-[92vh]">

//           {/* BACKGROUND IMAGE */}
//           <motion.img
//             animate={{
//               scale: [1, 1.08, 1],
//             }}
//             transition={{
//               duration: 12,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             src={heroImg}
//             alt="hero"
//             className="absolute inset-0 w-full h-full object-cover brightness-75"
//           />

//           {/* DARK OVERLAY */}
//           {/* <motion.div
//             animate={{
//               opacity: [0.45, 0.6, 0.45],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute inset-0 bg-black z-10"
//           /> */}
//           <div className="absolute inset-0 bg-black/35 z-10"></div>

//           {/* BLUR LIGHTS */}
//           <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full z-10 animate-pulse"></div>

//           <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full z-10 animate-pulse"></div>

//           {/* CONTENT */}
//           <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-28 md:pt-32 pb-14 min-h-[92vh] flex items-center">

//             <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">

//               {/* LEFT SIDE */}
//               <motion.div
//                 initial={{ x: -100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.3 }}
//                 className="max-w-[750px]"
//               >

//                 {/* SMALL TEXT */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.4 }}
//                   className="text-secondary text-sm sm:text-base md:text-lg mb-4"
//                 >
//                   Hey, I'm a
//                 </motion.p>

//                 {/* MAIN HEADING */}
//                 <motion.h1
//                   initial={{
//                     opacity: 0,
//                     scale: 0.7,
//                     y: 40,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: [1, 1.02, 1],
//                     y: [0, -10, 0],
//                     textShadow: [
//                       "0 0 10px rgba(255,255,255,0.15)",
//                       "0 0 30px rgba(255,255,255,0.35)",
//                       "0 0 10px rgba(255,255,255,0.15)",
//                     ],
//                   }}
//                   transition={{
//                     opacity: {
//                       duration: 1,
//                     },
//                     scale: {
//                       duration: 5,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     },
//                     y: {
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     },
//                     textShadow: {
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     },
//                   }}
//                   className="text-secondary leading-[0.95] font-black text-[2.7rem] sm:text-[3.5rem] md:text-[5rem] whitespace-normal md:whitespace-nowrap"
//                 >
//                   Digital Growth
//                   <br />
//                   Expert
//                 </motion.h1>

//                 {/* PARAGRAPH */}
//                 <motion.p
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 0.8 }}
//                   className="text-secondary/80 text-sm sm:text-base md:text-lg mt-6 max-w-lg leading-7"
//                 >
//                   Helping brands scale with Digital Marketing,
//                   E-commerce strategies, and AI-powered automation.
//                 </motion.p>

//                 {/* BUTTONS */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 1 }}
//                   className="mt-8 flex gap-4 flex-wrap"
//                 >

//                   {/* VIEW PROJECTS BUTTON */}
//                   <motion.button
//                     whileHover={{
//                       scale: 1.05,
//                       y: -4,
//                       boxShadow:
//                         "0px 15px 35px rgba(255,255,255,0.25)",
//                     }}
//                     whileTap={{ scale: 0.96 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                     }}
//                     className="group relative overflow-hidden bg-secondary text-black px-5 sm:px-6 py-3 rounded-full font-semibold text-sm w-full sm:w-auto transition-all duration-500"
//                   >
//                     <span className="relative z-10">
//                       View Projects
//                     </span>

//                     {/* SHINE EFFECT */}
//                     <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-700 bg-white/40 skew-x-12"></span>
//                   </motion.button>

//                   {/* CONTACT BUTTON */}
//                   <motion.button
//                     whileHover={{
//                       scale: 1.05,
//                       y: -4,
//                     }}
//                     whileTap={{ scale: 0.96 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                     }}
//                     className="group relative overflow-hidden border border-secondary px-5 sm:px-6 py-3 rounded-full text-secondary font-semibold text-sm w-full sm:w-auto transition-all duration-500"
//                   >
//                     <span className="relative z-10 group-hover:text-black duration-500">
//                       Contact Me
//                     </span>

//                     {/* FILL EFFECT */}
//                     <span className="absolute left-0 bottom-0 w-full h-0 bg-secondary transition-all duration-500 group-hover:h-full"></span>
//                   </motion.button>

//                 </motion.div>
//               </motion.div>

//               {/* RIGHT SIDE */}
//               <motion.div
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 0.9 }}
//                 className="lg:pl-24 xl:pl-32"
//               >

//                 <motion.h2
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 1.1 }}
//                   className="text-secondary text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md"
//                 >
//                   Smart marketing should feel effortless.
//                 </motion.h2>

//                 <motion.p
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 1, delay: 1.3 }}
//                   className="text-secondary/80 leading-7 mt-5 text-sm sm:text-base max-w-md"
//                 >
//                   I build modern growth systems combining
//                   branding, AI, content strategy, and
//                   high-converting e-commerce experiences.
//                 </motion.p>

//               </motion.div>

//             </div>
//           </div>

//           {/* SERVICES SECTION */}
//           {/* <div className="relative z-20 px-5 sm:px-6 md:px-14 pb-12">

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-secondary">

//               {[
//                 "Digital Marketing",
//                 "E-commerce Growth",
//                 "AI Automation",
//                 "Branding Strategy",
//               ].map((service, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{
//                     duration: 0.8,
//                     delay: index * 0.2,
//                   }}
//                   viewport={{ once: true }}
//                   whileHover={{
//                     y: -8,
//                     scale: 1.03,
//                   }}
//                   className="border border-white/10 backdrop-blur-sm rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-all duration-500"
//                 >
//                   <p className="text-secondary text-lg font-bold">
//                     #{`0${index + 1}`}
//                   </p>

//                   <h3 className="mt-2 text-base">
//                     {service}
//                   </h3>
//                 </motion.div>
//               ))}

//             </div>

//           </div> */}
//           {/* SERVICES / STATS BAR */}
// {/* SERVICES BLACK BOX */}


//           {/* SCROLL INDICATOR */}
//           {/* <motion.div
//             animate={{
//               y: [0, 12, 0],
//               opacity: [0.5, 1, 0.5],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-secondary"
//           >
//             <p className="text-xs tracking-[0.3em] uppercase">
//               Scroll
//             </p>

//             <div className="w-[1px] h-10 bg-secondary/60 mt-2"></div>
//           </motion.div> */}

//         </div>

//       </section>
//       <div className="relative z-20 px-5 sm:px-6 md:px-14 pb-12">

//   <div className="
//     bg-black
//     rounded-3xl
//     border border-white/10
//     px-8 py-8
//     -mt-10
//     shadow-[0_20px_60px_rgba(0,0,0,0.7)]
//   ">

//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">

//       {/* ITEM 1 */}
//       <div>
//         <p className="text-white/50 text-sm">#01</p>
//         <h3 className="mt-2 text-base font-medium">
//           Digital Marketing
//         </h3>
//       </div>

//       {/* ITEM 2 */}
//       <div>
//         <p className="text-white/50 text-sm">#02</p>
//         <h3 className="mt-2 text-base font-medium">
//           E-commerce Growth
//         </h3>
//       </div>

//       {/* ITEM 3 */}
//       <div>
//         <p className="text-white/50 text-sm">#03</p>
//         <h3 className="mt-2 text-base font-medium">
//           AI Automation
//         </h3>
//       </div>

//       {/* ITEM 4 */}
//       <div>
//         <p className="text-white/50 text-sm">#04</p>
//         <h3 className="mt-2 text-base font-medium">
//           Branding Strategy
//         </h3>
//       </div>

//     </div>

//   </div>
// </div>

//       <AboutPage />
//       <ProjectsPage />
//       <ContactPage />
//     </div>
//   );
// }

// export default HomePage;

import heroImg from "../assets/hero-banner.png";
import AboutPage from "../components/AboutPage.jsx";
import ProjectsPage from "../components/ProjectsPage.jsx";
import ContactPage from "../components/ContactPage.jsx";

import { motion } from "framer-motion";

function HomePage() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="home" className="w-full relative overflow-hidden">

        <div className="relative min-h-[92vh]">

          {/* BACKGROUND IMAGE */}
          <motion.img
            animate={{ scale: [1, 1.08, 1] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={heroImg}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/35 z-10"></div>

          {/* BLUR LIGHTS */}
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full z-10 animate-pulse"></div>

          <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/20 blur-3xl rounded-full z-10 animate-pulse"></div>

          {/* CONTENT */}
          <div className="relative z-20 px-5 sm:px-6 md:px-14 pt-28 md:pt-32 pb-14 min-h-[92vh] flex items-center">

            <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center w-full">

              {/* LEFT SIDE */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="max-w-[750px]"
              >

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-secondary text-sm sm:text-base md:text-lg mb-4"
                >
                  Hey, I'm a
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.7, y: 40 }}
                  animate={{
                    opacity: 1,
                    scale: [1, 1.02, 1],
                    y: [0, -10, 0],
                    textShadow: [
                      "0 0 10px rgba(255,255,255,0.15)",
                      "0 0 30px rgba(255,255,255,0.35)",
                      "0 0 10px rgba(255,255,255,0.15)",
                    ],
                  }}
                  transition={{
                    opacity: { duration: 1 },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    textShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="text-secondary leading-[0.95] font-black text-[2.7rem] sm:text-[3.5rem] md:text-[5rem] whitespace-normal md:whitespace-nowrap"
                >
                  Digital Growth
                  <br />
                  Expert
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-secondary/80 text-sm sm:text-base md:text-lg mt-6 max-w-lg leading-7"
                >
                  Helping brands scale with Digital Marketing,
                  E-commerce strategies, and AI-powered automation.
                </motion.p>

                {/* BUTTONS */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-8 flex gap-4 flex-wrap"
                >
                  <button className="bg-secondary text-black px-6 py-3 rounded-full font-semibold text-sm">
                    View Projects
                  </button>

                  <button className="border border-secondary px-6 py-3 rounded-full text-secondary font-semibold text-sm">
                    Contact Me
                  </button>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="lg:pl-24 xl:pl-32"
              >
                <h2 className="text-secondary text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-md">
                  Smart marketing should feel effortless.
                </h2>

                <p className="text-secondary/80 leading-7 mt-5 text-sm sm:text-base max-w-md">
                  I build modern growth systems combining branding, AI, content strategy, and high-converting e-commerce experiences.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

{/* SERVICES SECTION (PREMIUM MARQUEE) */}
<div className="w-full relative z-30 -mt-10 overflow-hidden">
  <div className="
    w-full
    bg-black
    border-t border-white/10
    border-x border-white/10
    rounded-b-3xl
    px-6 sm:px-10 md:px-16
    py-12
    shadow-[0_20px_60px_rgba(0,0,0,0.7)]
  ">

    <div className="overflow-hidden group">

      <div className="flex gap-20 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused]">

        {/* SET 1 */}
        <div className="flex gap-20 min-w-full">

          <div>
            <p className="text-white/60 text-sm">#01</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              Digital Marketing
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#02</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              E-commerce Growth
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#03</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              AI Automation
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#04</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              Branding Strategy
            </h3>
          </div>

        </div>

        {/* DUPLICATE FOR LOOP */}
        <div className="flex gap-20 min-w-full">

          <div>
            <p className="text-white/60 text-sm">#01</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              Digital Marketing
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#02</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              E-commerce Growth
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#03</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              AI Automation
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-sm">#04</p>
            <h3 className="mt-2 text-xl md:text-2xl font-semibold text-white">
              Branding Strategy
            </h3>
          </div>

        </div>

      </div>
    </div>

  </div>
</div>
      {/* OTHER SECTIONS */}
      <AboutPage />
      <ProjectsPage />
      <ContactPage />

    </div>
  );
}

export default HomePage;