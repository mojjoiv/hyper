import React, { useEffect, useState } from "react";
import DealCard from "./DealCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProductType {
  id: string;
  media: { uri: string }[];
  title: string;
  subtitle: string;
  description: string;
  rating: number;
  priceInfo: { price: number };
  type: string;
  viewType: string;
  items: {
    uuid: string;
    publication: {
      title: string;
      subtitle: string;
      description: string;
      rating: number;
      media: { uri: string }[];
      priceInfo: { price: number };
      discountRate: number;
      media2: { prefaceIconUrl: string }[];
    };
  }[];
}

const SingleCard = () => {
  const [productsData, setProductsData] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await response.json();

        if (Array.isArray(data.items)) {
          const filteredData = data.items.filter(
            (item: { type: string; viewType: string }) => item.type === "SINGLE" && item.viewType === "TILE"
          ) as ProductType[];
          setProductsData(filteredData);
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };

  return (
    <div>
      {productsData.map((product) => (
        <div key={product.id} style={{ padding: "16px", display: "flex" }}>
          <div style={{ width: "25%" }}>
            <h2 style={{ color: "#333", fontWeight: "bold", fontSize: "20px" }}>{product.title}</h2>
            <p style={{ color: "gray" }}>{product.subtitle}</p>
          </div>
          <div style={{ width: "75%" }}>
            <Slider {...sliderSettings}>
              {product.items.map((item) => (
                <div key={item.uuid} style={{ backgroundSize: "cover", height: "500px", borderRadius: "8px", display: "grid", placeItems: "center" }}>
                  <DealCard
                    key={item.uuid}
                    img={item.publication.media[0]?.uri}
                    title={item.publication.title}
                    desc={item.publication.description}
                    rating={item.publication.rating}
                    price={item.publication.priceInfo?.price}
                    // discountRate={item.publication.discountRate}
                    prefaceIconUrl={item.publication.media2?.[0]?.prefaceIconUrl}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
