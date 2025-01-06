import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex nav items-center justify-between mx-auto px-8 md:px-14  py-4 mb-5 border-b border-gray-400 fixed w-[100%] bg-white z-10">
      {/* Logo */}
    <div className="flex items-center gap-2">
      <img src='/logo.png' alt="" className="w-10 h "/>
      <h1 className=" text-2xl md:text-3xl ">Medi<span className="font-semibold">Link</span></h1>
    </div>
      {/* Desktop Menu */}
      <ul className="hidden  md:flex items-start gap-5 font-medium">
        <NavLink to="/" className="py-1">
          Home
        </NavLink>
        <NavLink to="/consultants" className="py-1">
          Consultants
        </NavLink>
        <NavLink to="/emergency" className="py-1">
          Emergency
        </NavLink>
        <NavLink to="/contactus" className="py-1">
          Contact
        </NavLink>
        <NavLink to="/aboutus" className="py-1">
          About
        </NavLink>
      </ul>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("./create_account")}
          className="hidden md:block bg-[#0EBE7F] text-white px-8 py-3 rounded-full font-light"
        >
          Login/Signup
        </button>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden text-gray-700"
        >
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <ul className="flex flex-col gap-4 px-6 pt-[20%]">
        <div className="flex items-center gap-2">
      <img src='/logo.png' alt="" className="w-10 h "/>
      <h1 className=" text-2xl md:text-3xl ">Medi<span className="font-semibold">Link</span></h1>
    </div>
          <NavLink to="/" className="py-2" onClick={() => setShowMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/consultants" className="py-2" onClick={() => setShowMenu(false)}>
            Consultants
          </NavLink>
          <NavLink to="/emergency" className="py-2" onClick={() => setShowMenu(false)}>
            Emergency
          </NavLink>
          <NavLink to="/contactus" className="py-2" onClick={() => setShowMenu(false)}>
            Contact
          </NavLink>
          <NavLink to="/aboutus" className="py-2" onClick={() => setShowMenu(false)}>
            About
          </NavLink>
        </ul>
        <div className="flex items-center gap-4 pt-6">
        <button
          onClick={() => navigate("./create_account")}
          className="block bg-[#0EBE7F] text-white px-4 mx-4 py-3 rounded-full font-light"
        >
          Login/Signup
        </button>
        </div>
        
      </div>

      {/* Overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
