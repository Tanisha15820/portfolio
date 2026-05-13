// src/components/Header.jsx

import { Link } from "react-router-dom";

function Header() {
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

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-secondary font-semibold">

            <a href="#home" className="hover:opacity-80 transition">
              Home
            </a>

            <a href="#about" className="hover:opacity-80 transition">
              About Me
            </a>

            <a href="#projects" className="hover:opacity-80 transition">
              Projects
            </a>

            {/* BUTTON */}
            <a
              href="#contact"
              className="bg-secondary text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 duration-300"
            >
              Get In Touch
            </a>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;