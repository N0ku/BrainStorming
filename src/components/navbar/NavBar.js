import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export function NavBar() {
  return (
    <div className="nav-container">
      <div className="background-nav"></div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/first">Three JS Gameplay</Link>
          </li>
          <li>
            <Link to="/first">Physics</Link>
          </li>
          <li>
            <Link to="/first">Hey</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
