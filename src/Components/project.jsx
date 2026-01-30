import { Link } from "react-router-dom";
import "./project.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Online Complaint Tracking System</h3>
          <p>
            A MERN stack web application that allows users to register and track complaints,
            while administrators can manage, assign, and resolve issues using
            role-based access control.
          </p>
          <div className="buttons">
            <a
              href="https://online-complaint-tracking-system.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Project</button>
            </a>
          </div>
        </div>



        <div className="project-card">
          <h3>ShopEase E-Commerce Web App</h3>
          <p>
            A responsive and user-friendly e-commerce website built using
            HTML, CSS, JavaScript, and React.
            It allows users to browse products, manage carts, and make purchases easily.
          </p>
          <div className="buttons">
            <a
              href="https://e-commerce-eight-red-23.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Project</button>
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3>Todo App</h3>
          <p>
            A simple and interactive to-do application built with React to manage daily tasks efficiently.
            Users can add, edit, and delete tasks with a clean interface.
          </p>
          <div className="buttons">
            <a
              href="https://todo-app-lovat-zeta-55.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Project</button>
            </a>
          </div>
        </div>
        <div className="project-card">
          <h3>Smart Home: Unified Safety System</h3>
          <p>
            IoT-based safety system that detects air pollution and gas leakage with
            real-time alerts using React Native and Node.js.
          </p>
          <div className="buttons">
            <Link to="/smarthome">
              <button>View Project</button>
            </Link>
          </div>
        </div>
        <div className="project-card">
          <h3>IPL Data Analysis & Prediction</h3>
          <p>
            Analyzes IPL data to predict match outcomes and player performances
            using machine learning algorithms.
          </p>
          <div className="buttons">
            <a
              href="https://github.com/Athira-sm/IPL-Data-analysis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Data Analysis</button>
            </a>
            <a
              href="https://github.com/Athira-sm/ipl-prediction"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Prediction</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
