import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/first">First idea</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
