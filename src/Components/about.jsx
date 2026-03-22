import "./about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        I'm <span>Athira S M</span>, a B.Tech Computer Science graduate and MERN Stack Developer.
        I build scalable web applications and recently developed an AI-powered system using RAG architecture and Gemini API.
      </p>

      <div className="skills-box">
        <h3>Skills</h3>
        <p>
          React, Node.js, Express, MongoDB, JavaScript, Tailwind CSS, Python,
          Git, GitHub, Docker, and AI integration (RAG, Gemini API).
        </p>
      </div>
    </section>
  );
}