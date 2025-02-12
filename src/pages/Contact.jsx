import React from "react";
import "./Contact.css"; // Harici CSS dosyanı burada içe aktar

const Contact = () => {
  return (
    <div className="contact-container">
      <form
        action="https://formspree.io/f/myzkpblr" // Kendi Formspree ID'ni ekle
        method="POST"
        className="contact-form"
      >
        <h2>Bize Ulaşın</h2>
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          required
          className="contact-input"
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta"
          required
          className="contact-input"
        />
        <input
          type="tel"
          name="tel"
          maxLength="12"
          placeholder="Telefon (Örnek: 555 555 5555)"
          pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
          required
          className="contact-input"
        />
        <textarea
          name="message"
          placeholder="Mesajınız"
          required
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Gönder
        </button>
      </form>
      <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.489228902971!2d28.882083576461482!3d41.015904271261885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab99bc722ce9f%3A0x7a4c62d84c4a5e49!2sGen%C3%A7osman%2C%20G%C3%BCng%C3%B6ren%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1707700000000"></iframe>
    </div>
  );
};

export default Contact;
