import React from "react";
import Image from "next/image";
import Slider from "react-slick";

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="slick-container">
      <div className="relative">
        <Image
          className="w-full h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
          src={img}
          alt="banner"
          layout="responsive"
          width={2000}
          height={2000}
        />
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
          <h3 className="text-accent text-[24px] lg:text-[28px]">{title}</h3>
          <h2 className="text-blackish text-[26px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2]">
            {mainTitle}
          </h2>
        </div>
      </div>
    </Slider>
  );
};

export default Slide;
