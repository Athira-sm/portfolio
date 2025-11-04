import "./certificates.css";
import certificate from "../assets/certificate.jpeg"
import paper from "../assets/publication.pdf"
import publication from "../assets/paper publication.jpeg"
import certificate2 from "../assets/certificate2.pdf"
export default function Certificates() {
  return (
    <section id="certificates" className="certificates">
      <h2>Certificates & Publications</h2>

      <div className="certificates-grid">
        
        <div className="certificate-card">
          <h3>Python Programming</h3>
          <p>
            Completed a certification in Python programming covering
            the fundamentals and applications for real-world problem solving.
          </p>
          <a
            href={certificate}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

        
        <div className="certificate-card">
          <h3>Data Science</h3>
          <p>
            Certified in Data Science with practical experience in data analysis,
            visualization, and machine learning concepts.
          </p>
          <a
            href={certificate2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>
      </div>

     
      <div className="publications">
        <h3 className="sub-title">Publications</h3>

        <div className="publication-card">
          <h3>Smart Home: Unified Environmental Safety System</h3>
          <p>
            Published in the International Journal for Research in Applied Science 
            & Engineering Technology (IJRASET, Volume 12, Issue XII, 2024).
          </p>
          <div className="buttons">
            <a
              href={paper}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Publication</button>
            </a>
            <a
              href={publication}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>View Certificate</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
