import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import DealCard from "./DealCard";

const HotDeal = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await response.json();

        if (Array.isArray(data.items)) {
          setProductsData(data.items);
        } else {
          console.error("Expected array 'items' not found in API response:", data);
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Set the number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...sliderSettings}>
          {productsData.map((item) => (
            <div key={(item as any).id} className="product-card-container">
              <DealCard
                img={(item as any).media[0]?.uri}
                title={(item as any).title}
                desc={(item as any).description}
                rating={(item as any).rating}
                price={(item as any).installmentPrice} prefaceIconUrl={""}              />
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </div>
  );
};

export default HotDeal;
