import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="container contact">
      <Navbar />
      <section className="hero-section contact-section">
        <h1>gassinn rental di pura-pura adventure</h1>
        <section className="contact-grup">
          <Link to="https://wa.me/6285878982396" target="blank">
            <button className="contact-btn whatsapp">chat di sini</button>
          </Link>
          <Link
            to="https://www.instagram.com/purapuraadventure/"
            target="blank"
          >
            <button className="contact-btn instagram">
              liat instagram kami di sini
            </button>
          </Link>
          <Link to="https://maps.app.goo.gl/3pdZB8L6Po7pEKHRA" target="blank">
            <button className="contact-btn maps">lokasi kami</button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Contact;
