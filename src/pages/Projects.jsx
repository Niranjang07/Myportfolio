import { FaLaptopCode } from 'react-icons/fa';

const projects = [
  {
    title: 'Block-Level Data Deduplication for Cloud',
    tech: 'AWS, PyCharm, MySQL, SHA256',
    desc: 'Optimized storage by removing redundant data blocks before uploading to the cloud.',
  },
  {
    title: 'VOLUGRAD – Volunteer Management Platform',
    tech: 'React, Laravel, Node.js, SQL',
    desc: 'Real-time chat, professor dashboards, 2FA, and secure task tracking for university volunteering.',
  },
  {
    title: 'Facial Insight Attendance System',
    tech: 'TensorFlow, OpenCV, Flask, MySQL',
    desc: 'AI-powered face recognition for secure attendance and report generation.',
  },
  {
    title: 'E-Commerce Admin Dashboard',
    tech: 'React, Chart.js, Node.js, MongoDB',
    desc: 'Feature-rich admin panel with sales tracking, analytics, and order management.',
  },
  {
    title: 'Job Market Analyzer',
    tech: 'Python, Pandas, Plotly, Streamlit',
    desc: 'Analyzes tech job postings to show skill demand trends across US regions.',
  },
  {
    title: 'AI-Powered Resume Ranker',
    tech: 'NLP, Python, Scikit-learn',
    desc: 'Ranks resumes by matching keywords against job descriptions using ML models.',
  }
];

function Projects() {
  return (
    <>
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/projects.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="projects-container">
        <h2><FaLaptopCode /> Featured Projects</h2>
        <div className="project-grid">
          {projects.map((proj, index) => (
            <div className="project-card" key={index}>
              <h3>{proj.title}</h3>
              <p className="project-tech">{proj.tech}</p>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-icons">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
