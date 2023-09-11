import React from "react";

import "./Services.css";
import Header from "../Header/Header";

import HairCuts from "../../Images/lvi-studio-haircuts.svg";

function Services() {
  return (
    <div>
      <div className="ServicesBannerClass">
        <Header />
      </div>
      <div className="ServicesBannerContainer">
        <div className="ServicesBannerHeader">
          <div
            className="ServicesCaption"
            style={{ color: "white", bottom: 0 }}>
            Explore Our Studio
          </div>
          <div className="ServicesHeaderText">Hair services</div>
        </div>
      </div>
      <div className="ServicesHairCut">
        <div className="ServicesHairCutHeader">
          <div className="ServiceCardImage">
            <img src={HairCuts} alt="" />
          </div>
          <h1>Haircuts</h1>
        </div>
        <div className="HaircutServicesList">
          
        </div>
      </div>
    </div>
  );
}

export default Services;
