

// import SouthEastIcon from "@mui/icons-material/SouthEast";
// import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
// import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
// import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

// const project1 =
//   "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

// const project2 =
//   "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop";

// const project3 =
//   "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop";

// const project4 =
//   "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

// const project5 =
//   "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop";

// const project6 =
//   "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop";

// export default function ProjectsPage() {
//   const projects = [
//     {
//       image: project1,
//       title: "Fashion Brand Marketing",
//       location: "Social Media Growth + Branding",
//       bg: "bg-primary",
//     },
//     {
//       image: project2,
//       title: "E-Commerce Store",
//       location: "Shopify + Paid Advertising",
//       bg: "bg-[#d66a1c]",
//     },
//     {
//       image: project3,
//       title: "AI Automation Agency",
//       location: "AI Workflows + Lead Generation",
//       bg: "bg-[#353535]",
//     },
//     {
//       image: project4,
//       title: "Beauty Product Campaign",
//       location: "Content Strategy + Reels",
//       bg: "bg-[#353535]",
//     },
//     {
//       image: project5,
//       title: "Business Consulting",
//       location: "Meta Ads + Analytics",
//       bg: "bg-primary",
//     },
//     {
//       image: project6,
//       title: "Restaurant Promotions",
//       location: "Local Marketing + Engagement",
//       bg: "bg-[#d66a1c]",
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
//     >
//       {/* GRID BACKGROUND (ADDED - SAME AS ABOUT SECTION) */}
//       <div
//         className="absolute inset-0 pointer-events-none animate-gridMove"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
//           backgroundSize: "36px 36px",
//         }}
//       ></div>

//       {/* TOP LEFT SHAPE */}
//       <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-br-[70px] lg:rounded-br-[120px] opacity-20"></div>

//       {/* BOTTOM RIGHT SHAPE */}
//       <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-tl-[70px] lg:rounded-tl-[120px] opacity-20"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* TOP CONTENT */}
//         <div className="text-center">
//           <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
//             Portfolio
//           </span>

//           <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-[#111]">
//             Project Portfolio
//             <span className="text-primary"> Highlights</span>
//           </h1>

//           <p className="mt-5 max-w-3xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8">
//             A collection of digital marketing, e-commerce, branding,
//             and AI-powered projects designed to help businesses grow,
//             increase visibility, and drive better engagement online.
//           </p>
//         </div>

//         {/* TOP BADGE */}
//         <div className="flex justify-center mt-8">
//           <div className="bg-[#353535] text-white px-6 sm:px-7 py-3 rounded-full text-[12px] sm:text-[14px] font-medium shadow-lg text-center">
//             Successfully Delivered 50+ Digital & Branding Projects
//           </div>
//         </div>

//         {/* PROJECT GRID */}
//         <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 lg:gap-x-10">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="relative flex flex-col items-center group"
//             >
//               {/* CIRCLE IMAGE */}
//               <div className="relative z-10 w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] rounded-full overflow-hidden border border-[#d9c7b6] shadow-lg group-hover:scale-105 transition-all duration-500">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* LABEL CARD */}
//               <div
//                 className={`${project.bg} relative z-20 -mt-5 px-4 py-2 rounded-[18px] text-center shadow-lg min-w-[230px]`}
//               >
//                 <h3 className="text-white text-[14px] font-semibold leading-snug">
//                   {project.title}
//                 </h3>

//                 <p className="text-white/90 text-[12px] mt-1">
//                   {project.location}
//                 </p>
//               </div>

//               {/* HOVER ICON */}
//               <div className="absolute top-10 right-[18%] opacity-0 group-hover:opacity-100 transition-all duration-500">
//                 <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary">
//                   <SouthEastIcon sx={{ fontSize: 18 }} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ANIMATION (GRID MOVE) */}
//       <style>{`
//         @keyframes gridMove {
//           0% { transform: translateY(0px); }
//           100% { transform: translateY(-40px); }
//         }

//         .animate-gridMove {
//           animation: gridMove 20s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";

import SouthEastIcon from "@mui/icons-material/SouthEast";
import projectImage from "../assets/project.png";

const project1 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop";

const project2 =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop";

const project3 =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop";

const project4 =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop";

const project5 =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop";

const project6 =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop";

