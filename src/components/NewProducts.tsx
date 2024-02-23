"use client";

import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
// import SingleCard from "./SingleCard";
import Navbar from "./Navbar";

const NewProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.testvalley.kr/collections?prearrangedDiscount");
        const data = await response.json();

        // Check if the expected array is nested under a key (e.g., 'items')
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

  return (
    <div>
      <Navbar/>
      {/* <SingleCard collectionData={undefined}/> */}
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item) => (
            <div key={(item as any).id} className="product-card-container">
              <ProductCard
                img={(item as any).media[0]?.uri}  // Use optional chaining to avoid errors if 'media' array is empty
                title={(item as any).title}
                desc={(item as any).description}
                rating={(item as any).rating}
                price={(item as any).installmentPrice}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
