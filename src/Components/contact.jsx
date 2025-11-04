
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub,FaMapMarkerAlt} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1e1e2f",
        color: "#ffffff",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          color: "#00bcd4",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Let's Connect
      </h2>

      <p
        style={{
          color: "#dcdde1",
          fontSize: "1.1rem",
          marginBottom: "40px",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6",
        }}
      >
        I'm always open to learning opportunities, collaborations, and new
        challenges. Feel free to reach out to me!
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#2c2c3c",
          padding: "40px 20px",
          borderRadius: "10px",
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "1.1rem",
            color: "#dcdde1",
          }}
        >
          <FaEnvelope style={{ fontSize: "1.5rem", color: "#00bcd4" }} />
          <a
            href="email"
            style={{ color: "#00bcd4", textDecoration: "none" }}
          >
            athirasm31@gmail.com
          </a>
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "1.1rem",
            color: "#dcdde1",
          }}
        >
          <FaPhone style={{ fontSize: "1.5rem", color: "#00bcd4" }} />
          <span>8075993069</span>
        </div>

       
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "1.1rem",
            color: "#dcdde1",
          }}
        >
          <FaMapMarkerAlt style={{ fontSize: "1.5rem", color: "#00bcd4" }} />
          <span>Ernakulam, Kerala</span>
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "1.1rem",
            color: "#dcdde1",
          }}
        >
          <FaLinkedin style={{ fontSize: "1.5rem", color: "#00bcd4" }} />
          <a
            href="https://www.linkedin.com/in/athira-s-m-202b0a291"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bcd4", textDecoration: "none" }}
          >
            linkedin.com/in/athira-s-m
          </a>
        </div>

        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            fontSize: "1.1rem",
            color: "#dcdde1",
          }}
        >
          <FaGithub style={{ fontSize: "1.5rem", color: "#00bcd4" }} />
          <a
            href="https://github.com/Athira-sm"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#00bcd4", textDecoration: "none" }}
          >
            github.com/Athira-sm
          </a>
        </div>
      </div>

      <footer
        style={{
          marginTop: "50px",
          fontSize: "1rem",
          color: "#aaa",
          borderTop: "1px solid #333",
          
        }}
      >
        <p>© 2025 Athira S M. All rights reserved.</p>
      </footer>
    </section>
  );
}
