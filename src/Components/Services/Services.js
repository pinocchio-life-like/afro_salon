import React from "react";

import "./Services.css";
import Header from "../Header/Header";

import HairCuts from "../../Images/lvi-studio-haircuts.svg";
import HairColor from "../../Images/lvi-studio-haircolor.svg";
import Barbering from "../../Images/lvi-studio-barbering.svg";
import AddOn from "../../Images/lvi-studio-addons.svg";
import image9 from "../../Images/Lvi-Studio-Salon-Brookfield-DSC03225_Original-1.jpg";
import Logo from "../../Images/Artboard-1.svg";
import LocationSvg from "../../Images/Location.svg";
import PhoneSvg from "../../Images/Phone.svg";
import EmailSvg from "../../Images/Email.svg";
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
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Classic Mens’s Haircut</h2>
                <h2 className="ServicesPrice">$45</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: This service includes complimentary beverage,
                quality consultation time to communicate exactly what you want,
                shampoo, condition, relaxing hot towel finish, blow-dry style,
                advice on products that best perform in you hair as well as how
                to use them. Haircut: Utilizing the American Crew cutting
                method, you can expect a haircut with personalized attention to
                detail and a style created with specific considerations of your
                head shape, hair type and personal style preferences.
              </p>
            </div>
          </div>
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">
                  Executive Men’s Haircut
                </h2>
                <h2 className="ServicesPrice">$50</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: Treat yourself to an additional 5-7min relaxing hot
                stone neck and scalp massage, complimentary beverage, quality
                consultation to communicate exactly what you want, shampoo,
                condition, hot towel finish, blow-dry style, advice on products
                and how to use them. Haircut: Utilizing the American Crew
                cutting method, you can expect a haircut with personalized
                attention to detail and a style created with specific
                considerations of your head shape, hair type and personal style
                preference.
              </p>
            </div>
          </div>
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Hairline Tapered Clean</h2>
                <h2 className="ServicesPrice">$15</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Small amount trimmed around the ears and hairline to
                re-establish an overgrown taper and straight razor the neck
                line. *no interior work done Very simple service for in between
                haircuts to get you through to your next full cut. Perfect for
                2-3 weeks after your last haircut and/or before an event or
                vacation.
              </p>
            </div>
          </div>
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Child’s Haircut</h2>
                <h2 className="ServicesPrice">$35</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                A customized children’s haircut designed by your stylist to fit
                your individual style and preferences. This service includes
                complimentary beverage, shampoo, condition, relaxing hot towel
                finish (if wanted), blow-dry style, advice on products as well
                as how to use them. Haircut: Utilizing the American Crew cutting
                method, you can expect a haircut with personalized attention to
                detail and a style created with specific considerations of your
                head shape, hair type and personal style preferences.
              </p>
            </div>
          </div>
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Women’s Haircut</h2>
                <h2 className="ServicesPrice">$60</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: This service includes complimentary beverage,
                quality consultation time to communicate exactly what you want,
                shampoo, condition, relaxing hot towel finish, blow-dry style,
                advice on products that best perform in you hair as well as how
                to use them. Haircut: You can expect a haircut with personalized
                attention to detail and a style created with specific
                considerations of your head shape, hair type and personal
                styling preferences.
              </p>
            </div>
          </div>
          <div className="HaircutServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Women’s Blowout</h2>
                <h2 className="ServicesPrice">$50</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Treat yourself to a shampoo, condition, and round/flat brush
                blow-dry styling service to get that “fresh from the salon hair”
                look without having to do all that work yourself. Pricing
                considerations may vary based on further hot tool styling or
                special occasion styling needs and/or the use of more than
                normal products or time based on the amount of hair or special
                requests.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ServicesHaircolor">
        <div className="ServicesHaircolorHeader">
          <div className="ServiceCardImage">
            <img src={HairColor} alt="" />
          </div>
          <h1>Haircolor</h1>
        </div>
        <div className="HaircolorServicesList">
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">
                  Classic Mens’s Haircolor
                </h2>
                <h2 className="ServicesPrice">$45</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: This service includes complimentary beverage,
                quality consultation time to communicate exactly what you want,
                shampoo, condition, relaxing hot towel finish, blow-dry style,
                advice on products that best perform in you hair as well as how
                to use them. Haircolor: Utilizing the American Crew cutting
                method, you can expect a Haircolor with personalized attention
                to detail and a style created with specific considerations of
                your head shape, hair type and personal style preferences.
              </p>
            </div>
          </div>
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">
                  Executive Men’s Haircolor
                </h2>
                <h2 className="ServicesPrice">$50</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: Treat yourself to an additional 5-7min relaxing hot
                stone neck and scalp massage, complimentary beverage, quality
                consultation to communicate exactly what you want, shampoo,
                condition, hot towel finish, blow-dry style, advice on products
                and how to use them. Haircolor: Utilizing the American Crew
                cutting method, you can expect a Haircolor with personalized
                attention to detail and a style created with specific
                considerations of your head shape, hair type and personal style
                preference.
              </p>
            </div>
          </div>
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Hairline Tapered Clean</h2>
                <h2 className="ServicesPrice">$15</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Small amount trimmed around the ears and hairline to
                re-establish an overgrown taper and straight razor the neck
                line. *no interior work done Very simple service for in between
                Haircolors to get you through to your next full cut. Perfect for
                2-3 weeks after your last Haircolor and/or before an event or
                vacation.
              </p>
            </div>
          </div>
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Child’s Haircolor</h2>
                <h2 className="ServicesPrice">$35</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                A customized children’s Haircolor designed by your stylist to
                fit your individual style and preferences. This service includes
                complimentary beverage, shampoo, condition, relaxing hot towel
                finish (if wanted), blow-dry style, advice on products as well
                as how to use them. Haircolor: Utilizing the American Crew
                cutting method, you can expect a Haircolor with personalized
                attention to detail and a style created with specific
                considerations of your head shape, hair type and personal style
                preferences.
              </p>
            </div>
          </div>
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Women’s Haircolor</h2>
                <h2 className="ServicesPrice">$60</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Experience: This service includes complimentary beverage,
                quality consultation time to communicate exactly what you want,
                shampoo, condition, relaxing hot towel finish, blow-dry style,
                advice on products that best perform in you hair as well as how
                to use them. Haircolor: You can expect a Haircolor with
                personalized attention to detail and a style created with
                specific considerations of your head shape, hair type and
                personal styling preferences.
              </p>
            </div>
          </div>
          <div className="HaircolorServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Women’s Blowout</h2>
                <h2 className="ServicesPrice">$50</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Treat yourself to a shampoo, condition, and round/flat brush
                blow-dry styling service to get that “fresh from the salon hair”
                look without having to do all that work yourself. Pricing
                considerations may vary based on further hot tool styling or
                special occasion styling needs and/or the use of more than
                normal products or time based on the amount of hair or special
                requests.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ServicesBarbering">
        <div className="ServicesBarberingHeader">
          <div className="ServiceCardImage">
            <img src={Barbering} alt="" />
          </div>
          <h1>Barbering</h1>
        </div>
        <div className="BarberingServicesList">
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Beard Trim</h2>
                <h2 className="ServicesPrice">$20</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Utilizing a wealth of knowledge of the American Crew method and
                technique education/experience, you can expect an exceptional
                beard shaping and line up by a well trained barber with an eye
                for detail. ***This service is performed all/only by clippers,
                if you would like a straight razor shave line-up you will need
                to add that service at booking to allow for time and product
                prep.
              </p>
            </div>
          </div>
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Shave Line-Up</h2>
                <h2 className="ServicesPrice">$25</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Similar to a traditional shave, we use hot towels to open pores,
                hot lather and straight razor to shave the perfect edging for
                your beard. Perfect complimentary service for your beard trim
                keep your lines fresh for a few days longer.
              </p>
            </div>
          </div>
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Classic Barber Shave</h2>
                <h2 className="ServicesPrice">$45</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                The traditional Straight Razor Shave includes application of a
                steam towel to open up the pores and soften the hair follicle.
                Hot lather is applied and you will receive a first pass shave
                with the grain of the beard. A second application of hot lather
                follows, with second shave against the grain for a closer shave.
                A cool towel is applied to close the pores.
              </p>
            </div>
          </div>
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Executive Barber Shave</h2>
                <h2 className="ServicesPrice">$55</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Treat yourself to extra relaxation with the addition of scalp
                massage and facial products/manipulations added to our Classic
                Shave. Classic shave includes application of a steam towel to
                open up the pores and soften the hair follicle. Hot lather is
                applied and you will receive a first pass shave with the grain
                of the beard. A second application of hot lather follows, with
                second shave against the grain for a closer shave. A cool towel
                is applied to close the pores.
              </p>
            </div>
          </div>
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Hot Lather Head Shave</h2>
                <h2 className="ServicesPrice">$45</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Similar to our classic face shave, we utilize hot towels, shave
                oils, and hot lather to prep the scalp for a straight razor
                scalp shave. If needed we will repeat the process for 2 passes
                to ensure the smoothest finish.
              </p>
            </div>
          </div>
          <div className="BarberingServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Full Barber Facial</h2>
                <h2 className="ServicesPrice">$50</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Treat yourself with the most relaxing of our services. This
                facial massage and cleansing includes application of multiple
                hot steam towels to open up the pores and cleanse the face,
                facial wash, exfoliating scrub, mask, and a light facial, scalp
                and hand massage.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="ServicesAddOn">
        <div className="ServicesAddOnHeader">
          <div className="ServiceCardImage">
            <img src={AddOn} alt="" />
          </div>
          <h1>Add-ons</h1>
        </div>
        <div className="AddOnServicesList">
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Waxing – Ears</h2>
                <h2 className="ServicesPrice">$10</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Use of hard wax to remove unwanted ear hairs. Waxing ear hairs
                last 2-3 weeks longer than trimming alone.
              </p>
            </div>
          </div>
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Waxing – Nose</h2>
                <h2 className="ServicesPrice">$10</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Use of hard wax to remove unwanted nose hairs. Waxing nose hairs
                last 2-3 weeks longer than trimming alone.
              </p>
            </div>
          </div>
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">
                  Waxing – Nose and Ears Wax Combo
                </h2>
                <h2 className="ServicesPrice">$15</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Both services at the same time.
              </p>
            </div>
          </div>
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Waxing – Brow Shaping</h2>
                <h2 className="ServicesPrice">$15</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Use of all-purpose or hard wax to clean up or shape eyebrows.
              </p>
            </div>
          </div>
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Mini Facial</h2>
                <h2 className="ServicesPrice">$25</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Abbreviated barber facial using hot steam towel to cleanse the
                face and open the pores, facial cleanse, exfoliating scrub,
                moisturizer, and light facial massage.
              </p>
            </div>
          </div>
          <div className="AddOnServicesCard">
            <div className="ServicesCardContainer">
              <div className="ServicesCardTitle">
                <h2 className="ServicesSectionTitle">Exec Add-on</h2>
                <h2 className="ServicesPrice">$5</h2>
              </div>
              <hr style={{ margin: "15px 0" }} />
              <p style={{ padding: "10px", fontSize: "1rem" }}>
                Additional 5-7 neck and scalp massage to any service.
              </p>
            </div>
          </div>
        </div>
      </div>

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

export default Services;
