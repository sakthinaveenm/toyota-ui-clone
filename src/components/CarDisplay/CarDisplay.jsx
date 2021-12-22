import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import "./CarDisplay.css";
export default function CarDisplay({ scrollY }) {
  const [car, setCar] = React.useState(false);
  const [DisplayRed, setDisplayRed] = useState(false);
  const [DisplayBlue, setDisplayBlue] = useState(false);
  const [DisplayBlack, setDisplayBlack] = useState(false);
  const [DisplayLightGrey, setDisplayLightGrey] = useState(false);
  const [ZZINDEX, setZZINDEX] = useState(0);

  useEffect(() => {
    if (scrollY >= 1522) {
      setCar(true);
    }
  }, [scrollY]);

  return (
    <Fade right={car}>
      <div className="dfc">
        <div
          style={{
            paddingLeft: "90px",
            fontFamily: "ToyotaType-Bold",
            fontWeight: 500,
            fontSize: "35px",
            color: "#0d3976",
          }}
        >
          COLORS
        </div>
        <div></div>
        <div>
          <center>
            <img
              width="600"
              src="https://static2.toyotabharat.com/images/showroom/glanza/color/cafe-white.jpg"
              alt=""
            />
            <div
              style={{ display: DisplayRed ? "block" : "none" }}
              right={DisplayRed}
            >
              <img
                style={{
                  display: DisplayRed ? "block" : "none",
                  position: "relative",
                  zIndex: ZZINDEX,
                  marginTop: "-300px",
                }}
                className={"hover-effect-car"}
                width="600"
                src="https://static2.toyotabharat.com/images/showroom/glanza/color/sportin-red.jpg"
                alt=""
              />
            </div>

            <div
              style={{ display: DisplayBlue ? "block" : "none" }}
              right={DisplayBlue}
            >
              <img
                style={{
                  display: DisplayBlue ? "block" : "none",
                  position: "relative",
                  zIndex: ZZINDEX,

                  marginTop: "-300px",
                }}
                className={"hover-effect-car"}
                width="600"
                src="https://static2.toyotabharat.com/images/showroom/glanza/color/insta-blue.jpg"
                alt=""
              />
            </div>
            <div
              style={{ display: DisplayBlack ? "block" : "none" }}
              right={DisplayBlack}
            >
              <img
                style={{
                  display: DisplayBlack ? "block" : "none",
                  position: "relative",
                  zIndex: ZZINDEX,
                  marginTop: "-300px",
                }}
                className={"hover-effect-car"}
                width="600"
                src="https://static2.toyotabharat.com/images/showroom/glanza/color/gaming-grey.jpg"
                alt=""
              />
            </div>
            <div
              style={{ display: DisplayLightGrey ? "block" : "none" }}
              right={DisplayLightGrey}
            >
              <img
                style={{
                  display: DisplayLightGrey ? "block" : "none",
                  position: "relative",
                  zIndex: ZZINDEX,
                  marginTop: "-300px",
                }}
                className={"hover-effect-car"}
                width="600"
                src="https://static2.toyotabharat.com/images/showroom/glanza/color/enticing-silver.jpg"
                alt=""
              />
            </div>
          </center>
        </div>
        <div>
          <center>Car NAme</center>
        </div>
        <div className="center-buttons">
          <div className="dfr">
            <div className="space-btn">
              <div className="car-color-button grey-btn"></div>
            </div>
            <div className="space-btn">
              <div
                onClick={() => {
                  setZZINDEX(ZZINDEX + 1);

                  setDisplayRed(true);
                  // setTimeout(1000);
                  // setDisplayBlue(false);
                  // setDisplayBlack(false);
                  // setDisplayLightGrey(false);
                }}
                className="car-color-button red-btn"
              ></div>
            </div>
            <div className="space-btn">
              <div
                onClick={() => {
                  setZZINDEX(ZZINDEX + 1);
                  setDisplayBlue(true);
                  setZZINDEX(ZZINDEX + 1);
                  // setDisplayRed(false);
                  // setDisplayBlack(false);
                  // setDisplayLightGrey(false);
                }}
                className="car-color-button blue-btn"
              ></div>
            </div>
            <div className="space-btn">
              <div
                onClick={() => {
                  setZZINDEX(ZZINDEX + 1);
                  setDisplayBlack(true);
                  setZZINDEX(ZZINDEX + 1);

                  // setDisplayRed(false);
                  // setDisplayBlue(false);
                  // setDisplayLightGrey(false);
                }}
                className="car-color-button black-btn"
              ></div>
            </div>
            <div className="space-btn">
              <div
                onClick={() => {
                  setZZINDEX(ZZINDEX + 1);
                  setDisplayLightGrey(true);
                  setZZINDEX(ZZINDEX + 1);
                }}
                className="car-color-button light-grey-btn"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
