import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../İmages/logo.jpg";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

  };
  const toggleLi=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
          <h2>MASTAR</h2>
          <button className="close-btn" onClick={toggleSidebar}>
            {isOpen ? "X" : "≡"}
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul onClick={toggleLi}>
            <li>
              <Link to="/">ANASAYFA</Link>
            </li>
            <li>
              <Link to="/about">HAKKIMIZDA</Link>
            </li>
            <li>
              <Link to="/projects">HİZMETLERİMİZ</Link>
            </li>
            <li>
              <Link to="/contact">İLETİŞİM</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sidebar Açma Butonu (Sol üst köşeye alındı) */}
      <button
        className={`sidebar-toggle-btn ${isOpen ? "hidden" : ""}`}
        onClick={toggleSidebar}
      >
        Menu
      </button>
    </>
  );
};

export default Sidebar;
