import React from "react";
import "./Navbar.css";
import { AiOutlineDown } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
export default function Navbar() {
  return (
    <>
      <div
        className="container-fluid sticky-top dfc"
        style={{
          borderBottom: "4px solid #dddddd",
          padding: "1.4%",
          backgroundColor: "#ffffff",
        }}
      >
        <div className="dfr">
          <div href="#" style={{ paddingLeft: "2%" }}>
            <img
              src="https://static2.toyotabharat.com/images/toyota-logo-main-136x24.svg"
              alt=""
              width="136px"
              height="24px"
            />
          </div>
          <div className="dummy">
            <div className="space-navbar-list" style={{ marginLeft: "20px" }}>
              PRODUCTS&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              Virtual Show Room&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              QService&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              USED CARS&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              MOBILLITY&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              MEDIA&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              TOYOTA IN INDIA&nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="dummy">
            <div className="space-navbar-list">
              MORe &nbsp;
              <AiOutlineDown />
            </div>
          </div>
          <div className="contact-us-navbar">
            <BiPhoneCall size="25" />
            Contact Us
          </div>
        </div>
      </div>
    </>
  );
}
