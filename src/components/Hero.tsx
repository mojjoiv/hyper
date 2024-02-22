"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Navbar from "./Navbar";

const Hero = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/main-banner/all");
        const data = await response.json();
        setSlideData(data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.mainBannerId}
              img={item.pcImageUrl}
            />
          ))}
        </Slider>
      </div>
      <br/>
      {/* <Navbar/> */}
    </div>
  );
};

export default Hero;