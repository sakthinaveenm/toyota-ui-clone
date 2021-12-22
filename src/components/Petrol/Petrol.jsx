import React from "react";
import "./Petrol.css";
export default function Petrol() {
  return (
    <div style={{ paddingTop: "60px", paddingLeft: "80px" }}>
      <div className="dfr">
        <div style={{ marginRight: "50px" }}>
          <div className="dfc">
            <div className="petrol-h1">Petrol - Manual</div>
            <div className="petrol-h2">From INR 7,49,000*</div>
            <div className="petrol-h1">(Ex-Showroom Price - Delhi)</div>
          </div>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <div className="dfc">
            <div className="petrol-h1">Petrol - CVT</div>
            <div className="petrol-h2">From INR 8,69,000*</div>
            <div className="petrol-h1">(Ex-Showroom Price - Delhi)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
