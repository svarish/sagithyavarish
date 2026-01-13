"use client";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-sidebar">
            <img src="/sidebarimage.png"></img>
        </div>
        {/* LEFT */}
        <div className="hero-left">
          <h1 className="title pecita">
            <span className="heart"><img src="/heart.png"></img></span> hi, I am Sagithya Varish
          </h1>

          <p className="subtitle">a Creative Developer</p>

          <p className="social martian">
            in · x · @sagithyavarish
          </p>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src="/profile.png" alt="Sagithya Varish" />
        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="herospace">
      <div className="hero-bottom">
        <p className="skills martian">
          <strong>SKILLS :</strong> Java | Flutter | MySQL | React JS | Next.js | Figma | Adobe XD 
        </p>
        
<button
  className="projects-btn martian"
  onClick={() => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  
>
  Projects
</button>
      </div>
        
      </div>
    </section>
  );
}