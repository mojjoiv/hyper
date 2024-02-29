"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Navbar from "./Navbar";
import SingleCard from "./SingleCard";
// import Price from './Price'

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
    </div>
  );
};

export default NewProducts;
