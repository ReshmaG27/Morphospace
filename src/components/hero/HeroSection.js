import React from "react";
import './HeroSection.css'

function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1>Discover Your Dream Furniture</h1>
        <p>Find the perfect pieces to match your style.</p>
        <button className="explore-btn"><a href="#categories">Explore Now</a></button>
      </div>
    </section>
  );
}

export default HeroSection;
