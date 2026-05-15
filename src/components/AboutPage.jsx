

import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import aboutImg from "../assets/about-section.png";
// import SkillsPage from "./SkillsPage";

export default function AboutPage() {
  return (
     <div className="font-montserrat">

      {/* ABOUT SECTION */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-white font-montserrat py-16 lg:py-20 px-5 sm:px-6 lg:px-16"
      >

        {/* CONTINUOUS MOVING GRID BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none animate-gridMove"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        ></div>

        {/* FLOATING SHAPES */}
        <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-br-[70px] lg:rounded-br-[120px] opacity-20 animate-floatSlow"></div>

        <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-tl-[70px] lg:rounded-tl-[120px] opacity-20 animate-floatSlowReverse"></div>

        <div className="absolute left-[-30px] top-[30%] lg:left-[7%] lg:top-[42%] w-24 h-24 lg:w-36 lg:h-36 bg-primary rounded-full opacity-80 animate-pulse"></div>

        <div className="hidden lg:block absolute left-[40%] top-[30%] w-20 h-[320px] bg-black/90 animate-floatSlow"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* LEFT IMAGE (BREATHING ANIMATION) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center order-1"
            >
              <motion.img
                src={aboutImg}
                alt="digital marketer"
                animate={{
                  y: [0, -12, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] h-auto lg:h-[390px] object-contain drop-shadow-2xl"
              />
            </motion.div>

            {/* RIGHT CONTENT (SLIDE IN RIGHT) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-20 order-2 text-center lg:text-left"
            >

              {/* LABEL */}
              <span className="uppercase tracking-[3px] lg:tracking-[4px] text-primary text-[11px] lg:text-xs font-semibold">
                About Me
              </span>

              {/* HEADING (SUBTLE FLOAT) */}
              <motion.h1
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-4 text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.08] font-bold text-[#111]"
              >
                Helping Brands
                <br />
                <span className="text-primary">Grow Digitally</span>
              </motion.h1>

              <h3 className="mt-4 text-[18px] sm:text-[20px] lg:text-[22px] text-primary font-medium">
                Digital Marketing Strategist
              </h3>

              <p className="mt-5 lg:mt-6 text-[#555] text-[14px] lg:text-[15px] leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
                I help businesses scale online through performance marketing,
                branding strategies, social media growth, and AI-powered solutions
                that attract, engage, and convert audiences.
              </p>

              <p className="mt-4 text-[#555] text-[14px] lg:text-[15px] leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
                From content strategy to analytics, I combine creativity with
                data-driven insights to build strong digital presence and measurable growth.
              </p>

              {/* BUTTON */}
              <div className="flex justify-center lg:justify-start">
                <button className="group mt-8 bg-primary text-white px-6 lg:px-7 py-3.5 rounded-full text-[13px] lg:text-[14px] font-semibold flex items-center gap-2 shadow-lg animate-buttonPulse hover:scale-105 transition-all duration-300">
                  LET’S CONNECT
                  <SouthEastIcon
                    sx={{ fontSize: 17 }}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </button>
              </div>

              {/* EMAIL */}
              <p className="mt-7 text-[#111] text-[15px] lg:text-[16px] font-medium">
                info@thelocalhubmedia.com
              </p>

              {/* SOCIALS */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mt-5">

                <a className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <FacebookIcon sx={{ fontSize: 18 }} />
                </a>

                <a className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <InstagramIcon sx={{ fontSize: 18 }} />
                </a>

                <a className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300">
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </a>

              </div>

            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* <SkillsPage /> */}

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-40px); }
        }

        .animate-gridMove {
          animation: gridMove 20s linear infinite;
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }

        .animate-floatSlow {
          animation: floatSlow 8s ease-in-out infinite;
        }

        .animate-floatSlowReverse {
          animation: floatSlow 10s ease-in-out infinite reverse;
        }

        @keyframes buttonPulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(229, 84, 4, 0.4);
  }

  50% {
    transform: scale(1.03);
    box-shadow: 0 0 20px 6px rgba(229, 84, 4, 0.2);
  }

  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(229, 84, 4, 0);
  }
}

.animate-buttonPulse {
  animation: buttonPulse 2.8s ease-in-out infinite;
}


      `}</style>

    </div>
  );
}