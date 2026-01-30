import React from "react";
import "./home.css";
import cv from "../assets/Athira S M_CV.pdf";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Athira S M</span>
        </h1>
        <p>
          Aspiring Software Developer passionate about building modern web applications.
        </p>
        <div className="buttons">
          <button>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href={cv}
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
