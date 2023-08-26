import React, { useEffect, useState } from "react";
import Logo from "../../Images/Artboard-1.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 900;
  return (
    <div className="HeaderContainer">
      <div className="Logo" style={{ zIndex: 1000 }}>
        <img
          onClick={() => {
            navigate("/");
          }}
          style={{
            zIndex: 100,
            cursor: "pointer",
          }}
          width={180}
          height={180}
          src={Logo}
          alt="logo"
        />
      </div>
      {isMobile && (
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <a href="/theStudio">
                <li>Studio</li>
              </a>
              <a href="/services">
                <li>Services</li>
              </a>
              <a href="/bookNow">
                <li>Book Now</li>
              </a>
            </ul>
          </div>
        </nav>
      )}
      {!isMobile && (
        <div className="NavLinks">
          <div className="NavLinksItem" onClick={() => navigate("/services")}>
            Services
          </div>
          <div className="NavLinksItem" onClick={() => navigate("/theStudio")}>
            The Studio
          </div>
          <div className="NavLinksButton" onClick={() => navigate("/bookNow")}>
            Book Now
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
