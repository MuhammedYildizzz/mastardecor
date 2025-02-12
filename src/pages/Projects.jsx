import React from "react";
import "./Projects.css";
import icmekan from "../../images/icmekan.webp"
import havuzluvilla from "../../images/havuzluvilla.webp"
import banyo from "../../images/banyo.webp"
import mutfak from "../../images/mutfak.webp"
import yatak from "../../images/yatak.webp"
import koltuk from "../../images/koltuk.webp"
import tadilat from "../../images/tadilat.webp"


const projects = [
  { id: 1, title: "Tadilat", desc: "Sessiz ve sorunsuz yenileme çalışmaları.", img:`${tadilat}` },
  { id: 2, title: "Dekorasyon", desc: "Benzersiz yaşam alanı tasarımları.", img:`${koltuk}` },
  { id: 3, title: "Modern Villa", desc: "Minimalist tasarım, geniş cam paneller.", img: `${havuzluvilla}` },
  { id: 4, title: "İç Mekan Dizaynı", desc: "Şık ve fonksiyonel yaşam alanları.", img:`${icmekan}` },
  { id: 5, title: "Yatak Odası", desc: "Rahatlatıcı renkler, şık mobilyalar, huzurlu atmosfer.", img:`${yatak}` },
  { id: 6, title: "Mutfak", desc: "Kullanışlı ve Şık Mutfak Tasarımları.", img:`${mutfak}` },
  { id: 7, title: "Banyo", desc: "İçinizi ferahlatacak modern banyo tasarımları.", img:`${banyo}` }
  
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
