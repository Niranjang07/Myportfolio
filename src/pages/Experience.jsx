import { FaBriefcase, FaBuilding, FaClock, FaTasks, FaMapMarkerAlt } from 'react-icons/fa';

function Experience() {
  return (
    <>
      {/* ✅ Background image (fixed filename) */}
      <img src="/images/experience.jpg" alt="" className="bg-image" />

      <div className="experience-container">
        <h2><FaBriefcase /> Professional Experience</h2>

        {/* ===== Capital One ===== */}
        <div className="experience-item">
          <h3><FaBriefcase /> Graduate Data Engineer Intern</h3>
          <p>
            <FaBuilding /> <strong>Capital One</strong>
            {' '}<FaMapMarkerAlt /> USA
          </p>
          <p><FaClock /> Feb 2024 – Jun 2025</p>
          <ul>
            <li><FaTasks /> Orchestrated a <strong>38-module Terraform</strong> stack across AWS/Azure/GCP with drift checks, cutting IaC tickets <strong>45%</strong> and saving <strong>$260K</strong>.</li>
            <li><FaTasks /> Built <strong>Kafka–Debezium CDC</strong> streaming to Snowflake handling <strong>11K TPS</strong> with sub-second SLAs for real-time fraud analytics.</li>
            <li><FaTasks /> Productionized a <strong>PyTorch fraud model</strong> (AUC <strong>0.94</strong>), reducing false positives <strong>27%</strong>; feature store + drift alerts cut triage <strong>60%</strong>.</li>
            <li><FaTasks /> Implemented <strong>Helm</strong> and <strong>ArgoCD GitOps</strong>; blue-green rollbacks ~<strong>3 min</strong>, lowering MTTR from <strong>22 → 12 min</strong>.</li>
            <li><FaTasks /> Deployed <strong>Prometheus/Grafana SLO</strong> dashboards; alerts reduced incident MTTR <strong>38 → 22 min</strong> and avoided <strong>$80K</strong> in penalties.</li>
            <li><FaTasks /> Managed a <strong>220-item backlog</strong>; sprint velocity +<strong>18%</strong>, on-time releases lifted NPS <strong>54 → 72</strong>. Mentored 4 juniors (onboarding <strong>9 → 5 weeks</strong>).</li>
          </ul>
        </div>

        {/* ===== TCS ===== */}
        <div className="experience-item">
          <h3><FaBriefcase /> Data Engineering Co-op</h3>
          <p>
            <FaBuilding /> <strong>Tata Consultancy Services</strong>
            {' '}<FaMapMarkerAlt /> India
          </p>
          <p><FaClock /> Jul 2021 – Aug 2023</p>
          <ul>
            <li><FaTasks /> Built a <strong>20-node Spark</strong> cluster processing <strong>2 TB/day</strong>; analyst wait time fell <strong>55%</strong> (≈<strong>360 hrs/yr</strong> saved).</li>
            <li><FaTasks /> Tuned Spark partitions & Z-order; shuffle spill −<strong>47%</strong>, KPI refresh time halved, saving <strong>$110K</strong> compute.</li>
            <li><FaTasks /> Authored <strong>17 Airflow DAGs</strong> with Slack/PagerDuty; MTTR <strong>120 → 38 min</strong>, SLA breaches <strong>20% → 2%</strong>.</li>
            <li><FaTasks /> Automated KPI pipelines with <strong>Python/SQL</strong> and <strong>dbt</strong>; SLA compliance <strong>80% → 98%</strong> (unlocked 14 hrs/month).</li>
            <li><FaTasks /> Refactored Tableau to extracts; load <strong>18 → 12 s</strong> and adoption +<strong>32%</strong>, influencing <strong>$4.7M</strong> retention decisions.</li>
            <li><FaTasks /> Rolled out <strong>Azure Purview</strong>: 86 RBAC, 210 masked columns, lineage jobs—passed <strong>2 GDPR audits</strong> with zero issues.</li>
            <li><FaTasks /> Embedded <strong>Great Expectations</strong> (85% coverage) + JMeter gates; defect density −<strong>42%</strong>, avoided <strong>6</strong> hotfixes.</li>
          </ul>
        </div>

        {/* (Optional) Keep these if you still want them visible on site */}
        {/* 
        <div className="experience-item">
          <h3><FaBriefcase /> Teaching Fellow</h3>
          <p><FaBuilding /> University of Texas at Arlington, USA</p>
          <p><FaClock /> Jan 2025 – May 2025</p>
          <ul>
            <li><FaTasks /> Taught Machine Learning/Deep Learning; mentored projects with Python, TensorFlow, Scikit-learn.</li>
            <li><FaTasks /> Led visualization workshops using Pandas and Matplotlib.</li>
          </ul>
        </div>

        <div className="experience-item">
          <h3><FaBriefcase /> Operations Manager – IT Support</h3>
          <p><FaBuilding /> University of Texas at Arlington, USA</p>
          <p><FaClock /> Aug 2023 – May 2024</p>
          <ul>
            <li><FaTasks /> Managed 30+ lab systems with shell scripting; improved uptime by ~25%.</li>
          </ul>
        </div>
        */}
      </div>
    </>
  );
}

export default Experience;
