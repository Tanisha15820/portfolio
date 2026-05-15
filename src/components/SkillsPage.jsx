// import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
// import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
// import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

// export default function SkillsPage() {

//   const skills = [
//     {
//       title: "Digital Marketing",
//       icon: <CampaignOutlinedIcon sx={{ fontSize: 42 }} />,
//       desc: "Brand growth & online visibility",
//     },
//     {
//       title: "E-Commerce",
//       icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 42 }} />,
//       desc: "Store optimization & conversions",
//     },
//     {
//       title: "AI Automation",
//       icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 42 }} />,
//       desc: "Smart AI-powered workflows",
//     },

//     {
//       title: "Paid Advertising",
//       icon: <AdsClickOutlinedIcon sx={{ fontSize: 42 }} />,
//       desc: "Meta & Google ad campaigns",
//     },
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
//     >
//    {/* TOP LEFT SHAPE */}
// <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-br-[80px] lg:rounded-br-[120px]"></div>

// {/* BOTTOM RIGHT SHAPE */}
// <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-tl-[80px] lg:rounded-tl-[120px]"></div>
//       {/* BACKGROUND ICONS */}

//       <div className="absolute top-[15%] left-[6%] text-[#b05c25]/10 rotate-[-15deg] hidden lg:block">
//         <CampaignOutlinedIcon sx={{ fontSize: 180 }} />
//       </div>

//       <div className="absolute top-[20%] right-[8%] text-[#b05c25]/10 rotate-[10deg] hidden lg:block">
//         <AutoAwesomeOutlinedIcon sx={{ fontSize: 160 }} />
//       </div>

//       <div className="absolute bottom-[12%] left-[12%] text-[#b05c25]/10 rotate-[20deg] hidden lg:block">
//         <ShoppingBagOutlinedIcon sx={{ fontSize: 170 }} />
//       </div>

//       <div className="absolute bottom-[8%] right-[10%] text-[#b05c25]/10 rotate-[-10deg] hidden lg:block">
//         <BarChartOutlinedIcon sx={{ fontSize: 170 }} />
//       </div>

//       {/* TOP CENTER ICON */}
//       <div className="absolute top-[3%] sm:top-[4%] lg:top-[6%] left-1/2 -translate-x-1/2 text-[#b05c25]/10 rotate-[10deg]">
//         <RocketLaunchOutlinedIcon
//           sx={{
//             fontSize: {
//               xs: 90,
//               sm: 110,
//               lg: 150,
//             },
//           }}
//         />
//       </div>

//       {/* CENTER GLOW */}
//       <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] bg-primary/10 blur-[100px] lg:blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

//       <div className="max-w-7xl mx-auto relative z-10">

//         {/* TOP CONTENT */}
//         <div className="text-center">

//           <span className="uppercase tracking-[3px] sm:tracking-[4px] text-primary text-[11px] sm:text-xs font-semibold">
//             Skills
//           </span>

//           <h1 className="mt-4 text-[30px] sm:text-[42px] lg:text-[58px] leading-[1.1] font-bold text-[#111]">
//             Digital Growth &
//             <span className="text-primary"> AI Solutions</span>
//           </h1>

//           <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8 px-2 sm:px-0">
//             I help businesses grow through digital marketing, AI-powered
//             strategies, e-commerce optimization, branding, and performance
//             driven campaigns that increase visibility, engagement, and sales.
//           </p>
//         </div>

//         {/* SKILLS GRID */}
//         <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#fdf7f2] border border-[#efdfd0] rounded-[24px] lg:rounded-[30px] p-6 sm:p-7 lg:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
//             >

//               {/* HOVER TOP BAR */}
//               <div className="absolute top-0 left-0 w-full h-[4px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></div>

//               {/* ICON BOX */}
//               <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">

//                 {skill.icon}

//               </div>

//               {/* TITLE */}
//               <h2 className="mt-6 sm:mt-7 text-[20px] sm:text-[22px] font-semibold text-[#111] leading-snug">
//                 {skill.title}
//               </h2>

//               {/* DESCRIPTION */}
//               <p className="mt-3 sm:mt-4 text-[#666] text-[13px] sm:text-[14px] leading-6 sm:leading-7">
//                 {skill.desc}
//               </p>

//               {/* DECORATIVE CIRCLE */}
//               <div className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-500"></div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }


import { useEffect, useRef, useState } from "react";

