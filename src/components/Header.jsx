import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About Me", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container-site">

        <div className="flex items-center justify-between py-8">

          {/* LOGO */}
          <Link
            to="/"
            className="text-secondary text-2xl font-bold"
          >
            Kush<span className="text-primary">.</span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10 text-secondary font-semibold">

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.path}
                className="relative overflow-hidden group"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  {link.name}
                </span>

                {/* HOVER SPREAD EFFECT */}
                <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>
              </a>
            ))}

            {/* BUTTON */}
            <a
              href="#contact"
              className="relative overflow-hidden group bg-secondary text-black px-6 py-3 rounded-full font-semibold"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                Get In Touch
              </span>

              {/* SPREAD ANIMATION */}
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>
            </a>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-secondary z-[60]"
          >
            {menuOpen ? (
              <CloseIcon sx={{ fontSize: 32 }} />
            ) : (
              <MenuIcon sx={{ fontSize: 32 }} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[78%] bg-[#fdf7f2] shadow-[-10px_0_40px_rgba(0,0,0,0.08)] z-50 transform transition-transform duration-500 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <button onClick={() => setMenuOpen(false)}>
            <CloseIcon sx={{ fontSize: 32 }} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col items-start px-8 pt-8 gap-8 text-[#111] font-semibold text-[18px]">

          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              onClick={() => setMenuOpen(false)}
              className="relative overflow-hidden group px-2 py-1"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                {link.name}
              </span>

              {/* MOBILE HOVER EFFECT */}
              <span className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>
            </a>
          ))}

          {/* MOBILE BUTTON */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="relative overflow-hidden group mt-4 bg-primary text-white px-7 py-3 rounded-full"
          >
            <span className="relative z-10">
              Get In Touch
            </span>

            {/* BUTTON ANIMATION */}
            <span className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></span>
          </a>

        </nav>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 md:hidden"
        />
      )}
    </header>
  );
}

export default Header;