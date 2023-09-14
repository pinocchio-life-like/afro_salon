import React from "react";
import "./Book.css";
import logoImage from "../../Images/Google-light.3ac01ebb.svg";

const Book = () => {
  return (
    <div className="BookNowClass">
      <button className="SignInButton">
        <img
          alt="Google logo"
          loading="lazy"
          width="20"
          height="20"
          decoding="async"
          style={{ color: "transparent", marginRight: "10px" }}
          src={logoImage}
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default Book;
// wih_mine
