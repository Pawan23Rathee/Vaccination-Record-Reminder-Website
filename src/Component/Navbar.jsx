import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaClipboardList, FaHome, FaCalendarCheck, FaUsers, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-black p-4 shadow-lg flex justify-between items-center z-50">
      {/* Title Section */}
      <div className="flex items-center justify-start mb-6 mt-3 space-x-1">
        <img src="/images/Title.png" alt="Title" className="w-12 h-12 object-contain" />
        <h2 className="text-2xl font-bold text-gray-600 -ml-1">Vaccination Tracker</h2>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navbar Links */}
      <div className={`md:flex md:space-x-6 absolute md:relative bg-white md:bg-transparent w-full md:w-auto left-0 transition-all duration-300 ease-in-out ${isOpen ? "top-16" : "top-[-300px]"} md:top-0 md:flex-row flex flex-col items-center`}>
        <NavLink to="/dashboard" className={({ isActive }) => `flex items-center space-x-2 p-2 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-gray-500'}`} onClick={() => setIsOpen(false)}>
          <FaHome /> <span>Dashboard</span>
        </NavLink>
        <NavLink to="/appointments" className={({ isActive }) => `flex items-center space-x-2 p-2 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-gray-500'}`} onClick={() => setIsOpen(false)}>
          <FaCalendarCheck /> <span>Appointments</span>
        </NavLink>
        <NavLink to="/family-members" className={({ isActive }) => `flex items-center space-x-2 p-2 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-gray-500'}`} onClick={() => setIsOpen(false)}>
          <FaUsers /> <span>Family Members</span>
        </NavLink>
        <NavLink to="/certificate" className={({ isActive }) => `flex items-center space-x-2 p-2 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-gray-500'}`} onClick={() => setIsOpen(false)}>
          <FaClipboardList /> <span>Certificates</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `flex items-center space-x-2 p-2 ${isActive ? 'border-b-2 border-blue-600 text-blue-600' : 'hover:text-gray-500'}`} onClick={() => setIsOpen(false)}>
          <FaUser /> <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
