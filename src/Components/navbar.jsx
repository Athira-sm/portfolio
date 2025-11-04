import { useNavigate } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>Athira S M</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#certificates">Certificates</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
