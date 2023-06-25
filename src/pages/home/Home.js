import React from "react";
import Geometry from "../../assets/videos/geometric.mp4";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/browse_arrow.svg";
import { NavBar } from "../../components/navbar/NavBar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./Home.scss";

export function Home() {
  return (
    <>
      <NavBar />
      <header>
        <video autoPlay loop muted className="video-container">
          <source src={Geometry} type="video/mp4" />
        </video>
        <div className="header-content">
          <h1 style={{ fontSize: "65px" }}>
            Welcome on this brainstorming website !
          </h1>
          <p style={{}}>
            You can find here, some of my some projects and drafts of my various
            ideas and workouts
          </p>
        </div>
        <div className="browse-content">
          <p className="browse">Browse</p>
          <img alt="arrow" src={Arrow}></img>
        </div>
      </header>
      <section>
        <div className="gameplay">
          <div className="titles-gameplay">
            <h2>Play with React Three Fiber</h2>
              <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae elit libero, a pharetra augue. Nullam id dolor id nibh
                ultricies vehicula ut id elit. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Donec id elit non mi porta
                gravida at eget metus. Nullam quis risus eget urna mollis ornare
                vel eu leo. Nullam quis risus eget urna mollis ornare vel eu
                leo. Donec sed odio dui. Nullam quis risus eget urna mollis
                ornare vel eu leo. Donec sed odio dui. Nullam quis risus eget
                urna mollis ornare vel eu leo. Donec sed odio dui. Nullam quis
                risus eget urna
              </p>
            <Link to="/gameplay">
              Discover <ArrowRightAltIcon className="button-icon" />
            </Link>
          </div>
          <div className="image-gameplay">
            <img
              alt="gameplay"
              src="https://i.ytimg.com/vi/1rP3nNY2hTo/maxresdefault.jpg"
              id="first"
            ></img>
            <img
              alt="gameplay"
              src={require("../../assets/images/img2.png")}
              id="second"
            ></img>
            <img
              alt="gameplay"
              src={require("../../assets/images/img.png")}
              id="third"
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}
