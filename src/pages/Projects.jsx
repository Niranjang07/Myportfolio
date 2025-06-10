import React, { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';

// ==== Featured Projects (edit as needed) ====
const featuredProjects = [
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

// ==== Academic Projects, grouped by subject ====
const academicProjects = [{
    title: 'Parallel Matrix Multiplication in Big Data Frameworks',
    tech: 'Java, Scala, Apache Hadoop, Apache Spark',
    desc: 'Designed and implemented distributed matrix multiplication algorithms, leveraging big data frameworks for scalable and parallel computation. Demonstrated efficiency gains for large matrix operations.',
    subject: 'CCBD'
  },
  {
    title: 'KMeans Clustering on Big Data',
    tech: 'Scala, Apache Spark, Data Clustering',
    desc: 'Built a scalable KMeans clustering implementation using Spark, optimizing centroid calculation over iterative rounds. Analyzed clustering results and performance on large data sets.',
    subject: 'CCBD'
  },
  {
    title: 'Real-Time Twitter Data Analysis',
    tech: 'Java, Hadoop, MapReduce, Big Data',
    desc: 'Processed and analyzed large volumes of Twitter data using MapReduce/Hadoop, extracting insights and trends from real-world social media streams.',
    subject: 'CCBD'
  },
  {
    title: 'Graph Analytics with Apache Pig',
    tech: 'Apache Pig, Big Data, Graph Processing',
    desc: 'Wrote Pig scripts to process and analyze graph-structured data, demonstrating large-scale graph analytics in big data environments.',
    subject: 'CCBD'
  },
  {
    title: 'Parallel Graph Partitioning using Spark GraphX',
    tech: 'Scala, Apache Spark, GraphX, Distributed Computing',
    desc: 'Engineered a parallel graph partitioning algorithm in Scala utilizing Spark GraphX and Pregel API. Assigned initial clusters, performed iterative label propagation, and calculated cluster sizes for large real-world graphs. Demonstrated expertise in scalable graph analytics, edge/vertex processing, and distributed computation.',
    subject: 'CCBD'
  },
  {
    title: 'Large-Scale Graph Partitioning with Spark',
    tech: 'Scala, Apache Spark, Graph Algorithms',
    desc: 'Developed a graph partitioning algorithm in Scala using Spark, assigning cluster IDs and calculating partition sizes for large-scale networks. Demonstrated scalable parallel processing and partition management.',
    subject: 'CCBD'
  },
  // Distributed Systems
  {
    title: 'Totally Ordered Multicast Implementation',
    tech: 'Java, Distributed Systems, Messaging Protocols',
    desc: 'Implemented a totally ordered multicast algorithm ensuring uniform message delivery and consistent state across distributed processes. Designed and analyzed global event sequencing for reliability and consistency in asynchronous systems.',
    subject: 'Distributed Systems'
  },
  // DAA
  {
    title: 'Algorithm Analysis: Insertion vs Merge Sort',
    tech: 'Python, Algorithm Analysis, Matplotlib, Complexity Theory',
    desc: 'Implemented and analyzed the time complexity of insertion sort and merge sort algorithms, including code for empirical performance comparison, intersection point plotting, and theoretical complexity proofs. Plotted algorithm performance and identified scenarios where each sorting technique is preferable.',
    subject: 'DAA'
  },
  // DBMS
  {
    title: 'Event Management System Database',
    tech: 'MySQL, SQL, ER Diagram, Java/C#, Database Normalization, Git',
    desc: 'Designed and implemented a normalized relational database for a real-world event management company, including ER modeling, normalization up to 3NF, SQL scripts, and a user interface for CRUD and reporting.',
    subject: 'DBMS'
  },
  // AI
  {
    title: 'Bayesian Candy Classification',
    tech: 'Java, Probability, Bayesian Inference, OOP',
    desc: 'Developed a Bayesian inference system to classify candy bags and dynamically predict next candy types based on observed samples.',
    subject: 'AI',
  },
  {
    title: 'Bayesian Network Reasoner',
    tech: 'Python, Probability, Bayesian Networks',
    desc: 'Implemented a Bayesian Network for classic alarm problems (burglary, earthquake, alarm, calls) with query and evidence analysis.',
    subject: 'AI',
  },
  {
    title: 'Red-Blue Nim Game (MinMax & Alpha-Beta Pruning)',
    tech: 'Java, Game Theory, MinMax, Alpha-Beta Pruning',
    desc: 'Built a two-pile Nim variant with optimal AI play using MinMax and alpha-beta pruning, supporting standard and misère modes.',
    subject: 'AI',
  },
  {
    title: 'AI Graph Pathfinding: A* and Uniform Cost Search',
    tech: 'Java, A* Search, Uniform Cost Search, Graph Algorithms',
    desc: 'Engineered a graph-based pathfinding solution for city-to-city routing, supporting both UCS and A* heuristic algorithms.',
    subject: 'AI',
  },
  // ML
  {
    title: 'Deep Learning-Based Image Captioning',
    tech: 'Python, TensorFlow, Keras, BERT, COCO, OpenCV, Jupyter',
    desc: 'Built and trained an image captioning system using CNN+RNN and transformer/BERT-based decoders with MS COCO dataset, achieving high semantic accuracy.',
    subject: 'ML',
  },
  // Software Engineering
  {
    title: 'Stock Recording System (SRS)',
    tech: 'Java, Python, SQL, Android, JUnit, Microsoft Project, Agile, Git',
    desc: 'Developed a full SDLC stock trading portfolio app with live market data, authentication, event notifications, Agile methodology, and detailed documentation.',
    subject: 'Software Engineering',
  },
  {
    title: 'Project 1: Exploratory Data Mining & Visualization',
    tech: 'Python, R, LLM/AI Tools, pandas, matplotlib, seaborn, csv',
    desc: 'Explored and visualized real-world datasets using Python and R. Applied data preprocessing, performed descriptive analytics, and visualized insights through advanced plots. Leveraged LLM/AI tools for code efficiency. Achieved organized data analysis with clear resource citation and reproducible results.',
    subject: 'Data Mining'
  },
  {
    title: 'Project 2: Data Handling & Plotting',
    tech: 'Python, csv, graph, plot',
    desc: 'Focused on importing datasets and performing basic data plotting and visualization. Built foundational skills in data loading, transformation, and graphical analysis to support later, more complex data mining tasks.',
    subject: 'Data Mining'
  },
  {
    title: 'Project 3: Association Rule Mining with Apriori & FP-Growth',
    tech: 'Python, pandas, csv, read_csv, Apriori, FP-Growth, LLM/AI Tools',
    desc: 'Implemented association rule mining algorithms to uncover itemset relationships in transaction data. Used both Apriori and FP-Growth methods. Answered key analytical questions and visualized frequent patterns, demonstrating expertise in market basket analysis.',
    subject: 'Data Mining'
  },
  {
    title: 'Project 4: Clustering with k-Means & Hierarchical Algorithms',
    tech: 'Python, pandas, numpy, scipy, sklearn, matplotlib, csv, KMeans, Agglomerative Clustering',
    desc: 'Applied k-Means and Agglomerative/Hierarchical clustering to various datasets. Compared clustering performance, visualized clusters, and interpreted cluster assignments. Achieved strong understanding of unsupervised learning techniques and dataset segmentation.',
    subject: 'Data Mining'
  },
  {
    title: 'Project 5: Advanced Data Visualization and Analysis',
    tech: 'Python, csv, plot, graph, LLM/AI Tools',
    desc: 'Focused on advanced data visualization and graph-based data analysis. Utilized code to generate meaningful plots, supporting the extraction of insights from raw data. Achieved clarity in presenting data trends and anomalies.',
    subject: 'Data Mining'
  },
  {
    title: 'Project 6: Capstone Data Mining & Resource Integration',
    tech: 'Python, pandas, csv, read_csv, LLM/AI Tools',
    desc: 'Integrated concepts from previous assignments for comprehensive data mining and visualization. Used various data sources, performed multi-step analyses, and maintained excellent documentation and resource citation. Achieved a portfolio-ready summary of practical data mining techniques.',
    subject: 'Data Mining'
  }
];

function Projects() {
  const [tab, setTab] = useState('featured');
  const [openSubject, setOpenSubject] = useState(null);

  // Get a list of unique academic subjects
  const academicSubjects = [
    ...new Set(academicProjects.map(p => p.subject))
  ];

  return (
     <>
      <img src="/images/projects.jpg" alt="" className="bg-image" />

      <div className="projects-container">
        <h2><FaLaptopCode /> Projects</h2>
        {/* Tabs */}
        <div className="projects-tabs">
          <button
            onClick={() => setTab('featured')}
            className={tab === 'featured' ? 'active-tab' : ''}
          >
            Featured
          </button>
          <button
            onClick={() => setTab('academic')}
            className={tab === 'academic' ? 'active-tab' : ''}
          >
            Academic
          </button>
        </div>
        {/* Divider */}
        {tab === 'academic' && (
          <>
            <div className="projects-divider">
              <span className="divider-label">Academic Projects</span>
            </div>
            <p className="projects-tip">
              Click a section to expand details for each course project.
            </p>
          </>
        )}
        {/* Content */}
        {tab === 'featured' ? (
          <div className="project-grid">
            {featuredProjects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <h3>{proj.title}</h3>
                <p className="project-tech">{proj.tech}</p>
                <p className="project-desc">{proj.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="accordion-glass">
            <div className="accordion-list">
              {academicSubjects.map(subject => (
                <div key={subject} style={{ marginBottom: 18 }}>
                  <div
                    onClick={() => setOpenSubject(openSubject === subject ? null : subject)}
                    className={openSubject === subject ? 'accordion-header open' : 'accordion-header'}
                  >
                    <span style={{
                      marginRight: 8,
                      fontWeight: 800,
                      fontSize: 20,
                      transition: 'transform 0.15s',
                      transform: openSubject === subject ? 'rotate(90deg)' : 'rotate(0deg)'
                    }}>
                      ▶
                    </span>
                    {subject}
                  </div>
                  {openSubject === subject && (
                    <div className="accordion-content">
                      {academicProjects.filter(p => p.subject === subject).map((proj, i) => (
                        <div className="project-detail" key={i}>
                          <div className="project-title">{proj.title}</div>
                          <div className="project-tech">{proj.tech}</div>
                          <div className="project-desc">{proj.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
