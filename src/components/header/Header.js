import React from "react";
import "./Header.css";
import vector from "./../../images/vector.png";
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left-h">
          <h1>An inspiring design delivered to your inbox every morning</h1>
          <p>
            Our team scouts the internet for the best designs, illustrations and
            art and delivers a truly inspiring one every day to your inbox
          </p>
          <b>Show me how it looks</b>
          <div className="inputbox">
            <input type="text" placeholder="Your e-mail address" />
            <button>Register Now</button>
          </div>
          <span>Free - No Spam - No Data Sharing</span>
        </div>
        <div className="right-h">
          <img src={vector} alt="vector" />
        </div>
      </div>
    </>
  );
};
