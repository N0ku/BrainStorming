import React from "react";
import Geometry from "../../assets/videos/geometric.mp4";
import { Link } from "react-router-dom";
import Arrow from "../../assets/images/browse_arrow.svg";
import { NavBar } from "../../components/navbar/NavBar";

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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dolor
          hendrerit, consectetur risus et, pharetra neque. Aliquam laoreet
          hendrerit eros, sit amet sagittis lorem pulvinar et. Nunc dapibus
          metus eu tempus fringilla. In hac habitasse platea dictumst. Sed
          scelerisque non leo vitae imperdiet. Fusce egestas sapien ligula, vel
          dignissim enim ultrices non. Proin egestas eleifend risus, sed
          consectetur dui hendrerit a. Phasellus pharetra tincidunt lacus eu
          ultrices. Phasellus dui enim, molestie quis dolor et, convallis
          sodales lectus. Etiam dictum mauris nec nulla mollis, molestie
          pellentesque lorem ullamcorper. Mauris mollis elit erat, non tempus
          urna fermentum a. Vestibulum nec arcu at nibh placerat venenatis.
          Curabitur feugiat, felis eget facilisis egestas, massa ante suscipit
          nibh, mattis commodo tortor massa id sapien. Curabitur convallis urna
          nec odio pulvinar tincidunt. Proin cursus quam magna, nec hendrerit
          urna hendrerit in. Curabitur scelerisque aliquam augue aliquam
          faucibus. Aenean et sapien porttitor, blandit erat a, facilisis quam.
          Aenean quis leo molestie, commodo augue non, semper lorem. Sed vitae
          metus pretium, blandit diam suscipit, condimentum dolor. Aenean sit
          amet velit ex. Integer iaculis commodo sem tincidunt sagittis.
          Maecenas molestie nisl ut arcu gravida sagittis at non metus. Maecenas
          scelerisque urna ac ligula consequat, non vehicula turpis condimentum.
          Pellentesque placerat vitae ipsum eget viverra. Curabitur scelerisque
          maximus blandit. Morbi in tempus orci, sed commodo nunc. Ut blandit
          egestas tortor nec iaculis. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Quisque malesuada metus
          quis quam dictum gravida. Maecenas sodales ultrices massa et varius.
          Aenean tempus tempor sapien, sed aliquet felis laoreet ac. Nunc varius
          mattis risus, sit amet lacinia sapien tincidunt quis. Suspendisse
          ornare neque id elementum tempor. Donec sit amet pharetra tellus, eu
          pellentesque nunc. Sed ac dictum lectus, quis commodo enim.
          Pellentesque non congue lacus. Nunc volutpat urna ac tristique
          posuere. Vestibulum ut nibh rutrum, fermentum ex a, lobortis purus.
          Sed consequat nisi scelerisque purus consectetur, ac dapibus metus
          cursus. Integer pretium rhoncus commodo. Duis pharetra ut augue
          molestie porttitor. Sed rutrum cursus leo non tincidunt. Mauris sit
          amet nisi a risus porttitor laoreet. In hac habitasse platea dictumst.
          Morbi porttitor convallis ultrices. Curabitur lobortis velit id lacus
          gravida dictum. Cras sagittis purus est, ut tristique magna euismod
          et. Curabitur rutrum lacus molestie mauris bibendum aliquet. Mauris ut
          quam nec tortor fermentum mollis. Nulla dictum dui at mollis suscipit.
          Pellentesque lacinia aliquet sapien non consequat. Morbi eu iaculis
          magna. Nam bibendum leo rhoncus elit finibus sagittis. Nam dictum
          vulputate porttitor. Vestibulum ac ullamcorper sapien. Duis finibus
          mauris nibh, quis hendrerit risus venenatis eu. Suspendisse nulla
          massa, molestie a tellus vel, ultricies iaculis elit. Donec accumsan
          est euismod nibh auctor placerat.
        </p>
      </section>
    </>
  );
}
