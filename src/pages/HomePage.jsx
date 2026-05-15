

import heroImg from "../assets/hero-banner.png";
import AboutPage from "../components/AboutPage.jsx";
import ProjectsPage from "../components/ProjectsPage.jsx";
import ContactPage from "../components/ContactPage.jsx";
import SkillsPage from "../components/SkillsPage.jsx";

import { motion } from "framer-motion";

function HomePage() {
  return (
     <div className="font-montserrat">

      {/* HERO SECTION */}
      <section
        id="home"
        className="w-full relative overflow-hidden font-montserrat"
      >
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
          {/* BUTTONS */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
  className="mt-8 flex gap-4 flex-wrap"
>
  {/* PROJECT BUTTON */}
  <a
    href="#projects"
    className="relative overflow-hidden group bg-secondary text-black px-6 py-3 rounded-full font-semibold text-sm"
  >
    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
      View Projects
    </span>

    <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-black rounded-full transition-all duration-500 group-hover:w-[300px] group-hover:h-[300px] -translate-x-1/2 -translate-y-1/2"></span>
  </a>

  {/* CONTACT BUTTON */}
  <a
    href="#contact"
    className="relative overflow-hidden group border border-secondary px-6 py-3 rounded-full text-secondary font-semibold text-sm"
  >
    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">
      Contact Me
    </span>

    <span className="absolute left-1/2 top-1/2 w-0 h-0 bg-secondary rounded-full transition-all duration-500 group-hover:w-[300px] group-hover:h-[300px] -translate-x-1/2 -translate-y-1/2"></span>
  </a>
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
                                             <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
  className="mt-5 inline-flex items-center gap-2 flex-wrap"
>
  <span className="text-sm sm:text-md text-white/70">
  I can speak:
</span>

  <div className="flex flex-wrap gap-2">
    {["English", "Hindi", "French", "German"].map((lang, i) => (
      <span
        key={i}
        className="
          text-xs sm:text-sm
          px-3 py-1
          rounded-full
          border border-white/20
          bg-white/5
          text-white
          backdrop-blur-md
          hover:bg-white/10
          transition
        "
      >
        {lang}
      </span>
    ))}
  </div>
</motion.div>
              </motion.div>

 

            </div>
          </div>
        </div>
      </section>

{/* SERVICES SECTION (PREMIUM MARQUEE) */}
{/* SERVICES SECTION (PREMIUM MARQUEE) */}
<div className="w-full relative z-30 -mt-10 overflow-hidden">
  <div
    className="
      w-full
      bg-black
      border-t border-white/10
      border-x border-white/10
      rounded-b-3xl
      px-6 sm:px-10 md:px-16
      py-16   /* 👈 HEIGHT INCREASED (was py-10) */
      shadow-[0_20px_60px_rgba(0,0,0,0.7)]
    "
  >
    <div className="overflow-hidden group">
      <div className="flex items-center whitespace-nowrap animate-marquee w-max group-hover:[animation-play-state:paused]">

        {/* SET 1 */}
        <div className="flex items-center gap-16 pr-16 shrink-0">

          {[
            "Digital Marketing",
            "E-commerce Growth",
            "AI Automation",
            "Branding Strategy",
            "Shopify",
            "Wordpress",
            "PPC",
            "SEO",
            "AEO",
            "Automation",
            "Content Creation",
            "Personal Branding",
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                {item}
              </h3>
            </div>
          ))}

        </div>

        {/* DUPLICATE FOR SMOOTH LOOP */}
        <div className="flex items-center gap-16 pr-16 shrink-0">

          {[
            "Digital Marketing",
            "E-commerce Growth",
            "AI Automation",
            "Branding Strategy",
            "Shopify",
            "Wordpress",
            "PPC",
            "SEO",
            "AEO",
            "Automation",
            "Content Creation",
            "Personal Branding",
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </div>
  </div>
</div>
      {/* OTHER SECTIONS */}
      <AboutPage />
      <SkillsPage />
      <ProjectsPage />
      <ContactPage />

    </div>
  );
}

export default HomePage;