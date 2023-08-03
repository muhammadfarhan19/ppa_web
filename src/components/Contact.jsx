import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="container contact">
      <Navbar />
      <section className="hero-section contact-section">
        <h1>gassinn rental di pura-pura adventure</h1>
        <section className="contact-grup">
          <button className="contact-btn whatsapp">
            <a href="https://wa.me/6285878982396">chat di sini</a>
          </button>
          <button className="contact-btn instagram">
            <a href="https://www.instagram.com/purapuraadventure/">
              liat instagram kami di sini
            </a>
          </button>
          <button className="contact-btn maps">
            <a href="https://maps.app.goo.gl/3pdZB8L6Po7pEKHRA" target="blank">
              lokasi kami
            </a>
          </button>
        </section>
      </section>
    </div>
  );
}

export default Contact;
