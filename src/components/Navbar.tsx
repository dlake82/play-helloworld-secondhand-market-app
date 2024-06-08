import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";

interface NavbarProps {
  leftIcons: string[];
  title: string;
  rightIcons: string[];
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FiArrowLeft className="back-button" />
      </div>
      <div className="navbar-title">
        <h1>{title}</h1>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/notifications">
              <AiOutlineBell />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
