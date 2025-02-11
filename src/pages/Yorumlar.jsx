import React from "react";
import "./Projects.css";



const Yorumlar = () => {
  return (
    <section  className="projects">
      <h2 style={{color:"#fff", fontSize:"60px"}}>Hizmetlerimiz</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div  className="project-card" key={project.id}>
            <img  src={project.img} alt={project.title} />
            <div className="project-info">
              <h3 style={{color:"wheat"}}>{project.title}</h3>
              <p style={{color:"wheat"}}>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Yorumlar;