export default function SkillsPage() {
  const sectionRef = useRef(null);

  const [drop, setDrop] = useState(false);
  const [mouseX, setMouseX] = useState(0);

  const skills = [
    "SEO",
    "BRANDING",
    "SHOPIFY",
    "METAADS",
    "GOOGLEADS",
    "REELS",
    "CONTENT",
    "ANALYTICS",
    "COPYWRITING",
    "CHATBOTS",
    "AUTOMATION",
    "EMAILING",
    "TARGETING",
    "FUNNELS",
    "ECOMMERCE",
    "LEADS",
    "STRATEGY",
    "CAMPAIGNS",
    "GROWTH",
    "AI",
    "ENGAGEMENT",
    "MARKETING",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setDrop(true);
        else setDrop(false);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const positions = [
    /* TOP ROW */
    { left: "10%", top: "10%", rotate: "-80deg" },
    { left: "22%", top: "8%", rotate: "-10deg" },
    { left: "38%", top: "6%", rotate: "-6deg" },
    { left: "58%", top: "8%", rotate: "8deg" },
    { left: "76%", top: "10%", rotate: "14deg" },

    /* UPPER MIDDLE */
    { left: "24%", top: "20%", rotate: "0deg" },
    { left: "46%", top: "16%", rotate: "-4deg" },
    { left: "64%", top: "22%", rotate: "16deg" },
    { left: "78%", top: "20%", rotate: "4deg" },

    /* SIDE ELEMENTS */
    { left: "10%", top: "50%", rotate: "-10deg" },
    { left: "90%", top: "54%", rotate: "12deg" },

    /* LOWER MIDDLE */
    { left: "14%", top: "64%", rotate: "-5deg" },
    { left: "30%", top: "62%", rotate: "6deg" },
    { left: "46%", top: "64%", rotate: "-3deg" },
    { left: "62%", top: "62%", rotate: "8deg" },
    { left: "76%", top: "62%", rotate: "-4deg" },
    { left: "88%", top: "66%", rotate: "10deg" },

    /* BOTTOM ROW */
    { left: "18%", top: "76%", rotate: "8deg" },
    { left: "34%", top: "76%", rotate: "0deg" },
    { left: "50%", top: "76%", rotate: "4deg" },
    { left: "66%", top: "76%", rotate: "2deg" },
    { left: "80%", top: "76%", rotate: "0deg" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white px-0 font-montserrat"
    >
      <div className="relative z-10 w-full">

        {/* MAIN BOX */}
        <div className="relative bg-white border border-[#efdfd0] rounded-none min-h-[460px] sm:min-h-[540px] lg:min-h-[580px] overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20 px-4 sm:px-12 lg:px-16 shadow-[0_10px_60px_rgba(0,0,0,0.05)]">

          {/* GLOW */}
          <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

          {/* LINES */}
          <div className="absolute inset-0 opacity-[0.06]">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 bottom-0 w-[1px] bg-[#c89c72]"
                style={{ left: `${i * 9}%` }}
              />
            ))}
          </div>

          {/* BIG SKILLS TEXT */}
          <div
            className="absolute left-1/2 top-[45%] sm:top-[42%] -translate-x-1/2 -translate-y-1/2 z-30"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setMouseX(e.clientX - rect.left);
            }}
          >
            <h1 className="flex whitespace-nowrap text-[42px] sm:text-[120px] lg:text-[190px] font-light tracking-[4px] sm:tracking-[22px] uppercase select-none font-montserrat">
              {"SKILLS".split("").map((letter, index) => {
                const distance = Math.abs(mouseX - index * 120);

                const active = distance < 80;
                const near = distance < 200 && !active;

                const direction = mouseX < index * 120 ? 1 : -1;

                const shift = active
                  ? 0
                  : near
                  ? direction * 25
                  : direction * 45;

                const scale = active ? 1.4 : near ? 1.1 : 0.85;

                const opacity = active ? 1 : near ? 0.6 : 0.3;

                const weight = active ? 700 : near ? 400 : 200;

                return (
                  <span
                    key={index}
                    className="inline-block transition-all duration-300"
                    style={{
                      transform: `translateX(${shift}px) scale(${scale})`,
                      fontWeight: weight,
                      opacity,
                      color: active ? "#c89c72" : "#d6a77b",
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* SKILL BOXES */}
          {skills.map((skill, index) => (
            <div
              key={index}
              className="absolute z-20 px-4 sm:px-7 py-2.5 sm:py-4 rounded-full bg-primary text-white border border-[#ead9ca] font-bold tracking-[2px] sm:tracking-[3px] text-[10px] sm:text-[15px] shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white hover:text-black hover:scale-105"
              style={{
                left: drop ? positions[index]?.left : "50%",
                top: drop ? positions[index]?.top : "-120px",
                transform: drop
                  ? `translateX(-50%) rotate(${positions[index]?.rotate})`
                  : "translateX(-50%) rotate(0deg)",
                transitionDelay: `${index * 90}ms`,
                maxWidth:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "110px"
                    : "unset",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}