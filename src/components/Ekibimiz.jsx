import React from 'react'
import ekip from "../../İmages/ekibim.webp"
import "./Ekibimiz.css"

const Ekibimiz = () => {
  return (
    <div className='EkipBody'>
        <h1 style={{marginTop:"10px" }}>Ekibimiz</h1>
        <div className="ekipkard">
            <img src={ekip} alt="" />
            <p>Ekibimiz her türlü çalışma koşullarına uygun. En güzel işçiliği rekabetçi fiyatlarla sizinle buluşturmaya her daim hazır.</p>
        </div>
    </div>
  )
}

export default Ekibimiz