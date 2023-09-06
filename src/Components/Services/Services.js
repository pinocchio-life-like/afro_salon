import React from "react";

import "./Services.css";
import Header from "../Header/Header";

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
      <div>
        <h2>Haircuts</h2>
      </div>
    </div>
  );
}

export default Services;
