"use client";


import { useRef } from "react";
import "./projects.css";

export default function Projects() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  return (
    <section id="projects" className="projects-section">
      {/* TITLE */}
   
        <div className="her-sidebar">
            <img src="/sidebarimage.png"></img>
        </div>
        
      <h2 className="projects-title">
        <span className="heart"><img src="/heart.png"/></span> Projects
      </h2>

      {/* CAROUSEL */}
      <div className="carousel-container">
        <button className="arrow left" onClick={scrollLeft}>←</button>

        <div className="projects-wrapper" ref={sliderRef}>
          {/* CARD 1 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/folder.png" alt="project" />
            </div>
            <p className="project-text">
              Gastro-Intestinal Tract Image Segmentation for Cancer Treatment (2025)
            </p>
           <p className="project-link"><img src="/github.png" alt="GitHub" />
Click Here</p>
          </div>

          {/* CARD 2 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/folder.png" alt="project" />
            </div>
            <p className="project-text">
              Investment-Management-System (2025)
            </p>
             <p className="project-link"><img src="/github.png" alt="GitHub" />
Click Here</p>
          </div>

           <div className="project-card">
            <div className="project-image">
              <img src="/folder.png" alt="project" />
            </div>
            <p className="project-text">
              Smart Recommendation using Emotional Recognition (2024)
            </p>
             <p className="project-link"><img src="/github.png" alt="GitHub" />
Click Here</p>
          </div>

          {/* CARD 3 */}
          <div className="project-card">
            <div className="project-image">
              <img src="/folder.png" alt="project" />
            </div>
            <p className="project-text">
              Fuend - On Road Supply and Demand (2023)
            </p>
            <p className="project-link"><img src="/github.png" alt="GitHub" />
Click Here</p>
          </div>



          
        </div>

        


        <button className="arrow right" onClick={scrollRight}>→</button>
      </div>

    </section>
  );
}
