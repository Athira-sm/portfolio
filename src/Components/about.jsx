import "./about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm <span>Athira S M</span>, a <strong>B.Tech Computer Science Graduate </strong> 
        with hands-on experience as a <strong>MERN Stack Developer</strong> gained through various projects.
        I have worked on full-stack applications using MongoDB, Express.js, React, and Node.js,
        and I enjoy building clean, scalable, and user-friendly web applications.
      </p>

      <div className="skills-box">
        <h3>Programming Skills</h3>
        <p>
          I'm skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,
          <strong>React</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>,
          <strong>MongoDB</strong>, and <strong>Python</strong>.
          I use <strong>VS Code</strong>, <strong>Git</strong>, <strong>GitHub</strong>,
          for development and collaboration.
        </p>
      </div>
    </section>
  );
}
