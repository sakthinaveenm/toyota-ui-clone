import React from "react";
import CarLogo from "../../assets/Capture.PNG";
import { CButton, CCard } from "@coreui/react";
import "./TestDrive.css";
import TextField from "@mui/material/TextField";
export default function TestDrive() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <img width="500" src={CarLogo} alt="" />
      </div>
      <div className="dfc">
        <div>
          <CCard
            style={{
              margin: "80px",
              padding: 0,
              borderRadius: "10px",
              height: "450",
            }}
          >
            <div className="dfr">
              <div>
                <img
                  src="https://static2.toyotabharat.com/images/showroom/form/132-form-bg-626x794.jpg"
                  alt=""
                  width="324"
                  height="500"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div style={{ width: "100%" }}>
                <div className="dfc" style={{ padding: "70px" }}>
                  <div>
                    <div className="dfr">
                      <div>
                        <TextField
                          style={{ width: "100px" }}
                          id="standard-select-currency-native"
                          select
                          label="---*"
                          SelectProps={{
                            native: true,
                          }}
                          variant="standard"
                        ></TextField>
                      </div>
                      <div>
                        <div
                          class="floating-form"
                          style={{
                            width: "800px",
                            marginLeft: "30px",
                            marginTop: "17px",
                          }}
                        >
                          <div class="floating-label">
                            <input
                              class="floating-input"
                              type="text"
                              placeholder=" "
                            />
                            <span class="highlight"></span>
                            <label>Name*</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="dfr" style={{ paddingTop: "60px" }}>
                      <div>
                        <div style={{ width: "400px" }} class="floating-form">
                          <div class="floating-label">
                            <input
                              class="floating-input"
                              type="text"
                              placeholder=" "
                            />
                            <span class="highlight"></span>
                            <label>Mobile Number*</label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          class="floating-form"
                          style={{ width: "500px", marginLeft: "30px" }}
                        >
                          <div class="floating-label">
                            <input
                              class="floating-input"
                              type="text"
                              placeholder=" "
                            />
                            <span class="highlight"></span>
                            <label>Email*</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="dfr" style={{ paddingTop: "40px" }}>
                      <div>
                        <div>
                          <TextField
                            style={{ width: "400px" }}
                            id="standard-select-currency-native"
                            select
                            label="SELECT CITY*"
                            SelectProps={{
                              native: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </div>
                      </div>
                      <div>
                        <div style={{ marginLeft: "20px" }}>
                          <TextField
                            style={{ width: "500px" }}
                            id="standard-select-currency-native"
                            select
                            label="SELECT DELEAR*"
                            SelectProps={{
                              native: true,
                            }}
                            variant="standard"
                          ></TextField>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{ float: "right" }}>
                      <CButton
                        color="danger"
                        style={{ marginTop: "40px", marginRight: "80px" }}
                      >
                        Submit
                      </CButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CCard>
        </div>
      </div>
    </>
  );
}
