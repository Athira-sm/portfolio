import { useNavigate } from "react-router-dom";
import "./smarthome.css";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpeg";
import four from "../assets/4.jpeg";
import five from "../assets/5.jpeg";
import six from "../assets/6.jpeg";
import seven from "../assets/7.jpeg";

export default function SmartHome() {
  const navigate = useNavigate();

  return (
    <section className="smart-home">
      <h2>Smart Home: Unified Safety System (BreathSafe)</h2>

      <p className="intro">
        <b>BreathSafe</b> is a real-time gas leakage and air quality monitoring app that provides instant alerts and emergency notifications. Built using React Native and Node.js, it ensures user safety through continuous IoT-based monitoring.
      </p>

      <div className="image-gallery">

        <div className="image-card">
          <img src={one} alt="Welcome Screen" />
          <p>
            The welcome screen provides a clean interface with a safety-themed image, app name, and a “Get Started” button for easy navigation. It introduces users to real-time gas monitoring features.
          </p>
        </div>

        <div className="image-card">
          <img src={two} alt="Login Screen" />
          <p>
            The login screen features email and password fields with secure authentication using Node.js and MongoDB, ensuring safe and smooth user access.
          </p>
        </div>

        <div className="image-card">
          <img src={three} alt="Warning Alert" />
          <p>
            Shows a green status for normal air quality, confirming safe conditions while keeping emergency options easily accessible.

          </p>
        </div>

        <div className="image-card">
          <img src={four} alt="Normal Air Quality" />
          <p>
            Displays a red warning indicator for hazardous air quality with an emergency alert button, allowing users to take immediate safety actions.
          </p>
        </div>

        <div className="image-card">
          <img src={five} alt="Emergency Notification" />
          <p>
            The app sends emergency notifications and allows users to email alerts instantly to registered contacts or authorities.
          </p>
        </div>

        <div className="image-card">
          <img src={six} alt="Email Alert" />
          <p>
            The automatic email alert system instantly notifies users and emergency contacts about detected gas leaks for quick response.
          </p>
        </div>

        <div className="image-card">
          <img src={seven} alt="Settings Screen" />
          <p>
            The settings screen lets users add emergency contacts, enable auto-email alerts, use the AI chatbot, and securely log out.
          </p>
        </div>
      </div>

      <div className="back-btn">
        <button onClick={() => navigate("/#projects")}>← Back to Projects</button>
      </div>
    </section>
  );
}
