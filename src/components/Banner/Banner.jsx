import React from "react";
import "./Banner.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
function Banner() {
  return (
    <>
      <div className="banner-space"></div>
      <CCarousel controls>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://static2.toyotabharat.com/images/showroom/glanza/glanza-awesome-banner-1-1920x807.jpg"
            alt="slide 1"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://static2.toyotabharat.com/images/showroom/glanza/glanza-awesome-banner-2-1920x807.jpg"
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://static2.toyotabharat.com/images/showroom/glanza/glanza-awesome-banner-2-1920x807.jpg"
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </>
  );
}

export default Banner;