export default function ProjectsPage() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("showCard");
          } else {
            entry.target.classList.remove("showCard");
          }
        });
      },
      {
        threshold: 0.25,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      image: project1,
      title: "Fashion Brand Marketing",
      subtitle: "Social Media Growth + Branding",
      link: "#",
    },
    {
      image: project2,
      title: "E-Commerce Store",
      subtitle: "Shopify + Paid Advertising",
      link: "#",
    },
    {
      image: project3,
      title: "AI Automation Agency",
      subtitle: "AI Workflows + Lead Generation",
      link: "#",
    },
    {
      image: project4,
      title: "Beauty Product Campaign",
      subtitle: "Content Strategy + Reels",
      link: "#",
    },
    {
      image: project5,
      title: "Business Consulting",
      subtitle: "Meta Ads + Analytics",
      link: "#",
    },
    {
      image: project6,
      title: "Restaurant Promotions",
      subtitle: "Local Marketing + Engagement",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 xl:px-16 font-montserrat"
    >
      {/* GRID */}
      <div
        className="absolute inset-0 pointer-events-none animate-gridMove"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      ></div>

      {/* RIGHT FLOATING IMAGE */}
      <div className="absolute top-[3%] right-[2%] hidden lg:block animate-projectFloat z-0 opacity-80">
        <img
          src={projectImage}
          alt="project"
          className="w-[260px] h-[320px] object-contain rotate-[12deg]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="text-center relative">
          {/* LABEL */}
          <span className="uppercase tracking-[4px] text-primary text-xs font-semibold relative z-10">
            Portfolio
          </span>

          {/* FLOATING HEADING */}
          <motion.h1
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-[#111] relative z-10 font-montserrat"
          >
            Project Portfolio
            <span className="text-primary"> Highlights</span>
          </motion.h1>

          <p className="mt-5 max-w-3xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8 relative z-10">
            A collection of digital marketing, e-commerce, branding,
            and AI-powered projects designed to help businesses grow,
            increase visibility, and drive better engagement online.
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-16 pl-0 pr-0 lg:pl-[2px] lg:pr-[10px]">
         <Swiper
  className="!overflow-visible"
  modules={[Autoplay]}
  spaceBetween={24}
  loop={true}
  speed={1000}
  slidesOffsetBefore={0}
  slidesOffsetAfter={0}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
  0: {
  slidesPerView: 1,
  spaceBetween: 0,
},

    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  }}
>
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="projectCard group relative h-[360px] rounded-[28px] overflow-hidden"
                >
                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    {/* TOP */}
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="inline-block text-[11px] tracking-[2px] uppercase text-white/80 border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">
                          Featured Project
                        </span>

                        <h3 className="mt-5 text-white text-[24px] leading-[1.2] font-semibold font-montserrat">
                          {project.title}
                        </h3>

                        <p className="mt-3 text-white/80 text-[14px] leading-7 max-w-[90%]">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="w-11 h-11 shrink-0 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:rotate-45 transition-all duration-500">
                        <SouthEastIcon sx={{ fontSize: 20 }} />
                      </div>
                    </div>

                    {/* BUTTON */}
                    <div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden inline-flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-[14px] font-medium group/button font-montserrat"
                      >
                        {/* TEXT */}
                        <span className="relative z-10 transition-colors duration-500 group-hover/button:text-[#111]">
                          View Project
                        </span>

                        {/* ICON */}
                        <SouthEastIcon
                          sx={{ fontSize: 18 }}
                          className="relative z-10 transition-all duration-500 group-hover/button:text-[#111] group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                        />

                        {/* SPREAD EFFECT */}
                        <span className="absolute inset-0 bg-white scale-x-0 group-hover/button:scale-x-100 origin-center transition-transform duration-500 rounded-full"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0px);
          }

          100% {
            transform: translateY(-40px);
          }
        }

        .animate-gridMove {
          animation: gridMove 20s linear infinite;
        }

        /* INITIAL LINE STATE */
        .projectCard {
          opacity: 0;
          transform: scaleY(0.01) scaleX(0.08);
          transform-origin: center;
          filter: blur(12px);

          transition:
            transform 1.4s cubic-bezier(0.16, 1, 0.3, 1),
            opacity 1.2s ease,
            filter 1.2s ease;
        }

        /* UNFOLD ANIMATION */
        .projectCard.showCard {
          opacity: 1;
          transform: scaleY(1) scaleX(1);
          filter: blur(0px);
        }

        @keyframes floatIcon {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-12px) rotate(6deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-floatIcon {
          animation: floatIcon 6s ease-in-out infinite;
        }

        .animate-floatIconReverse {
          animation: floatIcon 8s ease-in-out infinite reverse;
        }

        @keyframes projectFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-18px) rotate(4deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-projectFloat {
          animation: projectFloat 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}