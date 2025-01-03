import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import  Staff from "./pages/Staff";
import Chat from "./components/Chat";
import "./App.css";
import Schedule from "./components/Schedule/Schedule";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="navbar-title">Кафедра</h1>
            <button
              className={`menu-button ${menuOpen ? "open" : ""}`}
              onClick={toggleMenu}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
            <div className={`navbar-buttons ${menuOpen ? "open" : ""}`}>
              <Link
                to="/"
                className="navbar-button"
                onClick={() => setMenuOpen(false)}
              >
                Асосӣ
              </Link>
              <Link
                to="/about"
                className="navbar-button"
                onClick={() => setMenuOpen(false)}
              >
                Дар бораи Кафедра
              </Link>
              <Link
                to="/staff"
                className="navbar-button"
                onClick={() => setMenuOpen(false)}
              >
                Устодон
              </Link>
              <Link
                to="/chat"
                className="navbar-button"
                onClick={() => setMenuOpen(false)}
              >
                Ёрдамчии AI
              </Link>
              <Link
                to="/schedule"
                className="navbar-button"
                onClick={() => setMenuOpen(false)}
              >
                Ҷадвали дарсӣ
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
