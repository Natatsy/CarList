// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // We'll add some CSS for the header styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
