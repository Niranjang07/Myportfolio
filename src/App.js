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

  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-left">
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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

        {/* Routes */}
        <main>
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
