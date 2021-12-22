import React from "react";
import "./SecondNavbar.css";
function SecondNavbar() {
  return (
    <div className="rfc second-navbar container-fluid bg-black">
      <div>
        <div className="dfr" style={{ justifyContent: "center" }}>
          <div className="link-second-navbar">COLOURS</div>
          <div className="link-second-navbar">FEATURES</div>
          <div className="link-second-navbar">SPECIFICATIONS</div>
          <div className="link-second-navbar">TEST DRIVE</div>
          <div className="link-second-navbar">ACCESSORIES</div>
          <div className="link-second-navbar">VIDEOS</div>
          <div className="link-second-navbar">
            360<sup>O</sup> EXPERIENCE
          </div>
          <div className="link-second-navbar">EMI CALCULATOR</div>
          <div className="link-second-navbar">CHECK AVAILABILITY</div>
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
