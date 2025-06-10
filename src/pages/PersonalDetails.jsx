import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function PersonalDetails() {
  return (
    <>
      {/* ✅ Background image for Personal page */}
      <img src="/images/personal.jpg" alt="" className="bg-image" />

      <div className="personal-container">
        <h2>About Me</h2>
        <p>
          I am an experienced Computer Science graduate with over 2 years of IT experience in designing,
          implementing, and supporting interactive web applications. I hold a <strong>B.Tech in Computer Science</strong> from
          <em> Vignan’s University</em>, Andhra Pradesh, and  <strong>Master's in CS</strong> at
          <em> University of Texas at Arlington</em>, USA.
        </p>

        <p>
          I specialize in both frontend and backend development using technologies like <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Angular</strong>,
          <strong> React</strong>, and <strong>Node.js</strong>. My background includes project management, designing banking systems, UI development,
          systems analysis, and debugging production-grade applications.
        </p>

        <p>
          I enjoy solving complex problems through clean code and continuously improving systems. I'm passionate about cloud technologies,
          database optimization, and intelligent automation with <strong>AI/ML</strong>.
        </p>

        <h3>Areas of Expertise</h3>
        <ul>
          <li><strong>Programming:</strong> C, C++, Python, Java, SQL, JSON</li>
          <li><strong>Web:</strong> HTML5, XML, CSS3, JavaScript, JSP, D3.js, React</li>
          <li><strong>Databases:</strong> MySQL, Neo4j</li>
          <li><strong>Design & Dev:</strong> Agile, TDD, UML, ER Diagrams, Apache Tomcat</li>
          <li><strong>Big Data:</strong> Hive, Hadoop, HDFS, AWS</li>
          <li><strong>Tools:</strong> Eclipse, PyCharm, VS Code, Git, SOAP, JIRA, Excel</li>
          <li><strong>ML/AI:</strong> TensorFlow, PyTorch, Deep Learning</li>
          <li><strong>Frameworks:</strong> Django, Flask</li>
          <li><strong>Design Tools:</strong> Lucidchart, Draw.io</li>
          <li><strong>Others:</strong> GitHub, ServiceNow, Embedded-C, Ubuntu</li>
        </ul>

        <h3>Career Interests & Goals</h3>
        <p>
          My professional interests lie in full-stack development, scalable cloud-native apps, machine learning, and DevOps practices.
          I aim to contribute to innovative teams building secure, user-centric platforms, and I hope to lead engineering teams focused on
          impactful software solutions in the future.
        </p>

        <h3>Connect With Me</h3>
        <div className="social-icons">
          <a href="https://linkedin.com/in/niranjangk" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#0e76a8" /></a>
          <a href="https://github.com/Niranjang07" target="_blank" rel="noopener noreferrer"><FaGithub color="#fff" /></a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook color="#4267B2" /></a>
        </div>
      </div>
    </>
  );
}

export default PersonalDetails;
