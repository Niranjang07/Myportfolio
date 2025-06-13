import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import PersonalDetails from './pages/PersonalDetails';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getNavClass = ({ isActive }) =>
    isActive ? 'active-link' : undefined;

  return (
    <Router>
      <div>
        {/* ✅ NAVIGATION */}
        <nav className="navbar">
          <div className="nav-header">
            {/* 👤 Profile on the LEFT */}
            <NavLink to="/personal" className="nav-avatar">
              <img
                src="/images/profile_pic_Niranjan.jpg"
                alt="Niranjan"
                className="profile-pic"
              />
            </NavLink>

            {/* 🍔 Hamburger on the RIGHT */}
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          {/* 🔗 Navigation Links */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" className={getNavClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/personal" className={getNavClass} onClick={() => setMenuOpen(false)}>Personal</NavLink>
            <NavLink to="/education" className={getNavClass} onClick={() => setMenuOpen(false)}>Education</NavLink>
            <NavLink to="/experience" className={getNavClass} onClick={() => setMenuOpen(false)}>Experience</NavLink>
            <NavLink to="/skills" className={getNavClass} onClick={() => setMenuOpen(false)}>Skills</NavLink>
            <NavLink to="/projects" className={getNavClass} onClick={() => setMenuOpen(false)}>Projects</NavLink>
          </div>
        </nav>

        {/* ✅ ROUTES */}
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal" element={<PersonalDetails />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
