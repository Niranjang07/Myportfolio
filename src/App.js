import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import PersonalDetails from './pages/PersonalDetails';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Login from './pages/Login';
import AdminConsole from './pages/AdminConsole';
import AdminLogin from './pages/AdminLogin';
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
            <div className="nav-access-wrapper">
              <div className="nav-access-icon">🔐</div>
              <div className="nav-access-menu">
                <NavLink to="/login" className="nav-access-link">Sign In</NavLink>
                <NavLink to="/register" className="nav-access-link">Join Network</NavLink>
                <NavLink to="/admin-login" className="nav-access-link">Admin Console</NavLink>
              </div>
            </div>

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
            <Route path="/register" element={<Register />} />
            <Route path="/register-success" element={<RegisterSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminConsole />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
