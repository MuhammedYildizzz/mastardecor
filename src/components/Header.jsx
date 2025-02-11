import React from "react";
import "./Header.css"; // CSS dosyamızı ekliyoruz

function Header() {
  return (
    <header className="header">
      <div className="header-overlay">
        <p className="header-subtitle" style={{color:"wheat"}}>İnşaat ve Tasarım Üzerine Her Şey</p>
      </div>
      <div className="icerik">
        <h2 style={{color:"wheat"}}>Mastar'a Hoş Geldiniz!</h2>
        <p>Tadilat, Tamirat, Dekorasyon gibi inşaata dair çoğu işlerinizde profesyonel ekip desteği ile rekabetçi fiyatlar ve üst düzey işçilikler ile her daim yanınızdayız</p>
      </div>
    </header>
  );
}

export default Header;
