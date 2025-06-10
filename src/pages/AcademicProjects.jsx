import React, { useState } from "react";
import { projectsBySubject } from "../data/projectsData";
import '../AcademicProjects.css'; // Import the improved CSS!

function AcademicProjects() {
  const [selected, setSelected] = useState(projectsBySubject[0].subject);

  return (
    <div className="academic-projects">
      <h2>Academic & Coursework Projects</h2>
      <div className="subject-tabs">
        {projectsBySubject.map(subj => (
          <button
            key={subj.subject}
            className={selected === subj.subject ? "active-tab" : ""}
            onClick={() => setSelected(subj.subject)}
          >
            {subj.subject}
          </button>
        ))}
      </div>
      <ul className="project-list">
        {projectsBySubject
          .find(subj => subj.subject === selected)
          .projects.map((proj, i) => (
            <ExpandableProject key={i} {...proj} />
          ))}
      </ul>
    </div>
  );
}

const ExpandableProject = ({ title, goals, tools, progress, achievement, codeLink }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="project-item">
      <div className="project-title" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={`toggle-icon${open ? ' open' : ''}`}>{open ? "▲" : "▼"}</span>
      </div>
      {open && (
        <div className="project-details">
          <div>
            <strong>Goals / Features:</strong>
            <ul>{goals.map((goal, i) => <li key={i}>{goal}</li>)}</ul>
          </div>
          <div>
            <strong>Tools & Technologies:</strong>
            <div className="tools-list">{tools.join(", ")}</div>
          </div>
          <div>
            <strong>Progress:</strong>
            <ProgressBar percent={progress} />
            <div className="achievement">{achievement}</div>
          </div>
          {codeLink && (
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
              View Report / Code
            </a>
          )}
        </div>
      )}
    </li>
  );
};

const ProgressBar = ({ percent }) => (
  <div className="progress-bar-outer">
    <div className="progress-bar-inner" style={{ width: `${percent}%` }}>{percent}%</div>
  </div>
);

export default AcademicProjects;
