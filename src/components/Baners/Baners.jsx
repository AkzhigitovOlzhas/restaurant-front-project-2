import React from "react";
import { Carousel } from "react-bootstrap";

export const Baners = () => {
  return (  
      <Carousel  >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626169964_544546a207964c559d21cbd12c3c68a0.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1601360618_47e471bb4370492ba90ac6abc6247878.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1626170011_48130e7dd5e2440fa28fd8c9871ee4bc.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel> 
  );
};
