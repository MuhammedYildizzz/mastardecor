import React from "react";
import ekip from "../../İmages/anlasma.webp";
import "./Homehizmetlerimiz.css";
import { Link } from "react-router-dom";

const HomeHizmetlerimiz = () => {
  return (
    <div className="HizmetBody">
      <div className="baslik">
        <h1 style={{ marginTop: "10px" }}>Hizmetlerimiz</h1>
      </div>
      <div className="ekipkard">
        <div className="sol">
          <p>
            Profesyonel dekorasyon ekibimizle yaşam alanlarınızı estetik ve
            fonksiyonel hale getiriyoruz. İç mekân tasarımından tadilata kadar
            her aşamada kaliteli ve yaratıcı çözümler sunuyoruz.
          </p>
          <Link to="/projects">
            {" "}
            <button type="submit" className="button">
              Git
            </button>
          </Link>
        </div>
        <div className="sag">
          <img src={ekip} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeHizmetlerimiz;
