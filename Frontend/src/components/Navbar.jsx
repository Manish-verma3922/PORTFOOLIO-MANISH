import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const linkStyle =
    "cursor-pointer relative hover:text-blue-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}

        <h1 className="text-xl font-bold cursor-pointer">Manish</h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li onClick={() => scrollToSection("home")} className={linkStyle}>
            Home
          </li>

          <li onClick={() => scrollToSection("about")} className={linkStyle}>
            About
          </li>

          <li onClick={() => scrollToSection("projects")} className={linkStyle}>
            Projects
          </li>

          <li onClick={() => scrollToSection("skills")} className={linkStyle}>
            Skills
          </li>

          <li onClick={() => scrollToSection("contact")} className={linkStyle}>
            Contact
          </li>
        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black border-t border-white/10">
          <li
            onClick={() => scrollToSection("home")}
            className="cursor-pointer list-none hover:text-blue-400 transition"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("about")}
            className="cursor-pointer list-none hover:text-blue-400 transition"
          >
            About
          </li>

          <li
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer list-none hover:text-blue-400 transition"
          >
            Projects
          </li>

          <li
            onClick={() => scrollToSection("skills")}
            className="cursor-pointer list-none hover:text-blue-400 transition"
          >
            Skills
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer list-none hover:text-blue-400 transition"
          >
            Contact
          </li>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
