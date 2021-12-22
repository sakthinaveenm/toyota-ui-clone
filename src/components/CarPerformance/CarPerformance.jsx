import React from "react";
import "./Carperformance.css";
export default function CarPerformance() {
  return (
    <div className="bg-carperformance">
      <div className="dfc">
        <div className="carperformance-main-heading">
          A WHOLE LOTTA PERFORMANCE
        </div>
        <div>
          <div className="dfr">
            <div>
              <div className="dfc carperformance-section-space">
                <div className="carperformance-sub-heading">Engine Type</div>
                <div className="carperformance-sub-heading-content">Petrol</div>
              </div>
            </div>
            <div>|</div>
            <div>
              <div className="dfc carperformance-section-space">
                <div className="carperformance-sub-heading">DISPLACEMENT</div>
                <div className="carperformance-sub-heading-content">
                  1197 cc (cm³)
                </div>
              </div>
            </div>
            <div>
              <div className="dfc carperformance-section-space">
                <div className="carperformance-sub-heading">MAX. POWER</div>
                <div
                  className="carperformance-sub-heading-content"
                  style={{ maxWidth: "300px" }}
                >
                  G MT (Advanced Li-Ion Battery with ISG): 66 kW (89.7 PS) @
                  6000 rpm G MT, G CVT, V MT, V CVT: 61 kW (82.9 PS) @ 6000 rpm
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
