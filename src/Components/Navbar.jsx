import React, { useState } from "react"; 
import { FaSearch, FaVideo, FaCalendarAlt, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "../Assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 md:px-8 py-3 shadow-md relative z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Logo}
            alt="DHA Rahbar"
            className="h-8 md:h-12 object-contain"
          />
        </div>

        <div className="flex items-center">
          <h1 className="text-green-900 text-2xl md:text-4xl font-bold">DHA Rahbar</h1>
        </div>

        {/* Desktop Center: Search + Icons */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-1 w-56">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Find your fun..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Weather & Icons */}
          <div className="flex items-center gap-3">
            <FaVideo className="text-green-900 text-lg" />
            <FaCalendarAlt className="text-green-900 text-lg" />
            <FaUser className="text-green-900 text-lg" />
          </div>
        </div>

        {/* Desktop Menu Links */}
        <div className="hidden lg:flex items-center gap-6 text-green-900 font-semibold text-sm">
          <a href="#">ABOUT US</a>
          <a href="#">FACILITIES</a>
          <a href="#">E-SERVIRES</a>
          <a href="#">PROCEDURES</a>
          <a href="#">PROJECTS</a>
          <a href="#">CHAPTERS</a>
          <a href="#">FORMS</a>
          <a href="#">PUBLICATION</a>
          <a href="#">MORE</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-green-900 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white  px-4 py-4 z-40 shadow-lg">
          {/* Menu Links */}
          <div className="flex flex-col gap-3 text-green-900 font-semibold text-sm">
            <a href="#">ABOUT US</a>
            <a href="#">FACILITIES</a>
            <a href="#">E-SERVIRES</a>
            <a href="#">PROCEDURES</a>
            <a href="#">PROJECTS</a>
            <a href="#">CHAPTERS</a>
            <a href="#">FORMS</a>
            <a href="#">PUBLICATION</a>
            <a href="#">MORE</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
