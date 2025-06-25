import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/personal" onClick={() => setMenuOpen(false)}>Personal</NavLink>
          <NavLink to="/education" onClick={() => setMenuOpen(false)}>Education</NavLink>
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>Experience</NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>Projects</NavLink>
        </div>
      </div>
      <div className="nav-right">
        <NavLink to="/personal">
          <img
            src="/images/profile_pic_Niranjan.jpg"
            alt="Niranjan"
            className="profile-pic"
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
