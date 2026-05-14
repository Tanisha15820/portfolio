

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import SouthEastIcon from "@mui/icons-material/SouthEast";
// import aboutImg from "../assets/about-img.png";

// export default function AboutPage() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden bg-secondary font-montserrat py-20 px-6 lg:px-16"
//     >
//       {/* TOP LEFT SHAPE */}
//       <div className="absolute top-0 left-0 w-[240px] h-[160px] bg-primary rounded-br-[120px] opacity-20"></div>

//       {/* BOTTOM RIGHT SHAPE */}
//       <div className="absolute bottom-0 right-0 w-[280px] h-[190px] bg-primary rounded-tl-[120px] opacity-20"></div>

//       {/* SMALL CIRCLE */}
//       <div className="absolute left-[7%] top-[42%] w-36 h-36 bg-primary rounded-full opacity-90"></div>

//       {/* DARK RECTANGLE */}
//       <div className="absolute left-[40%] top-[30%] w-20 h-[320px] bg-black/90"></div>

//       <div className="max-w-6xl mx-auto relative z-10">

//         {/* MAIN GRID */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center">

//           {/* LEFT IMAGE */}
//           <div className="relative flex justify-center">

//             <img
//               src={aboutImg}
//               alt="digital marketer"
//               className="relative z-20 w-full max-w-[520px] h-[390px] object-contain drop-shadow-2xl"
//             />
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="relative z-20">

//             {/* LABEL */}
//             <span className="uppercase tracking-[4px] text-primary text-xs font-semibold">
//               About Me
//             </span>

//             {/* HEADING */}
//             <h1 className="mt-4 text-[34px] md:text-[52px] leading-[1.08] font-bold text-[#111]">
//               Helping Brands
//               <br />
//               <span className="text-primary">
//                 Grow Digitally
//               </span>
//             </h1>

//             {/* SUBTEXT */}
//             <h3 className="mt-4 text-[22px] text-primary font-medium">
//               Digital Marketing Strategist
//             </h3>

//             {/* DESCRIPTION */}
//             <p className="mt-6 text-[#555] text-[15px] leading-8">
//               I help businesses scale online through performance marketing,
//               branding strategies, social media growth, and AI-powered
//               solutions that attract, engage, and convert audiences.
//             </p>

//             <p className="mt-4 text-[#555] text-[15px] leading-8">
//               From content strategy to analytics, I combine creativity
//               with data-driven insights to build strong digital presence
//               and measurable growth.
//             </p>

//             {/* BUTTON */}
//             <button className="group mt-8 bg-primary hover:bg-[#e55404] transition-all duration-300 text-white px-7 py-3.5 rounded-full text-[14px] font-semibold flex items-center gap-2 shadow-lg">
//               LET’S CONNECT

//               <SouthEastIcon
//                 sx={{
//                   fontSize: 17,
//                   transition: "0.3s",
//                 }}
//                 className="group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </button>

//             {/* EMAIL */}
//             <p className="mt-7 text-[#111] text-[16px] font-medium">
//               hello@yourbrand.com
//             </p>

//             {/* SOCIALS */}
//             <div className="flex items-center gap-3 mt-5">

//               <a
//                 href="/"
//                 className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
//               >
//                 <FacebookIcon sx={{ fontSize: 18 }} />
//               </a>

//               <a
//                 href="/"
//                 className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
//               >
//                 <InstagramIcon sx={{ fontSize: 18 }} />
//               </a>

//               <a
//                 href="/"
//                 className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
//               >
//                 <LinkedInIcon sx={{ fontSize: 18 }} />
//               </a>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import aboutImg from "../assets/about-img.png";
import SkillsPage from "./SkillsPage";

export default function AboutPage() {
  return (
   <div>
     <section
      id="about"
      className="relative overflow-hidden bg-secondary font-montserrat py-16 lg:py-20 px-5 sm:px-6 lg:px-16"
    >
      {/* TOP LEFT SHAPE */}
      <div className="absolute top-0 left-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-br-[70px] lg:rounded-br-[120px] opacity-20"></div>

      {/* BOTTOM RIGHT SHAPE */}
      <div className="absolute bottom-0 right-0 w-[170px] h-[120px] lg:w-[240px] lg:h-[160px] bg-primary rounded-tl-[70px] lg:rounded-tl-[120px] opacity-20"></div>

      {/* SMALL CIRCLE */}
      <div className="absolute left-[-30px] top-[30%] lg:left-[7%] lg:top-[42%] w-24 h-24 lg:w-36 lg:h-36 bg-primary rounded-full opacity-90"></div>

      {/* DARK RECTANGLE */}
      <div className="hidden lg:block absolute left-[40%] top-[30%] w-20 h-[320px] bg-black/90"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center order-1">

            <img
              src={aboutImg}
              alt="digital marketer"
              className="relative z-20 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px] h-auto lg:h-[390px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative z-20 order-2 text-center lg:text-left">

            {/* LABEL */}
            <span className="uppercase tracking-[3px] lg:tracking-[4px] text-primary text-[11px] lg:text-xs font-semibold">
              About Me
            </span>

            {/* HEADING */}
            <h1 className="mt-4 text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.08] font-bold text-[#111]">
              Helping Brands
              <br />
              <span className="text-primary">
                Grow Digitally
              </span>
            </h1>

            {/* SUBTEXT */}
            <h3 className="mt-4 text-[18px] sm:text-[20px] lg:text-[22px] text-primary font-medium">
              Digital Marketing Strategist
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-5 lg:mt-6 text-[#555] text-[14px] lg:text-[15px] leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
              I help businesses scale online through performance marketing,
              branding strategies, social media growth, and AI-powered
              solutions that attract, engage, and convert audiences.
            </p>

            <p className="mt-4 text-[#555] text-[14px] lg:text-[15px] leading-7 lg:leading-8 max-w-xl mx-auto lg:mx-0">
              From content strategy to analytics, I combine creativity
              with data-driven insights to build strong digital presence
              and measurable growth.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center lg:justify-start">
              <button className="group mt-8 bg-primary hover:bg-[#e55404] transition-all duration-300 text-white px-6 lg:px-7 py-3.5 rounded-full text-[13px] lg:text-[14px] font-semibold flex items-center gap-2 shadow-lg">
                LET’S CONNECT

                <SouthEastIcon
                  sx={{
                    fontSize: 17,
                    transition: "0.3s",
                  }}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>

            {/* EMAIL */}
            <p className="mt-7 text-[#111] text-[15px] lg:text-[16px] font-medium">
              info@thelocalhubmedia.com
            </p>

            {/* SOCIALS */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-5">

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
              </a>

              <a
                href="/"
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <LinkedInIcon sx={{ fontSize: 18 }} />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
    <SkillsPage/>
   </div>
  );
}