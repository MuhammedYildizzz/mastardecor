import React from "react";
import "./Footer.css"
import {FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>📞+90 5315567629</p>
        <p>📧myildiz1222@gmail.com</p>
      </div>
      <div className="footer-center">
        <h2>© 2025 Mastar | Tüm Hakları Saklıdır</h2>
      </div>
      <div className="footer-right">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://instagram.com/mildizy" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/muhammedyildizzz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
