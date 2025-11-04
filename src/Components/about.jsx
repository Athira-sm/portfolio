import "./about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm <span>Athira S M</span>, a <strong>B.Tech Computer Science Graduate</strong> 
        and an aspiring <strong>Software Developer</strong>.  
        I'm currently doing a <strong>MERN Stack Internship</strong> to strengthen my full-stack 
        development skills and gain hands-on experience in building dynamic web applications.  
        I'm passionate about creating clean, efficient, and user-friendly web interfaces.
      </p>

      <div className="skills-box">
        <h3>Programming Skills</h3>
        <p>
          I'm skilled in <strong>HTML</strong>, <strong>CSS</strong>, 
          <strong> JavaScript</strong>, <strong>React</strong>, and <strong>Python</strong>.  
          I also use <strong>VS Code</strong>, <strong>Jupyter Notebook</strong>, 
          and <strong>GitHub</strong> for development and collaboration.
        </p>
      </div>
    </section>
  );
}
