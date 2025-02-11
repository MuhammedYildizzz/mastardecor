import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: "Tadilat", desc: "Benzersiz yaşam alanı tasarımları.", img: "../../İmages/tadilat.webp" },
  { id: 2, title: "Dekorasyon", desc: "Benzersiz yaşam alanı tasarımları.", img: "../../İmages/koltuk.webp" },
  { id: 2, title: "Modern Villa", desc: "Minimalist tasarım, geniş cam paneller.", img: "../../İmages/villa.webp" },
  { id: 2, title: "İç Mekan Dizaynı", desc: "Şık ve fonksiyonel yaşam alanları.", img: "../../İmages/mutfak.webp" },
  { id: 3, title: "Yatak Odası", desc: "Benzersiz yaşam alanı tasarımları.", img: "../../İmages/yatak.webp" },
  { id: 4, title: "Mutfak", desc: "Kullanışlı ve şık Mutfak tasarımları.", img: "../../İmages/mutfak.webp" },
  { id: 4, title: "Banyo", desc: "Kullanışlı ve şık Mutfak tasarımları.", img: "../../İmages/banyo.webp" },
  
];

const Projects = () => {
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

export default Projects;
