import React from "react";
import "./Navibar.css";
import { useNavigate } from "react-router-dom";
import white from "./assets/white.jpg";
const NaviBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <img src={white} className="nav-pp1"></img>Hearts Of Hope
        </h1>
        <ul>
          <li>
            <a href="/home" onClick={handleNavigation("/")}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={handleNavigation("/about")}>
              About
            </a>
          </li>
          <li>
            <a href="/fundraise" onClick={handleNavigation("/programs")}>
              Fundraise
            </a>
          </li>
          <li>
            <a href="/getin" onClick={handleNavigation("/getin")}>
              GetInvolved
            </a>
          </li>
          <li>
            <a href="/resources" onClick={handleNavigation("resource")}>
              Resources
            </a>
          </li>
          <li>
            <a href="/gallery" onClick={handleNavigation("/gallery")}>
              Gallery
            </a>
          </li>
          <li>
            <a href="/donate" onClick={handleNavigation("donate")}>
              Donate
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NaviBar;
