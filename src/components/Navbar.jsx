import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <div className="brand">
          <NavLink to="/" className="brand-link">SaySo Voting</NavLink>
        </div>

        <nav className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/policies" className={({isActive}) => isActive ? "active" : ""}>Policies</NavLink>
          <NavLink to="/create" className={({isActive}) => isActive ? "active" : ""}>Create Policy</NavLink>
        </nav>
      </div>
    </header>
  );
}
