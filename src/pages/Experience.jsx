import { FaBriefcase, FaBuilding, FaClock, FaTasks } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background image */}
      <img src="/images/experinece.jpg" alt="" className="bg-image" />

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        <div className="experience-item">
          <h3><FaBriefcase /> Data Engineer</h3>
          <p><FaBuilding /> <strong>Datapro Information  Technology Pvt Ltd (Marketing Product & OPS)</strong>, Hyderabad, India</p>
          <p><FaClock /> May 2021 – February 2022</p>
          <ul>
            <li><FaTasks /> Improved dashboard performance by 30% by optimizing and maintaining analytics dashboards.</li>
            <li><FaTasks /> Accelerated stakeholder data access by 25% through automation and advanced visualizations using SQL, Python, and Tableau.</li>
            <li><FaTasks /> Increased data accuracy by 20% via rigorous validation and analytical reviews supporting strategic decisions.</li>
            <li><FaTasks /> Enhanced team productivity by 35% by adopting Git and GitHub best practices for version control and collaboration.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Data Engineer</h3>
          <p><FaBuilding /> <strong>Tech Mahindra (Pipelines & Enablement)</strong>, Hyderabad, India</p>
          <p><FaClock /> April 2022 – August 2023</p>
          <ul>
            <li><FaTasks /> Designed and developed automated ETL pipelines using Apache Airflow and ETL tools to centralize telecom data.</li>
            <li><FaTasks /> Built and optimized Spark/Python workflows for real-time processing of call detail records and usage metrics.</li>
            <li><FaTasks /> Engineered SQL scripts (DDL/DML) for schema evolution and OLTP-OLAP data synchronization.</li>
            <li><FaTasks /> Created custom Airflow DAGs with parameterized configurations to manage data refresh frequency, increasing pipeline flexibility and
maintainability across multiple environments.</li>
            <li><FaTasks /> Collaborated with telecom SMEs to support use cases like churn prediction, usage trends, and performance reporting.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Software Engineer</h3>
          <p><FaBuilding /> <strong>Tech Mahindra</strong>, Hyderabad, India (Remote)</p>
          <p><FaClock /> May 2024 – September 2024</p>
          <ul>
            <li><FaTasks /> Improved front-end performance by 20% by building and optimizing web apps using React.js and JavaScript.</li>
            <li><FaTasks /> Reduced API response time by 15% by deploying optimized RESTful APIs with Node.js and Express.</li>
            <li><FaTasks /> Enhanced database performance by 25% via schema optimization using MySQL and PostgreSQL.</li>
            <li><FaTasks /> Enabled automated Azure resource management through Terraform and DevOps collaboration.</li>
            <li><FaTasks /> Reduced release cycles by 25% with CI/CD pipelines via Jenkins and GitHub Actions.</li>
            <li><FaTasks /> Cut data retrieval time by 20% through NoSQL database adoption, including MongoDB and Azure Cosmos DB.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Teaching Fellow</h3>
          <p><FaBuilding /> University of Texas at Arlington, USA</p>
          <p><FaClock /> Jan 2025 – May 2025</p>
          <ul>
            <li><FaTasks /> Taught Machine Learning and AI including CNNs, RNNs, and SVMs.</li>
            <li><FaTasks /> Mentored students on Python, TensorFlow, and Scikit-learn.</li>
            <li><FaTasks /> Conducted data visualization workshops utilizing Pandas and Matplotlib.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Operations Manager – IT Support</h3>
          <p><FaBuilding /> University of Texas at Arlington, USA</p>
          <p><FaClock /> Aug 2023 – May 2024</p>
          <ul>
            <li><FaTasks /> Managed 30+ computer systems with Unix shell scripting.</li>
            <li><FaTasks /> Led comprehensive lab setup and safety audits.</li>
            <li><FaTasks /> Improved overall system uptime by approximately 25%.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;
