"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import SingleCard from "./SingleCard";
import Price from './Price'

interface ProductType {
  id: string;
  media: { uri: string; priceInfo?: { price: number; discount: number } }[];
  title: string;
  description: string;
  rating: number;
  installmentPrice: string;
  type: string;
  viewType: string;
  coupon?: boolean;
}

const NewProducts = () => {
  const [productsData, setProductsData] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await response.json();

        if (Array.isArray(data.items)) {
          setProductsData(data.items);
          filterProducts(data.items);
        } else {
          console.error("Expected array 'items' not found in API response:", data);
        }
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    fetchData();
  }, []);

  const filterProducts = (data: ProductType[]) => {
    const filteredProducts = data.filter(
      (item) => item.type === "SINGLE" && item.viewType === "TILE"
    );

    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <Navbar />
      <SingleCard />
      <Price/>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card-container">
              <ProductCard
                img={item.media[0]?.uri}
                title={item.title}
                desc={item.description}
                rating={item.rating}
                price={item.installmentPrice}
              />

              {/* Extracted information */}
              <div>
                {item.media[0]?.priceInfo ? (
                  <>
                    <p>Price: ${item.media[0]?.priceInfo.price}</p>
                    <p>Discount: {item.media[0]?.priceInfo.discount}%</p>
                  </>
                ) : (
                  <p>Price information not available</p>
                )}
                {item.coupon && <p>Coupon</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
