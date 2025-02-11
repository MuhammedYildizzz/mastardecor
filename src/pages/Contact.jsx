import React from "react";
import "./Contact.css"; // Harici CSS dosyanı burada içe aktar

const Contact = () => {
  return (
    <div className="contact-container">
      
      <form 
        action="https://formspree.io/f/myzkpblr"  // Kendi Formspree ID'ni ekle
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
          placeholder="Telefon (Örnek: 123 456 7890)" 
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
        <button 
          type="submit" 
          className="contact-button"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;
