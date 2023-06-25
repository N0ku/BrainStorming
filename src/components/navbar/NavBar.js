import React, { useEffect,useRef } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

export function NavBar() {

  const navBackground = useRef();

  useEffect(() => {
    const handleScroll = () => {
      var viewportHeight = window.innerHeight; 
      var threshold = viewportHeight * 1;

        if (window.scrollY > threshold) {
          navBackground.current.classList.add("nav-solid");
        } else {
          navBackground.current.classList.remove("nav-solid");
        }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="nav-container">
      <div className="background-nav" ref={navBackground}></div>
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
