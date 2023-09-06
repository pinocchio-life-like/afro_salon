import React from "react";
import "../../App.css";
import Header from "../Header/Header";

import image1 from "../../Images/fa7c71c244b67f4fd249c8958ba5ce43.jpg";
import image2 from "../../Images/black-men-haircuts-guide-medium-thick-afro-683x1024.webp";
import image3 from "../../Images/870792d612facc3d28f136a481dd9402.jpg";
import image4 from "../../Images/black-men-haircuts-guide-short-sides-long-top-curly-undercut-683x1024.webp";
import image5 from "../../Images/Lvi-Studio-Salon-Brookfield-DSC_2175_Original-9-684x1024.webp";
import image6 from "../../Images/American_Crew_logo_black.png";
import image7 from "../../Images/reuzel-logo.png";
import image8 from "../../Images/STMNTWhite.webp";
// import Video from "../..Components/Video/Video";
import image9 from "../../Images/Lvi-Studio-Salon-Brookfield-DSC03218_Original-14.jpg";
import Logo from "../../Images/Artboard-1.svg";
import LocationSvg from "../../Images/Location.svg";
import PhoneSvg from "../../Images/Phone.svg";
import EmailSvg from "../../Images/Email.svg";

function TheStudio() {
  // const videoData = {
  //   videoUrl:
  //     "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.tiktok.com%2Fapi%2Fimg%2F%3FitemId%3D7056195779257617710%26location%3D0%26aid%3D1988&tbnid=j3kWZAzREQKFzM&vet=12ahUKEwjM16P74eOAAxXP6aQKHVLNDioQMygiegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fwww.tiktok.com%2F%40j.strives%2Fvideo%2F7056195779257617710&docid=KkX0Ekdhy9ZT4M&w=1080&h=1920&q=haircut%20tiktok&ved=2ahUKEwjM16P74eOAAxXP6aQKHVLNDioQMygiegUIARDBAQ",
  //   caption: "Caption",
  //   username: "Eliyas",
  //   likes: "1000",
  // };
  return (
    <div className="App">
      <div className="AppBanner">
        <Header />
      </div>
      <div className="BannerHeader">
        <div className="HeaderText">The Studio</div>
        <div className="HeaderParagraph">
          Lvi Studio is an intimate men’s hair salon and barbershop in
          Brookfield inside the beautiful Sage Salon and Studios.We are
          conveniently located off Bluemound and Goerkes Corners just beyond The
          Corners and Poplar Creek.
        </div>
      </div>
      <div className="FeatureClass">
        <div className="Feature">
          <div>
            <div className="FeatureOne">Feature</div>
            <div className="FeatureTwo">The Cut you've always wanted.</div>
          </div>
          <div>
            <div className="FeatureThree">
              With our professional hairstylists we guarantee a satisfaction
              with atmost possible care.
            </div>
            <div className="FeatureFour">About Us</div>
          </div>
        </div>
      </div>
      <div className="TopPicks">
        <div className="TopPicksTitle">Some of our top picks.</div>
        <div className="TopPicksImage">
          <div className="Picks">
            <img src={image1} width="100%" alt="image1" />
          </div>
          <div className="Picks">
            <img src={image2} width="100%" alt="image1" />
          </div>
          <div className="Picks">
            <img src={image3} width="100%" alt="image1" />
          </div>
          <div className="Picks">
            <img src={image4} width="100%" alt="image1" />
          </div>
        </div>
      </div>
      <div className="MeetTheBarber">
        <div className="MeetTheBarberBanner">
          <div className="SalonLocation">Brookfield Salon & Barbershop</div>
          <div className="MTBTitle">Meet the Barber</div>
          <div className="VisitUsAt">
            Visit us at our local, premium barbershop in a personalized setting
            of a private studio suite.
          </div>
        </div>
        <div className="MTBDescriptionAndPicture">
          <div className="BarberPicture">
            <img
              src={image5}
              width="100%"
              alt="image5"
              style={{
                borderTopRightRadius: "25%",
                borderBottomLeftRadius: "25%",
              }}
            />
          </div>
          <div className="BarberDescription">
            <div className="BarberName">Sara Ledvina</div>
            <div className="BarberDetail">
              Sara Ledvina, master barber since 2006, was trained in barbering
              by the prestigious American Crew Academy in Chicago, and trained
              as an educator in this same school. Having also cut hair in
              Hollywood, Sara has honed her skills in classic styles and
              techniques as well as cutting edge fashions. In addition to her
              passion for men’s hair cutting and styling, throughout her career
              she has made a name for herself as a perfectionist with a keen eye
              and meticulous technique. Her exceptional cuts and positive
              attitude always win the loyalty of her guests. Having worked in
              some of the area’s top salons, Sara is proud to now offer personal
              service at Lvi Studio- A fine men’s haircut and barbering salon.
              She hopes you will join her many other satisfied customers and
              book an appointment today!
            </div>
            <div className="BarberContact">Call/text (262) 391-1575</div>
          </div>
        </div>
      </div>
      <div className="OurProducts">
        <div className="OurProductsTitle">
          <div className="ProductsCaption">Our Hair Care</div>
          <div className="ProductsTitle">Products</div>
        </div>
        <div className="ProductOne">
          <img src={image6} width="100%" alt="image1" />
        </div>
        <div className="ProductThree">
          <img src={image8} width="100%" alt="image1" />
        </div>
        <div className="ProductTwo">
          <img src={image7} width="100%" alt="image1" />
        </div>
      </div>
      {/* <Video {...videoData} /> */}
      <div
        className="image-overlay-container"
        style={{ backgroundImage: `url(${image9})` }}>
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
          Copyright © 2023 Lvi-Salon Made by Eliyas Asefa
        </div>
      </div>
    </div>
  );
}

export default TheStudio;
