import { FaUniversity, FaGraduationCap, FaBookOpen } from 'react-icons/fa';

function Education() {
  return (
    <>
      {/* ✅ Background video */}
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/education1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="education-container">
        <h2><FaGraduationCap /> Education</h2>

        <div className="education-item">
          <h3><FaUniversity /> Master of Science (M.S.) in Computer Science and Information Systems</h3>
          <p><strong>University:</strong> The University of Texas at Arlington, Arlington, TX</p>
          <p><strong>Graduation:</strong> May 2025</p>
          <p><FaBookOpen /> <strong>Coursework:</strong> Algorithms, Data Structures, Web Data Management, AI, ML, Cloud, Big Data, Software Engineering</p>
        </div>

        <div className="education-item">
          <h3><FaUniversity /> Bachelor of Technology (B.Tech) in Computer Science</h3>
          <p><strong>University:</strong> Vignan’s University, Andhra Pradesh, India</p>
          <p><strong>Graduation:</strong> May 2023</p>
          <p><FaBookOpen /> <strong>Coursework:</strong> Cryptography, Networks, Mobile Computing, Cloud Computing, AI, DBMS, OOP with Java</p>
        </div>
      </div>
    </>
  );
}

export default Education;
