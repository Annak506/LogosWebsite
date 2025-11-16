import React from "react";

export default function Contact() {

  return (
    <div className="contact-container">
      <h2>Contacteer ons hier</h2>
      <p>
        📧 E-mail:{" "}
        <a href="mailto:schrijvenencoaching@gmail.com" className="no-colour-link">
          schrijvenencoaching@gmail.com
        </a>
      </p>
      <p>
        📸 Volg ons op Instagram:{" "}
        <a 
          href="https://www.instagram.com/schrijvenencoaching" 
          target="_blank" 
          rel="noopener noreferrer"
          className="no-colour-link"
        >
          @schrijvenencoaching
        </a>
      </p>
    </div>
  );
}
