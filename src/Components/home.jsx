import "./home.css";
import cv from "../assets/ATHIRA S M_Resume.pdf";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Athira S M</span></h1>
        <h2>MERN Stack Developer</h2>

        <p>
          Aspiring Software Developer passionate about building modern web applications.
        </p>

        <p className="status">🚀 Open to Work</p>

        <div className="buttons">
          <a href={cv} download>
            <button>Download Resume</button>
          </a>

          <a href="#projects">
            <button className="secondary">View Projects</button>
          </a>
        </div>
      </div>
    </section>
  );
}