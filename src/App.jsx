// src/App.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Section from "./components/Section1";

function App() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setIsNavbarHidden(true);
      } else {
        setIsNavbarHidden(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleNavLinkClick = (e, hash) => {
    e.preventDefault();
    const element = document.getElementById(hash);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light ${
          isNavbarHidden ? "navbar-hidden" : ""
        }`}
      >
        <a className="navbar-brand" href="#">
          Burger Promo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavLinkClick(e, "section1")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavLinkClick(e, "section2")}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavLinkClick(e, "section3")}
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faUserPlus} /> Signup
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Section title="Hello World" content="lorem" bg="#f8b400" id="section1"/>
      <Section title="Hello World" content="lorem" bg="#4caf50" id="section2"/>
      <Section title="Hello World" content="lorem" bg="#ff6347" id="section3"/>
      


      
    </div>
  );
}

export default App;
