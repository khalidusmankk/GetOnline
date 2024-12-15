import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/Home" className="nav-link">
        <i className="fa-brands fa-react" /> Home
      </NavLink>
      <NavLink to="/About" className="nav-link">
        <i className="fa-solid fa-user" /> About Us
      </NavLink>
      <NavLink to="/Services" className="nav-link">
        <i className="fa-solid fa-wifi" /> Services
      </NavLink>

      <NavLink to="/Contact" className="nav-link">
        <i className="fa-solid fa-envelope" /> Contact Us
      </NavLink>
      <NavLink to="/Career" className="nav-link">
        <i className="fa-solid fa-pen" /> Career
      </NavLink>

      <input type="text" placeholder="Search..." />
      <button className="search-button">
        <i
          style={{ color: "black", height: "35px", width: "30px", padding: "10px", fontSize: "14px" }}
          className="fas fa-search"
        ></i>
      </button>
    </nav>
  );
};

export default Navbar;
