import { FaBriefcase, FaBuilding, FaClock, FaTasks } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background image */}
      <img src="/images/experinece.jpg" alt="" className="bg-image" />

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        <div className="experience-item">
          <h3><FaBriefcase /> Data Analyst Intern </h3>
          <p><FaBuilding /> <strong>Data-Pro IT </strong>, INDIA </p>
          <p><FaClock /> August 2022 – Fabruary 2023</p>
          <ul>
            <li><FaTasks /> Automated Excel reports with advanced formulas and VBA, reducing manual effort by ~30%.</li>
            <li><FaTasks /> Wrote SQL queries and stored procedures to prepare clean datasets for dashboards.</li>
            <li><FaTasks /> Designed Power BI and Tableau dashboards to visualize performance trends and operational metrics.</li>
            <li><FaTasks /> Performed data validation and quality checks in Excel/SQL to ensure accuracy of business reports.</li>
            <li><FaTasks /> Collaborated using Git/GitHub for version control and documentation.</li>
            <li><FaTasks /> Gained exposure to Big Data tools (Spark, Hive, Airflow) through academic-style assignments, strengthening my understanding of modern data workflows.</li>
            
          </ul>
        </div>

        

        

      

        
      </div>
    </>
  );
}

export default Experience;
