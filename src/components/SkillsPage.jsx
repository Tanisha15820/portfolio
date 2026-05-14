import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AdsClickOutlinedIcon from "@mui/icons-material/AdsClickOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

export default function SkillsPage() {

  const skills = [
    {
      title: "Digital Marketing",
      icon: <CampaignOutlinedIcon sx={{ fontSize: 42 }} />,
      desc: "Brand growth & online visibility",
    },
    {
      title: "E-Commerce",
      icon: <ShoppingBagOutlinedIcon sx={{ fontSize: 42 }} />,
      desc: "Store optimization & conversions",
    },
    {
      title: "AI Automation",
      icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 42 }} />,
      desc: "Smart AI-powered workflows",
    },

    {
      title: "Paid Advertising",
      icon: <AdsClickOutlinedIcon sx={{ fontSize: 42 }} />,
      desc: "Meta & Google ad campaigns",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
    >
   {/* TOP LEFT SHAPE */}
<div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-br-[80px] lg:rounded-br-[120px]"></div>

{/* BOTTOM RIGHT SHAPE */}
<div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-tl-[80px] lg:rounded-tl-[120px]"></div>
      {/* BACKGROUND ICONS */}

      <div className="absolute top-[15%] left-[6%] text-[#b05c25]/10 rotate-[-15deg] hidden lg:block">
        <CampaignOutlinedIcon sx={{ fontSize: 180 }} />
      </div>

      <div className="absolute top-[20%] right-[8%] text-[#b05c25]/10 rotate-[10deg] hidden lg:block">
        <AutoAwesomeOutlinedIcon sx={{ fontSize: 160 }} />
      </div>

      <div className="absolute bottom-[12%] left-[12%] text-[#b05c25]/10 rotate-[20deg] hidden lg:block">
        <ShoppingBagOutlinedIcon sx={{ fontSize: 170 }} />
      </div>

      <div className="absolute bottom-[8%] right-[10%] text-[#b05c25]/10 rotate-[-10deg] hidden lg:block">
        <BarChartOutlinedIcon sx={{ fontSize: 170 }} />
      </div>

      {/* TOP CENTER ICON */}
      <div className="absolute top-[3%] sm:top-[4%] lg:top-[6%] left-1/2 -translate-x-1/2 text-[#b05c25]/10 rotate-[10deg]">
        <RocketLaunchOutlinedIcon
          sx={{
            fontSize: {
              xs: 90,
              sm: 110,
              lg: 150,
            },
          }}
        />
      </div>

      {/* CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] bg-primary/10 blur-[100px] lg:blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">

          <span className="uppercase tracking-[3px] sm:tracking-[4px] text-primary text-[11px] sm:text-xs font-semibold">
            Skills
          </span>

          <h1 className="mt-4 text-[30px] sm:text-[42px] lg:text-[58px] leading-[1.1] font-bold text-[#111]">
            Digital Growth &
            <span className="text-primary"> AI Solutions</span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8 px-2 sm:px-0">
            I help businesses grow through digital marketing, AI-powered
            strategies, e-commerce optimization, branding, and performance
            driven campaigns that increase visibility, engagement, and sales.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-[#fdf7f2] border border-[#efdfd0] rounded-[24px] lg:rounded-[30px] p-6 sm:p-7 lg:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >

              {/* HOVER TOP BAR */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></div>

              {/* ICON BOX */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">

                {skill.icon}

              </div>

              {/* TITLE */}
              <h2 className="mt-6 sm:mt-7 text-[20px] sm:text-[22px] font-semibold text-[#111] leading-snug">
                {skill.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-3 sm:mt-4 text-[#666] text-[13px] sm:text-[14px] leading-6 sm:leading-7">
                {skill.desc}
              </p>

              {/* DECORATIVE CIRCLE */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-all duration-500"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}