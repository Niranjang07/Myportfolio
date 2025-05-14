import { useState } from 'react';
import {
  FaCode, FaLaptopCode, FaDatabase, FaCogs,
  FaServer, FaBrain, FaTools, FaRobot
} from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode />,
    title: 'Programming Languages',
    content: 'C, C++, Python, Java, SQL, JSON'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Technologies',
    content: 'HTML5, XML, CSS3, JavaScript, JSP, D3.js, React'
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    content: 'MySQL, Neo4j'
  },
  {
    icon: <FaCogs />,
    title: 'Software Design & Architecture',
    content: 'Agile, TDD, UML, ER Diagrams, Apache Tomcat'
  },
  {
    icon: <FaServer />,
    title: 'Big Data & Cloud',
    content: 'Hive, Hadoop, HDFS, AWS'
  },
  {
    icon: <FaBrain />,
    title: 'Machine Learning & AI',
    content: 'ML, Deep Learning, TensorFlow, PyTorch'
  },
  {
    icon: <FaTools />,
    title: 'Tools & IDEs',
    content: 'Eclipse, PyCharm, Visual Studio, SOAP, Git, JIRA, Excel'
  },
  {
    icon: <FaRobot />,
    title: 'Frameworks & Others',
    content: 'Django, Flask, GitHub, ServiceNow, Embedded-C, Draw.io, Lucidchart, Ubuntu'
  }
];

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Background Video */}
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/skills.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="skills-page">
        <h2>💼 Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index} onClick={() => toggle(index)}>
              <div className="skill-header">
                {skill.icon}
                <span>{skill.title}</span>
              </div>
              {openIndex === index && (
                <div className="skill-content">
                  {skill.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
