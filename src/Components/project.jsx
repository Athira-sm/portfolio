import { Link } from "react-router-dom";
import "./project.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>SmartDocs AI</h3>
          <p>
            AI-powered document assistant using MERN, RAG architecture,
            MongoDB Vector Search, and Gemini API.
          </p>
          <p><strong>Tech:</strong> React, Node.js, MongoDB, Gemini API</p>

          <div className="buttons">
            <a href="https://opsmind-ai-ten.vercel.app" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
            <a href="https://github.com/Athira-sm/Context-Aware-Corporate-Knowledge-Brain" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>
             <div className="project-card">
          <h3>Online Complaint Tracking System</h3>
          <p>
           A full-stack MERN application that allows users to register and track complaints, while administrators can manage, assign, and resolve issues using role-based access control.
          </p>
          <p><strong>Tech:</strong> React.js, Node.js, Express.js, MongoDB</p>

          <div className="buttons">
            <a href="https://online-complaint-tracking-system.vercel.app" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
            <a href="https://github.com/Athira-sm/online-complaint-tracking-system" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>



        <div className="project-card">
          <h3>ShopEase E-Commerce Web App</h3>
          <p>
            A responsive and user-friendly e-commerce web application that allows users to browse products, manage carts, and perform basic shopping actions.
          </p>
          <p><strong>Tech:</strong> HTML, CSS, JavaScript, React.js</p>
          <div className="buttons">
            <a href="https://e-commerce-eight-red-23.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
            <a href="https://github.com/Athira-sm/e-commerce" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
            </a>
          </div>
        </div>


        <div className="project-card">
          <h3>Todo App</h3>
          <p>
            A simple and interactive to-do application built with React to manage daily tasks efficiently.
            Users can add, edit, and delete tasks with a clean interface.
          </p>
          <p><strong>Tech:</strong> HTML, CSS, JavaScript, React.js</p>
          <div className="buttons">
            <a href="https://todo-app-lovat-zeta-55.vercel.app" target="_blank" rel="noopener noreferrer">
              <button>Live</button>
            </a>
            <a href="https://github.com/Athira-sm/Todo-app" target="_blank" rel="noopener noreferrer">
              <button>GitHub</button>
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
          
      </div>
    </section>
  );
}
