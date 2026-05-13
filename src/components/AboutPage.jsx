// src/pages/AboutPage.jsx

import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MemoryOutlinedIcon from "@mui/icons-material/MemoryOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";

export default function AboutPage() {
  const services = [
    {
      icon: <CampaignOutlinedIcon sx={{ fontSize: 26 }} />,
      title: "Digital\nMarketing",
    },
    {
      icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 26 }} />,
      title: "E-commerce\nManagement",
    },
    {
      icon: <MemoryOutlinedIcon sx={{ fontSize: 26 }} />,
      title: "AI Tools &\nAutomation",
    },
    {
      icon: <QueryStatsOutlinedIcon sx={{ fontSize: 26 }} />,
      title: "Data Analysis &\nStrategy",
    },
  ];

  return (
    <section className="bg-[#f8f6f4] py-24 px-6 lg:px-14 font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* MAIN CONTAINER */}
        <div className="bg-white rounded-[34px] px-8 md:px-14 py-10 shadow-sm border border-[#f1e7df]">

          <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative">

              {/* IMAGE */}
             <img
  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
  alt="about"
  className="w-full h-[460px] object-cover rounded-[24px]"
/>

              {/* SMALL DECOR */}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border border-primary/20 rounded-3xl"></div>
            </div>

            {/* RIGHT CONTENT */}
            <div>

              {/* TOP LABEL */}
              <div className="flex items-center gap-4 mb-5">

                <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
                  About Me
                </span>

                <div className="w-12 h-[2px] bg-primary"></div>
              </div>

              {/* HEADING */}
              <h2 className="text-[34px] md:text-[48px] leading-[1.18] font-semibold text-[#111] max-w-3xl">
                Results-driven marketer with a passion for growth & innovation.
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-7 text-[#666] text-[16px] leading-8 max-w-2xl">
                With expertise in digital marketing, e-commerce, and AI tools,
                I create strategies that not only attract but convert.
                I love turning ideas into measurable results and helping
                brands build a strong online presence.
              </p>

              {/* SERVICES */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-[#efe5de] pt-10">

                {services.map((item, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >

                    {/* ICON */}
                    <div className="w-16 h-16 rounded-full border border-[#f4d8c7] flex items-center justify-center text-primary bg-[#fffaf7] transition-all duration-300 group-hover:bg-primary group-hover:text-white">

                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-5 text-[15px] leading-7 font-semibold text-[#111] whitespace-pre-line">
                      {item.title}
                    </h3>

                    {/* SMALL LINE */}
                    <div className="w-12 h-[2px] bg-primary mt-4"></div>

                    {/* DIVIDER */}
                    {index !== services.length - 1 && (
                      <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-[#efe5de]"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}