import { useState } from 'react';
import {
  FaCode, FaLaptopCode, FaDatabase, FaCogs,
  FaServer, FaBrain, FaTools, FaRobot, FaCloud, FaChartBar
} from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode />,
    title: 'Programming Languages',
    content: 'Python, Java, SQL, R, JavaScript, C, C++, JSON'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development & Visualization',
    content: 'HTML5, CSS3, React, D3.js, Tableau, Spotfire, JSP'
  },
  {
    icon: <FaDatabase />,
    title: 'Databases & Data Modeling',
    content: 'MySQL, Neo4j, PostgreSQL, SQL Server, Data Warehousing, OLAP, OLTP'
  },
  {
    icon: <FaServer />,
    title: 'Big Data & Cloud',
    content: 'AWS, Hadoop, Hive, Apache Spark, Airflow, ETL pipelines, HDFS'
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning & AI',
    content: 'ML Algorithms, CNNs, RNNs, SVM, TensorFlow, PyTorch, Scikit-learn'
  },
  {
    icon: <FaCogs />,
    title: 'Software Design & Architecture',
    content: 'Agile, Scrum, UML, ER Diagrams, Apache Tomcat, System Design'
  },
  {
    icon: <FaTools />,
    title: 'Tools & IDEs',
    content: 'Git, GitHub, JIRA, Eclipse, PyCharm, Visual Studio, Excel, SOAP'
  },
  {
    icon: <FaRobot />,
    title: 'Frameworks & Others',
    content: 'Flask, Django, Node.js, Spring Boot, ServiceNow, Draw.io, Lucidchart, Ubuntu'
  },
  {
    icon: <FaCloud />,
    title: 'DevOps & Cloud Tools',
    content: 'CI/CD Pipelines, GitHub Actions, Jenkins, Docker, Kubernetes'
  },
  {
    icon: <FaChartBar />,
    title: 'Data Analysis & Reporting',
    content: 'Data Visualization, Dashboard Development, Advanced Excel, Reporting Automation'
  }
];

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* ✅ Background image for Skills page */}
      <img src="/images/skills.jpg" alt="Skills Background" className="bg-image" />

      <div className="skills-page">
        <h2>💼 Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className={`skill-card ${openIndex === index ? 'active' : ''}`}
              key={index}
              onClick={() => toggle(index)}
            >
              <div className="skill-header">
                {skill.icon}
                <span>{skill.title}</span>
              </div>
              <div className={`skill-content ${openIndex === index ? 'visible' : ''}`}>
                {skill.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
