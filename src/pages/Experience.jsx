import { FaBriefcase, FaBuilding, FaClock, FaTasks } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background video */}
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/experience.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        <div className="experience-item">
          <h3><FaBriefcase /> Software Engineer</h3>
          <p><FaBuilding /> <strong>Pixir Softech Solutions</strong>, Hyderabad, India</p>
          <p><FaClock /> Jan 2022 – April 2023</p>
          <ul>
            <li><FaTasks /> Built scalable apps with Java, JSON, D3.js, and MySQL</li>
            <li><FaTasks /> Designed a hierarchical graph using Neo4j and D3.js</li>
            <li><FaTasks /> Developed JSP/Servlet-based modules, tested with SOAP</li>
            <li><FaTasks /> Tracked and resolved bugs using JIRA</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Software Intern</h3>
          <p><FaBuilding /> Center for Good Governance, Hyderabad, India</p>
          <p><FaClock /> May 2023 – June 2023</p>
          <ul>
            <li><FaTasks /> Improved web app performance using NodeJS & Spring</li>
            <li><FaTasks /> Debugged frontend using HTML, CSS, JS</li>
            <li><FaTasks /> Hands-on with GitHub, APIs, and AJAX workflows</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Teaching Fellow</h3>
          <p><FaBuilding /> University of Texas at Arlington</p>
          <p><FaClock /> Jan 2025 – May 2025</p>
          <ul>
            <li><FaTasks /> Taught ML/AI topics including CNNs, RNNs, and SVM</li>
            <li><FaTasks /> Mentored students in Python, TensorFlow, and Scikit-learn</li>
            <li><FaTasks /> Organized data viz workshops using Pandas/Matplotlib</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Operations Manager – IT Support</h3>
          <p><FaBuilding /> University of Texas at Arlington</p>
          <p><FaClock /> Aug 2018 – Dec 2018</p>
          <ul>
            <li><FaTasks /> Managed 30+ systems using Unix shell scripting</li>
            <li><FaTasks /> Led lab setup and safety audits</li>
            <li><FaTasks /> Increased system uptime by 25%</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
