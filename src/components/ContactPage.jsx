

import { useState } from "react";
import { motion } from "framer-motion";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="font-montserrat">
      <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-16 font-montserrat"
    >
      {/* TOP LEFT SHAPE */}
      <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-[#ead1bb] rounded-br-[80px] lg:rounded-br-[120px] animate-floatSlow"></div>

      {/* BOTTOM RIGHT SHAPE */}
      <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[270px] lg:h-[140px] bg-[#ead1bb] rounded-tl-[80px] lg:rounded-tl-[120px] animate-floatReverse"></div>

      {/* LEFT ICON */}
      <div className="absolute top-[18%] left-[5%] text-[#b05c25]/10 rotate-[-15deg] hidden lg:block animate-floatSlow">
        <ForumOutlinedIcon sx={{ fontSize: 150 }} />
      </div>

      {/* CENTER ICON */}
      <div className="absolute top-[3%] left-1/2 -translate-x-1/2 text-[#b05c25]/10 rotate-[8deg] hidden lg:block animate-floatReverse">
        <MarkEmailUnreadOutlinedIcon sx={{ fontSize: 120 }} />
      </div>

      {/* RIGHT ICON */}
      <div className="absolute top-[12%] right-[5%] text-[#b05c25]/10 rotate-[12deg] hidden lg:block animate-floatSlow">
        <SupportAgentOutlinedIcon sx={{ fontSize: 150 }} />
      </div>

      {/* CENTER GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TOP CONTENT */}
        <div className="text-center">
          <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
            Contact
          </span>

          <motion.h1
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-[32px] sm:text-[42px] lg:text-[56px] leading-[1.1] font-bold text-[#111]"
          >
            Get In
            <span className="text-primary"> Touch</span>
          </motion.h1>

          <p className="mt-5 max-w-2xl mx-auto text-[#666] text-[14px] sm:text-[15px] lg:text-[16px] leading-7 sm:leading-8">
            Let’s discuss your brand, business goals, and digital growth
            strategies to create impactful online experiences.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="mt-14 bg-[#ead1bb] rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden grid lg:grid-cols-[380px_1fr]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative bg-primary p-8 sm:p-10 text-white overflow-hidden"
          >

            {/* FLOATING GLOW */}
            <div className="absolute top-[20%] left-[15%] w-28 h-28 rounded-full bg-white/10 blur-2xl animate-glowFloat"></div>

            <div className="absolute bottom-[18%] right-[18%] w-36 h-36 rounded-full bg-white/10 blur-3xl animate-glowFloatReverse"></div>

            {/* MOVING SHINE */}
            <div className="absolute top-0 left-[-30%] w-[180px] h-[150%] bg-white/5 rotate-[20deg] animate-shineMove"></div>

            {/* CIRCLE */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 animate-pulse"></div>

            <h2 className="text-[28px] font-semibold relative z-10">
              Contact Information
            </h2>

            <p className="mt-4 text-white/80 text-[14px] leading-7 relative z-10">
              Feel free to reach out for collaborations,
              digital marketing services, branding,
              and AI-powered solutions.
            </p>

            {/* CONTACT ITEMS */}
            <div className="mt-10 space-y-7 relative z-10">

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
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

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
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

              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
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
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="relative p-8 sm:p-10 lg:p-12 bg-[#fdf7f2] overflow-hidden"
          >

            {/* FORM GLOW */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 blur-[90px] rounded-full"></div>

            {!submitted ? (

              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.target);

                  formData.append(
                    "access_key",
                    "0e57c8cd-0ec8-4864-9fc2-23cc3ccc5265"
                  );

                  formData.append(
                    "subject",
                    "New Contact Form Submission"
                  );

                  formData.append(
                    "from_name",
                    "Portfolio Website"
                  );

                  const response = await fetch(
                    "https://api.web3forms.com/submit",
                    {
                      method: "POST",
                      body: formData,
                    }
                  );

                  const result = await response.json();

                  if (result.success) {
                    setSubmitted(true);
                    e.target.reset();
                  } else {
                    alert("Something went wrong. Please try again.");
                  }
                }}
                className="relative z-10"
              >

                <div className="grid sm:grid-cols-2 gap-6">

                  {/* NAME */}
                  <div>
                    <label className="text-[#111] text-[14px] font-semibold mb-2 block">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      className="w-full bg-white border border-[#e7d6c8] rounded-2xl px-5 py-4 outline-none text-[14px] focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,92,37,0.08)] transition-all duration-300"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="text-[#111] text-[14px] font-semibold mb-2 block">
                      Your Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                      className="w-full bg-white border border-[#e7d6c8] rounded-2xl px-5 py-4 outline-none text-[14px] focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,92,37,0.08)] transition-all duration-300"
                    />
                  </div>

                </div>

                {/* SUBJECT */}
                <div className="mt-6">
                  <label className="text-[#111] text-[14px] font-semibold mb-2 block">
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="Project discussion"
                    required
                    className="w-full bg-white border border-[#e7d6c8] rounded-2xl px-5 py-4 outline-none text-[14px] focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,92,37,0.08)] transition-all duration-300"
                  />
                </div>

                {/* MESSAGE */}
                <div className="mt-6">
                  <label className="text-[#111] text-[14px] font-semibold mb-2 block">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    required
                    className="w-full bg-white border border-[#e7d6c8] rounded-2xl px-5 py-4 outline-none text-[14px] resize-none focus:border-primary focus:shadow-[0_0_0_4px_rgba(176,92,37,0.08)] transition-all duration-300"
                  ></textarea>
                </div>

<button
  type="submit"
  className="group relative overflow-hidden mt-8 px-8 py-4 rounded-full text-[14px] font-semibold flex items-center gap-2 bg-primary text-white shadow-[0_10px_30px_rgba(176,92,37,0.25)] hover:scale-105 transition-all duration-500"
>
  {/* WHITE SPREAD BACKGROUND */}
  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 ease-out rounded-full z-0"></span>

  {/* CONTENT */}
  <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
    Send Message

    <SouthEastIcon
      sx={{
        fontSize: 18,
        transition: "0.3s",
      }}
      className="group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </span>
</button>

              </form>

            ) : (

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center text-center relative z-10"
              >
               
               <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8 animate-thankyouIcon">
                  <span className="text-primary text-5xl">✓</span>
                </div>

               <h2 className="text-[34px] font-bold text-[#111] animate-thankyouText">
                  Thank You!
                </h2>

                <p className="mt-5 max-w-md text-[#666] leading-8 text-[15px]">
                  Thank you for contacting us.
                  We have received your message and will reach out to you shortly.
                </p>

              </motion.div>

            )}

          </motion.div>
        </div>
      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        @keyframes floatSlow {
          0% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-16px) rotate(5deg);
          }

          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }

        .animate-floatReverse {
          animation: floatSlow 9s ease-in-out infinite reverse;
        }

        @keyframes glowFloat {
          0% {
            transform: translateY(0px) scale(1);
          }

          50% {
            transform: translateY(-18px) scale(1.08);
          }

          100% {
            transform: translateY(0px) scale(1);
          }
        }

        .animate-glowFloat {
          animation: glowFloat 6s ease-in-out infinite;
        }

        .animate-glowFloatReverse {
          animation: glowFloat 8s ease-in-out infinite reverse;
        }

        @keyframes shineMove {
          0% {
            transform: translateX(0) rotate(20deg);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          100% {
            transform: translateX(900px) rotate(20deg);
            opacity: 0;
          }
        }

        .animate-shineMove {
          animation: shineMove 7s linear infinite;
        }
          @keyframes thankyouIcon {
  0% {
    transform: translateY(0px) scale(1);
  }

  50% {
    transform: translateY(-12px) scale(1.08);
  }

  100% {
    transform: translateY(0px) scale(1);
  }
}

.animate-thankyouIcon {
  animation: thankyouIcon 3s ease-in-out infinite;
}

@keyframes thankyouText {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-thankyouText {
  animation: thankyouText 4s ease-in-out infinite;
}
      `}</style>
    </motion.section>
    </div>
  );
}