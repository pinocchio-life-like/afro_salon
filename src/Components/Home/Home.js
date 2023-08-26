import React from "react";
import Header from "../Header/Header";
import "./Home.css";

import ImageOneUnder from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2043_Original-3-684x1024.webp";
import ImageTwoAbove from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2116_Original-6.jpg";
const Home = () => {
  return (
    <div>
      <div className="HomeBannerClass">
        <Header />
      </div>
      <div className="HomeBannerContainer">
        <div className="HomeBannerHeader">
          <div className="HomeCaption" style={{ color: "white", bottom: 0 }}>
            Experience Lvi Studio
          </div>
          <div className="HomeHeaderText">Fine men’s haircuts</div>
          <div className="HomeHeaderParagraph">
            Lvi Studio is a boutique men’s hair salon and barbershop for the
            discerning gentleman in Brookfield, Wisconsin.
          </div>
          <div className="HomeBookButton">Book Now</div>
        </div>
      </div>
      <div className="GeneralOverlayContainer">
        <div className="OverlayedImages">
          <div className="ImageAndText">
            <div className="TheImages">
              <div className="ImageOneUnder">
                <img width={300} src={ImageOneUnder} alt="" />
              </div>
              <div className="ImageTwoAbove">
                <img width={400} src={ImageTwoAbove} alt="" />
              </div>
            </div>
            <div className="TheTexts">
              <div style={{ color: "white" }}>Men’s Cuts & Grooming</div>
              <div className="CutsAndBarber">Haircuts & Barbering</div>
              <div className="CutsAndBarberPar">
                Feel the most authentic you with a personalized haircut and
                barbering experience. Our stylists educate you on your hair with
                special attention to your hair type and needs, while following
                the latest trends.
              </div>
              <div className="CutsAndBarberExplore">Explore the Studio</div>
            </div>
          </div>
        </div>
        <div>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
