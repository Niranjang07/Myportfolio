import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Background video for Home page */}
      <video autoPlay muted loop className="bg-video">
        <source src="/videos/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Main Content Box */}
      <div className="home-container glass-widget">
        <h1 className="glow-title">Welcome to My Portfolio</h1>
        <h3 className="sub-heading">Full-Stack Developer | Software Engineer | CS Graduate</h3>

        <p className="home-text">
          I’m a Computer Science graduate with 2+ years of experience designing and deploying scalable web applications.
          Passionate about modern UI, backend systems, and cloud-native apps, I transform ideas into polished digital solutions.
        </p>

        <p className="home-text">
          I enjoy writing clean code, building intuitive UIs, and crafting full-stack systems that make a difference.
        </p>

        {/* ✅ Call-to-Action Buttons */}
        <div className="home-buttons">
          <a
            href="/resume/Full_Stack_Resume_Niranjan_Gurram.pdf"
            className="neon-button"
            download
          >
            📄 Download Resume
          </a>
          <button onClick={() => window.location.href = '/skills'} className="neon-button">
            💡 Explore Skills
          </button>
          <button onClick={() => window.location.href = '/projects'} className="neon-button">
            🚀 View Projects
          </button>
        </div>

        {/* ✅ Contact Section */}
        <div className="suggestion-box">
          <h3>🤝 Let's Connect</h3>
          <p>
            Have feedback, opportunities, or collaboration ideas? I’m open to new challenges and exciting teams. 
            <br />
            If there’s a position or project you think I’d be a fit for, feel free to reach out!
          </p>
          <a href="mailto:niranjankumarg007@gmail.com" className="mail-link">
            📧 niranjankumarg007@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
