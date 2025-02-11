import React from 'react'
import ekip from "../../İmages/ekibim.webp"
import anlasma from "../../İmages/anlasma.webp"
import "./Ekibimiz.css"
import { Link } from 'react-router-dom'

const Ekibimiz = () => {
  return (
    <div className="ekraniki">
      <div className='EkipBody'>
        <h1 style={{marginTop:"10px" }}>Ekibimiz</h1>
        <div className="ekipkard">
            <img src={ekip} alt="" />
            <p>Ekibimiz her türlü çalışma koşullarına uygun. En güzel işçiliği rekabetçi fiyatlarla sizinle buluşturmaya her daim hazır.</p>
        </div>
    </div>

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
          <img src={anlasma} alt="" />
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Ekibimiz