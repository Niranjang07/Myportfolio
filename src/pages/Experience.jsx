import { FaBriefcase, FaBuilding, FaClock, FaTasks } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background image */}
      <img src="/images/experinece.jpg" alt="" className="bg-image" />

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        <div className="experience-item">
          <h3><FaBriefcase /> Graduate Data Engineer Intern </h3>
          <p><FaBuilding /> <strong>Capital One </strong>, United States </p>
          <p><FaClock /> February 2024 – June 2025</p>
          <ul>
            <li><FaTasks /> Orchestrated 38-module Terraform stack across AWS, Azure, GCP; drift checks cut IaC tickets 45% and saved $260k.</li>
            <li><FaTasks /> Built Kafka-Debezium CDC pipeline moving 11k TPS events to Snowflake in sub-sec SLA, enabling real-time fraud analytics.</li>
            <li><FaTasks /> Productionized PyTorch fraud model with AUC 0.94 and 27% false-positive drop; feature store, drift alerts cut triage 60%.</li>
            <li><FaTasks /> Implemented Helm charts & ArgoCD GitOps; blue-green rollbacks avg 3 min, cutting MTTR 22→12 min each release.</li>
            <li><FaTasks /> Deployed Prometheus-Grafana SLO dashboards; alerts cut incident MTTR 38→22 min and avoided $80k SLA penalties.</li>
            <li><FaTasks /> Managed 220-item backlog; sprint velocity rose 18% and on-time releases lifted analytics team NPS 54→72.</li>
            <li><FaTasks /> Mentored 4 junior engineers; onboarding time dropped 9→5 weeks and team retention improved by 12%.</li>
          </ul>
        </div>

        

        <div className="experience-item">
          <h3><FaBriefcase /> Data Engineering Co-op</h3>
          <p><FaBuilding /> <strong>Tata Consultancy Services </strong>, India (Remote)</p>
          <p><FaClock /> July 2021 – Augustr 2023</p>
          <ul>
            <li><FaTasks /> Built 20-node Spark cluster processing 2 TB telecom data daily; analyst wait time fell 55%, freeing 360 hours yearly</li>
            <li><FaTasks /> Optimized Spark partitions and Z-order; shuffle spill dropped 47%, KPI refresh halved, saving $110k compute expense</li>
            <li><FaTasks /> Authored 17 Airflow DAGs with Slack & PagerDuty hooks; MTTR plummeted 120→38 min and SLA breaches shrank 20%→2%</li>
            <li><FaTasks /> Automated KPI pipelines with Python/SQL and dbt; SLA compliance climbed 80→98%, unlocking 14 h monthly capacity.</li>
            <li><FaTasks /> Refactored Tableau views to extracts; load 18→12 s and adoption up 32%, influencing $4.7 M retention decisions</li>
            <li><FaTasks /> Embedded Great Expectations at 85% coverage plus JMeter load gates; defect density fell 42% and avoided 6 hotfixes.</li>
            <li><FaTasks /> Rolled out Azure Purview: 86 RBAC policies, 210 masked columns, lineage jobs; cleared two GDPR audits with zero issues.</li>
          </ul>
        </div>

      

        
      </div>
    </>
  );
}

export default Experience;
