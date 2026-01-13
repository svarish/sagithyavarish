"use client";

import "./Navbar.css";

export default function Navbar() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <img
        src="/sagithyavarish.png"
        alt="@sagithya varish"
        className="nav-logo"
      />

      <div className="nav-links">
        <a onClick={scrollToProjects}>PROJECTS</a>
        <a>CONTACT</a>
      </div>
    </nav>
  );
}