import React from "react";
import "./Footer.css";
const Footer = (props) => {
  return (
    <>
      <div className="footer">
        <div className="left-f">
          <span>{props.h1}</span>
          <span>{props.h2}</span>
          <span>{props.h3}</span>
          <span>{props.h4}</span>
          <span>{props.h5}</span>
        </div>
        <div className="right-f">
          <span> Dweep.io</span>
          <span>Made with love in India</span>
          <div className="img-container">
            <img
              src={require("./../../images/InstagramLogo.png")}
              alt="instagramlogo"
            />
            <img
              src={require("./../../images/LinkedinLogo.png")}
              alt="linkedinlogo"
            />
          </div>

          <span>hello@dweep.io</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
