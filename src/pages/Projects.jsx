import React from "react";
import "./Projects.css";

const projects = [
  { id: 1, title: "Tadilat", desc: "Sessiz ve sorunsuz yenileme çalışmaları.", img: "/images/tadilat.webp"},
  { id: 2, title: "Dekorasyon", desc: "Benzersiz yaşam alanı tasarımları.", img: "/images/koltuk.webp" },
  { id: 3, title: "Modern Villa", desc: "Minimalist tasarım, geniş cam paneller.", img: "/images/havuzluvilla.webp" },
  { id: 4, title: "İç Mekan Dizaynı", desc: "Şık ve fonksiyonel yaşam alanları.", img: "/images/icmekan.webp" },
  { id: 5, title: "Yatak Odası", desc: "Rahatlatıcı renkler, şık mobilyalar, huzurlu atmosfer.", img: "/images/yatak.webp" },
  { id: 6, title: "Mutfak", desc: "Kullanışlı ve Şık Mutfak Tasarımları.", img: "/images/mutfak.webp" },
  { id: 7, title: "Banyo", desc: "İçinizi ferahlatacak modern banyo tasarımları.", img: "/images/banyo.webp" },
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
