import React from "react";

import "./Services.css";
import Header from "../Header/Header";

import HairCuts from "../../Images/lvi-studio-haircuts.svg";
import HairColor from "../../Images/lvi-studio-haircolor.svg";

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
    </div>
  );
}

export default Services;
