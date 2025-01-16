import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Matt Burns</h1>
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
