"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import Navbar from "./Navbar";

const Hero = () => {
  const [slideData, setSlideData] = useState([]);
  const [sliderInitialized, setSliderInitialized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/main-banner/all");
        const data = await response.json();
        setSlideData(data);
        setSliderInitialized(true);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
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
        {sliderInitialized && slideData.length > 0 && (
          <Slider {...settings}>
            {slideData.map((item) => (
              <Slide
                key={(item as any).mainBannerId}
                img={(item as any).pcImageUrl}
                title={""}
                mainTitle={""}
                price={""}
              />
            ))}
          </Slider>
        )}
      </div>
      <br />
    </div>
  );
};

export default Hero;
