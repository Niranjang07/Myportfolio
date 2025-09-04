import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Background image for Home page */}
      <img src="/images/home.jpg" alt="" className="bg-image" />

      {/* ✅ Main Content Box */}
      <div className="home-container glass-widget">
        <h1 className="glow-title">Welcome to My Portfolio</h1>
        <h3 className="sub-heading">Full-Stack Developer | Software Engineer | CS Graduate</h3>

        <p className="home-text">
          I’m a Computer Science graduate with 3+ years of experience designing and deploying scalable web applications.
          Passionate about modern UI, backend systems, and cloud-native apps, I transform ideas into polished digital solutions.
        </p>

        <p className="home-text">
          I enjoy writing clean code, building intuitive UIs, and crafting full-stack systems that make a difference.
        </p>

        {/* ✅ Call-to-Action Buttons */}
        <div className="home-buttons">
          <a
            href="/assets/Niranjan_G_DE.pdf"
            className="neon-button"
            download="Niranjan_G_DE.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </div>

        {/* ✅ Contact Section */}
        <div className="suggestion-box">
          <h3>🤝 Let's Connect</h3>
          <p>
            Have feedback, opportunities, or collaboration ideas? I’m open to new challenges and exciting teams. 
            <br />
            If there’s a position or project you think I’d be a fit for, feel free to reach out!
          </p>
          <a href="mailto:niranjankgurram@gmail.com" className="mail-link">
            📧 niranjankgurram@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
