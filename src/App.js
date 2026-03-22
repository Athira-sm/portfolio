import Home from "./Components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/navbar";
import About from "./Components/about";
import Projects from "./Components/project";
import Contact from "./Components/contact";
import SmartHome from "./Components/smarthome";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/smarthome" element={<SmartHome />} />
      </Routes>
    </BrowserRouter>
  );
}