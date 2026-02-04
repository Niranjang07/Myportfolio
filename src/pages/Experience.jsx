import { FaBriefcase, FaBuilding, FaClock, FaTasks } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background image */}
      <img src="/images/experinece.jpg" alt="" className="bg-image" />

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        <div className="experience-item">
          <h3><FaBriefcase /> Sr. Software Engineer </h3>
          <p><FaBuilding /> <strong>SAAKHIL Technologies Pvt Ltd.</strong>, INDIA </p>
          <p><FaClock /> July 2019 – August 2023</p>
          <ul>
            <li><FaTasks /> Led design and development of cloud-native full-stack applications using React.js, Node.js, and Express, supporting high-traffic enterprise workloads.</li>
            <li><FaTasks /> Architected and implemented RESTful APIs with performance tuning, caching strategies, and optimized data access patterns to ensure stable response times under peak load.</li>
            <li><FaTasks /> Designed and optimized relational database schemas and queries in MySQL and PostgreSQL, supporting transactional workflows and downstream analytics.</li>
            <li><FaTasks /> Automated Azure infrastructure provisioning using Terraform, creating reusable, environment-specific modules for dev, test, and production deployments.</li>
            <li><FaTasks /> Built and maintained CI/CD pipelines using Jenkins and GitHub Actions, enabling automated testing, validation, and controlled releases.Integrated NoSQL data stores to support semi-structured and event-driven workloads for analytics use cases.</li>
            <li><FaTasks /> Implemented centralized logging, monitoring, and alerting using Azure Monitor and Application Insights, improving observability and reducing incident response time.</li>

          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Software Engineer </h3>
          <p><FaBuilding /> <strong>Stirtoni Software Pvt Ltd. </strong>, INDIA </p>
          <p><FaClock /> June 2016 – June 2019</p>
          <ul>
            <li><FaTasks /> Designed and developed scalable ETL pipelines using Java and Python within the Apache Spark and Hadoop ecosystem, processing high-volume telecom CDR and network event data.</li>
            <li><FaTasks /> Built distributed data processing workflows using Apache Spark (JVM-based), leveraging Spark SQL and DataFrame APIs for near real-time analytics and KPI generation.</li>
            <li><FaTasks /> Implemented partitioned data ingestion strategies and optimized Spark execution (partitioning, parallelism, batch sizing) to resolve delayed CDR processing, reducing end-to-end pipeline latency by ~50%.</li>
            <li><FaTasks /> Engineered DDL/DML SQL workflows to support OLTP-to-OLAP data synchronization, incremental batch loads, and schema evolution for analytical reporting systems.</li>
            <li><FaTasks /> Developed data validation and quality checks (deduplication, null handling, schema enforcement) within Java/PySpark processing layers, ensuring accuracy and consistency of telecom KPIs.</li>
            <li><FaTasks /> Collaborated with telecom domain experts to translate business use cases (churn analysis, usage trends, network performance metrics) into Java/Spark-driven analytical datasets.</li>

          </ul>
        </div>






      </div>
    </>
  );
}

export default Experience;
