import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="container home">
      <Navbar />
      <section className="hero-section">
        <h1 className="hero-text">Pura-Pura Adventure</h1>
        <p className="hero-paragraph">
          Menyewakan peralatan untuk kegiatan outdoor
          seperti camping dan mendaki gunung dengan harga terjangkau. Misi
          Pura-pura Adventure adalah membuat petualangan di alam terbuka lebih
          mudah diakses.
        </p>
      </section>
    </div>
  );
}

export default Home;
