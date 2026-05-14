// src/components/ProjectsPage.jsx

import SouthEastIcon from "@mui/icons-material/SouthEast";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";

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

  const projects = [
    {
      image: project1,
      title: "Fashion Brand Marketing",
      location: "Social Media Growth + Branding",
      bg: "bg-primary",
    },
    {
      image: project2,
      title: "E-Commerce Store",
      location: "Shopify + Paid Advertising",
      bg: "bg-[#d66a1c]",
    },
    {
      image: project3,
      title: "AI Automation Agency",
      location: "AI Workflows + Lead Generation",
      bg: "bg-[#353535]",
    },
    {
      image: project4,
      title: "Beauty Product Campaign",
      location: "Content Strategy + Reels",
      bg: "bg-[#353535]",
    },
    {
      image: project5,
      title: "Business Consulting",
      location: "Meta Ads + Analytics",
      bg: "bg-primary",
    },
    {
      image: project6,
      title: "Restaurant Promotions",
      location: "Local Marketing + Engagement",
      bg: "bg-[#d66a1c]",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
    >

      {/* BACKGROUND BLUR */}
      <div className="absolute top-1/2 left-1/2 w-[260px] h-[260px] lg:w-[420px] lg:h-[420px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* TOP LEFT SHAPE */}
      <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-br-[70px] lg:rounded-br-[120px] opacity-20"></div>

      {/* BOTTOM RIGHT SHAPE */}
      <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-tl-[70px] lg:rounded-tl-[120px] opacity-20"></div>
      
       {/* BACKGROUND ICONS */}

{/* <div className="absolute top-[18%] left-[5%] text-[#b05c25]/10 rotate-[-15deg] hidden lg:block">
  <WorkOutlineOutlinedIcon sx={{ fontSize: 180 }} />
</div>

<div className="absolute top-[1%] left-1/2 -translate-x-1/2 text-[#b05c25]/10 rotate-[8deg] hidden lg:block">
  <WorkspacePremiumOutlinedIcon sx={{ fontSize: 150 }} />
</div>

<div className="absolute top-[10%] right-[4%] text-[#b05c25]/10 rotate-[10deg] hidden lg:block">
  <DesignServicesOutlinedIcon sx={{ fontSize: 160 }} />
</div> */}

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">

          <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
            Portfolio
          </span>

          <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-[#111]">
            Project Portfolio
            <span className="text-primary"> Highlights</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8">
            A collection of digital marketing, e-commerce, branding,
            and AI-powered projects designed to help businesses grow,
            increase visibility, and drive better engagement online.
          </p>

        </div>

        {/* TOP BADGE */}
        <div className="flex justify-center mt-8">

          <div className="bg-[#353535] text-white px-6 sm:px-7 py-3 rounded-full text-[12px] sm:text-[14px] font-medium shadow-lg text-center">
            Successfully Delivered 50+ Digital & Branding Projects
          </div>

        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 lg:gap-x-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group"
            >

              {/* OUTLINE CIRCLE */}
              {/* CIRCLE IMAGE */}
<div className="relative z-10 w-[160px] h-[160px] sm:w-[170px] sm:h-[170px] rounded-full overflow-hidden border border-[#d9c7b6] shadow-lg group-hover:scale-105 transition-all duration-500">

  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />

</div>

              {/* LABEL CARD */}
              <div
                className={`${project.bg} relative z-20 -mt-5 px-4 py-2 rounded-[18px] text-center shadow-lg min-w-[230px]`}>

                <h3 className="text-white text-[14px] font-semibold leading-snug">
                  {project.title}
                </h3>

                <p className="text-white/90 text-[12px] mt-1">
                  {project.location}
                </p>

              </div>

              {/* HOVER ICON */}
              <div className="absolute top-10 right-[18%] opacity-0 group-hover:opacity-100 transition-all duration-500">

                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-primary">

                  <SouthEastIcon sx={{ fontSize: 18 }} />

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}