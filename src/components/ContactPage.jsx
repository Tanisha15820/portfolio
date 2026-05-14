// src/components/ContactPage.jsx

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
    >

      {/* TOP LEFT SHAPE */}
<div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-br-[80px] lg:rounded-br-[120px]"></div>

{/* BOTTOM RIGHT SHAPE */}
<div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[270px] lg:h-[140px] bg-[#ead1bb] rounded-tl-[80px] lg:rounded-tl-[120px]"></div>

{/* BACKGROUND ICONS */}

{/* LEFT ICON */}
<div className="absolute top-[18%] left-[5%] text-[#b05c25]/10 rotate-[-15deg] hidden lg:block">
  <ForumOutlinedIcon sx={{ fontSize: 150 }} />
</div>

{/* CENTER ICON */}
<div className="absolute top-[3%] left-1/2 -translate-x-1/2 text-[#b05c25]/10 rotate-[8deg] hidden lg:block">
  <MarkEmailUnreadOutlinedIcon sx={{ fontSize: 120 }} />
</div>

{/* RIGHT ICON */}
<div className="absolute top-[12%] right-[5%] text-[#b05c25]/10 rotate-[12deg] hidden lg:block">
  <SupportAgentOutlinedIcon sx={{ fontSize: 150 }} />
</div>

      {/* CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">

          <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
            Contact
          </span>

          <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-[#111]">
            Get In
            <span className="text-primary"> Touch</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8">
            Let’s discuss your brand, business goals, and digital growth
            strategies to create impactful online experiences.
          </p>

        </div>

        {/* MAIN CARD */}
        <div className="mt-14 bg-[#ead1bb] rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-[380px_1fr]">

          {/* LEFT SIDE */}
          <div className="relative bg-primary p-8 sm:p-10 text-white overflow-hidden">

            {/* CIRCLE */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10"></div>

            <h2 className="text-[28px] font-semibold">
              Contact Information
            </h2>

            <p className="mt-4 text-white/80 text-[14px] leading-7">
              Feel free to reach out for collaborations,
              digital marketing services, branding,
              and AI-powered solutions.
            </p>

            {/* CONTACT ITEMS */}
            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <CallOutlinedIcon />
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold">
                    Phone
                  </h4>

                  <p className="text-white/80 text-[14px] mt-1">
                    +91 9999887009
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <EmailOutlinedIcon />
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold">
                    Email
                  </h4>

                  <p className="text-white/80 text-[14px] mt-1">
                    info@thelocalhubmedia.com
                  </p>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                  <LocationOnOutlinedIcon />
                </div>

                <div>
                  <h4 className="text-[15px] font-semibold">
                    Location
                  </h4>

                  <p className="text-white/80 text-[14px] mt-1">
                     India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 sm:p-10 lg:p-12">

            <div className="grid sm:grid-cols-2 gap-6">

              {/* NAME */}
              <div>
                <label className="text-[#111] text-[14px] font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-3 w-full border-b border-[#d8c7b7] bg-transparent py-3 outline-none text-[14px] focus:border-primary transition-all"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-[#111] text-[14px] font-medium">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-3 w-full border-b border-[#d8c7b7] bg-transparent py-3 outline-none text-[14px] focus:border-primary transition-all"
                />
              </div>

            </div>

            {/* SUBJECT */}
            <div className="mt-8">

              <label className="text-[#111] text-[14px] font-medium">
                Subject
              </label>

              <input
                type="text"
                placeholder="Project discussion"
                className="mt-3 w-full border-b border-[#d8c7b7] bg-transparent py-3 outline-none text-[14px] focus:border-primary transition-all"
              />

            </div>

            {/* MESSAGE */}
            <div className="mt-8">

              <label className="text-[#111] text-[14px] font-medium">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="mt-3 w-full border-b border-[#d8c7b7] bg-transparent py-3 outline-none text-[14px] resize-none focus:border-primary transition-all"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button className="group mt-10 bg-primary hover:bg-[#a84d12] transition-all duration-300 text-white px-7 py-3.5 rounded-full text-[14px] font-semibold flex items-center gap-2 shadow-lg">

              Send Message

              <SouthEastIcon
                sx={{
                  fontSize: 17,
                  transition: "0.3s",
                }}
                className="group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}