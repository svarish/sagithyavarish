// "use client";

// import "./Navbar.css";

// export default function Navbar() {
//   const scrollToProjects = () => {
//     document.getElementById("projects")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const scrollToContact = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <nav className="navbar">
//       <img
//         src="/sagithyavarish.png"
//         alt="@sagithya varish"
//         className="nav-logo"
//       />

//       <div className="nav-links">
//         <a onClick={scrollToProjects}>PROJECTS</a>
//         <a>CONTACT</a>
//       </div>
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import "./Navbar.css";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar">
        <img
          src="/sagithyavarish.png"
          alt="@sagithya varish"
          className="nav-logo"
        />

        <div className="nav-links">
          <a onClick={scrollToProjects}>PROJECTS</a>
          <a onClick={() => setShowContact(true)}>CONTACT</a>
          <a  href="https://github.com/svarish"
  target="_blank"
  rel="noopener noreferrer"><img src="/pngegg.png"/></a>
        </div>
      </nav>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}