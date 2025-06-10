import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import PersonalDetails from './pages/PersonalDetails';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-left">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
            <NavLink to="/personal" className={({ isActive }) => isActive ? 'active-link' : ''}>Personal</NavLink>
            <NavLink to="/education" className={({ isActive }) => isActive ? 'active-link' : ''}>Education</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? 'active-link' : ''}>Experience</NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active-link' : ''}>Skills</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active-link' : ''}>Projects</NavLink>
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
