// src/pages/HomePage.jsx

import heroImg from "../assets/hero-banner.png";
import AboutPage from "../components/AboutPage.jsx";

function HomePage() {
  return (
  <div>
      <section id="home" className="w-full">

      <div className="relative overflow-hidden min-h-[92vh]">

        {/* BACKGROUND IMAGE */}
        <img
          src={heroImg}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/35 z-10"></div>

        {/* CONTENT */}
        <div className="relative z-20 px-6 md:px-14 pt-32 pb-14 min-h-[92vh] flex items-center">

          <div className="grid lg:grid-cols-2 gap-10 items-center w-full">

            {/* LEFT */}
            <div className="max-w-[750px]">

              <p className="text-secondary text-base md:text-lg mb-4">
                Hey, I'm a
              </p>

              <h1 className="text-secondary leading-[0.95] font-black text-[3.2rem] md:text-[5rem] whitespace-nowrap">
                Digital Growth
                <br />
                Expert
              </h1>

              <p className="text-secondary/80 text-base md:text-lg mt-6 max-w-lg leading-7">
                Helping brands scale with Digital Marketing,
                E-commerce strategies, and AI-powered automation.
              </p>

              {/* BUTTONS */}
              <div className="mt-8 flex gap-4 flex-wrap">

                <button className="bg-secondary text-black px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 duration-300">
                  View Projects
                </button>

                <button className="border border-secondary text-secondary px-6 py-3 rounded-full font-semibold text-sm hover:bg-secondary hover:text-black duration-300">
                  Contact Me
                </button>

              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:pl-24 xl:pl-32">

              <h2 className="text-secondary text-3xl md:text-4xl font-bold leading-tight max-w-md">
                Smart marketing should feel effortless.
              </h2>

              <p className="text-secondary/80 leading-7 mt-5 text-base max-w-md">
                I build modern growth systems combining
                branding, AI, content strategy, and
                high-converting e-commerce experiences.
              </p>

            </div>

          </div>
        </div>

        {/* SERVICES */}
        <div className="relative z-20 px-6 md:px-14 pb-12">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-secondary">

            <div>
              <p className="text-secondary  text-lg font-bold">#01</p>
              <h3 className="mt-2 text-base">Digital Marketing</h3>
            </div>

            <div>
              <p className="text-secondary  text-lg font-bold">#02</p>
              <h3 className="mt-2 text-base">E-commerce Growth</h3>
            </div>

            <div>
              <p className="text-secondary  text-lg font-bold">#03</p>
              <h3 className="mt-2 text-base">AI Automation</h3>
            </div>

            <div>
              <p className="text-secondary  text-lg font-bold">#04</p>
              <h3 className="mt-2 text-base">Branding Strategy</h3>
            </div>

          </div>

        </div>

      </div>

    </section>
    <AboutPage/>
  </div>
   
  );
}

export default HomePage;