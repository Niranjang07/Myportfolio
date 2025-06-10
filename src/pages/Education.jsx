import { FaUniversity, FaGraduationCap, FaBookOpen } from 'react-icons/fa';

function Education() {
  return (
    <>
      {/* ✅ Background image */}
      <img src="/images/education.jpg" alt="" className="bg-image" />

      <div className="education-container">
        <h2><FaGraduationCap /> Education</h2>

        <div className="education-item">
          <h3><FaUniversity /> Master of Science (M.S.) in Computer Science and Information Systems</h3>
          <p><strong>University:</strong> The University of Texas at Arlington, Arlington, TX</p>
          <p><strong>Graduation:</strong> May 2025</p>
          <p><FaBookOpen /> <strong>Relevant Coursework & Projects:</strong></p>
          <ul>
            <li>Data Mining and Analysis using Python, R, SQL</li>
            <li>Advanced Machine Learning: CNNs, RNNs, and SVM models</li>
            <li>Web Data Management and Visualization with Tableau & Spotfire</li>
            <li>Cloud Computing and Big Data Processing using Apache Spark, Airflow</li>
            <li>Software Engineering: Developed scalable web apps using React and Node.js</li>
            <li>AI & Deep Learning implementations with TensorFlow and PyTorch</li>
          </ul>
        </div>

        <div className="education-item">
          <h3><FaUniversity /> Bachelor of Technology (B.Tech) in Computer Science</h3>
          <p><strong>University:</strong> Vignan’s University, Andhra Pradesh, India</p>
          <p><strong>Graduation:</strong> May 2023</p>
          <p><FaBookOpen /> <strong>Relevant Coursework & Projects:</strong></p>
          <ul>
            <li>Cryptography and Network Security implementation projects</li>
            <li>Mobile and Cloud Computing application development</li>
            <li>Database Management Systems (MySQL, SQL Server)</li>
            <li>Object-Oriented Programming with Java</li>
            <li>Artificial Intelligence foundational projects</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Education;
