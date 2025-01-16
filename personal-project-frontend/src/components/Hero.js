import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Hello, I'm Matt Burns</h2>
        <p>Welcome to my personal website! I'm a Software Engineer specializing in data, ML, and backend development</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
