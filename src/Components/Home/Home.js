import React from "react";
import Header from "../Header/Header";
import "./Home.css";

import ImageOneUnder from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2043_Original-3-684x1024.webp";
import ImageTwoAbove from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2116_Original-6.jpg";
import HairCuts from "../../Images/lvi-studio-haircuts.svg";
import HairColor from "../../Images/lvi-studio-haircolor.svg";
import Barbering from "../../Images/lvi-studio-barbering.svg";
import AddOns from "../../Images/lvi-studio-addons.svg";
import overlayImage from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2227_Original-11.jpg";
import Logo from "../../Images/Artboard-1.svg";
import LocationSvg from "../../Images/Location.svg";
import PhoneSvg from "../../Images/Phone.svg";
import EmailSvg from "../../Images/Email.svg";
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
        <div className="MensServices">
          <div className="ExploreOur">Explore Our Hair Services</div>
          <div className="ServicesTitleAndDetail">
            <div className="ServicesTitle">Men’s Services</div>
            <div className="ServiceDetail">Service Details</div>
          </div>
        </div>
        <div className="ServiceCardsBoard">
          <div className="ServiceCard">
            <div className="ServiceCardImage">
              <img src={HairCuts} alt="" />
            </div>
            <div className="CardTitle">Haircuts</div>
            <div className="CardDetail">
              With every haircut service you will enjoy a complimentary
              beverage, consultation, shampoo, condition, relaxing hot towel
              finish, blow-dry style and expert advice specific to your
              lifestyle and needs.
            </div>
          </div>
          <div className="ServiceCard">
            <div className="ServiceCardImage">
              <img src={HairColor} alt="" />
            </div>
            <div className="CardTitle">Haircolor</div>
            <div className="CardDetail">
              Allow us to expertly cover or blend grey hairs, even varying tones
              or transform the color of your hair or beard. We use Goldwell and
              Wella professional products for your haircolor or highlight needs.
            </div>
          </div>
          <div className="ServiceCard">
            <div className="ServiceCardImage">
              <img src={Barbering} alt="" />
            </div>
            <div className="CardTitle">Barbering</div>
            <div className="CardDetail">
              Treat yourself with the a relaxing shave or beard line-up service.
              Using only the best professional facial shave products with aroma
              infused hot steam towels to prepare the face for the closest clean
              shave leaving you fresh with zero irritation.
            </div>
          </div>
          <div className="ServiceCard">
            <div className="ServiceCardImage">
              <img src={AddOns} alt="" />
            </div>
            <div className="CardTitle">Add-ons</div>
            <div className="CardDetail">
              Compliment your experience with add-on facial waxing services,
              relax with a min facial or add an executive hot stone neck and
              scalp massage to any grooming service.
            </div>
          </div>
        </div>
      </div>
      <div
        className="image-overlay-container"
        style={{ backgroundImage: `url(${overlayImage})` }}>
        <div className="overlay">
          <div style={{ fontWeight: 700 }}>Explore Our Hair Services</div>
          <div className="OverlayHeader">Book a Cut</div>
          <div className="OverlayButton">Book Now</div>
        </div>
      </div>
      <div className="Footer">
        <div className="FirstLineFooter">
          <div className="FooterLogo">
            <img height={150} src={Logo} alt="logo" />
          </div>
          <div className="BookACutFooter">Book a cut and style online.</div>
          <div className="FooterBookButton">Book Now</div>
        </div>
        <div className="SecondLineFooter">
          <div className="FooterLinks FooterLinksOne">
            <div className="linkIcon">
              <img width={30} height={30} src={LocationSvg} alt="logo" />
            </div>
            <div>19680 W Bluemound Rd.</div>
          </div>
          <div className="FooterLinks">
            <div className="linkIcon">
              <img width={30} height={30} src={PhoneSvg} alt="logo" />
            </div>
            <div>(262) 391-1575</div>
          </div>
          <div className="FooterLinks FooterLinksThree">
            <div className="linkIcon">
              <img width={30} height={30} src={EmailSvg} alt="logo" />
            </div>
            <div>icbrfl19@gmail.com</div>
          </div>
        </div>
        <div className="ThirdLineFooter">
          Copyright © 2023 Lvi Studio Made by Eliyas Asefa
        </div>
      </div>
    </div>
  );
};

export default Home;
