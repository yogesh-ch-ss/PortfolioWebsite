import React from "react";
import { FaBars, FaTimes } from "react-icons/fa6";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>

      {/* menu */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skils</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* hamburger */}
      <div className="md:hidden z-10">
        <FaBars />
      </div>

      {/* mobile menu */}
      <div className="hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center">
        <ul>
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Skils</li>
          <li className="py-6 text-4xl">Work</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>

      {/* socials */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
