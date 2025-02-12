import React from "react";
import ekip from "../../images/ekibim.webp";
import anlasma from "../../images/anlasma.webp";
import { Link } from "react-router-dom";
import "./Other.css";

const Other = () => {
  return (
    <div className="ekraniki">
      <div className="ekipbody">
        <div className="ekipbaslik">
          <h1>Ekibimiz</h1>
          <div className="ekipicerik">
            <img src={ekip} alt="" />
            <p>
              Ekibimiz her türlü çalışma koşullarına uygun. En güzel işçiliği
              rekabetçi fiyatlarla sizinle buluşturmaya her daim hazır.
            </p>
            
          </div>
        </div>
      </div>
      <div className="hizmetbody">
        <div className="hizmetbaslik">
          <h1>Hizmetlerimiz</h1>
          <div className="hizmeticerik">
            <div className="hizmeticerikiki">
              <img src={anlasma} alt="" />
              <p>
                Profesyonel dekorasyon ekibimizle yaşam alanlarınızı estetik ve
                fonksiyonel hale getiriyoruz. İç mekân tasarımından tadilata
                kadar her aşamada kaliteli ve yaratıcı çözümler sunuyoruz.
              </p>
              <Link to="/projects">
                {" "}
                <button type="submit" className="button">
                  Git
                </button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
